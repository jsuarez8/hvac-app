import React from "react";
import Logo from "./../../img/logo-2.png";
import "./Footer.scss";
import Map from "./../../img/map.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Company Logo"></img>
        </div>
        <div className="footer-cities">
          {/* Cities that the company can provide service in */}
          <div className="city">
            <h3>Estero</h3>
            <p>33333 South Tamiami Trail</p>
            <p>Estero, FL 33928</p>
            <p>Phone: (239)123-3456</p>
          </div>
          <div className="city">
            <h3>Fort Myers</h3>
            <p>111 Alico Center Rd., Ste. ABC</p>
            <p>Fort Myers, FL 33967</p>
            <p>Phone: (239)123-3456</p>
          </div>
          <div className="city">
            <h3>Naples</h3>
            <p>5555 Tamiami Trail North </p>
            <p>Naples, FL 34112</p>
            <p>Phone: (239)123-3456</p>
          </div>
        </div>
        <div className="footer-map">
          <iframe
            title="Company Location"
            src={Map}
            alt="Service Map"
            width="400"
            height="387"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
