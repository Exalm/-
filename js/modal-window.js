const orderButton = document.getElementById('orderButton');
const modal = document.getElementById('orderModal');
const closeModalBtn = modal.querySelector('.modal-close');
const firstInput = modal.querySelector('#name');

// Открыть модалку
orderButton.addEventListener('click', () => {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
  firstInput.focus();
  document.body.style.overflow = 'hidden'; // запретить скролл страницы
});

// Закрыть модалку
function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  orderButton.focus();
  document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);

// Закрытие по клику вне контента
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Закрытие по Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Обработка отправки формы (пример)
const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Здесь можно добавить валидацию и отправку данных на сервер
  alert('Спасибо за заказ! Мы свяжемся с вами.');
  closeModal();
  orderForm.reset();
});
