"use client";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Image from "next/image";
import GoproLogo from "../../public/Gopro logo.png";
import './Navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <Image src={GoproLogo} alt="go pro logo" />

      <ul className="navbar__itemWrapper">
        <li className="navbar__item"> Cameras</li>
        <li className="navbar__item"> Apps</li>
        <li className="navbar__item"> Accessories</li>
        <li className="navbar__item">Lifestyle Gear</li>
        <li className="navbar__item">GoPro Subscription</li>
        <li className="navbar__item"> Shop by Activity</li>
      </ul>
      <div className="navbar-search-cart">
          <Search sx={{width:50,height:35}} />
        <ShoppingCartOutlined sx={{width:50,height:35}} />
      </div>
    </div>
  );
};

export default Navbar;
