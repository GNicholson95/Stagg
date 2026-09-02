import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navigation from './Components/Nav/Navigation';
import Services from './Components/Services';
import './App.css';

const metadata = {
  '/': {
    title: 'STAG Systems | AV, Data, Telecommunications & CCTV',
    description:
      'Connected technology systems for homes and businesses across the Gold Coast. Audio visual, structured data, telecommunications and CCTV installation.',
  },
  '/services': {
    title: 'Capabilities | STAG Systems',
    description:
      'Explore STAG Systems capabilities across audio visual, data networks, telecommunications and CCTV for residential and commercial environments.',
  },
};

function PageManager() {
  const location = useLocation();

  useEffect(() => {
    const current = metadata[location.pathname] ?? metadata['/'];
    document.title = current.title;

    const tags = [
      ['meta[name="description"]', current.description],
      ['meta[property="og:title"]', current.title],
      ['meta[property="og:description"]', current.description],
      ['meta[name="twitter:title"]', current.title],
      ['meta[name="twitter:description"]', current.description],
    ];

    tags.forEach(([selector, content]) => {
      document.querySelector(selector)?.setAttribute('content', content);
    });

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <div className="site-shell">
      <PageManager />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
