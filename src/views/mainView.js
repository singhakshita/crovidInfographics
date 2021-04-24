class mainView {
  searchparam(searchHandler) {
    document
      .querySelector(".main-area-search-btn")
      .addEventListener("click", function () {
        const searchdata = document.querySelector(".main-input-area").value;
        document.querySelector(".main-input-area").value = "";
        searchHandler(searchdata);
      });
  }
  displayCard(data) {
    document.querySelector(".main-body-details").textContent = "";
    const html = `<div class="main-body-card">
        <div class="card-data">🇮🇳${data.loc}</div>
        <div class="card-data">🛩Confirmed Foreign cases: ${data.confirmedCasesForeign}</div>
        <div class="card-data">❌Confirmed Indian cases: ${data.confirmedCasesIndian}</div>
        <div class="card-data">☠️deaths : ${data.deaths}</div>
        <div class="card-data">✅discharged: ${data.discharged}</div>
        <div class="card-data">♨️Total Confirmed cases: ${data.totalConfirmed}</div>
      </div>
        `;
    document
      .querySelector(".main-body-details")
      .insertAdjacentHTML("afterbegin", html);
  }
}

export default new mainView();
