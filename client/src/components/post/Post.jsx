import React from 'react';
import { Link } from 'react-router-dom';
import './post.scss';

const Post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/blog/${post._id}`} className="link">
        {post.photo && <img className="post-img" src={post.photo} alt="" />}
        <div className="post-info">
          <div className="post-categories">
            {post.categories.map((c) => {
              return <span className="post-category">({c.name})</span>;
            })}
          </div>
          <span className="post-title">{post.title}</span>
          <hr />
          <p className="post-description">{post.desc}</p>
          <div className="post-date">{new Date(post.createdAt).toDateString()}</div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
