import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo123.png';

const Loader = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 20);

    const timeout = setTimeout(() => {
      finishLoading();
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#08060d]"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Background Decorative Element */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-800/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.05, 1],
            opacity: 1 
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            times: [0, 0.7, 1]
          }}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-amber-800/30 shadow-2xl shadow-amber-900/40">
            <img 
              src={logo} 
              alt="Naadan Chaya Official Logo" 
              className="w-full h-full object-cover scale-150" 
            />
          </div>
        </motion.div>

        {/* Text Animation */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-white text-2xl font-light tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Naadan Chaya
          </motion.h2>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-amber-600 text-[10px] tracking-[0.5em] uppercase mb-12"
        >
          Authentic Kerala Vibe
        </motion.p>

        {/* Counter */}
        <div className="flex items-end gap-1">
          <span className="text-white text-5xl font-thin leading-none">{counter}</span>
          <span className="text-amber-600 text-lg font-light mb-1">%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="mt-8 w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-amber-600"
            initial={{ x: '-100%' }}
            animate={{ x: `${counter - 100}%` }}
            transition={{ type: 'spring', damping: 20 }}
          />
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4 rotate-90 origin-left text-white/10">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black">Brewing Sukoon</span>
        <div className="w-20 h-px bg-white/10" />
      </div>
    </motion.div>
  );
};

export default Loader;
