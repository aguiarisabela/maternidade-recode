document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.custom-toggler');
  const sidebar = document.getElementById('sidebarNav');
  const closeBtn = document.querySelector('.close-btn');

  // Função para inicializar eventos
  const initializeEvents = () => {
    if (toggleButton && sidebar && closeBtn) {
      toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        sidebar.classList.toggle('show');
      });

      closeBtn.addEventListener('click', () => {
        toggleButton.setAttribute('aria-expanded', 'false');
        sidebar.classList.remove('show');
      });

      document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !toggleButton.contains(event.target) && sidebar.classList.contains('show')) {
          toggleButton.setAttribute('aria-expanded', 'false');
          sidebar.classList.remove('show');
        }
      });
    } else {
      console.warn('Algum elemento (custom-toggler, sidebarNav ou close-btn) não foi encontrado no DOM. Verifique o HTML.');
      // Tenta novamente após um pequeno delay
      setTimeout(initializeEvents, 500);
    }
  };

  // Inicia os eventos
  initializeEvents();
});