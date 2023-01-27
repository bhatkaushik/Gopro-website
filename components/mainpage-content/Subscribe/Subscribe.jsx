"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import subscribeImg from "../../../public/subscription/pdp-subscription-h10-module1-1440-v2-2x.webp";
import "./Subscribe.scss";
import subscribeIcon1 from "../../../public/subscription/cloud-icon.svg";
import subscribeIcon2 from "../../../public/subscription/cloud-backup-icon-1920.svg";
import subscribeIcon3 from "../../../public/subscription/quik-icon-1920.svg";
import subscribeIcon4 from "../../../public/subscription/discount-icon-1920.svg";
import subscribeIcon5 from "../../../public/subscription/camera-icon-1920.svg";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__grid">
        <div className="subscribe__wrapper subscribe__grid__item">
          <h1>Subscribe to GoPro </h1>
          <div className="subscribe__content">
            <li className="subscribe__content__li">
              <Image src={subscribeIcon1} width={35} alt="Subscribeicon" />
            <p>  Automatically upload footage from your GoPro to the cloud</p>
            </li>
            <li className="subscribe__content__li">
              <Image src={subscribeIcon2} width={35} alt="Subscribeicon" />
             <p> Unlimited cloud backup at 100% quality <sup>1</sup></p>
            </li>
            <li className="subscribe__content__li">
              <Image src={subscribeIcon3} width={35} alt="Subscribeicon" />
            <p>  Unlimited use of the Quik app</p>
            </li>
            <li className="subscribe__content__li">
              <Image src={subscribeIcon4} width={35} alt="Subscribeicon" />
             <p> Up to 50% off at GoPro.com <sup>2</sup></p>
            </li>
            <li className="subscribe__content__li">
              <Image src={subscribeIcon5} width={35} alt="Subscribeicon" />
              <p> Guaranteed camera replacement <sup>3</sup> </p>
            </li>
          </div>
          <Button
            variant="outlined"
            sx={{ height: 50, width: 200 }}
            id="blackButton"
          >
            SUBSCRIBE NOW
          </Button>
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
