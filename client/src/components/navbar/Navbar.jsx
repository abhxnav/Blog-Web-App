import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = false;
  return (
    <div id="navbar">
      <div className="nav-left">
        <div id="title">WriteUp</div>
      </div>
      <div className="nav-center">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/create" className="link">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="nav-list-item">
              <Link to="/logout" className="link">
                LOGOUT
              </Link>
            </li>
          )}
          <div className="separator"></div>
          <i className="nav-search-icon fa-sharp fa-solid fa-magnifying-glass"></i>
        </ul>
      </div>
      <div className="nav-right">
        {user ? (
          <img
            className="nav-avatar"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
            alt="profile"
          />
        ) : (
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="nav-list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
