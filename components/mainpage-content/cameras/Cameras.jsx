import './Cameras.scss'
import Hero11Img from '../../../public/cameras/hero11black.webp'
import Hero11MiniImg from '../../../public/cameras/hero-mini.webp'
import Image from "next/image";

const Cameras = () => {
  return (
    <section className="cameras">
      <div className="camera__cards">
        <Image src={Hero11Img} className='cameraImg' alt='hero11' />
        <h2>Hollywood in your hand.</h2>
        <button>Shop Now</button>
      </div>
      <div className="camera__cards">
      <Image src={Hero11MiniImg}  className='cameraImg' alt='hero11' />
        <h2>Smaller. Simpler. Full performance.</h2>
        <button>Shop Now</button>
      </div>
    </section>
  );
};

export default Cameras;
