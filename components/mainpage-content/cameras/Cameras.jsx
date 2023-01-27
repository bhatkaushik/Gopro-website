'use client'
import "./Cameras.scss";
import Hero11Img from "../../../public/cameras/hero11black.webp";
import Hero11MiniImg from "../../../public/cameras/hero-mini.webp";
import Image from "next/image";
import { Button } from "@mui/material";

const Cameras = () => {
  return (
    <section className="cameras">
      <div className="camera__cards">
        <Image src={Hero11Img} className="img" alt="hero11" />
        <h2>Hollywood in your hand.</h2>
        <Button variant="outlined" id="blackButton" sx={{width:300}}>Shop Now</Button>

      </div>
      <div className="camera__cards">
        <Image src={Hero11MiniImg} className="img" alt="hero11" />
        <h2>Smaller. Simpler. Full performance.</h2>
        <Button variant="outlined" id="blackButton" sx={{width:300}}>Shop Now</Button>
      </div>
    </section>
  );
};

export default Cameras;
