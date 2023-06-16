
  "use strict";

// Select all images with 'data-src' attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// Intersection Observer options
const imageOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 100px 0px"
};

// Function to load images
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// Intersection Observer callback function
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadImages(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, imageOptions);

// Observe each image
imagesToLoad.forEach((image) => {
  imageObserver.observe(image);
});
