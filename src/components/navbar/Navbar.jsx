import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="nav-left">
        <div id="title">WriteUp</div>
      </div>
      <div className="nav-center">
        <ul className="nav-list">
          <li className="nav-list-item">HOME</li>
          <li className="nav-list-item">ABOUT</li>
          <li className="nav-list-item">CONTACT</li>
          <li className="nav-list-item">WRITE</li>
          <li className="nav-list-item">LOGOUT</li>
          <div className="separator"></div>
          <i className="nav-search-icon fa-sharp fa-solid fa-magnifying-glass"></i>
        </ul>
      </div>
      <div className="nav-right">
        <img
          className="nav-avatar"
          src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Navbar;
