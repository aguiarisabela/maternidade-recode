import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/style-login.css';

function Login() {
  return (
    <>
      <Header />
      <main className="corpo">
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <form className="form shadow-lg">
            <p className="title text-center">Faça Login</p>
            <div className="row">
              <div className="col-12">
                <label>
                  <input required placeholder=" " type="text" className="input" />
                  <span>Username ou E-mail</span>
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
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <input type="submit" className="submit-login" value="Entrar" />
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-md-12 text-center">
                <button type="button" className="btn-gmail">
                  <i className="fab fa-google"></i> Entrar com Gmail
                </button>
              </div>
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-md-12 text-center">
                <Link to="/cadastro" className="create-account">
                  Criar Conta
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

export default Login;