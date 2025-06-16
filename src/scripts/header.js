document.addEventListener('DOMContentLoaded', () => {
  const initializeEvents = () => {
    const toggleButton = document.querySelector('.custom-toggler');
    const sidebar = document.getElementById('sidebarNav');
    const closeBtn = document.querySelector('.close-btn');

    // Só ativa em telas pequenas
    if (window.innerWidth <= 991 && toggleButton && sidebar && closeBtn) {
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
        if (
          sidebar.classList.contains('show') &&
          !sidebar.contains(event.target) &&
          !toggleButton.contains(event.target)
        ) {
          toggleButton.setAttribute('aria-expanded', 'false');
          sidebar.classList.remove('show');
        }
      });
    }
  };

  // Observa mudanças no DOM
  const observer = new MutationObserver(() => {
    initializeEvents();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // Inicia uma vez imediatamente
  initializeEvents();

  // Desconecta após 10 segundos
  setTimeout(() => observer.disconnect(), 10000);
});