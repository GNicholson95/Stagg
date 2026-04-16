import { Link } from "react-router-dom";
import Footer from "./Footer";
import commercialCctvImage from "../assets/commercial-cctv.jpg";

const Home = () => {

  return (
  <>
    <section className="home-container">
      {/* Hero Text */}
      <div className="hero">
        <h1>
        STAG Systems. Security & Smart Homes.
        </h1>
      </div>
    </section>
    <section className="about-container">
            <div className="about-head">
            <h1>About us.</h1>
            <p> 
                At STAG Systems, we design and install high-quality security and smart home systems 
                tailored to your property. From advanced CCTV to fully integrated smart living, 
                our solutions are built to keep your home secure, connected, and easy to control — 
                with clean installs and reliable performance you can trust.
                </p>
            </div>
            <div className="about-section">
            <div className ="content">
            <div className="about-text">
                <h2 className="sub-head-1">Security made simple</h2>
                <div className="about-paragraph">
                   <p>
            Choosing the right system can feel overwhelming. At STAG Systems, we make it easy by
            helping you understand your options and installing a solution that is practical,
            reliable, and easy to manage. Our goal is to give you confidence in your security and
            convenience in your day-to-day life.
          </p>
                </div>
            </div>
            <img className="content-image" src={commercialCctvImage} alt="Security camera installation" />
            </div>
            </div>
    </section>
    <section className="home-services-preview">
      <div className="home-section-inner">
        <div className="section-copy">
          <h2>Services at a glance</h2>
          <p>
            We install practical security and smart home systems designed to be dependable, cleanly
            fitted, and easy to use every day.
          </p>
        </div>
        <div className="services-preview-grid">
          <article className="service-preview-card">
            <h3>Residential Security</h3>
            <p>
              CCTV, alarms, and remote access solutions tailored to your home and the way you live.
            </p>
          </article>
          <article className="service-preview-card">
            <h3>Smart Home Integration</h3>
            <p>
              Connected lighting, cameras, and controls that make your home simpler to manage.
            </p>
          </article>
          <article className="service-preview-card">
            <h3>Commercial CCTV</h3>
            <p>
              Reliable camera systems for offices, retail spaces, warehouses, and other business
              environments.
            </p>
          </article>
        </div>
        <div className="services-preview-action">
          <Link to="/services" className="primary-button">View all services</Link>
        </div>
      </div>
    </section>
    <section className="home-cta">
      <div className="home-section-inner cta-panel">
        <div className="section-copy">
          <h2>Ready to secure your property?</h2>
          <p>
            Whether you need a simple camera setup or a full smart security solution, we can help
            you choose the right system and install it properly.
          </p>
        </div>
        <div className="cta-actions">
          <a className="primary-button" href="mailto:ga.nicholson@outlook.com">Email us</a>
          <a className="secondary-button" href="tel:0426525426">Call 0426 525 426</a>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Home;
