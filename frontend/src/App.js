import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Favorite from './pages/Favorite';
import Cart from './pages/Cart';

function App() {
  return (
    /*<div className="App">
      <Home/>
    </div>*/
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/favorite" element = {<Favorite />} />
            <Route path="/cart" element = {<Cart />} />
            <Route path="/shop" element = {<Shop />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/about" element = {<About />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
