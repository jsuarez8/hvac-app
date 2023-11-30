import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Navbar.scss";
import Logo from "./../../img/logo-2.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-links">
          <Link className="link" to="/">
            <h6>HOME</h6>
          </Link>
          <Link className="link" to="/about">
            <h6>ABOUT</h6>
          </Link>
          <Link className="link" to="/services">
            <h6>SERVICES</h6>
          </Link>
          <Link className="link" to="/contact">
            <h6>CONTACT</h6>
          </Link>
          <span className="profile">
            <Link className="link" to="/profile">
              <Avatar size={35} icon={<UserOutlined />} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
