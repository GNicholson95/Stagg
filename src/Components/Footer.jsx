import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import antlerLogo from '../assets/antler-white-no-bg.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-grid">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="STAG Systems home">
            <img src={antlerLogo} alt="" width="500" height="500" loading="lazy" />
            <span className="brand-name">STAG</span>
            <span className="brand-descriptor">Systems</span>
          </Link>
          <p>Connected technology systems for homes and businesses across the Gold Coast.</p>
        </div>

        <div className="footer-column">
          <h2>Capabilities</h2>
          <Link to="/services">Audio visual</Link>
          <Link to="/services">Data & networks</Link>
          <Link to="/services">Telecommunications</Link>
          <Link to="/services">CCTV & security</Link>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href="tel:0426525426"><FiPhone aria-hidden="true" /> 0426 525 426</a>
          <a href="mailto:ga.nicholson@outlook.com"><FiMail aria-hidden="true" /> ga.nicholson@outlook.com</a>
          <span><FiMapPin aria-hidden="true" /> Gold Coast, QLD</span>
        </div>
      </div>

      <div className="page-width footer-bottom">
        <span>© {new Date().getFullYear()} STAG Systems</span>
        <span>AV · Data · Telecoms · CCTV</span>
      </div>
    </footer>
  );
}

export default Footer;
