class TestsView {
  displayCard(data) {
    document.querySelector(".main-body-details").textContent = "";
    const html = `<div class="main-body-card">
            <div class="card-data">🇮🇳INDIA</div>
            <div class="card-data">🕰Till date: ${data.day}</div>
            <div class="card-data"><a href="${data.source}">📩${data.source}</a></div>
            <div class="card-data">Total Samples Tested :🌡🧪 ${data.totalSamplesTested}</div>
            <div class="card-data">Last Refreshed: 🕐${data.lastRefreshed}</div>
          </div>
            `;
    document
      .querySelector(".main-body-details")
      .insertAdjacentHTML("afterbegin", html);
  }
}
export default TestsView = new TestsView();
