'use client'

import "./Footer.scss";

const Footer = () => {
  const footerLinksArray = [
    {
      heading: "ABOUT",
      values: [
        "Our Story","Careers","CSR","Diversity & Inclusion","Investors","Supplier Responsibility","Connect With GoPro","Distributors",
      ],
    },
    {
      heading: "SHOP",
      values: [
        "Cameras",
        "Apps",
        "Accessories",
        "Lifestyle Gear",
        "GoPro Subscription",
      ],
    },
    {
      heading: "NEWS",
      values: ["Latest News", "GoPro Tips", "World of GoPro", "Heroes"],
    },
    {
      heading: "PROGRAMS",
      values: [
        "GoPro Awards",
        "GoPro for a Cause",
        "GoPro Labs",
        "VIP",
        "Student Discount",
        "Affiliate Program",
      ],
    },
    {
      heading: "SUPPORT",
      values: [
        "GoPro Support",
        "Order Status",
        "Contact Us",
        "Warranty & Return Policy",
        "Request Returns",
        "Shipping Policy",
        "Product Software Updates",
      ],
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__middle">
        <div className="footer__middle__Xwrapper">
          {footerLinksArray.map((data, index) => {
            return (
              <div key={index} className="footer__middle__Ywrapper">
                <h3>{data.heading}</h3>
                {data.values.map((value, ind) => {
                  return (
                    <div key={ind} className="linksWrapper">
                      <li className="linksItem">{value}</li>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="footer__bottom">
        <ul className="terms__of__use">
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
          <li>Accessibility Statement</li>
          <li>Cookie Notice</li>
          <li>Imprint</li>
        </ul>
        
        
        <p> © 2023 GoPro Inc. All rights reserved. GoPro, HERO and their respective
        logos are trademarks or registered trademarks of GoPro, Inc. in the
        United States and other countries. All other trademarks are the property
        of their respective owners.</p>
      </div>
    </footer>
  );
};

export default Footer;





