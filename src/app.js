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
  iconElement.setAttribute(
    "src",
    `https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/${weatherIcon}.png`
  );
  let weatherIcon = response.data.list[0].weather.icon;
}
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/sun_2600-fe0f.png   
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/sun-behind-cloud_26c5.png 
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/cloud-with-rain_1f327-fe0f.png
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/cloud-with-lightning_1f329-fe0f.png
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/snowflake_2744-fe0f.png
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/fog_1f32b-fe0f.png
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/cloud_2601-fe0f.png
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/sun-behind-rain-cloud_1f326-fe0f.png
// https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/279/cloud-with-lightning-and-rain_26c8-fe0f.png
let icons = [

]

let apiKey = "4bf607af66f424ce009f3ab41fd57579";
let city = "Paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
