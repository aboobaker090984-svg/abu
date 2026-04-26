import React from 'react';

const SukoonVibe = () => (
  <section className="section-padding bg-charcoal text-white relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-30 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal/80" />

    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="gsap-fade-left space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-tea-gold/20 text-tea-gold border border-tea-gold/30 text-xs font-semibold uppercase tracking-widest">
            The Sukoon Experience
          </span>
          <h2 className="text-7xl md:text-[10rem] font-normal leading-none tracking-tighter" style={{ fontFamily: "'Fraunces', serif" }}>
            sukoon<span className="text-amber-800">.</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-md">
            A place where time slows down. Surrounded by lush greenery and warm hanging lights — find your peace with every sip.
          </p>
          <a href="#contact" className="btn btn-primary">
            Book a Tea Talk
          </a>
        </div>

        {/* Chalkboard removed as requested */}
      </div>
    </div>
  </section>
);

export default SukoonVibe;
