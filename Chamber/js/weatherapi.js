"use strict";

const apikeyL = "https://api.openweathermap.org/data/2.5/weather?id=4903976&appid={your API key}&units=metric";



// Function to fetch the city ID
async function getCityId("Nauvoo","us") {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if the API request was successful
    
}const cityName = 'Nauvoo';
const countryCode = 'US';

getCityId(cityName, countryCode)
  .then((cityId) => {
    console.log('City ID:', cityId);
  })
  .catch((error) => {
    console.log('Error:', error);
  });


