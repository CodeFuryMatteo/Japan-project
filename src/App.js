import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FamousPlaces from './components/FamousPlaces';
import Cuisine from './components/Cuisine';
import Festivals from './components/Festivals';

function App() {
  const linkStyle = {
    color: 'red',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  };

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: "url('https://mrwallpaper.com/images/hd/red-large-circle-of-japan-flag-e42hufch7q1i8gzb.jpg')",
          backgroundSize: 'cover full',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <header style={{ marginBottom: '30px', animation: 'fadeFromTop 1.5s' }}>
          <h1 style={{ fontSize: '3.5rem', textShadow: '3px 3px 6px red' }}>Welcome to Japan</h1>
        </header>

        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/places" style={linkStyle}>Famous Places</Link>
          <Link to="/cuisine" style={linkStyle}>Cuisine</Link>
          <Link to="/festivals" style={linkStyle}>Festivals</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/places" element={<FamousPlaces />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/festivals" element={<Festivals />} />
        </Routes>

        <footer style={{ marginTop: '50px', fontSize: '0.9rem', textShadow: '1px 1px 2px red', animation: 'fadeIn 2s' }}>
          <p>&copy; 2024 Discover Japan. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;