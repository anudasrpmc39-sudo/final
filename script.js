const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const header = document.querySelector('.site-header');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
});

document.querySelector('#year').textContent = new Date().getFullYear();

const updateHeader = () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
};

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
