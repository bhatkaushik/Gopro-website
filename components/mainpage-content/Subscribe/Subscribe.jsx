"use client";

import { CloudUploadOutlined, SellOutlined } from "@mui/icons-material";
import Image from "next/image";
import subscribeImg from "../../../public/subscription/pdp-subscription-h10-module1-1440-v2-2x.webp";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <h1>Subscribe to GoPro </h1>
      <div className="subscribe__wrapper">
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
        <div className="subscribe__img">
          <Image src={subscribeImg} className="subscribeImg" alt="subscribeImg" />
        </div>
      </div>
      <button>SUBSCRIBE NOW</button>

      <p>
        You can easily transfer/gift your GoPro Subscription after purchase.
      </p>
    </section>
  );
};

export default Subscribe;
