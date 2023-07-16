const apiKey = '833b47aa3356f27d00abbb1ec7f3994f';

// Fetch the current weather data for Santa Monica
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Santa%20Monica,us&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Update the weather information on the page
    document.getElementById('weather-icon').innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('condition').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  })
  .catch(error => {
    console.log('Error fetching weather data:', error);
  });

// Fetch the 3-day weather forecast for Santa Monica
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Santa%20Monica,us&units=metric&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Get the forecast data for the next 3 days
    const forecastData = data.list.filter(entry => entry.dt_txt.includes('12:00:00'));

    // Update the forecast list on the page
    const forecastList = document.getElementById('forecast');
    forecastData.forEach(entry => {
      const date = new Date(entry.dt * 1000);
      const day = date.toLocaleDateString('en-US', { weekday: 'short' });
      const temperature = entry.main.temp.toFixed(1);
      const listItem = document.createElement('li');
      listItem.textContent = `${day}: ${temperature}°C`;
      forecastList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.log('Error fetching forecast data:', error);
  });
