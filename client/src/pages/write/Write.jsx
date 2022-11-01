import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
import './write.scss';

const Write = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (error) {}
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (error) {}
  };

  return (
    <div className="write">
      {file ? (
        <img className="write-img" src={URL.createObjectURL(file)} alt="" />
      ) : (
        <img
          className="write-img"
          src="https://res.cloudinary.com/omaha-code/image/upload/ar_4:3,c_fill,dpr_1.0,e_art:quartz,g_auto,h_396,q_auto:best,t_Linkedin_official,w_1584/v1561576558/mountains-1412683_1280.png"
          alt=""
        />
      )}
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-content">
          <label htmlFor="file-input">
            <i className="write-icon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="file-input"
            className="write-img-upload"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write-title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write-content">
          <textarea
            palceholder="Tell the world..."
            className="write-text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="write-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
