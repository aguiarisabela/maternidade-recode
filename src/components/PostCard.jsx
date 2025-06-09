function PostCard({ author, content }) {
  return (
    <div className="card mb-3">
      <div className="card-header">{author}</div>
      <div className="card-body">
        <p>{content}</p>
      </div>
      <div className="card-footer text-muted">
        <button className="btn btn-sm btn-outline-secondary" disabled>Comentar</button>
      </div>
    </div>
  );
}

export default PostCard;