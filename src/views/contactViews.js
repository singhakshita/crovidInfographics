class ContactViews {
  displayCard(data) {
    document.querySelector(".main-body-details").textContent = "";
    const html = `<div class="main-body-card">
            <div class="card-data">🇮🇳${data.currentHelpline.loc}</div>
            <div class="card-data">${data.currentHelpline.number}</div>
            <div class="card-data"><a href="${data.email}">${data.email}</a></div>
            <div class="card-data"><a href="${data.facebook}">${data.facebook}</a></div>
            <div class="card-data">${data.number}</div>
            <div class="card-data"><a href="${data.twitter}">${data.twitter}</a></div>
          </div>
            `;
    document
      .querySelector(".main-body-details")
      .insertAdjacentHTML("afterbegin", html);
  }

  intialContent(data) {
    document.querySelector(".main-body-details").textContent = "";
    const html = `<div class="main-body-card">
            <div class="card-data">🇮🇳Contacts And Helpline</div>
            <div class="card-data">🇮📭📞Search to find regional contact details</div>
            <div class="card-data"><a href="${data.email}">${data.email}</a></div>
            <div class="card-data"><a href="${data.facebook}">${data.facebook}</a></div>
            <div class="card-data">${data.number}</div>
            <div class="card-data"><a href="${data.twitter}">${data.twitter}</a></div>
          </div>
            `;
    document
      .querySelector(".main-body-details")
      .insertAdjacentHTML("afterbegin", html);
  }
}
export default ContactViews = new ContactViews();
