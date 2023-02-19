/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '10a0ee735emshe0bb42c2e55369ep15dbfbjsn31206a2214fb',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        }
      const URL = `https://open-weather13.p.rapidapi.com/city/${city}`;
      const response = await fetch(URL, options);
      const data = await response.json();
      return data;
    }
    catch(error) {
        console.log(error);
    }
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const jsonResult = await getWeatherData(city);
  showWeatherData(jsonResult);
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  console.log(weatherData);
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
}
