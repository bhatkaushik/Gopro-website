"use client";

import { CloudUploadOutlined, SellOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import subscribeImg from "../../../public/subscription/pdp-subscription-h10-module1-1440-v2-2x.webp";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__grid">
      <div className="subscribe__wrapper subscribe__grid__item">
       <h1>Subscribe to GoPro </h1>
        <div className="subscribe__content">
        
          <li className="subscribe__content__li">
            <CloudUploadOutlined /> Automatically upload footage from your GoPro
            to the cloud
          </li>
          <li className="subscribe__content__li">
            Unlimited cloud backup at 100% quality <sup>1</sup>
          </li>
          <li className="subscribe__content__li">
            Unlimited use of the Quik app
          </li>
          <li className="subscribe__content__li">
            <SellOutlined /> Up to 50% off at GoPro.com <sup>2</sup>
          </li>
          <li className="subscribe__content__li">
            Guaranteed camera replacement <sup>3</sup>
          </li>
        </div>
        {/* <button className="shopNow__Button">SUBSCRIBE NOW</button> */}
        <Button variant="outlined" id="blackButton">SUBSCRIBE NOW</Button>
        <p>
          You can easily transfer/gift your GoPro Subscription after purchase.
        </p>
      </div>
      <div className="subscribe__img subscribe__grid__item">
        <Image src={subscribeImg} className="img" alt="subscribeImg" />
      </div>

      </div>
     
    </section>
  );
};

export default Subscribe;
