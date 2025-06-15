import React from 'react';
import PostCard from './PostCard';
import Categories from './Categories';
import '../styles/style-comunidade.css';

function ComunidadeContent() {
  const allPosts = [
    { id: 1, author: 'Maria Souza', photo: 'https://via.placeholder.com/40', content: 'Ser mãe é um desafio, mas também a melhor experiência da minha vida! 💖', attachments: ['https://via.placeholder.com/100'], likes: 5, comments: ['Legal!'] },
    { id: 2, author: 'Ana Pereira', photo: 'https://via.placeholder.com/40', content: 'O primeiro ano do meu bebê foi difícil, mas com apoio tudo ficou melhor. Obrigada por essa comunidade! 🤱', attachments: ['https://via.placeholder.com/100'], likes: 3, comments: ['Top!'] },
    { id: 3, author: 'João Silva', photo: 'https://via.placeholder.com/40', content: 'Dica: durma quando o bebê dormir! 😴', attachments: ['https://via.placeholder.com/100'], likes: 2, comments: ['Ótima dica!'] },
    { id: 4, author: 'Lucia Mendes', photo: 'https://via.placeholder.com/40', content: 'Amo os momentos com meu pequeno! 🌟', attachments: ['https://via.placeholder.com/100'], likes: 4, comments: ['Que lindo!'] },
    { id: 5, author: 'Pedro Almeida', photo: 'https://via.placeholder.com/40', content: 'Primeiros passos hoje! 🎉', attachments: ['https://via.placeholder.com/100'], likes: 6, comments: ['Parabéns!'] },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <textarea
                className="form-control mb-2"
                placeholder="Escreva algo..."
                disabled
              />
              <input
                type="file"
                className="form-control mb-2"
                disabled
                accept="image/*,video/*,image/gif"
              />
              <button className="btn btn-primary" disabled>Postar</button>
              <div className="attachments-preview mt-2">
                <img src="https://via.placeholder.com/100" alt="Prévia" className="img-thumbnail" style={{ maxWidth: '100px', marginRight: '10px' }} />
              </div>
            </div>
          </div>
          {allPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              author={post.author}
              photo={post.photo}
              content={post.content}
              attachments={post.attachments}
              likes={post.likes}
              comments={post.comments}
              isLoggedIn={true} // Habilita interatividade
            />
          ))}
        </div>
        <div className="col-md-4">
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default ComunidadeContent;