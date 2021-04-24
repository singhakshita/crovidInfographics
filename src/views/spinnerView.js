class Spinner {
  displaySpinnerDetailArea() {
    const html = `<div class="loader">Loading...</div>`;
    document
      .querySelector(".main-body-details")
      .insertAdjacentHTML("afterbegin", html);
  }
  displaySpinnerSearchArea() {
    const html = `<div class="loader">Loading...</div>`;
    document
      .querySelector(".main-side__panel")
      .insertAdjacentHTML("afterbegin", html);
  }
  displayInitialDetailContent() {
    const html = `<div class="before-display">Search for the state or click on the card to see furthur details</div>`;
    document
      .querySelector(".main-body-details")
      .insertAdjacentHTML("afterbegin", html);
  }
  displayInitialSearchContent() {
    const html = `<div class="before-display pad-added">details ➡️ </div>`;
    document
      .querySelector(".main-side__panel")
      .insertAdjacentHTML("afterbegin", html);
  }
}

export default Spinner = new Spinner();
