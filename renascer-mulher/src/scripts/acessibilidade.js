// Abrir e fechar o menu de acessibilidade
const accessibilityBtn = document.querySelector(".accessibility-btn");
const accessibilityOptions = document.getElementById("accessibilityOptions");

accessibilityBtn.addEventListener("click", () => {
  accessibilityOptions.classList.toggle("active");
});

// Função para aumentar e diminuir a fonte
const increaseFontBtn = document.getElementById("increaseFont");
const decreaseFontBtn = document.getElementById("decreaseFont");
let fontScale = 1; // Escala inicial (1 = 100%)

increaseFontBtn.addEventListener("click", () => {
  if (fontScale < 1.5) {
    // Limite máximo (150%)
    fontScale += 0.1; // Aumenta em 10%
    document.documentElement.style.fontSize = `${fontScale * 16}px`; // Aplica ao :root
  }
});

decreaseFontBtn.addEventListener("click", () => {
  if (fontScale > 0.75) {
    // Limite mínimo (75%)
    fontScale -= 0.1; // Diminui em 10%
    document.documentElement.style.fontSize = `${fontScale * 16}px`; // Aplica ao :root
  }
});

// Modo de alto contraste
const highContrastBtn = document.getElementById("highContrast");
let isHighContrast = false;

highContrastBtn.addEventListener("click", () => {
  isHighContrast = !isHighContrast;
  if (isHighContrast) {
    document.body.classList.add("high-contrast");
    highContrastBtn.textContent = "Desativar Alto Contraste";
  } else {
    document.body.classList.remove("high-contrast");
    highContrastBtn.textContent = "Alto Contraste";
  }
});
