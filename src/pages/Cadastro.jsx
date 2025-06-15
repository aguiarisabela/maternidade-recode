import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/style-cadastro.css';
import axios from 'axios';
import { useState } from 'react';

function Cadastro() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    username: '',
    senha: '',
    email: '',
    dataNascimento: '',
    fotoPerfil: null,
    newsletter: false,
    termos: false
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] ? files[0].name : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      nomeCompleto: formData.nomeCompleto,
      username: formData.username,
      senha: formData.senha,
      email: formData.email,
      dataNascimento: formData.dataNascimento,
      fotoPerfil: formData.fotoPerfil
    };
    axios.post('http://localhost:8080/api/register', dataToSend, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        setMessage(response.data);
        if (response.data.includes('sucesso')) {
          window.location.href = '/login';
        }
      })
      .catch(error => {
        setMessage('Erro ao cadastrar: ' + (error.response?.data || error.message));
      });
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
                  <input required placeholder=" " type="text" className="input" name="nomeCompleto" onChange={handleChange} />
                  <span>Nome Completo</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required placeholder=" " type="text" className="input" name="username" onChange={handleChange} />
                  <span>Username</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required placeholder=" " type="password" className="input" name="senha" onChange={handleChange} />
                  <span>Senha</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required placeholder=" " type="email" className="input" name="email" onChange={handleChange} />
                  <span>E-mail</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input type="file" accept="image/*" className="input-file" name="fotoPerfil" onChange={handleChange} />
                  <span>Foto de Perfil</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required type="date" className="input" name="dataNascimento" onChange={handleChange} />
                  <span>Data de Nascimento</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label className="checkbox-label">
                  <input type="checkbox" className="input-checkbox" name="newsletter" onChange={handleChange} />
                  <span>Assinar Newsletter (opcional)</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label className="checkbox-label">
                  <input type="checkbox" className="input-checkbox" name="termos" onChange={handleChange} required />
                  <span>Concordo com os <a href="/termos" target="_blank">Termos de Uso</a></span>
                </label>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <input type="submit" className="submit-cadastro" value="Criar Conta" />
              </div>
            </div>
            {message && <p className="text-center text-danger">{message}</p>}
            <div className="row justify-content-center mt-3">
              <div className="col-md-12 text-center">
                <Link to="/login" className="back-login">
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