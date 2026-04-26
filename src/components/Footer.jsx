import React from 'react';
import Logo from './Logo';
import { Heart, Share2, MessageCircle, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-12 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo size={50} />
              <h2 className="text-2xl font-bold">Nadan Chaya</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing the authentic taste of Kerala's village tea shop culture to the modern world. Experience the sukoon of an authentic chaya.
            </p>
            <div className="flex gap-4">
              {/* Instagram — using SVG inline since lucide doesn't export it */}
              <a
                href="https://www.instagram.com/nadanchaya_?igsh=MWl2ZXd0OHlxb3lvMA=="
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                title="Share"
              >
                <Share2 size={20} />
              </a>

              <a
                href="https://wa.me/917994600490"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-tea-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-tea-gold transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-tea-gold transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-tea-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-tea-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Categories</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#menu" className="hover:text-tea-gold transition-colors">Tea Specials</a></li>
              <li><a href="#menu" className="hover:text-tea-gold transition-colors">Nadan Snacks</a></li>
              <li><a href="#menu" className="hover:text-tea-gold transition-colors">Loaded Fries</a></li>
              <li><a href="#menu" className="hover:text-tea-gold transition-colors">Beef Variety</a></li>
              <li><a href="#menu" className="hover:text-tea-gold transition-colors">Cool Drinks</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-6">Join our community for daily special highlights and offers.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm outline-none focus:border-tea-gold transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-tea-gold px-4 py-1.5 rounded-full text-xs font-bold hover:bg-white hover:text-tea-gold transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2024 Nadan Chaya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} style={{ color: '#a65d37', fill: '#a65d37', margin: '0 4px' }} /> in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
