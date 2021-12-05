import React from "react";
import FacebookIcon from "./assets/facebook.png";
import InstaIcon from "./assets/insta.png";
import LinkedinIcon from "./assets/linkedin.png";
import TwitterIcon from "./assets/twitter.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-social-icons">
          <ul>
            <li>
              <img src={FacebookIcon} />
            </li>
            <li>
              <img src={TwitterIcon} />
            </li>
            <li>
              <img src={InstaIcon} />
            </li>
            <li>
              <img src={LinkedinIcon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
