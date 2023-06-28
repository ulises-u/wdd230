const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#display");

const entries = [
  {
    "image": "https://beautifulnauvoo.com/files/2021/11/NauvooVCExterior-687x489.92292f72e8f2a70b5af5bc2041f58497.jpg?&a=t",
    "title": "Visitors' Center",
    "phone": "217-557-2610",
    "website": "https://www.churchofjesuschrist.org/feature/historic-sites/historic-nauvoo?lang=eng"
  },
  {
    "image": "https://beautifulnauvoo.com/files/2021/11/Nauvoo-House-2003-01.92292f72e8f2a70b5af5bc2041f58497.jpg?&a=t",
    "title": "Joseph Smith Historic Site",
    "phone": "217-453-2246",
    "website": "https://explorenauvoo.com/"
  },
  {
    "image": "https://beautifulnauvoo.com/files/2021/11/Family_Seach.9671c0dc35cbed4e822b139b13a64d7a.jpg?&a=t",
    "title": "Historic Nauvoo",
    "phone": "217-453-6347",
    "website": "https://www.familysearch.org/en/wiki/Nauvoo_Illinois_Family_History_Center"
  },
  {
    "image": "https://www.nauvoopageant.org/img/ypm.png",
    "title": "Society Museums",
    "phone": "N/A",
    "website": "https://www.nauvoopageant.org/img/ypm.png"
  },
  {
    "image": "https://beautifulnauvoo.com/files/2021/11/Rheinberger.70ac2d411492ffcfbc523c207653c107.jpg?&a=t",
    "title": "Nauvoo Family Search",
    "phone": "217-219-0188",
    "website": "https://www.familysearch.org/en/wiki/Nauvoo_Illinois_Family_History_Center"
  },
  {
    "image": "https://beautifulnauvoo.com/files/2021/11/nauvoo_antiques.9c1f75eee6506bda71813f2274873333.jpg?&a=t",
    "title": "Nauvoo Tourism Office",
    "phone": "217-453-6648",
    "website": "https://beautifulnauvoo.com/"
  },
  {
    "image": "https://beautifulnauvoo.com/files/2021/11/The_Flood_Museum.92292f72e8f2a70b5af5bc2041f58497.jpg?&a=t",
    "title": "The Flood Museum",
    "phone": "800-264-4817",
    "website": "https://www.thefloodmuseum.com/"
  },
  {
    "image": "https://www.nauvoopageant.org/img/british.png",
    "title": "Nauvoo Pageant",
    "phone": "N/A",
    "website": "https://www.churchofjesuschrist.org/feature/historic-sites/historic-nauvoo?lang=eng"
  }
];

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);

// Set the default view
showGrid();

function showGrid() {
  display.innerHTML = "";
  entries.forEach(entry => {
    const card = createCard(entry);
    display.appendChild(card);
  });
}

function showList() {
  display.innerHTML = "";
  entries.forEach(entry => {
    const listItem = createListItem(entry);
    display.appendChild(listItem);
  });
}

function createCard(entry) {
  const { image, title, phone, website } = entry;

  const card = document.createElement("div");
  card.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = title;
  card.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;
  card.appendChild(titleElement);

  const phoneElement = document.createElement("p");
  phoneElement.textContent = "Phone: " + phone;
  card.appendChild(phoneElement);

  const websiteLink = document.createElement("a");
  websiteLink.href = website;
  websiteLink.textContent = "Website";
  card.appendChild(websiteLink);

  return card;
}

function createListItem(entry) {
  const { image, title, phone, website } = entry;

  const listItem = document.createElement("li");

  const imageElement = document.createElement("list");
  imageElement.src = image;
  imageElement.alt = title;
  listItem.appendChild(imageElement);

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;
  listItem.appendChild(titleElement);

  const phoneElement = document.createElement("p");
  phoneElement.textContent = "Phone: " + phone;
  listItem.appendChild(phoneElement);

  const websiteLink = document.createElement("a");
  websiteLink.href = website;
  websiteLink.textContent = "Website";
  listItem.appendChild(websiteLink);

  return listItem;
}
