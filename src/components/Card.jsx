import '../styles/style.css';

function Card({ image, title, description }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="valor-card text-center p-3 rounded w-100">
        <img src={image} alt={title} className="img-fluid rounded" />
        <h3 className="mt-3 fw-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;