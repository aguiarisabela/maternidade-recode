import { Link } from 'react-router-dom';
import PostCard from './PostCard.jsx';
import Categories from './Categories.jsx';

function ComunidadeContent() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body text-center">
              <button className="btn faca-login btn-primary">
                <Link to="/formulario">Faça login para criar um post</Link>
              </button>
            </div>
          </div>
          <PostCard
            author="Maria Souza"
            content="Ser mãe é um desafio, mas também a melhor experiência da minha vida! 💖"
          />
          <PostCard
            author="Ana Pereira"
            content="O primeiro ano do meu bebê foi difícil, mas com apoio tudo ficou melhor. Obrigada por essa comunidade! 🤱"
          />
        </div>
        <div className="col-md-4">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default ComunidadeContent;