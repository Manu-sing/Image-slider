import './style.css';
import image2 from'./image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});

// make images 
const slidesContainer = document.querySelector(".slides-container");
    
    const slideImage2 = document.createElement("div");
    slideImage2.classList.add("slide-image");
    const img2 = new Image();
    img2.src = image2;
    img2.alt = "nature-image";
    slideImage2.appendChild(img2);
    slidesContainer.appendChild(slideImage2);
    
    const slideImage3 = document.createElement("div");
    slideImage3.classList.add("slide-image");
    const img3 = new Image();
    img3.src = image3;
    img3.alt = "nature-image";
    slideImage3.appendChild(img3);
    slidesContainer.appendChild(slideImage3);
    
    const slideImage4 = document.createElement("div");
    slideImage4.classList.add("slide-image");
    const img4 = new Image();
    img4.src = image4;
    img4.alt = "nature-image";
    slideImage4.appendChild(img4);
    slidesContainer.appendChild(slideImage4);



const slideImage = document.querySelectorAll(".slide-image");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

// set up the slider 
const init = () => {
 // iterate through the array and position the array elements (the images) in a certain position
 // slideImage[0] = 0;
 // slideImage[1] = 100%;
 // slideImage[2] = 200%;
 slideImage.forEach((img, i) => {
     img.style.left = i * 100 + "%";
 })

 slideImage[0].classList.add("active");
 
 makeNavigationDots();
}

init();

// create navigation dots

function makeNavigationDots() {
    for (let i =0; i < numberOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        })
    }
navigationDots.children[0].classList.add("active");
}

// next button 

nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) { // which means that we are the last slide
        goToSlide(0);
        return;
    }
    currentSlide++;
    goToSlide(currentSlide);
})

// previous button 

prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) { // which means that we are the last slide
        goToSlide(numberOfImages - 1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
})

// go to slide

function goToSlide(slideNumber) {
    slidesContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)"; // this will move the 
    // slide container to the left, so that the next image will be revealed
    currentSlide = slideNumber;
    setActiveClass();
}

function setActiveClass() {
    // set active class for Slide Image

    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    // set active class for navigation button

    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");

}

// a thing that comes to mind also is to check devTools on your live  github-pages. Although no image is showing, you should find an image-link. That gives clarity about where github actually searches for the image




