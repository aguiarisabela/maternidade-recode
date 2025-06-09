import img1 from '../assets/gravidez.jpg';
import img2 from '../assets/cuidados-gestacao.jpg';
import img3 from '../assets/maternidade.png';
import img4 from '../assets/bebe-amamentacao.png';

function ImageGallery() {
  return (
    <div className="images-container text-center py-3">
      <div className="row g-2">
        <div className="col-6 col-md-3">
          <div className="images-item">
            <img src={img1} className="img-fluid rounded shadow" alt="Imagem 1" loading="lazy" />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="images-item">
            <img src={img2} className="img-fluid rounded shadow" alt="Imagem 2" loading="lazy" />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="images-item">
            <img src={img3} className="img-fluid rounded shadow" alt="Imagem 3" loading="lazy" />
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="images-item">
            <img src={img4} className="img-fluid rounded shadow" alt="Imagem 4" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;