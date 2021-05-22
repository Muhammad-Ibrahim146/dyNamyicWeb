const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById("city_name");

const tempUnit = document.getElementById("tempUnit");
const temp_status1 = document.getElementById("temp_status1");

const datahide = document.querySelector(".middle_layer");

const getInfo = async (Event) => {
  Event.preventDefault();
  let cityValue = cityName.value;
  if (cityValue == "") {
    city_name.innerText = "Plz write the city name";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=6ad71b44a52bc98d278ea4f709fb5f6d`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

      tempUnit.innerText = arrData[0].main.temp;
      // temp_status.innerText = arrData[0].weather[0].main;
      //condition to check sunny or cloudy
      const temMode = arrData[0].weather[0].main;
      if (temMode == "Clear") {
        temp_status1.innerHtml =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      } else if (temMode == "Clouds") {
        temp_status1.innerHtml =
          "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
      } else if (temMode == "Rain") {
        temp_status1.innerHtml =
          "<i class='fas fa-rain' style='color:#a4b0be'></i>";
      } else {
        temp_status1.innerHtml =
          "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "Plz write the city name properly";
      datahide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
