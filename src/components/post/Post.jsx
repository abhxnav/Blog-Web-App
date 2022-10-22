import React from 'react';
import './post.scss';

const Post = () => {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://res.cloudinary.com/omaha-code/image/upload/ar_4:3,c_fill,dpr_1.0,e_art:quartz,g_auto,h_396,q_auto:best,t_Linkedin_official,w_1584/v1561576558/mountains-1412683_1280.png"
        alt=""
      />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Finance</span>
          <span className="post-category">Business</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet.</span>
        <hr />
        <p className="post-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem omnis saepe, dolore, enim voluptates esse
          nesciunt quaerat placeat iure, perferendis quae minus suscipit fugit voluptate adipisci. Aut quas aliquid fuga
          iusto illum, saepe culpa neque mollitia odit a, tempore in consectetur quia eaque magnam pariatur autem
          corporis labore optio, repellat maxime atque molestiae laboriosam. Amet, reprehenderit, itaque ullam vitae
          debitis aspernatur, adipisci saepe consectetur praesentium natus fuga sunt soluta.
        </p>
        <div className="post-date">1 hour ago</div>
      </div>
    </div>
  );
};

export default Post;
