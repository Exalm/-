document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navMobile = document.getElementById('mobile-menu');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;

  function openMenu() {
    navMobile.classList.add('open');
    overlay.classList.add('open');
    burger.setAttribute('aria-expanded', true);
    navMobile.setAttribute('aria-hidden', false);
    body.classList.add('menu-open');
  }

  function closeMenu() {
    navMobile.classList.remove('open');
    overlay.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    navMobile.setAttribute('aria-hidden', true);
    body.classList.remove('menu-open');
  }

  burger.addEventListener('click', () => {
    if (navMobile.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  // Закрытие меню при клике на ссылку
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
