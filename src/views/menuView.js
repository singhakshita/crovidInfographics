class MenuView {
  menuClickHandler(handler) {
    document.querySelector(".menu").addEventListener("click", function (event) {
      handler(event.target.closest(".menu-item").dataset.menu);
      document.querySelectorAll(".menu-item").forEach((element) => {
        if (element.classList.contains("clicked"))
          element.classList.remove("clicked");
      });
      event.target.closest(".menu-item").classList.add("clicked");
    });
  }

  clearContent() {
    document.querySelector(".main-body-details").textContent = "";
    document.querySelector(".main-side__panel").textContent = "";
  }
}
export default MenuView = new MenuView();
