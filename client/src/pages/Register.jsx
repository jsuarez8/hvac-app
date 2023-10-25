import React from "react";
import { Link } from "react-router-dom";

// Define the Register component
const Register = () => {
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
            <input type="text" placeholder="username" />
            {/* Input field for the email, for email validation of account */}
            <input type="email" placeholder="email" />
            {/* Input field for the password. */}
            <input type="password" placeholder="password" />
            {/* Registration button that users click to submit the form. */}
            <button className="register-button">Register</button>
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
