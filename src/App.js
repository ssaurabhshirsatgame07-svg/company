import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';

// Import service pages
import WebDevelopment from './pages/Services/WebDevelopment/WebDevelopment';
import Ecommerce from './pages/Services/Ecommerce/Ecommerce';
import MobileApps from './pages/Services/MobileApps/MobileApps';
import DigitalMarketing from './pages/Services/DigitalMarketing/DigitalMarketing';
import SEO from './pages/Services/SEO/SEO';
import SocialMedia from './pages/Services/SocialMedia/SocialMedia';

import './styles/globals.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
        <main style={{ paddingTop: '80px' }}> {/* Add this line */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/ecommerce" element={<Ecommerce />} />
              <Route path="/services/mobile-apps" element={<MobileApps />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/seo" element={<SEO />} />
              <Route path="/services/social-media" element={<SocialMedia />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;