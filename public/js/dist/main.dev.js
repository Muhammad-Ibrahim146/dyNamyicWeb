"use strict";

var cityName = document.getElementById("cityName");
var submitBtn = document.getElementById("submitBtn");
var city_name = document.getElementById("city_name");
var tempUnit = document.getElementById("tempUnit");
var temp_status1 = document.getElementById("temp_status1");
var datahide = document.querySelector(".middle_layer");

var getInfo = function getInfo(Event) {
  var cityValue, url, response, data, arrData, temMode;
  return regeneratorRuntime.async(function getInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Event.preventDefault();
          cityValue = cityName.value;

          if (!(cityValue == "")) {
            _context.next = 7;
            break;
          }

          city_name.innerText = "Plz write the city name";
          datahide.classList.add("data_hide");
          _context.next = 27;
          break;

        case 7:
          _context.prev = 7;
          url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(cityValue, "&units=metric&appid=6ad71b44a52bc98d278ea4f709fb5f6d");
          _context.next = 11;
          return regeneratorRuntime.awrap(fetch(url));

        case 11:
          response = _context.sent;
          _context.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          data = _context.sent;
          arrData = [data];
          city_name.innerText = "".concat(arrData[0].name, ",").concat(arrData[0].sys.country);
          tempUnit.innerText = arrData[0].main.temp; // temp_status.innerText = arrData[0].weather[0].main;
          //condition to check sunny or cloudy

          temMode = arrData[0].weather[0].main;

          if (temMode == "Clear") {
            temp_status1.innerHtml = "<i class='fas fa-sun' style='color: #eccc68'></i>";
          } else if (temMode == "Clouds") {
            temp_status1.innerHtml = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
          } else if (temMode == "Rain") {
            temp_status1.innerHtml = "<i class='fas fa-rain' style='color:#a4b0be'></i>";
          } else {
            temp_status1.innerHtml = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
          }

          datahide.classList.remove("data_hide");
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](7);
          city_name.innerText = "Plz write the city name properly";
          datahide.classList.add("data_hide");

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 23]]);
};

submitBtn.addEventListener("click", getInfo);