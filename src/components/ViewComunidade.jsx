import React from 'react';
import PostCard from './PostCard';
import { useNavigate } from 'react-router-dom';
import '../styles/style-comunidade.css';
import Header from './Header';
import Footer from './Footer';

function ViewComunidade() {
  const navigate = useNavigate();
  const previewPosts = [
    { id: 1, author: 'Maria Souza', photo: 'https://picsum.photos/40', content: 'Ser mãe é um desafio, mas também a melhor experiência da minha vida! 💖', attachments: ['https://picsum.photos/100'], likes: 5, comments: ['Legal!'] },
      { id: 2, author: 'Ana Pereira', photo: 'https://picsum.photos/40', content: 'O primeiro ano do meu bebê foi difícil, mas com apoio tudo ficou melhor. Obrigada por essa comunidade! 🤱', attachments: ['https://picsum.photos/100'], likes: 3, comments: ['Top!'] },
      { id: 3, author: 'João Silva', photo: 'https://picsum.photos/40', content: 'Dica: durma quando o bebê dormir! 😴', attachments: ['https://picsum.photos/100'], likes: 2, comments: ['Ótima dica!'] },
      { id: 4, author: 'Lucia Mendes', photo: 'https://picsum.photos/40', content: 'Amo os momentos com meu pequeno! 🌟', attachments: ['https://picsum.photos/100'], likes: 4, comments: ['Que lindo!'] },
      { id: 5, author: 'Pedro Almeida', photo: 'https://picsum.photos/40', content: 'Primeiros passos hoje! 🎉', attachments: ['https://picsum.photos/100'], likes: 6, comments: ['Parabéns!'] },
  ];

  return (
    <>
    <Header/>
    <div className="container mt-4 d-flex flex-column align-items-center">
      <div className="text-center mb-4">
        <h3>Veja alguns posts da nossa comunidade!</h3>
      </div>
      <div className="col-md-8 d-flex flex-column align-items-center">
        {previewPosts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            author={post.author}
            photo={post.photo}
            content={post.content}
            attachments={post.attachments}
            likes={post.likes}
            comments={post.comments}
            
          />
        ))}
        <button className="btn btn-primary mt-3" onClick={() => navigate('/login')}>
          Faça login para ver mais e participar
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ViewComunidade;