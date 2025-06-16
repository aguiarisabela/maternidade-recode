import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import Categories from './Categories';
import '../styles/style-comunidade.css';

function ComunidadeContent() {
  // Estado para guardar os posts do backend
  const [posts, setPosts] = useState([]);
  // Estado para o formulário de novo post
  const [novoPost, setNovoPost] = useState({ titulo: '', conteudo: '' });
  // Estado para o anexo (arquivo de imagem)
  const [anexo, setAnexo] = useState(null);

  // Função para buscar posts do backend
  const buscarPosts = async () => {
    try {
      const resposta = await axios.get('http://localhost:8080/api/posts');
      setPosts(resposta.data);
    } catch (erro) {
      console.log('Erro ao buscar posts:', erro);
    }
  };

  // Carrega os posts quando a página abre
  useEffect(() => {
    buscarPosts();
  }, []);

  // Atualiza o formulário quando o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoPost({ ...novoPost, [name]: value });
  };

  // Atualiza o anexo quando o usuário seleciona um arquivo
  const handleFileChange = (e) => {
    setAnexo(e.target.files[0]);
  };

  // Envia o novo post para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envia apenas título e conteúdo por enquanto (anexo será tratado depois)
      await axios.post('http://localhost:8080/api/posts', {
        titulo: novoPost.titulo,
        conteudo: novoPost.conteudo
      });
      setNovoPost({ titulo: '', conteudo: '' }); // Limpa o formulário
      setAnexo(null); // Limpa o anexo
      buscarPosts(); // Atualiza a lista de posts
    } catch (erro) {
      console.log('Erro ao criar post:', erro);
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
                <button type="submit" className="btn btn-primary">
                  Postar
                </button>
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
            </div>
          </div>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              author={post.autor?.nomeCompleto || 'Usuário'}
              photo={post.autor?.fotoPerfil || 'https://picsum.photos/40'}
              content={post.conteudo}
              attachments={[]} // Temporário, até implementarmos anexos
              likes={0} // Temporário, até implementarmos curtidas
              comments={[]} // Temporário, até implementarmos comentários
              isLoggedIn={true}
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