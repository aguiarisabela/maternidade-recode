import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../styles/style-contato.css';

function Contato() {
  return (
    <>
      <Header />
      <Banner />
      <main className="corpo">
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <form className="form shadow-lg">
            <p className="title text-center">Entre em Contato</p>
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
                  <input required placeholder=" " type="email" className="input" />
                  <span>E-mail</span>
                </label>
              </div>
            </div>
            <textarea id="textarea" placeholder="Deixe sua dúvida" className="textarea"></textarea>
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <input type="submit" className="submit-contato" value="Enviar" />
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contato;