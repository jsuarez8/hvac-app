import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <div className="login-form">
        <div className="title-container">
          <h1 className="company-name">BreezeBoss</h1>
        </div>
        <form className="form-style">
          <div className="login-container">
            <h1 className="title">Login</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button className="login-button">Login</button>
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
