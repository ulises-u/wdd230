function fetchWeatherData() {
    // Declare and assign the API URL for Nauvoo, IL
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Nauvoo,us&appid=YOUR_API_KEY&units=imperial';
  
    // Fetch weather data from the API
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsonObject) => {
        // Display the weather data on the HTML page
        displayWeatherData(jsonObject);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
  
  function displayWeatherData(data) {
    const iconURL = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
    let temp = data.main.temp;
    let speed = data.wind.speed;
  
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('weatherIcon').setAttribute('src', iconURL);
    document.getElementById('weatherIcon').setAttribute('alt', data.weather[0].description);
    document.querySelector('.temp').innerHTML = `Temperature: ${temp} &deg;F`;
    document.querySelector('.wind-speed').textContent = `Wind Speed: ${speed} mph`;
    document.querySelector('.humidityDiv').textContent = `Humidity: ${data.main.humidity}`;
  
    let windChill = computeWindChill(temp, speed);
    document.querySelector('.wind-chill').textContent = `Wind Chill: ${windChill}`;
  }
  
  function computeWindChill(t, s) {
    if (t <= 50 && s > 3) {
      return Math.round((35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)) * 100) / 100;
    } else {
      return 'N/A';
    }
  }
  
  // Call the fetchWeatherData function to retrieve weather data and display it
  fetchWeatherData();
 
