/*windChill*/
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Nauvoo,US&appid=caa8540702ef690bc84e562267149524&units=imperial=833b47aa3356f27d00abbb1ec7f3994f';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const iconURL = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;

    let temp = jsonObject.main.temp;

    // Convert temperature from Kelvin to Fahrenheit
    let tempFahrenheit = (temp * 9/5) - 459.67;

    let speed = jsonObject.wind.speed;

    document.querySelector('.cityName').textContent = jsonObject.name;
    document.querySelector('#weathericon').setAttribute('src', iconURL);
    document.querySelector('#weathericon').setAttribute('alt', jsonObject.weather[0].description);
    document.querySelector('.temp').innerHTML = `Temperature: ${tempFahrenheit.toFixed(2)} &deg;F`;
    document.querySelector('.wind-speed').textContent = `Wind Speed: ${speed} mph`;
    document.querySelector('.humidityDiv').textContent = `Humidity: ${jsonObject.main.humidity}`;

    let windChill = computeWindChill(tempFahrenheit, speed);

    document.querySelector('.wind-chill').textContent = `Wind Chill: ${windChill}`;
  })
  .catch((error) => {
    console.log('An error occurred while fetching weather data:', error);
  });

function computeWindChill(t, s) {
  let windChill = Math.round((35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) * 100) / 100;

  if (t <= 50 && s > 3) {
    return windChill.toFixed(2);
  } else {
    return 'N/A';
  }
}
