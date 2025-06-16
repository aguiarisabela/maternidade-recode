import banner1 from '../assets/Renascer Mulher.png';
import banner2 from '../assets/pregnant-woman-ai-generated-image.jpg';
import banner3 from '../assets/young-mom-holding-her-baby-air-blank-space.jpg';
import '../styles/style-banner.css';

function Banner() {
  return (
    <div id="bannerCarousel" className="banner carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="Bem-vinda à Comunidade de Mães" loading="lazy" />
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="Cuidados na Gravidez" loading="lazy" />
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="Primeiros Passos da Maternidade" loading="lazy" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
}

export default Banner;