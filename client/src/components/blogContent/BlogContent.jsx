import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';
import './blogContent.scss';

const BlogContent = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
    };
    fetchPost();
  }, [path]);

  const handleDelete = async () => {
    if (
      window.confirm(
        "Do you really want to delete this blog? You won't be able to recover it once deleted. Are you sure?"
      )
    ) {
      try {
        await axios.delete('/posts/' + path, {
          data: { username: user.username },
        });
        window.location.replace('/');
        alert('Blog Deleted!');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="blog-content">
      <div className="blog-content-wrapper">
        {post.photo && <img src={PF + post.photo} alt="blogContent" className="blog-content-img" />}
        <h1 className="blog-content-title">
          {post.title}
          {post.username === user?.username && (
            <div className="blog-content-edit">
              <i className="blog-content-icons fa-solid fa-pen-to-square"></i>
              <i className="blog-content-icons fa-solid fa-trash" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
        <div className="blog-content-info">
          <span className="blog-content-author">
            Author :
            <Link to={`/?user=${post.username}`} className="link" style={{ marginLeft: '5px' }}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="blog-content-date">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="blog-content-description">{post.desc}</p>
      </div>
    </div>
  );
};

export default BlogContent;
