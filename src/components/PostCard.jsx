import React, { useState } from 'react';
import '../styles/style-comunidade.css';

function PostCard({ author, photo, content, attachments, likes, comments, isLoggedIn }) {
  const [commentInput, setCommentInput] = useState('');
  const [localComments, setLocalComments] = useState(comments);
  const [localLikes, setLocalLikes] = useState(likes);

  const handleComment = () => {
    if (commentInput.trim() && isLoggedIn) {
      setLocalComments([...localComments, commentInput]);
      setCommentInput('');
    }
  };

  const handleLike = () => {
    if (isLoggedIn) setLocalLikes(localLikes + 1);
  };

  return (
    <div className="card mb-3">
      <div className="card-body fixed-width-card">
        <div className="post-header">
          <img src={photo} alt={`${author} foto`} className="user-photo" />
          <span className="user-name">{author}</span>
        </div>
        <p className="card-text">{content}</p>
        {attachments && attachments.map((attach, idx) => (
          <img key={idx} src={attach} alt="Anexo" className="post-attachment img-thumbnail" />
        ))}
        <div className="post-actions">
          <button className="btn btn-link" onClick={handleLike} disabled={!isLoggedIn}>
            <span className="material-icons">favorite</span> {localLikes}
          </button>
          {isLoggedIn && (
            <>
              <input
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Comente..."
                className="form-control d-inline w-50"
              />
              <button className="btn btn-primary btn-sm ms-2" onClick={handleComment}>Enviar</button>
            </>
          )}
          <div className="mt-2">Comentários: {localComments.join(', ')}</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;