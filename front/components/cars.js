const $cars = document.getElementById("cars-list");
const url = "http://localhost:3000/get_ford_cars";
const print = fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      $cars.innerHTML += `
        <div class="car-card">
                <img class="image-fluid" src="https://test-bucket-luciano.s3.amazonaws.com/${element.url}" alt="card image">
            <div class="doors-fuel">
                <span><i class="fas fa-door-open"></i>${element.doors}</span>
                <span><i class="fas fa-tint"></i>${element.fuelType}</span>
            </div>
            <div class="car-info">
                <h3>$ ${element.cost}</h3>
                <p>${element.modelDescription}</p>
                <p id="place">${element.placeDescription}</p>
            </div>
        </div>
      `;
    });
  })
  .catch((err) => {
    alert("Error al conectar con la API");
  });
