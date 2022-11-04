import React, { useEffect, useState } from 'react';
import { Header, Posts, Sidebar } from '../../components/components-index';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './home.scss';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        {/* <Sidebar /> */}
      </div>
    </>
  );
};

export default Home;
