"use client";
import "./MainNavbar.scss";
import { ArrowDropDown, Language, PermIdentity } from "@mui/icons-material";

const MainNavbar = () => {
  return (
    <nav className="MainNavbar">
      <div className="MainNavbar__left">
        EXTRA 15% OFF SITEWIDE SALE - See Final Price in Cart -
        <a> Exclusions Apply</a>
      </div>
      <div className="MainNavbar__right">
        <li>
          {" "}
          News <ArrowDropDown />
        </li>

        <li> Awards </li>
        <li>
          Support
          <ArrowDropDown />
        </li>
        <li>
          {" "}
          <PermIdentity /> Account
        </li>

        <li>
          {" "}
          <Language /> IN | EN
        </li>
      </div>
    </nav>
  );
};

export default MainNavbar;
