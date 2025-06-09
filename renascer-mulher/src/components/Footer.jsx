import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/style-footer.css';

function Footer() {
  return (
    <footer className="rodape">
      <div className="container-rodape">
        <div className="rede-socais">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="direitos">
          <div id="direito-criado">
            © 2025 | Criado pela <span>SQUAD - 12</span> | Todos os direitos reservados
          </div>
          <div id="termos-privacidade">
            <a href="#">Privacidade e Política</a><br />
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;