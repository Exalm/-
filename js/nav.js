document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navMobile = document.querySelector('nav.nav-mobile');

  burger.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Закрываем меню при клике на ссылку
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    });
  });
});
