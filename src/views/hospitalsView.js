class HospitalView {
  displayCard(data) {
    document.querySelector(".main-body-details").textContent = "";
    const html = `<div class="main-body-card">
            <div class="card-data">🇮🇳${data.state}</div>
            <div class="card-data">🛏Rural Beds: ${data.ruralBeds}</div>
            <div class="card-data">🚨Rural Hospitals: ${data.ruralHospitals}</div>
            <div class="card-data">🛏Total Beds : ${data.totalBeds}</div>
            <div class="card-data">🚨Total Hospitals: ${data.totalHospitals}</div>
            <div class="card-data">🛌Urban Beds: ${data.urbanBeds}</div>
            <div class="card-data">🚨Urban Hospitals: ${data.urbanHospitals}</div>
          </div>
            `;
    document
      .querySelector(".main-body-details")
      .insertAdjacentHTML("afterbegin", html);
  }
}
export default HospitalView = new HospitalView();
