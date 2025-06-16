import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style-comunidade.css';

function PostCard({ id, author, photo, content, attachments, likes, comments, isLoggedIn }) {
  const [localLikes, setLocalLikes] = useState(likes);
  const [localComments, setLocalComments] = useState(comments);
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    setLocalLikes(likes);
    setLocalComments(comments);
  }, [likes, comments]);

  const handleLike = async () => {
    if (!isLoggedIn) return;
    try {
      const response = await axios.post(`http://localhost:8080/api/posts/${id}/like`, {}, {
        headers: { 'Authorization': localStorage.getItem('token') }
      });
      setLocalLikes(response.data.likes);
    } catch (error) {
      console.error('Erro ao curtir:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn || !commentInput.trim()) return;
    try {
      const comentario = { texto: commentInput, post: { id } };
      const response = await axios.post('http://localhost:8080/api/comentarios', comentario, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      });
      setLocalComments([...localComments, commentInput]);
      setCommentInput('');
    } catch (error) {
      console.error('Erro ao comentar:', error);
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body fixed-width-card">
        <div className="post-header">
          <img src={photo} alt={`${author} foto`} className="user-photo" />
          <span className="user-name">{author}</span>
        </div>
        <p className="card-text">{content}</p>
        {attachments.length > 0 && (
          <div className="attachments mb-2">
            {attachments.map((attach, idx) => (
              <img key={idx} src={attach} alt="Anexo" className="post-attachment img-thumbnail" />
            ))}
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default PostCard;