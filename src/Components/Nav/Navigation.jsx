import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiPhone, FiX } from 'react-icons/fi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import antlerLogo from '../../assets/antler-white-no-bg.png';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="page-width navbar" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="STAG Systems home">
          <img src={antlerLogo} alt="" width="500" height="500" />
          <span className="brand-name">STAG</span>
          <span className="brand-descriptor">Systems</span>
        </Link>

        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div className={`nav-menu ${menuOpen ? 'is-open' : ''}`} id="primary-menu">
          <div className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/services/">Capabilities</NavLink>
          </div>
          <a className="nav-contact" href="tel:+61426525426">
            <FiPhone aria-hidden="true" /> 0426 525 426
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
