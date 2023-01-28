'use client'
import "./Flyer.scss";
import Image from "next/image";
import FlyerImage from "../../../public/Flyer.png";
import { Button } from "@mui/material";

const Flyer = () => {
  return (
    <section className="flyer">
      <Image src={FlyerImage} className="img" alt="Flyer" />
      <div className="flyer__content">
        <h2>FLASH SALE!</h2>
        <h1>Huge Savings On HERO11 Mini</h1>
        <p> WITH A GOPRO SUBSCRIPTION</p>
        <Button variant="outlined" id="whiteButton" sx={{width:150 ,height:45 }}> SHOP NOW</Button>

        <p> NOT ELIGIBLE FOR 15% OFF SITEWIDE SALE. ENDS ON 1/26</p>
      </div>
    </section>
  );
};

export default Flyer;
