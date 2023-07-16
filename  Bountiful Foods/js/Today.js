"use strict";

document.querySelector('#now').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format();

function toggleMenu() {
  document.getElementById('Nav').classList.toggle('open');
}

let navig = document.getElementById('hamburgerBtn');
navig.onclick = toggleMenu;

document.getElementById("modify").innerHTML = document.lastModified;
document.getElementById("currentYear").textContent = new Date().getFullYear();
