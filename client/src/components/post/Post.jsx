import React from 'react';
import { Link } from 'react-router-dom';
import './post.scss';

const Post = ({ post }) => {
  const PF = 'http://localhost:5000/images/';
  return (
    <div className="post">
      <Link to={`/blog/${post._id}`} className="link">
        <img
          className="post-img"
          src={
            post.photo
              ? PF + post.photo
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png'
          }
          alt=""
        />
        <div className="post-info">
          <div className="post-categories">
            {post.categories.map((c) => {
              return <span className="post-category">{c}</span>;
            })}
          </div>
          <span className="post-title">{post.title}</span>
          <hr />
          <p className="post-description">{post.desc}</p>
          <div className="post-date">
            {new Date(post.createdAt).toDateString()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
