const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");

//routes
router.get("/get_ford_cars", (req, res) => {
  //Urls
  const baseUrl = "http://server.cocoche.com.ar";
  const getUrl = baseUrl + "/car_listing_presentation?list_length=100";

  //fetch to cocoche API
  fetch(getUrl)
    .then((response) => response.json())
    .then((content) => {
      const list = content.carList;
      //create a new array called fordCars with cars from the carList , where the brandDescription is "FORD"
      const fordCars = list.filter((car) => car.brandDescription == "FORD");
      res.json(fordCars);
    })
    .catch((err) => {
      res.json(`The conection with the API provider failed. Error: ${err}`);
    });
});

module.exports = router;
