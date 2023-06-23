
 const currentTemp = document.querySelector('#current-temp');
 const weatherIcon = document.querySelector('#weather-icon');
 const captionDesc = document.querySelector('figcaption');
 
 const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=833b47aa3356f27d00abbb1ec7f3994f';
 
 async function apiFetch() {
   try {
     const response = await fetch(url);
     if (response.ok) {
       const data = await response.json();
       // console.log(data); // this is for testing the call
       displayResults(data);
     } else {
       throw Error(await response.text());
     }
   } catch (error) {
     console.log(error);
   }
 }
 
 function displayResults(weatherData) {
   currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;
   const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
   const desc = weatherData.weather[0].description;
 
   weatherIcon.setAttribute('src', iconsrc);
   weatherIcon.setAttribute('alt', desc);
   captionDesc.textContent = capitalize(desc);
 }
 
 function capitalize(s) {
   const words = s.split(" ");
   //console.log(words);
 
   // loop array to change the first letter in each array item to cap
   for (let i = 0; i < words.length; i++) {
     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
   }
 
   return words.join(" ");
 }
 
 apiFetch();
 


