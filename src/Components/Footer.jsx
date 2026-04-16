import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer id="footer" className="footer-container">
        {/* Section: Links */}
        <section className="footer-links">
          <div className="footer-inner-container">
            {/* Grid row */}
            <div className="footer-row">
              {/* Grid column */}
              <div className="footer-column">
                <h6 className="footer-heading">
                  <i className="fas fa-gem footer-icon"></i>STAG Systems
                </h6>
                <p className="footer-description">
                  Security specialists residing in the Gold Coast.
                </p>
              </div>
  
              {/* Grid column */}
              <div className="footer-column">
                <h6 className="footer-heading">Services</h6>
                <p>
                  <Link to="/services" className="footer-link">Residential</Link>
                </p>
                <p>
                  <Link to="/services" className="footer-link">Commercial</Link>
                </p>
              </div>
  
              {/* Grid column */}
              <div className="footer-column">
                <h6 className="footer-heading">Contact</h6>
                <p><i className="fas fa-home footer-icon"></i> Maudsland, QLD</p>
                <a className="footer-link" href="mailto:ga.nicholson@outlook.com">
                  <p><i className="fas fa-envelope footer-icon"></i> ga.nicholson@outlook.com</p>
                </a>
                <p><i className="fas fa-phone footer-icon"></i> 0426-525-426</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Social Media and Copyright */}
        <div className="footer-bottom">
          <section className="footer-social-media">
            <a className="social-btn" href="https://www.facebook.com/george.nicholson.7921" target="_blank" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="social-btn" href="https://www.instagram.com/xgeorgenicholson/" target="_blank" role="button">
              <i className="fab fa-instagram"></i>
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
