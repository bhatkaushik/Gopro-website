'use client'
import "./Hero.scss";
import HeroImage from "../../public/HeroImage.webp";
import Image from "next/image";
import { Button } from "@mui/material";
const Hero = () => {
  return (
    <main className="hero">
      <Image src={HeroImage} className="HeroImg" alt="Hero img" />
      <div className="hero__content">
        <h2 className="hero__heading">HERO11</h2>
        <h1 className="hero__subHeading">Kick the new year into gear. Extra 15% Off Sitewide.</h1>
        <h5>See final price in cart</h5>
        <Button variant="outlined" id="blackButton" sx={{width:150 ,height:45}}> SHOP HERO11</Button>
     
      </div>
    </main>
  );
};

export default Hero;
