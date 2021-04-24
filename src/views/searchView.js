class SearchView {
  displaySearchArr(arr, params, type) {
    let html = "";
    document.querySelector(".main-side__panel").textContent = "";
    arr.forEach((element, idx) => {
      if (type == "beds") {
        html = `<div class="searchCard" data-arrIdx="${idx}">
        <div>${element[params]}</div>
        <div>🛏 🛏 🚨 🦠</div>
      </div>`;
      } else if (type == "contacts") {
        html = `<div class="searchCard" data-arrIdx="${idx}">
              <div>${element[params]}</div>
              <div>📞 📭 📩 ☎️</div>
            </div>`;
      } else {
        html = `<div class="searchCard" data-arrIdx="${idx}">
              <div>${element[params]}</div>
              <div>🏴‍☠️ 🌡 🦠 ☠️</div>
            </div>`;
      }

      document
        .querySelector(".main-side__panel")
        .insertAdjacentHTML("beforeend", html);
    });
  }
  searchCardClickhandler(handler) {
    document
      .querySelector(".main-side__panel")
      .addEventListener("click", function (event) {
        handler(+event.target.closest(".searchCard").dataset.arridx);
      });
  }
}

export default SearchView = new SearchView();
