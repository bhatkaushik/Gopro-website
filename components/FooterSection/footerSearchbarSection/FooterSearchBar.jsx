"use client";
import "./FooterSearchBar.scss";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

import { Button, TextField } from "@mui/material";
const FooterSearchBar = () => {
  return (
    <div className="footer__searchbar__section">
      <div className="searchBar__left">
        <div className="searchBar__left__heading">
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
        <TextField
          id="outlined-basic"
          label="Enter Your email address"
          variant="outlined"
        />
        <Button variant="outlined" sx={{ width: 150 }} id="blackButton">
          Sign UP
        </Button>
      </div>
      <div className="socialicons">
        <Instagram />
        <Twitter />
        <Facebook />
        <YouTube />
      </div>
    </div>
  );
};

export default FooterSearchBar;
