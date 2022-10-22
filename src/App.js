import './App.css';
import { Navbar } from './components/components-index';
import { Home, Blog } from './pages/pages-index';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Blog />
    </div>
  );
};

export default App;
