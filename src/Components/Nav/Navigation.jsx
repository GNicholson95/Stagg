import { useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/main-logo-2.png';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={mainLogo} alt="STAG Systems logo" className="logo-img" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><a rel="noreferrer" target="_blank" href="mailto:ga.nicholson@outlook.com" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
