import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";


function Footer() {
  return (
    <footer>
        <div className="socials">
            <a href="https://www.facebook.com/"><FacebookIcon fontSize="large" className="socialbtn" /></a>
            <a href="https://www.pinterest.com/"><PinterestIcon fontSize="large" className="socialbtn" /></a>
            <a href="https://www.instagram.com/"><InstagramIcon fontSize="large" className="socialbtn" /></a>
        </div>
    </footer>
  );
}

export default Footer;