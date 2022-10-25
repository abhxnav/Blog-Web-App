import React from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input className="register-input" type="text" placeholder="Username" />
        <label>Email</label>
        <input className="register-input" type="text" placeholder="Email" />
        <label>Password</label>
        <input className="register-input" type="password" placeholder="Password" />
        <button className="register-button">Register</button>
        <button className="register-login-button">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
