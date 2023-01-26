import "./Hero.scss";
import HeroImage from "../../public/HeroImage.webp";
import Image from "next/image";
const Hero = () => {
  return (
    <main className="hero">
      <Image src={HeroImage} className="HeroImg" alt="Hero img" />
      <div className="hero__content">
        <h2 className="hero__heading">HERO11</h2>
        <h1 className="hero__subHeading">Kick the new year into gear. Extra 15% Off Sitewide.</h1>
        <h5>See final price in cart</h5>
        <button className="shopNow__Button shopHero__btn"> SHOP HERO11</button>
      </div>
    </main>
  );
};

export default Hero;
