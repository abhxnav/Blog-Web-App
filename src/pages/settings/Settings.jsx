import React from 'react';
import { Sidebar } from '../../components/components-index';
import './settings.scss';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-content">
        <div className="settings-title">
          <span className="settings-update-title">Update Your Account</span>
          <span className="settings-delete-title">Delete Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-dp">
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="profile" />
            <label htmlFor="file-input">
              <i className="settings-dp-icon fa-solid fa-user"></i>
            </label>
            <input type="file" id="file-input" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Username" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
