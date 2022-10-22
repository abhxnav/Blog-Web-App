import React from 'react';
import { Header, Posts, Sidebar } from '../../components/components-index';
import './home.scss';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
