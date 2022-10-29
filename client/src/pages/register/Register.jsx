import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="register-input"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input className="register-input" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" type="submit">
          Register
        </button>
        <button className="register-login-button">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
      <span className="register-error-span">{error ? 'Something went wrong!' : ''}</span>
    </div>
  );
};

export default Register;
