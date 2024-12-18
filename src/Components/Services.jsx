import Footer from "./Footer";
const Services = () => {
    return (
        <section className="services-container">
            <div className="services-head">
            <h1>Our services</h1>
            <p>At stagg We specialize in providing high-quality flooring solutions for both domestic and commercial spaces.  
                </p>
                <p>Our services include expert installation of carpets, luxury vinyl tiles (LVT), 
                laminate, and hardwood flooring, ensuring a perfect fit and finish every time.
                </p>
                <p>We also offer professional screeding to prepare your subfloor for a flawless result.
                </p>
                <p>Whether you're upgrading your home or outfitting a commercial property, we deliver durable and stylish flooring to suit your needs.</p>
            </div>
            <div className="services-section">
            <div className ="content">
            <div className="services-text">
                <h2 className="sub-head-1">Domestic.</h2>
                <h2 className="sub-head-2">In your home.</h2>
                <div className="services-paragraph">
                    <p>Transform your home with our premium flooring solutions that blend style, comfort, and practicality.</p>
                    <p>Whether it's the warmth and elegance of hardwood, the modern versatility of luxury vinyl tiles (LVT), or the cozy appeal of a plush carpet, our flooring options are designed to enhance your living spaces.</p>
                    <p>Not only do they elevate the aesthetic of your home, but they also improve functionality, durability, and ease of maintenance.</p>
                    <p>Let us help you create a welcoming, beautiful environment that you and your family will love for years to come.</p>
                </div>
            </div>
            <img src="src/assets/home-page.jpg" alt="" />
            </div>
            </div>

            <div className="services-section-2">
            <div className ="content">
                 <img src="src/assets/commercial-floor.jpg" alt="" />
            <div className="services-text">
                <h2 className="sub-head-1">Commercial.</h2>
                <h2 className="sub-head-2">At your business.</h2>
                <div className="services-paragraph">
                    <p>Transform your commercial space with our specialized flooring solutions, including durable carpet tiles, luxury vinyl tiles (LVT), hardwood, and commercial welded vinyl.</p>
                    <p>Our carpet tiles are perfect for high-traffic areas, offering easy maintenance and flexibility in design.</p>
                    <p>LVT provides a stylish, resilient option for any environment, while hardwood adds a touch of elegance to offices or hospitality settings.</p>
                    <p>For seamless and robust flooring, our commercial welded vinyl is ideal for high-demand areas, providing a hygienic, water-resistant solution.</p>
                    <p>Whether you're designing office spaces, retail outlets, or other commercial venues, our flooring solutions deliver lasting quality, performance, and aesthetic appeal.</p>
                </div>
            </div>
            </div>
            </div>
            <Footer/>
        </section>
    );
  };
  
  export default Services;