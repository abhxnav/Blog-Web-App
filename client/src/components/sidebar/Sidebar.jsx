import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="profile" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugit repellendus est exercitationem? Totam
          officiis repellendus explicabo quisquam ratione deserunt esse ducimus aliquam sed.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Technology</li>
          <li className="sidebar-list-item">Business</li>
          <li className="sidebar-list-item">Finance</li>
          <li className="sidebar-list-item">Cinema</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Lifestyle</li>
          <li className="sidebar-list-item">Food</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW</span>
        <div className="sidebar-socials">
          <i className="sidebar-icon fa-brands fa-facebook"></i>
          <i className="sidebar-icon fa-brands fa-twitter"></i>
          <i className="sidebar-icon fa-brands fa-instagram"></i>
          <i className="sidebar-icon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
