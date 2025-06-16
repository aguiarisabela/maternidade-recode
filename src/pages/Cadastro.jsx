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
    fotoPerfil: null,
    dataNascimento: ''
  });
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fotoPerfil' && files) {
      setFormData({ ...formData, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token') || '';
    const userData = {
      nomeCompleto: formData.nomeCompleto,
      username: formData.username,
      senha: formData.senha,
      email: formData.email,
      dataNascimento: formData.dataNascimento
    };
    const data = new FormData();
    data.append('user', new Blob([JSON.stringify(userData)], { type: 'application/json' }));
    if (formData.fotoPerfil) {
      data.append('fotoPerfil', formData.fotoPerfil);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token
        }
      });
      setMessage(response.data);
      if (response.data.includes('sucesso')) {
        window.location.href = '/login';
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || 'Erro desconhecido';
      setMessage('Erro ao cadastrar: ' + (typeof errorMsg === 'string' ? errorMsg : JSON.stringify(errorMsg)));
    }
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