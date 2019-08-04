const weatherResult = document.getElementById("weather-result");

function askWeather() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let response = JSON.parse(this.responseText);
      weatherResult.innerHTML = response.current_condition.condition;
    }
  };
  request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
  request.send();
}

function askWeatherCity(city) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let response = JSON.parse(this.responseText);
      weatherResult.innerHTML = response.current_condition.condition;
    }
  };
  request.open("GET", "https://www.prevision-meteo.ch/services/json/" + city);
  request.send();
}

document.getElementById("ask-weather").addEventListener("click", ()=> {
  askWeather();
});

document.getElementById("meteoButton").addEventListener("click", ()=> {
  let city = document.getElementById("searchBar").value;
  askWeatherCity(city);
});
