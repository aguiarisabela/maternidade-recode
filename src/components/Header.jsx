import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';
import '../styles/style-header.css';

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
            data-bs-target="#sidebarNav"
            aria-controls="sidebarNav"
            aria-expanded="false"
            aria-label="Abrir menu de navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Menu Desktop */}
          <div className="collapse navbar-collapse desktop-nav" id="desktopNav">
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
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
            </ul>
          </div>
          {/* Barra Lateral Mobile */}
          <div className="collapse navbar-collapse sidebar-nav" id="sidebarNav">
            <button className="close-btn" aria-label="Fechar menu">
              <span>×</span>
            </button>
            <ul className="navbar-nav">
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
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;