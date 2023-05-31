
"use strict";

  // Function to fetch city ID
async function getCityId(cityName, countryCode, apiKey) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const cityId = data.id;
      return cityId;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
}

// Set your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

// Call the function to get the city ID
getCityId('Nauvoo', 'US', apiKey)
  .then((cityId) => {
    console.log('City ID:', cityId);
  });




