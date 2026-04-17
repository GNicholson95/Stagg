import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './Components/Nav/Navigation';
import Home from './Components/Home'
import Services from './Components/Services'
import './App.css'

function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const metadata = {
      '/': {
        title: 'STAG Systems | Security systems and smart homes',
        description:
          'Professional CCTV, smart home integration, and Hikvision-certified security installation services from STAG Systems.',
      },
      '/services': {
        title: 'Services | STAG Systems',
        description:
          'Explore residential security, smart home integration, and commercial CCTV installation services from STAG Systems.',
      },
    };

    const current = metadata[location.pathname] ?? metadata['/'];
    document.title = current.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');

    if (descriptionTag) descriptionTag.setAttribute('content', current.description);
    if (ogTitleTag) ogTitleTag.setAttribute('content', current.title);
    if (ogDescriptionTag) ogDescriptionTag.setAttribute('content', current.description);
    if (twitterTitleTag) twitterTitleTag.setAttribute('content', current.title);
    if (twitterDescriptionTag) twitterDescriptionTag.setAttribute('content', current.description);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <SeoManager />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* Add more routes here */}
          {/* <Route path="/*" element={<p>Page not found</p>} /> error page */}
        </Routes>
      </main>
    </>
  );
}
export default App
