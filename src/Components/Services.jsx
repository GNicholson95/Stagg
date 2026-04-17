import { useEffect } from "react";
import Footer from "./Footer";
import smartHomeImage from "../assets/smart-home.jpg";
import commercialCctvImage from "../assets/commercial-cctv.jpg";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="services-container">
            <div className="services-head">
              <div className="services-head-inner">
                <div className="services-head-title">
                  <span className="section-eyebrow">STAG Systems</span>
                  <h1>Our services</h1>
                </div>
                <div className="services-head-copy">
                  <p>
                    At STAG Systems, we provide professional security and smart home installations
                    designed to be reliable, easy to use, and built to last.
                  </p>
                  <p>
                    From high-definition CCTV systems to fully integrated smart home setups, we
                    deliver clean, high-quality installations tailored to your property.
                  </p>
                  <p>
                    Whether you&apos;re securing your home or upgrading your living space with smart
                    technology, we make the process simple and hassle-free.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-section">
            <div className ="content">
            <div className="services-text">
              <h2 className="sub-head-1">Residential.</h2>
                <h2 className="sub-head-2">Security & Smart Living.</h2>
                <div className="services-paragraph">
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
            <div className="service-image-frame">
            <img
              className="content-image service-image"
              src={smartHomeImage}
              alt="Smart home installation"
              width="3888"
              height="2592"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            </div>
            </div>
            </div>

            <div className="services-section-2">
            <div className ="content">
                 <div className="service-image-frame">
                 <img
                   className="content-image service-image"
                   src={commercialCctvImage}
                   alt="Commercial CCTV system"
                   width="3464"
                   height="2301"
                   loading="lazy"
                   decoding="async"
                   fetchPriority="low"
                 />
                 </div>
            <div className="services-text">
                 <h2 className="sub-head-1">Commercial.</h2>
            <h2 className="sub-head-2">Business Security Systems.</h2>
                <div className="services-paragraph">
                  <p>
                Secure your business with professional-grade CCTV systems built 
                for reliability and performance in high-demand environments.
              </p>

              <p>
                We install multi-camera systems with remote access, allowing you 
                to monitor your premises from anywhere at any time.
              </p>

              <p>
                Our solutions are ideal for retail spaces, offices, warehouses, 
                and commercial properties where security and visibility are critical.
              </p>

              <p>
                With clean installations and dependable systems, we help you 
                protect your business without disruption.
              </p>
                </div>
            </div>
            </div>
            </div>
            <Footer/>
        </section>
    );
  };
  
  export default Services;
