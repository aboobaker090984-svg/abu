import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Header = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-2 shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <Logo size={scrolled ? 42 : 52} />
          <div className="hidden sm:block">
            <p className="text-lg font-bold leading-none text-white drop-shadow">
              Nadan <span className="text-gray-300">Chaya</span>
            </p>
            <p className="text-[9px] uppercase tracking-widest text-white/60">Authentic Kerala Vibe</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-white/80 hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>

        {/* Mobile toggles */}
        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className="text-white p-1">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 mt-2">
          <div className="container py-6 flex flex-col gap-5">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white/90 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
