function displayTemperature(response) {
  console.log(response.data.list[0].main.temp);
}

let apiKey = "4bf607af66f424ce009f3ab41fd57579";
let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=New%20York&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
