import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        {/* Animated Tea Cup SVG */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cup Body */}
            <motion.path
              d="M30 40H70V70C70 81.0457 61.0457 90 50 90C38.9543 90 30 81.0457 30 70V40Z"
              stroke="#d97706"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Cup Handle */}
            <motion.path
              d="M70 50C70 50 85 50 85 62C85 74 70 74 70 74"
              stroke="#d97706"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            />
            {/* Steam 1 */}
            <motion.path
              d="M40 30C40 30 35 20 40 10"
              stroke="#d97706"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{ 
                y: [0, -10], 
                opacity: [0, 1, 0],
                pathLength: [0, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Steam 2 */}
            <motion.path
              d="M50 25C50 25 45 15 50 5"
              stroke="#d97706"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{ 
                y: [0, -12], 
                opacity: [0, 1, 0],
                pathLength: [0, 1]
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.4 }}
            />
            {/* Steam 3 */}
            <motion.path
              d="M60 30C60 30 55 20 60 10"
              stroke="#d97706"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{ 
                y: [0, -10], 
                opacity: [0, 1, 0],
                pathLength: [0, 1]
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.8 }}
            />
          </svg>
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
