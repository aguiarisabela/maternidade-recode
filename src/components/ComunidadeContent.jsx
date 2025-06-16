import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import Categories from './Categories';
import '../styles/style-comunidade.css';

function ComunidadeContent() {
  const [posts, setPosts] = useState([]);
  const [novoPost, setNovoPost] = useState({ titulo: '', conteudo: '' });
  const [anexo, setAnexo] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/posts', {
          headers: { 'Authorization': token }
        });
        setPosts(response.data);
      } catch (error) {
        setMessage('Erro ao carregar posts: ' + (error.response?.data || error.message));
      }
    };
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoPost({ ...novoPost, [name]: value });
  };

  const handleFileChange = (e) => {
    setAnexo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Você precisa estar logado para postar.');
      return;
    }

    const data = new FormData();
    data.append('post', new Blob([JSON.stringify(novoPost)], { type: 'application/json' }));
    if (anexo) {
      data.append('imagem', anexo);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/posts', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token
        }
      });
      setPosts([response.data, ...posts]);
      setNovoPost({ titulo: '', conteudo: '' });
      setAnexo(null);
      setMessage('Post criado com sucesso!');
    } catch (error) {
      setMessage('Erro ao criar post: ' + (error.response?.data || error.message));
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="titulo"
                  value={novoPost.titulo}
                  onChange={handleChange}
                  placeholder="Título do post"
                  required
                />
                <textarea
                  className="form-control mb-2"
                  name="conteudo"
                  value={novoPost.conteudo}
                  onChange={handleChange}
                  placeholder="Escreva algo..."
                  required
                />
                <input
                  type="file"
                  className="form-control mb-2"
                  onChange={handleFileChange}
                  accept="image/*,video/*,image/gif"
                />
                <button type="submit" className="btn btn-primary">Postar</button>
                {anexo && (
                  <div className="attachments-preview mt-2">
                    <img
                      src={URL.createObjectURL(anexo)}
                      alt="Prévia"
                      className="img-thumbnail"
                      style={{ maxWidth: '100px', marginRight: '10px' }}
                    />
                  </div>
                )}
              </form>
              {message && <p className="text-center text-danger">{message}</p>}
            </div>
          </div>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              author={post.autor?.nomeCompleto || 'Usuário Desconhecido'}
              photo={post.autor?.fotoPerfil ? `http://localhost:8080${post.autor.fotoPerfil}` : 'https://picsum.photos/40'}
              content={post.conteudo}
              attachments={post.imagem ? [`http://localhost:8080${post.imagem}`] : []}
              likes={post.likes || 0}
              comments={post.comments || []}
              isLoggedIn={!!localStorage.getItem('token')}
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