import React from 'react';
import chayaEntry from '../assets/chayaentry.jpeg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-misty-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-banana-leaf/5 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-clay-red/5 rounded-full -ml-48 -mb-48 blur-3xl pointer-events-none" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="gsap-fade-left relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={chayaEntry}
                alt="Nadan Chaya Story"
                className="w-full h-[480px] object-cover object-center"
              />
            </div>
          </div>

          {/* Text */}
          <div className="gsap-fade-right">
            <span className="text-black font-bold uppercase tracking-widest text-sm mb-4 block">Since 2024</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Story of <span className="text-black/70">Nadan Chaya</span>
            </h2>
            <div className="space-y-5 text-gray-600">
              <p>In the heart of Vazhakkad, Nadan Chaya began as a humble corner for friends to gather over a kadu-chaya. Today, we preserve that same spirit.</p>
              <p>From traditional stoves to iconic steel glasses — every detail is designed to take you back to the golden days of village life.</p>
            </div>

            <div className="pt-8">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-black inline-block" />
                Must-Try Nostalgic Snacks
              </h4>
              <div className="gsap-stagger-parent grid grid-cols-2 gap-3">
                {['Pazham Pori + Beef', 'Unnakaaya', 'Irachi Cake', 'Banana Pola', 'Irani Pola', 'Cheese Cake', 'Cutlet', 'Samoosa', 'Paal Pathiri', 'Crab'].map(item => (
                  <div key={item} className="gsap-stagger-child flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gray-400 inline-block shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#menu" className="btn btn-primary mt-10">
              View Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
