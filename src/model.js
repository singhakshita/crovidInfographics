import * as helper from "./helper";
export const state = {
  casesArr: [],
  searchData: {},
  notifications: [],
  activeState: 0,
  testingStats: {
    day: "",
    source: "",
    totalSamplesTested: "",
    lastRefreshed: "",
  },
  hospitalArr: [],
  currentHospital: {},
  helplinePrimary: {
    email: "",
    facebook: "",
    number: "",
    twitter: "",
    helplineregional: [],
    currentHelpline: "",
  },
};

export const fetchNotification = () => {
  return fetch(
    "https://api.rootnet.in/covid19-in/notifications"
  ).then((response) => response.json());
};

export const searchByCases = () => {
  return fetch(
    "https://api.rootnet.in/covid19-in/stats/latest"
  ).then((response) => response.json());
};

export const fetchTestingStatitics = () => {
  return fetch(
    "https://api.rootnet.in/covid19-in/stats/testing/latest"
  ).then((response) => response.json());
};

export const fetchHospitalsAndBeds = () => {
  return fetch(
    "https://api.rootnet.in/covid19-in/hospitals/beds"
  ).then((response) => response.json());
};

export const fetchContactHelpline = () => {
  return fetch("https://api.rootnet.in/covid19-in/contacts").then((response) =>
    response.json()
  );
};

export const getDataBasedOnIndex = function (idx) {
  if (state.activeState == 2) {
    state.searchData = state.hospitalArr[idx];
    return state.hospitalArr[idx];
  }
  if (state.activeState == 3) {
    state.searchData = state.helplinePrimary.helplineregional[idx];
    state.helplinePrimary.currentHelpline =
      state.helplinePrimary.helplineregional[idx];
  } else {
    state.searchData = state.casesArr[idx];
    return state.casesArr[idx];
  }
};

export const filterData = (searchData) => {
  if (state.activeState == 2) {
    const newArr = state.hospitalArr.filter(
      (elem) => helper.modifiedData(elem.state) === searchData
    );
    state.currentHospital = newArr[0];
  } else if (state.activeState == 3) {
    const newArr = state.helplinePrimary.helplineregional.filter(
      (elem) => helper.modifiedData(elem.loc) === searchData
    );
    state.helplinePrimary.currentHelpline = newArr[0];
  } else {
    const newArr = state.casesArr.filter(
      (elem) =>
        helper.modifiedData(elem.loc) === helper.modifiedData(searchData)
    );
    state.searchData = newArr[0];
  }
};
