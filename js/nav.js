document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navMobile = document.getElementById('mobile-menu');

  burger.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    const isOpen = navMobile.classList.contains('open');
    burger.setAttribute('aria-expanded', isOpen);
    navMobile.setAttribute('aria-hidden', !isOpen);
  });

  // Закрытие меню при клике на ссылку
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
      navMobile.setAttribute('aria-hidden', true);
    });
  });
});
