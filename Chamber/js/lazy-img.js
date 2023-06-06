"use strict";

let imagesToLoad = document.querySelectorAll('img[data-src]');

const imageOptions = {
    threshold: 3,
    rootMargin: '0px 0px 50px 0px'
};

const loadImages = (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
        img.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer)  => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}