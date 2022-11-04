import React from 'react';
import './blog.scss';
import { Sidebar, BlogContent } from '../../components/components-index';

const Blog = () => {
  return (
    <div className="blog">
      <BlogContent />
      {/* <Sidebar /> */}
    </div>
  );
};

export default Blog;
