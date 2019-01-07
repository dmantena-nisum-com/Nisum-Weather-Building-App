// importing all elements at once .
import * as ELEMENTS from "elements.js";
// importing Http Class .
import { Http } from "http.js";
import { WeatherData, WEATHER_PROXY_HANDLER } from "weather-data.js";

//  UNIQUE API KEY from the thrid party service .
const APP_ID = "d98f1d7148b1b8ba106409ad8f4e966a";

// adding event listener to search for the weather

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener("click", searchWeather);

// function which takes the user input ans stores in a const.
function searchWeather() {
  const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();
  if (CITY_NAME.length == 0) {
    return alert("Please enter a city name");
  }
  ELEMENTS.ELEMENT_LOADING_TEXT.style.display = "block";
  ELEMENTS.ELEMENT_WEATHER_BOX.style.display = "none";
  // here URL is the target server from where we are fetching the data .
  const URL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    CITY_NAME +
    "&units=metric&appid=" +
    APP_ID;
  // Since HTTP request returns a Promise we have a "then && catach"  call here if we incase we resolve or reject the Promise.
  Http.fetchData(URL)
    .then(responseData => {
      // Creating weather data by passing the Construtor parameters CITY NAME and Description
      const WEATHER_DATA = new WeatherData(
        CITY_NAME,
        responseData.weather[0].description.toUpperCase()
      );
      // Creating the Proxy Object and passing the "WEATHER DATA & WEATHER_PROXY_HANDLER"
      const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
      WEATHER_PROXY.temperature = responseData.main.temp;
      updateWeather(WEATHER_PROXY);
    })
    .catch(error => alert(error));
}
// Updating the weatherData using the function and built in property called textContent .
function updateWeather(weatherData) {
  console.log(weatherData);
  ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
  ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
  ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

  ELEMENTS.ELEMENT_LOADING_TEXT.style.display = "none";
  ELEMENTS.ELEMENT_WEATHER_BOX.style.display = "block";
}
