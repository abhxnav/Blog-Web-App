import React, { useEffect, useState } from 'react';
import { Header, Posts, Sidebar } from '../../components/components-index';
import axios from 'axios';
import './home.scss';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
