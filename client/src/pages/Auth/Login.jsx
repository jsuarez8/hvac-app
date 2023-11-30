import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./../../img/logo-2.png";
import "./Auth.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/login", inputs);
      navigate("/");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(inputs);

  return (
    <div className="auth">
      <div className="register-form-container">
        <div className="logo-container">
          <img src={Logo} alt="Company Logo" />
        </div>

        <div className="login-form">
          <form className="form-style">
            <div className="login-container">
              <h1 className="title">Login</h1>
              <div className="login-input-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="login-input-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <button
                className="login-button"
                type="button"
                onClick={handleSubmit}
              >
                Login
              </button>
              <span>
                Don't have an account? <Link to="/register">Register</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
