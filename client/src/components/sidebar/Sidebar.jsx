import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './sidebar.scss';

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get('./categories');
      setCats(res.data);
    };
    fetchCats();
  }, []);

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
          {cats.map((c) => {
            return (
              <Link to={`/?cat=${c.name}`} className="link">
                <li className="sidebar-list-item">{c.name}</li>
              </Link>
            );
          })}
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
