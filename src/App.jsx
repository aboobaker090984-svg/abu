import React, { useState } from 'react';
import './styles/global.css';
import { useGSAPAnimations } from './hooks/useGSAPAnimations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SukoonVibe from './components/SukoonVibe';
import Chatbot from './components/Chatbot';

function App() {
  const [theme, setTheme] = useState('light');
  useGSAPAnimations();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app">
      {/* Premium Overlays */}
      <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03] noise-overlay" />
      
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <About />
        <SukoonVibe />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
        <CTASection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
