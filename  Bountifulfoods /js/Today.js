
"use strict";

// Display Current Date
let nowElement = document.querySelector('#now');
if (nowElement) {
  nowElement.innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format();
}

// Conditional Display
let BountifulFoods = document.querySelector('#BountifulFoods');
if (BountifulFoods) {
  let dayOfWeek = new Date().getDay();
  if (dayOfWeek === 1 || dayOfWeek === 2) {
    BountifulFoods.style.display = "block";
  }
}

// Add onClick Event to Mobile Menu Button
let navig = document.getElementById('hamburgerBtn');
if (navig) {
  navig.onclick = toggleMenu;
}

// Display Last Modification Date
let modifyElement = document.getElementById("modify");
if (modifyElement) {
  modifyElement.innerHTML = document.lastModified;
}

// Display Current Year
let yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.innerHTML = new Date().getFullYear();
}

// Toggle Menu Function
function toggleMenu() {
  let navElement = document.getElementById('Nav');
  if (navElement) {
    navElement.classList.toggle('active');
  }
}
