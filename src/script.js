function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
}
let apiKey = "21924a69758825298e98faeeae10b27a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
