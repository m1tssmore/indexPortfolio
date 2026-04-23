const carousel = document.querySelector(".carousel-container");
const carouselBottom = document.querySelector(".carousel-container-bottom");
const slide = document.querySelector(".carousel-slide");
const slidesBottom = document.querySelectorAll(".carousel-slide-bottom");

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".carousel-slide").length;

function goToSlide(index) {
    currentIndex = index;

    const slideWidth = slide.clientWidth;
    carousel.scrollLeft = slideWidth * currentIndex;

    const bottomSlide = slidesBottom[currentIndex];
    carouselBottom.scrollLeft = bottomSlide.offsetLeft 
        - carouselBottom.clientWidth / 2 
        + bottomSlide.clientWidth / 2;

    slidesBottom.forEach(s => s.classList.remove("active-thumb"));
    bottomSlide.classList.add("active-thumb");
}

function carouselMove(positive = true) {
    if (positive) {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    goToSlide(currentIndex);
}

slidesBottom.forEach((slide, index) => {
    slide.addEventListener("click", () => goToSlide(index));
});




function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open');
}

document.querySelectorAll('.li-button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.remove('open');
    });
});