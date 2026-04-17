import { Link } from "react-router-dom";
import Footer from "./Footer";
import smartHomeImage from "../assets/smart-home.jpg";
import hikvisionCertImage from "../assets/hikvision-cert.png";
import hikvisionCertPdf from "../assets/hikvision.pdf";

const Home = () => {

  return (
  <>
    <section className="home-container">
      {/* Hero Text */}
      <div className="hero">
        <h1>
          <span className="hero-kicker">STAG Systems</span>
          <span className="hero-line">Security</span>
          <span className="hero-line hero-line-accent">&amp; Smart Homes</span>
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
            <div className="feature-image-wrap">
              <img
                className="content-image feature-image"
                src={smartHomeImage}
                alt="Smart home security and automation installation"
              />
            </div>
            </div>
            </div>
    </section>
    <section className="home-accreditation">
      <div className="home-section-inner accreditation-layout">
        <div className="accreditation-copy">
          <span className="section-eyebrow">Accreditation</span>
          <h2>Hikvision certified installation expertise.</h2>
          <p>
            STAG Systems holds Hikvision certification, giving you added confidence that your
            security system is being specified and installed with recognised product knowledge and
            industry-standard best practice.
          </p>
          <p>
            For clients, that means dependable recommendations, cleaner integration, and greater
            confidence in the cameras and surveillance hardware protecting your property.
          </p>
          <div className="accreditation-actions">
            <a
              className="primary-button"
              href={hikvisionCertPdf}
              target="_blank"
              rel="noreferrer"
            >
              View certification
            </a>
          </div>
        </div>
        <div className="accreditation-card">
          <img
            className="accreditation-badge"
            src={hikvisionCertImage}
            alt="Hikvision certification badge"
          />
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
