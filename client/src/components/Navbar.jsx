import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-2.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-links">
          <Link className="link" to="/?cat=about">
            <h6>ABOUT</h6>
          </Link>
          <Link className="link" to="/?cat=services">
            <h6>SERVICES</h6>
          </Link>
          <Link className="link" to="/?cat=gallery">
            <h6>GALLERY</h6>
          </Link>
          <Link className="link" to="/?cat=contact">
            <h6>CONTACT</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="profile">
            <Link className="link" to="/profile">
              Profile
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
