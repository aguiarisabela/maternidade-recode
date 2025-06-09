function AccessibilityMenu() {
  return (
    <div className="accessibility-menu">
      <button className="accessibility-btn" aria-label="Abrir menu de acessibilidade">
        <i className="bi bi-universal-access-circle"></i>
      </button>
      <div className="accessibility-options" id="accessibilityOptions">
        <button id="increaseFont">Aumentar Fonte</button>
        <button id="decreaseFont">Diminuir Fonte</button>
        <button id="highContrast">Alto Contraste</button>
      </div>
    </div>
  );
}

export default AccessibilityMenu;