"use strict";

document.querySelector('#now').innerHTML = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format();
//document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];

let chamber = document.querySelector('#chamber');
let dayOfWeek = new Date().getDay();
// if Monday or Tuesday displays this
if (dayOfWeek == 1 || dayOfWeek == 2) {
    chamber.style.display = "block";
}
//Let's get the hamburguer working!

function toggleMenu() {

    document.getElementById('Nav').classList.toggle('open');
}

let navig = document.getElementById('hamburgerBtn')
navig.onclick = toggleMenu

document.getElementById("modify").innerHTML = document.lastModified
document.getElementById("year").innerHTML = new Date().getFullYear()
//Let's get the Dinamic working!


// Dynamic data for the spotlight section (events)
const spotlightItems = [
    {
        title: "Event 1",
        description: "Join us for a thrilling adventure in Event 1.",
        time: "July 20, 2023 7:00 PM"
    },
    {
        title: "Event 2",
        description: "Experience the magic of Event 2 with spectacular performances.",
        time: "August 5, 2023 8:30 PM"
    },
    // Add more events as needed
];

// Function to create dynamic spotlight items
function createSpotlightItems() {
    const spotlightContainer = document.getElementById("chamber");
    let spotlightHTML = "";

    // Loop through the spotlightItems array and generate HTML for each item
    for (const item of spotlightItems) {
        spotlightHTML += `
            <div class="spotlight-item">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>${item.time}</p>
            </div>
        `;
    }

    // Update the spotlight container with the dynamic HTML
    spotlightContainer.innerHTML = spotlightHTML;
}

// Call the function to create the spotlight items when the DOM is ready
document.addEventListener("DOMContentLoaded", createSpotlightItems);

