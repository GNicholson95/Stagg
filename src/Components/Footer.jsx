import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookF, FaGem, FaHome, FaInstagram, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
      <footer id="footer" className="footer-container" aria-label="Site footer">
        {/* Section: Links */}
        <section className="footer-links">
          <div className="footer-inner-container">
            {/* Grid row */}
            <div className="footer-row">
              {/* Grid column */}
              <div className="footer-column">
                <h2 className="footer-heading">
                  <FaGem className="footer-icon" aria-hidden="true" />STAG Systems
                </h2>
                <p className="footer-description">
                  Security and smart home specialists servicing all of the Gold Coast and
                  surrounding areas.
                </p>
              </div>
  
              {/* Grid column */}
              <div className="footer-column">
                <h2 className="footer-heading">Services</h2>
                <p>
                  <Link to="/services" className="footer-link">Residential</Link>
                </p>
                <p>
                  <Link to="/services" className="footer-link">Commercial</Link>
                </p>
              </div>
  
              {/* Grid column */}
              <div className="footer-column">
                <h2 className="footer-heading">Contact</h2>
                <p><FaHome className="footer-icon" aria-hidden="true" /> Maudsland, QLD</p>
                <a className="footer-link" href="mailto:ga.nicholson@outlook.com" aria-label="Email STAG Systems">
                  <FaEnvelope className="footer-icon" aria-hidden="true" /> ga.nicholson@outlook.com
                </a>
                <p><FaPhone className="footer-icon" aria-hidden="true" /> 0426-525-426</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Social Media and Copyright */}
        <div className="footer-bottom">
          <section className="footer-social-media">
            <a className="social-btn" href="https://www.facebook.com/george.nicholson.7921" target="_blank" rel="noreferrer" role="button" aria-label="Visit STAG Systems on Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a className="social-btn" href="https://www.instagram.com/xgeorgenicholson/" target="_blank" rel="noreferrer" role="button" aria-label="Visit STAG Systems on Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
            <div className="social-text">
              <span>Get connected with us on social networks:</span>
            </div>
          </section>
        </div>
      </footer>
    );
  };
  
  export default Footer;
