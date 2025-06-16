import React, { useState, useEffect } from 'react';
import '../styles/style-acessibilidade.css';

function Acessibilidade() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const increaseFont = () => setFontSize(fontSize < 24 ? fontSize + 2 : 24);
  const decreaseFont = () => setFontSize(fontSize > 12 ? fontSize - 2 : 12);
  const toggleContrast = () => setHighContrast(!highContrast);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = '';
    if (highContrast) document.body.classList.add('high-contrast');
    if (darkMode) document.body.classList.add('dark-mode');
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize, highContrast, darkMode]);

  return (
    <div className="acessibilidade-container">
      <button className="acessibilidade-btn" onClick={toggleMenu} aria-label="Abrir menu de acessibilidade">
        <span className="material-icons">accessibility</span>
      </button>
      {isOpen && (
        <div className="acessibilidade-menu">
          <button onClick={increaseFont} aria-label="Aumentar tamanho da fonte">
            <span className="material-icons">zoom_in</span> Aumentar Fonte
          </button>
          <button onClick={decreaseFont} aria-label="Diminuir tamanho da fonte">
            <span className="material-icons">zoom_out</span> Diminuir Fonte
          </button>
          <button onClick={toggleContrast} aria-label="Alternar contraste alto">
            <span className="material-icons">contrast</span> {highContrast ? 'Desativar' : 'Ativar'} Contraste Alto
          </button>
          <button onClick={toggleDarkMode} aria-label="Alternar modo noturno">
            <span className="material-icons">dark_mode</span> {darkMode ? 'Desativar' : 'Ativar'} Modo Noturno
          </button>
        </div>
      )}
    </div>
  );
}

export default Acessibilidade;