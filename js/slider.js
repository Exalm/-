document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.review-slide');
  let currentIndex = 0;
  const totalSlides = slides.length;
  const interval = 5000; // 5 секунд

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, interval);
});
