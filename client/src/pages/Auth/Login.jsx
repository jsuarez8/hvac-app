import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await Login(inputs);
      navigate("/");
      console.log(res.data);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="auth">
      <div className="login-form">
        <div className="title-container">
          <h1 className="company-name">BreezeBoss</h1>
        </div>
        <form className="form-style">
          <div className="login-container">
            <h1 className="title">Login</h1>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            {err & err}
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
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
