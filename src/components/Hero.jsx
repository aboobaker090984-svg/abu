import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroVideo from '../assets/herosectionvideo.mp4';

const Hero = () => {
  return (
    <section className="hero-parallax-container relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Media with Advanced Parallax */}
      <div className="absolute inset-0 z-0">
        <video
          className="hero-parallax w-full h-full object-cover opacity-60"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      {/* Floating Glass Badges */}
      <div className="absolute top-[20%] right-[10%] z-20 hidden lg:block animate-bounce duration-[3s]">




      </div>

      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Subtle Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-amber-800" />
            <span className="text-amber-800 font-black uppercase tracking-[0.4em] text-[10px]">Authentic Kerala</span>
          </motion.div>

          {/* Epic Headline */}
          <h1 className="gsap-fade-up text-5xl md:text-[10rem] font-normal text-white mb-8 leading-[0.85] tracking-tighter" style={{ fontFamily: "'Fraunces', serif" }}>
            Nadan aanu,<br />
            <span className="text-amber-600 italic">ellaam</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <p className="gsap-fade-up text-lg text-gray-400 max-w-sm leading-relaxed">
              Bringing the legendary flavors of Vazhakkad to the modern world. Every cup is a masterpiece of tradition and <span className="text-white italic">sukoon</span>.
            </p>
          </div>
        </div>
      </div>


    </section >
  );
};

export default Hero;
