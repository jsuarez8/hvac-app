import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./../../img/logo-2.png";
import "./Auth.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    role: "client",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/register", inputs);
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
        {/* Logo or Image Container */}
        <div className="logo-container">
          {/* Place your logo or image here */}
          <img src={Logo} alt="Company Logo" />
        </div>

        <div className="register-form">
          {/* The actual form with a class "form-style". */}
          <form className="form-style">
            {/* A container for the registration inputs and labels, possibly for grouping and styling. */}
            <div className="register-container">
              {/* Register title displayed as an H1 heading. */}
              <h1 className="title">Register</h1>
              {/* Input field for the username. */}
              <div className="register-input-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              {/* Input field for the email, for email validation of account */}
              <div className="register-input-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              {/* Input field for the password. */}
              <div className="register-input-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="register-input-group">
                <select name="role" onChange={handleChange} value={inputs.role}>
                  <option value="user">Client</option>
                  <option value="employee">Employee</option>
                  <option value="management">Management</option>
                </select>
              </div>
              {/* Registration button that users click to submit the form. */}
              <button
                className="register-button"
                type="button"
                onClick={handleSubmit}
              >
                Register
              </button>
              {/* Text providing a link to the login page for users who already have an account. */}
              <span>
                {/* Using the 'Link' component from 'react-router-dom' to navigate to the login page. */}
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
