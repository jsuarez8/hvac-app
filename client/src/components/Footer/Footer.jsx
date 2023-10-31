import React from "react";
import Logo from "./../../img/logo-2.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt=""></img>
      <span>
        Made with ❤️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
