import './App.css';
import { Navbar } from './components/components-index';
import { Home, Blog, Write } from './pages/pages-index';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Blog /> */}
      <Write />
    </div>
  );
};

export default App;
