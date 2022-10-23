import './App.css';
import { Navbar } from './components/components-index';
import { Home, Blog, Write, Settings } from './pages/pages-index';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Blog /> */}
      {/* <Write /> */}
      <Settings />
    </div>
  );
};

export default App;
