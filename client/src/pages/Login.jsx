import React from "react";

const Login = () => {
  return (
    <div className="auth">
      <div className="loginForm">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button className="loginButton">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
