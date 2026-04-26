import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[80%] rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto gsap-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif italic">
            Ready to experience the <span className="text-tea-gold">Nadan Vibe?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Whether it's a quick kadu-chaya or a full feast of pazham pori and beef, we're waiting to serve you the best of Vazhakkad.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="tel:+917994600490" 
              className="btn bg-white text-black hover:bg-tea-gold hover:text-white flex items-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a 
              href="https://goo.gl/maps/xyz" 
              target="_blank" 
              rel="noreferrer"
              className="btn border border-white/20 hover:bg-white/10 flex items-center gap-2"
            >
              <MapPin size={20} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
