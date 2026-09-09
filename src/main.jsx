import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';
const legacyPath = window.location.hash.slice(1);

if (legacyPath.startsWith('/')) {
  const basePath = basename === '/' ? '' : basename;
  const normalizedLegacyPath = legacyPath === '/services' ? '/services/' : legacyPath;
  window.history.replaceState(null, '', `${basePath}${normalizedLegacyPath}`);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
