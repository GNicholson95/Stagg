import Footer from "./Footer";
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
                <h2 className="sub-head-1">Residential.</h2>
                <h2 className="sub-head-2">Security & Smart Living.</h2>
                <div className="about-paragraph">
                   <p>
            We provide tailored CCTV and security solutions designed to protect what matters most. 
            Whether it’s a single-camera setup or a full property system, we install reliable, 
            high-performance equipment with clean, professional finishes.
          </p>

          <p>
            Beyond security, we bring homes to life with smart technology — including lighting, 
            alarms, cameras, and remote access systems — all seamlessly integrated and easy to use. 
            Our focus is simple: clean installs, dependable systems, and a premium result every time.
          </p>
                </div>
            </div>
            <img className="content-image" src="src/assets/commercial-cctv.jpg" alt="" />
            </div>
            </div>
    </section>
    <Footer/>
    </>
  );
};

export default Home;
