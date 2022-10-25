import './App.css';
import { Navbar } from './components/components-index';
import { Home, Blog, Write, Settings, Login, Register } from './pages/pages-index';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const user = false;
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
