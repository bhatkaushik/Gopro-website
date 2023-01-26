'use client'
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="">
          <div className="">
            <h3>Get exclusive offers and updates</h3>
          </div>
          <div className="">
            <p>
              By signing up, you agree to with GoPros{" "}
              <span> Privacy Policy </span>and <span> Terms of Use</span>.
            </p>
          </div>
        </div>
        <div className="footer__searchBar">
          <input type="email" name="" id="" />
          <button>Sign UP</button>
        </div>
        <div className="socialicons">
          <Instagram />
          <Twitter />
          <Facebook />
          <YouTube />
        </div>
      </div>
      <div className="footer__middle">
        <div className="footer__middle__Xwrapper">
          <div className="footer__middle__Ywrapper">
            <h3>About</h3>
            <div className="linksWrapper">
              <li className="linksItem">Our Story</li>
              <li className="linksItem">Careers</li>
              <li className="linksItem">CSR</li>
              <li className="linksItem">Diversity & Inclusion</li>
              <li className="linksItem">Investors</li>
              <li className="linksItem">Supplier Responsibility</li>
              <li className="linksItem">Connect With GoPro</li>
              <li className="linksItem">Distributors</li>
            </div>
          </div>
          <div className="footer__middle__Ywrapper">
          <h3>About</h3>
            <div className="linksWrapper">
              <li className="linksItem">Our Story</li>
              <li className="linksItem">Careers</li>
              <li className="linksItem">CSR</li>
              <li className="linksItem">Diversity & Inclusion</li>
              <li className="linksItem">Investors</li>
              <li className="linksItem">Supplier Responsibility</li>
              <li className="linksItem">Connect With GoPro</li>
              <li className="linksItem">Distributors</li>
            </div>
          </div>
          <div className="footer__middle__Ywrapper">
          <h3>About</h3>
            <div className="linksWrapper">
              <li className="linksItem">Our Story</li>
              <li className="linksItem">Careers</li>
              <li className="linksItem">CSR</li>
              <li className="linksItem">Diversity & Inclusion</li>
              <li className="linksItem">Investors</li>
              <li className="linksItem">Supplier Responsibility</li>
              <li className="linksItem">Connect With GoPro</li>
              <li className="linksItem">Distributors</li>
            </div>
          </div>
          <div className="footer__middle__Ywrapper">
          <h3>About</h3>
            <div className="linksWrapper">
              <li className="linksItem">Our Story</li>
              <li className="linksItem">Careers</li>
              <li className="linksItem">CSR</li>
              <li className="linksItem">Diversity & Inclusion</li>
              <li className="linksItem">Investors</li>
              <li className="linksItem">Supplier Responsibility</li>
              <li className="linksItem">Connect With GoPro</li>
              <li className="linksItem">Distributors</li>
            </div>
          </div>
          <div className="footer__middle__Ywrapper">
          <h3>About</h3>
            <div className="linksWrapper">
              <li className="linksItem">Our Story</li>
              <li className="linksItem">Careers</li>
              <li className="linksItem">CSR</li>
              <li className="linksItem">Diversity & Inclusion</li>
              <li className="linksItem">Investors</li>
              <li className="linksItem">Supplier Responsibility</li>
              <li className="linksItem">Connect With GoPro</li>
              <li className="linksItem">Distributors</li>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
      Terms Of Use
Privacy Policy
Accessibility Statement
Cookie Notice

© 2023 GoPro Inc. All rights reserved.

GoPro, HERO and their respective logos are trademarks or registered trademarks of GoPro, Inc. in the United States and other countries. All other trademarks are the property of their respective owners.
      </div>
    </footer>
  );
};

export default Footer;
