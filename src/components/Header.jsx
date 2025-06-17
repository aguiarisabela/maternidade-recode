import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo3.png';
import axios from 'axios';
import '../styles/style-header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Função para buscar nome do usuário
  const fetchUserName = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/profile?identifier=${encodeURIComponent(id)}`, {
        headers: { 'Content-Type': 'application/json' }
      });
      const nameParts = (response.data.nomeCompleto || '').trim().split(' ');
      const firstName = nameParts[0] || id;
      setFullName(firstName);
      // Salva no localStorage
      localStorage.setItem('userFullName', firstName);
    } catch {
      setFullName(id);
      localStorage.setItem('userFullName', id);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlIdentifier = params.get('identifier');
    if (urlIdentifier) {
      setIsLoggedIn(true);
      localStorage.setItem('userIdentifier', urlIdentifier);
      fetchUserName(urlIdentifier);
    } else {
      const storedIdentifier = localStorage.getItem('userIdentifier');
      if (storedIdentifier) {
        setIsLoggedIn(true);
        fetchUserName(storedIdentifier); // sempre busca o nome atualizado
      } else {
        setIsLoggedIn(false);
        setFullName('');
      }
    }
  }, [location.search]);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFullName('');
    setShowDropdown(false);
    localStorage.removeItem('userIdentifier');
    localStorage.removeItem('userFullName');
    navigate('/login');
  };

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
            <span className="material-icons">menu</span>
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
                <Link
                  className="nav-link"
                  to={isLoggedIn ? "/comunidade-login" : "/comunidade"}
                >
                  Comunidade
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contato">Contatos</Link>
              </li>
              {isLoggedIn ? (
                <li className="nav-item position-relative">
                  <span className="nav-link" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
                    <span className="material-icons">person</span>
                    {/* Exibe o primeiro nome ao lado do ícone */}
                    <span style={{ marginLeft: 6 }}>{fullName}</span>
                  </span>
                  {showDropdown && (
                    <div className="dropdown-menu" style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      backgroundColor: '#e8c7b4',
                      border: '1px solid #cc6200',
                      borderRadius: '5px',
                      padding: '5px',
                      zIndex: 1000,
                      display: showDropdown ? 'block' : 'none'
                    }}>
                      <p>Olá, {fullName}</p>
                      <Link to="/editar-perfil" className="dropdown-item">Editar Perfil</Link>
                      <a href="#" className="dropdown-item" onClick={handleLogout}>Logout</a>
                    </div>
                  )}
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <span className="material-icons">login</span> Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* Barra Lateral Mobile */}
          <div className="collapse navbar-collapse sidebar-nav" id="sidebarNav">
            <button className="close-btn" aria-label="Fechar menu">
              <span className="material-icons">close</span>
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/desafios">Desafios da Maternidade</Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={isLoggedIn ? "/comunidade-login" : "/comunidade"}
                >
                  Comunidade
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">Sobre Nós</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contato">Contatos</Link>
              </li>
              {isLoggedIn ? (
                <li className="nav-item position-relative">
                  <span className="nav-link" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
                    <span className="material-icons">person</span>
                    <span style={{ marginLeft: 6 }}>{fullName}</span>
                  </span>
                  {showDropdown && (
                    <div className="dropdown-menu" style={{
                      position: window.innerWidth <= 991 ? 'absolute' : 'absolute',
                      top: window.innerWidth <= 991 ? '60px' : '100%',
                      right: window.innerWidth <= 991 ? '20px' : 0,
                      left: window.innerWidth <= 991 ? '20px' : 'auto',
                      padding: '5px',
                      zIndex: 2000,
                      display: showDropdown ? 'block' : 'none'
                    }}>
                      <p>Olá, {fullName}</p>
                      <Link to="/editar-perfil" className="dropdown-item">Editar Perfil</Link>
                      <a href="#" className="dropdown-item" onClick={handleLogout}>Logout</a>
                    </div>
                  )}
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <span className="material-icons">login</span> Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;