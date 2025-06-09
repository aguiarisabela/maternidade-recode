import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';
import '../styles/style.css';

function Header() {
  return (
    <header className="header-principal">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo Comunidade de Mães" />
      </Link>
      <nav className="navbar navbar-expand-lg cabecalho">
        <div className="container-fluid">
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Abrir menu de navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse custom-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/desafios">Desafios da Maternidade</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/comunidade">Comunidade</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contato">Contatos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;