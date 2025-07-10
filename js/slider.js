const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
}

document.querySelector('.slider-prev').onclick = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
};

document.querySelector('.slider-next').onclick = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
};

function orderNow() {
  window.location.href = "#contacts";
}

showSlide(currentSlide);
