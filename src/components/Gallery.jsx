import React from 'react';
import hhh from '../assets/hhh.png';
import iii from '../assets/iii.png';
import jjj from '../assets/jjj.png';
import kkk from '../assets/kkk.png';
import lll from '../assets/lll.png';
import mmm from '../assets/mmm.png';
import nnn from '../assets/nnn.png';
import ttt from '../assets/ttt.png';
import uuu from '../assets/uuu.png';
import vvv from '../assets/vvv.png';
import aaa from '../assets/aaa.jpg';
import bbb from '../assets/bbb.jpg';
import ccc from '../assets/ccc.jpg';
import ddd from '../assets/ddd.jpg';
import eee from '../assets/eee.jpg';

const Gallery = () => {
  const images = [
    { url: hhh, title: 'Nadan Moments' },
    { url: iii, title: 'Kada Vibes' },
    { url: jjj, title: 'Tea Stories' },
    { url: kkk, title: 'Evening Gatherings' },
    { url: lll, title: 'Traditional Flavors' },
    { url: mmm, title: 'Authentic Kerala' },
    { url: nnn, title: 'Our Heritage' },
    { url: ttt, title: 'Golden Hour' },
    { url: uuu, title: 'Fresh & Tasty' },
    { url: vvv, title: 'Nostalgic Bites' },
    { url: aaa, title: 'Local Delights' },
    { url: bbb, title: 'Street Treats' },
    { url: ccc, title: 'Evening Chai' },
    { url: ddd, title: 'Foodie Favorites' },
    { url: eee, title: 'Authentic Kitchen' },
  ];

  return (
    <section id="gallery" className="section-padding bg-misty-white">
      <div className="container">
        <div className="gsap-fade-up text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 italic font-serif">
            Moments at <span className="text-coconut-green">Nadan</span>
          </h2>
          <p className="text-gray-500 text-sm">A glimpse into our daily life and delicious offerings.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="gsap-scale-in relative group overflow-hidden rounded-2xl cursor-pointer h-72"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
