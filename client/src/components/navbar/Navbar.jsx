import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './navbar.scss';

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5000/images/';

  const handleLogout = async (e) => {
    dispatch({ type: 'LOGOUT' });
    window.location.replace('/login');
  };

  return (
    <div id="navbar">
      <div className="nav-left">
        <Link to="/" className="link" id="title">
          WriteUp
        </Link>
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
            <li className="nav-list-item" onClick={handleLogout}>
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
          <Link to="/settings">
            <img
              className="nav-avatar"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : 'https://i.pinimg.com/236x/6a/87/00/6a87006a2e50cdacfd77020b8ad30868.jpg'
              }
              alt={user.username}
            />
          </Link>
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
