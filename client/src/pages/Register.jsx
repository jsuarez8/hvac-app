import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Define the Register component
const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/register", inputs);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(inputs);

  return (
    // Root container with "auth" class, it might be used for general authentication styling.
    <div className="auth">
      {/* Container for the registration form with a class "register-form". */}
      <div className="register-form">
        {/* A container for the title with a class "title-container". */}
        <div className="title-container">
          {/* Company name displayed as an H1 heading. */}
          <h1 className="company-name">BreezeBoss</h1>
        </div>
        {/* The actual form with a class "form-style". */}
        <form className="form-style">
          {/* A container for the registration inputs and labels, possibly for grouping and styling. */}
          <div className="register-container">
            {/* Register title displayed as an H1 heading. */}
            <h1 className="title">Register</h1>
            {/* Input field for the username. */}
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {/* Input field for the email, for email validation of account */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            {/* Input field for the password. */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
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
  );
};

export default Register;
