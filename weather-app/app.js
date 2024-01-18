let API_KEY = "f1e6ba2f797235f10015f114fe277bbc";
let API_URL = "https://api.openweathermap.org/data/2.5/weather";
let inputElement = document.getElementById("inputsearch");
let btnElement = document.getElementById("btnsearch");
let locationElement = document.getElementById("location");
let temperatureElement = document.getElementById("temperature");
let descriptionElement = document.getElementById("description");

btnElement.addEventListener("click", () => {
  const location = inputElement.value;
  if (location) {
    weatherApp(location);
  }
});
function weatherApp(location) {
  const url = `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
