import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navigation from './Components/Nav/Navigation';
import Services from './Components/Services';
import './App.css';

const SITE_URL = 'https://gnicholson95.github.io/Stagg';

const metadata = {
  '/': {
    title: 'STAG Systems | AV, Data & CCTV Gold Coast',
    description:
      'Connected technology systems for homes and businesses across the Gold Coast. Audio visual, structured data, telecommunications and CCTV installation.',
    url: `${SITE_URL}/`,
  },
  '/services': {
    title: 'AV, Data, Telecoms & CCTV Services | STAG Systems',
    description:
      'Audio visual, data cabling, telecommunications and CCTV installation for Gold Coast homes and businesses. Explore STAG Systems capabilities.',
    url: `${SITE_URL}/services/`,
  },
};

function PageManager() {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, '') || '/';
  const current = metadata[path] ?? metadata['/'];

  useEffect(() => {
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

    document.querySelector('link[rel="canonical"]')?.setAttribute('href', current.url);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', current.url);
  }, [current]);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      target?.scrollIntoView({ block: 'start' });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.hash, location.pathname]);

  return (
    <span className="visually-hidden" aria-live="polite" aria-atomic="true">
      {current.title}
    </span>
  );
}

function App() {
  return (
    <div className="site-shell">
      <PageManager />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
