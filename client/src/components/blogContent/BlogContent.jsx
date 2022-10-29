import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './blogContent.scss';
import { useState } from 'react';

const BlogContent = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
    };
    fetchPost();
  }, [path]);

  return (
    <div className="blog-content">
      <div className="blog-content-wrapper">
        {post.photo && <img src={post.photo} alt="blogContent" className="blog-content-img" />}
        <h1 className="blog-content-title">
          {post.title}
          <div className="blog-content-edit">
            <i className="blog-content-icons fa-solid fa-pen-to-square"></i>
            <i className="blog-content-icons fa-solid fa-trash"></i>
          </div>
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
