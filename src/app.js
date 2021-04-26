function displayTemperature(response) {
  console.log(response.data.list[0].main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.list[0].main.temp);
  cityElement.innerHTML = response.data.list[0].name;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.list[0].main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.list[0].wind.speed);
  let pressureElement = document.querySelector("#air-pressure");
  pressureElement.innerHTML = response.data.list[0].main.pressure;
}

let apiKey = "4bf607af66f424ce009f3ab41fd57579";
let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=New%20York&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
