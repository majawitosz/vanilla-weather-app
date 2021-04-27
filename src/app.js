function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

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
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.list[0].dt * 1000);
}

let apiKey = "4bf607af66f424ce009f3ab41fd57579";
let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=New%20York&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
