import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/components-index';
import { Home, Blog, Write, Settings, Login, Register } from './pages/pages-index';
import { Context } from './context/Context';
import './App.css';

const App = () => {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={user ? <Home /> : <Register />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route exact path="/create" element={user ? <Write /> : <Register />} />
        <Route exact path="/settings" element={user ? <Settings /> : <Register />} />
        <Route exact path="/blog/:blogId" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
