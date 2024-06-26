import gallery1 from '../assets/images/Gallery1.png';
import gallery2 from '../assets/images/Gallery2.png';
import gallery3 from '../assets/images/Gallery3.png';
import gallery4 from '../assets/images/Gallery4.png';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Galeria de fotos</h1>
      <div>
        <img src={gallery1} />
        <img src={gallery2} />
        <img src={gallery3} />
        <img src={gallery4} />
      </div>
    </div>
  )
}

export default Gallery;