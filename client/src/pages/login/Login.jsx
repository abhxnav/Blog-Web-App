import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';
import './login.scss';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="login-input" type="text" placeholder="Username" ref={userRef} />
        <label>Password</label>
        <input className="login-input" type="password" placeholder="Password" ref={passwordRef} />
        <button className="login-button" type="submit" disabled={isFetching}>
          Login
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
