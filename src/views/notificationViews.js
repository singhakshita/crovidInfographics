class NotificationViews {
  markupHandler(arr) {
    arr.forEach((data) => {
      this.createMarkup(data);
    });
  }
  createMarkup(data) {
    const html = `<div class="notification-card">
      <div class="notification-title">${data.title}</div>
      <div class="notification-link"><a href="${data.link}">${data.link}</a></div>
    </div>
      `;
    document.querySelector(".updates").insertAdjacentHTML("beforeend", html);
  }
}
export default NotificationViews = new NotificationViews();
