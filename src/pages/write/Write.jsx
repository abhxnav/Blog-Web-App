import React from 'react';
import './write.scss';

const Write = () => {
  return (
    <div className="write">
      <img
        className="write-img"
        src="https://res.cloudinary.com/omaha-code/image/upload/ar_4:3,c_fill,dpr_1.0,e_art:quartz,g_auto,h_396,q_auto:best,t_Linkedin_official,w_1584/v1561576558/mountains-1412683_1280.png"
        alt=""
      />
      <form className="write-form">
        <div className="write-content">
          <label htmlFor="file-input">
            <i className="write-icon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="file-input" className="write-img-upload" />
          <input type="text" placeholder="Title" className="write-title" autoFocus={true} />
        </div>
        <div className="write-content">
          <textarea palceholder="Tell the world..." type="text" className="write-title write-text"></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
