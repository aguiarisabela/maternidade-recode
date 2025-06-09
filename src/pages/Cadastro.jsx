import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/style-cadastro.css';

function Cadastro() {
  return (
    <>
      <Header />
      <main className="corpo">
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <form className="form shadow-lg">
            <p className="title text-center">Crie Sua Conta</p>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required placeholder=" " type="text" className="input" />
                  <span>Nome Completo</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required placeholder=" " type="text" className="input" />
                  <span>Username</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required placeholder=" " type="password" className="input" />
                  <span>Senha</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required placeholder=" " type="email" className="input" />
                  <span>E-mail</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input type="file" accept="image/*" className="input-file" />
                  <span>Foto de Perfil</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required type="date" className="input" />
                  <span>Data de Nascimento</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label className="checkbox-label">
                  <input type="checkbox" className="input-checkbox" />
                  <span>Assinar Newsletter (opcional)</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label className="checkbox-label">
                  <input type="checkbox" className="input-checkbox" required />
                  <span>Concordo com os <a href="/termos" target="_blank">Termos de Uso</a></span>
                </label>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <input type="submit" className="submit-cadastro" value="Criar Conta" />
              </div>
            </div>
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