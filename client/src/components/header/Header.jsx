import React from 'react';
import './header.scss';

const Header = () => {
  return (
    // <div className="header">
    //   <div className="header-titles">
    //     <span className="header-subtitle">React & Node</span>
    //     <span className="header-title">Blog</span>
    //   </div>
    //   <img
    //     src="https://images.unsplash.com/photo-1664648576579-3768db2102fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    //     alt="banner"
    //     className="banner"
    //   />
    // </div>
    <div className="header">
      <div className="header-titles">
        <div className="header-content">
          <span className="header-subtitle">React & Node</span>
          <span className="header-title">Blog</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
