import React from 'react';
import { CloudRain, Flame, Milk, Clock, Zap, Home } from 'lucide-react';
import chaiImg from '../assets/chai.png';

const features = [
  { icon: <Flame size={24} className="text-white" />, title: 'Wood Fire Prep', desc: 'Traditional wood-fired brewing gives our tea a unique smoky aroma.' },
  { icon: <CloudRain size={24} className="text-white" />, title: 'Mazha Combo 🌧️', desc: 'Hot Chaya + Pazham Pori rainy day special at just ₹25.' },
  { icon: <Milk size={24} className="text-white" />, title: 'Fresh Farm Milk', desc: '100% fresh unadulterated milk sourced daily from local farms.' },
  { icon: <Clock size={24} className="text-white" />, title: 'Evening Vibe', desc: '5 PM – 8 PM: The golden hour for nostalgic conversations & snacks.' },
  { icon: <Zap size={24} className="text-white" />, title: 'Signature Kick', desc: 'Hand-crushed ginger and cardamom added to every boil for that perfect zing.' },
  { icon: <Home size={24} className="text-white" />, title: 'Village Nostalgia', desc: 'A space designed to recreate the warmth and simplicity of a classic Chaya Peedika.' },
];

const SpecialFeatures = () => (
  <section className="section-padding bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')" }} />

    <div className="container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4 block gsap-fade-up">Special Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight gsap-fade-up">
            Why <em>Nadan Chaya</em> is <br />more than just tea.
          </h2>
          <div className="gsap-stagger-parent grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="gsap-stagger-child space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">{f.icon}</div>
                <h4 className="text-xl font-bold">{f.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gsap-scale-in relative">
          <div className="aspect-square rounded-[2rem] overflow-hidden rotate-3 shadow-2xl border-8 border-white/5 hover:rotate-0 transition-transform duration-700">
            <img
              src={chaiImg}
              alt="Evening Chaya Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SpecialFeatures;
