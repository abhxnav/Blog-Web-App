import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input className="login-input" type="text" placeholder="Email" />
        <label>Password</label>
        <input className="login-input" type="password" placeholder="Password" />
        <button className="login-button">
          <Link to="/login">Login</Link>
        </button>
        <button className="login-register-button">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
