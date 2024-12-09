import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Nav/Navigation';
import Home from './Components/Home'
import Services from './Components/Services'
import './App.css'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes here */}
        {/* <Route path="/*" element={<p>Page not found</p>} /> error page */}
      </Routes>
    </>
  );
}
export default App
