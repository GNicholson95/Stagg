import { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="src/assets/Stagg__1_-removebg-preview.png" alt="Stagg Flooring Logo" className="logo-img" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li> {/* Use Link to handle navigation */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><a rel="noreferrer" target="_blank" href="mailto:ga.nicholson@outlook.com">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;