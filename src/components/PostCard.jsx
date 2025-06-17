import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style-comunidade.css';

// Props adicionais da master: canEdit, onEdit, onDelete
function PostCard({ id, author, photo, content, attachments, likes, comments, isLoggedIn, canEdit, onEdit, onDelete }) {
  const [localLikes, setLocalLikes] = useState(likes);
  const [localComments, setLocalComments] = useState(comments);
  const [commentInput, setCommentInput] = useState('');
  // Estados para o modo de edição, vindos da master
  const [editMode, setEditMode] = useState(false);
  const [editContent, setEditContent] = useState(content);

  useEffect(() => {
    setLocalLikes(likes);
    setLocalComments(comments);
    // Remover o debug log se não for mais necessário
    // console.log('PostCard props:', { id, author, photo, content, attachments, likes, comments });
  }, [likes, comments, content]); // Adicione 'content' como dependência para o editContent iniciar corretamente

  const handleLike = async () => {
    if (!isLoggedIn) return; // A lógica da master removeu a verificação de token aqui, apenas isLoggedIn.
    try {
      // Endpoint e headers da master
      const response = await axios.post(`http://localhost:8080/posts/${id}/like`);
      setLocalLikes(response.data.likes);
    } catch (error) {
      console.error('Erro ao curtir:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return; // A master removeu a verificação isLoggedIn aqui
    try {
      // Endpoint e dados do comentário da master
      const response = await axios.post(`http://localhost:8080/posts/${id}/comments`, { texto: commentInput });
      // Assumindo que a resposta do backend pode não retornar o objeto completo do comentário,
      // mas se retornar, você pode fazer: setLocalComments([...localComments, response.data]);
      setLocalComments([...localComments, commentInput]); // Manter assim se o backend só retorna sucesso
      setCommentInput('');
    } catch (error) {
      console.error('Erro ao comentar:', error);
    }
  };

  // Funções de edição da master
  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(id, { conteudo: editContent });
    setEditMode(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body fixed-width-card">
        <div className="post-header">
          <img src={photo} alt={`${author} foto`} className="user-photo" />
          <span className="user-name">{author}</span>
        </div>
        {/* Lógica condicional para modo de edição da master */}
        {editMode ? (
          <form onSubmit={handleEditSubmit}>
            <textarea
              className="form-control mb-2"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-sm me-2">Salvar</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditMode(false)}>Cancelar</button>
          </form>
        ) : (
          <>
            <p className="card-text">{content}</p>
            {attachments.length > 0 && (
              <div className="attachments mb-2">
                {attachments.map((attach, idx) => (
                  <img key={idx} src={attach} alt="Anexo" className="post-attachment img-thumbnail" style={{ maxWidth: '100px', marginRight: '10px' }} />
                ))}
              </div>
            )}
          </>
        )}
        <div className="post-actions">
          <button className="btn btn-link" onClick={handleLike} disabled={!isLoggedIn}>
            <span className="material-icons">favorite</span> {localLikes}
          </button>
          {isLoggedIn && (
            <form onSubmit={handleCommentSubmit} className="d-flex">
              <input
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Comente..."
                className="form-control d-inline w-50"
              />
              <button type="submit" className="btn btn-primary btn-sm ms-2">Enviar</button>
            </form>
          )}
          {localComments.length > 0 && (
            <div className="mt-2">Comentários: {localComments.join(', ')}</div>
          )}
          {/* Botões de edição/exclusão da master */}
          {canEdit && (
            <div className="mt-2">
              <button className="btn btn-warning btn-sm me-2" onClick={() => setEditMode(true)}>Editar</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}>Excluir</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostCard;