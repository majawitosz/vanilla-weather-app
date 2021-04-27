function formatDate() {
  let date = new Date();
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
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let pressureElement = document.querySelector("#air-pressure");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  temperatureElement.innerHTML = Math.round(response.data.list[0].main.temp);
  cityElement.innerHTML = response.data.list[0].name;
  humidityElement.innerHTML = response.data.list[0].main.humidity;
  windElement.innerHTML = Math.round(response.data.list[0].wind.speed);
  pressureElement.innerHTML = response.data.list[0].main.pressure;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let weatherIcon = response.data.list[0].weather[0].icon;
  iconElement.setAttribute("src", `src/images/${weatherIcon}.png`);
}

let apiKey = "4bf607af66f424ce009f3ab41fd57579";
let city = "Katowice";
let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
