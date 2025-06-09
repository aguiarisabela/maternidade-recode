document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.custom-toggler');
  const collapse = document.getElementById('navbarNav');

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    collapse.classList.toggle('show');
  });
});