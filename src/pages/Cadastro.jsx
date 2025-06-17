import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/style-cadastro.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    username: '',
    senha: '',
    email: '',
    fotoPerfil: null, // Este campo não será enviado com a lógica do master
    dataNascimento: ''
  });
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(null); // Este estado é para a prévia da foto, que não será enviada

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fotoPerfil' && files) {
      setFormData({ ...formData, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => { // Removido 'async' pois o .then() não requer
    e.preventDefault();
    const token = localStorage.getItem('token') || ''; // 'token' não está sendo usado nesta versão do master
    const userData = { // Esta será a 'dataToSend'
      nomeCompleto: formData.nomeCompleto,
      username: formData.username,
      senha: formData.senha,
      email: formData.email,
      dataNascimento: formData.dataNascimento
    };

    // Início da resolução do conflito, mantendo a lógica do master
    axios.post('http://localhost:8080/api/register', userData, { // 'dataToSend' corrigido para 'userData'
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        setMessage(response.data);
        if (response.data.includes('sucesso')) {
          window.location.href = '/comunidade-login'; // Redireciona para /comunidade-login
        }
      })
      .catch(error => { // Adicionado .catch() para tratamento de erro, que faltava na versão master original
        const errorMsg = error.response?.data?.message || error.message || 'Erro desconhecido';
        setMessage('Erro ao cadastrar: ' + (typeof errorMsg === 'string' ? errorMsg : JSON.stringify(errorMsg)));
      });
    // Fim da resolução do conflito
  };

  return (
    <>
      <Header />
      <main className="corpo">
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <form className="form shadow-lg" onSubmit={handleSubmit}>
            <p className="title text-center">Crie Sua Conta</p>
            <div className="row">
              <div className="col-12">
                <label>
                  <input
                    required
                    placeholder=" "
                    type="text"
                    className="input"
                    name="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                  />
                  <span>Nome Completo</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input
                    required
                    placeholder=" "
                    type="text"
                    className="input"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <span>Username</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input
                    required
                    placeholder=" "
                    type="password"
                    className="input"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                  />
                  <span>Senha</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input
                    required
                    placeholder=" "
                    type="email"
                    className="input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span>E-mail</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input
                    type="file"
                    className="input"
                    name="fotoPerfil"
                    onChange={handleChange}
                  />
                  <span>Foto de Perfil</span>
                  {preview && <img src={preview} alt="Prévia" className="img-thumbnail mt-2" style={{ maxWidth: '100px' }} />}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input
                    required
                    placeholder=" "
                    type="date"
                    className="input"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                  />
                  <span>Data de Nascimento</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label>
                  <input
                    type="checkbox"
                    name="newsletter"
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  /> Assinar Newsletter (opcional)
                </label>
              </div>
              <div className="col-6">
                <label>
                  <input
                    type="checkbox"
                    name="termos"
                    required
                    onChange={(e) => setFormData({ ...formData, termos: e.target.checked })}
                  /> Concordo com os Termos de Uso
                </label>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <input type="submit" className="submit-login" value="Criar Conta" />
              </div>
            </div>
            {message && <p className="text-center text-danger">{message}</p>}
            <div className="row justify-content-center mt-3">
              <div className="col-md-12 text-center">
                <Link to="/login" className="create-account">
                  Já tenho conta? Faça Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cadastro;