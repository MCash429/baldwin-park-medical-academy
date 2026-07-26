const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const modal = document.getElementById('login-modal');
const closeModal = document.querySelector('.modal-close');
const toast = document.getElementById('toast');

menuToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function openLogin() {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  closeModal.focus();
}

function hideLogin() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-open-modal]').forEach(button => button.addEventListener('click', openLogin));
closeModal.addEventListener('click', hideLogin);
modal.addEventListener('click', event => {
  if (event.target === modal) hideLogin();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) hideLogin();
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('[data-info]').forEach(button => {
  button.addEventListener('click', () => showToast(`${button.dataset.info} will be added in the next build phase.`));
});

document.querySelectorAll('[data-program]').forEach(button => {
  button.addEventListener('click', () => showToast(`${button.dataset.program} course page is ready to be designed next.`));
});

document.getElementById('demo-dashboard').addEventListener('click', () => {
  hideLogin();
  showToast('The student dashboard is the next prototype screen after the homepage.');
});
