import * as modal from "./model";
import mainView from "./views/mainView";
import searchView from "./views/searchView";
import notificationViews from "./views/notificationViews";
import testViews from "./views/testsView";
import hospitalViews from "./views/hospitalsView";
import menuView from "./views/menuView";
import contactViews from "./views/contactViews";
import spinner from "./views/spinnerView";
import spinnerView from "./views/spinnerView";

const searchparamController = function (data) {
  if (modal.state.activeState == 2) {
    modal.filterData(data);
    hospitalViews.displayCard(modal.state.currentHospital);
  } else if (modal.state.activeState == 3) {
    modal.filterData(data);
    contactViews.displayCard(modal.state.helplinePrimary);
  } else if (modal.state.activeState == 1) {
    spinner.displayInitialSearchContent();
  } else {
    modal.filterData(data);
    mainView.displayCard(modal.state.searchData);
  }
};
const searchCardDisplayHandler = function (arrIndex) {
  if (modal.state.activeState == 2) {
    hospitalViews.displayCard(modal.getDataBasedOnIndex(arrIndex));
  } else if (modal.state.activeState == 3) {
    modal.getDataBasedOnIndex(arrIndex);
    contactViews.displayCard(modal.state.helplinePrimary);
  } else {
    mainView.displayCard(modal.getDataBasedOnIndex(arrIndex));
  }
};
const notificationHandler = async function () {
  try {
    const data = await modal.fetchNotification();
    modal.state.notifications = data.data.notifications;
    notificationViews.markupHandler(modal.state.notifications);
  } catch (err) {
    console.log(err);
  }
};
const testsHandler = async function () {
  try {
    spinner.displayInitialSearchContent();
    const data = await modal.fetchTestingStatitics();
    modal.state.testingStats.day = data.data.day;
    modal.state.testingStats.source = data.data.source;
    modal.state.testingStats.totalSamplesTested = data.data.totalSamplesTested;
    modal.state.testingStats.lastRefreshed = data.data.day;
    data.lastRefreshed;
    testViews.displayCard(modal.state.testingStats);
  } catch (err) {}
};
const hospitalsController = async function () {
  try {
    const data = await modal.fetchHospitalsAndBeds();
    modal.state.hospitalArr = data.data.regional;
    searchView.displaySearchArr(modal.state.hospitalArr, "state", "beds");
  } catch (err) {
    console.log(err);
  }
};
const helplineController = async function () {
  try {
    const data = await modal.fetchContactHelpline();
    const primary = data.data.contacts.primary;
    const regional = data.data.contacts.regional;
    modal.state.helplinePrimary.email = primary.email;
    modal.state.helplinePrimary.facebook = primary.facebook;
    modal.state.helplinePrimary.number = primary.number;
    modal.state.helplinePrimary.twitter = primary.twitter;
    modal.state.helplinePrimary.helplineregional = regional;
    contactViews.intialContent(modal.state.helplinePrimary);
    searchView.displaySearchArr(
      modal.state.helplinePrimary.helplineregional,
      "loc",
      "contacts"
    );
  } catch (err) {
    console.log(err);
  }
};

const casesHandler = async function () {
  try {
    spinnerView.displaySpinnerSearchArea();
    const data = await modal.searchByCases();
    modal.state.casesArr = data.data.regional;
    searchView.displaySearchArr(modal.state.casesArr, "loc", "cases");
  } catch (err) {
    console.log(err);
  }
};
const menuClickHandler = function (data) {
  modal.state.activeState = +data;
  menuView.clearContent();
  if (modal.state.activeState == 0) {
    // testing
    spinner.displaySpinnerSearchArea();
    spinner.displayInitialDetailContent();
    casesHandler();
  }
  if (modal.state.activeState == 1) {
    // testing
    spinner.displaySpinnerDetailArea();
    testsHandler();
  }
  if (modal.state.activeState == 2) {
    // hospital and beds
    spinner.displaySpinnerSearchArea();
    spinner.displayInitialDetailContent();
    hospitalsController();
  }
  if (modal.state.activeState == 3) {
    // helpline
    spinner.displaySpinnerSearchArea();
    spinner.displaySpinnerDetailArea();
    helplineController();
  }
};
const init = function () {
  spinner.displayInitialDetailContent();
  casesHandler();
  mainView.searchparam(searchparamController);
  searchView.searchCardClickhandler(searchCardDisplayHandler);
  notificationHandler();
  menuView.menuClickHandler(menuClickHandler);
};
init();
