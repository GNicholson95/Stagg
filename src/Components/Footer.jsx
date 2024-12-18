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
                  <i className="fas fa-gem footer-icon"></i>Stagg flooring
                </h6>
                <p className="footer-description">
                  Flooring specialists residing in the East Midlands.
                </p>
              </div>
  
              {/* Grid column */}
              <div className="footer-column">
                <h6 className="footer-heading">Services</h6>
                <p>
                  <a href="#!" className="footer-link">Domestic</a>
                </p>
                <p>
                  <a href="#!" className="footer-link">Commercial</a>
                </p>
              </div>
  
              {/* Grid column */}
              <div className="footer-column">
                <h6 className="footer-heading">Contact</h6>
                <p><i className="fas fa-home footer-icon"></i> Nottingham, England</p>
                <a className="footer-link" href="mailto:ga.nicholson@outlook.com">
                  <p><i className="fas fa-envelope footer-icon"></i> ga.nicholson@outlook.com</p>
                </a>
                <p><i className="fas fa-phone footer-icon"></i> 07947 899 655</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Social Media and Copyright */}
        <div className="footer-bottom">
          <section className="footer-social-media">
            <a className="social-btn" href="https://www.facebook.com/profile.php?id=100095382254130" target="_blank" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="social-btn" href="https://www.instagram.com/elegante_finishes/" target="_blank" role="button">
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