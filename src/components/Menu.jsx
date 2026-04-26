import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
  '☕ Chaya': [
    { id: 1, name: 'Normal Chaya', price: 15, image: '/chaya_steel.jpg', desc: 'Classic Kerala milk tea with an authentic touch.' },
    { id: 3, name: 'Sulaimani', price: 20, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop', desc: 'Spiced lemon black tea with cardamom.' },
    { id: 14, name: 'Masala Tea', price: 25, image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=400&auto=format&fit=crop', desc: 'Spiced milk tea with ginger, cardamom and more.' },
    { id: 15, name: 'Ginger Tea', price: 20, image: 'https://images.unsplash.com/photo-1594631252845-29fc4586d56c?w=400&auto=format&fit=crop', desc: 'Refreshing milk tea infused with fresh ginger.' },
    { id: 17, name: 'Cardamom Tea', price: 20, image: 'https://images.unsplash.com/photo-1594631252845-29fc4586d56c?w=400&auto=format&fit=crop', desc: 'Classic milk tea flavored with cardamom pods.' },
  ],
  '🍽️ Nadaan': [
    { id: 18, name: 'Pazham Pori + Beef', price: 120, image: '/pazham_pori_beef.jpg', desc: 'The iconic combination of sweet banana and spicy beef.' },
    { id: 19, name: 'Unnakkaya + Beef', price: 129, image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&auto=format&fit=crop', desc: 'Stuffed plantain sweet snack paired with spicy beef.' },
  ],
  '🍔 Modern': [
    { id: 10, name: 'Loaded Fries', price: 120, image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=400&auto=format&fit=crop', desc: 'Crispy fries topped with cheese, beef & local sauces.' },
    { id: 11, name: 'Peri Peri Fries', price: 90, image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&auto=format&fit=crop', desc: 'Spicy tangy fries for the evening vibe.' },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('☕ Chaya');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="menu" 
      className="section-padding bg-black text-white relative overflow-hidden min-h-screen cursor-crosshair"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Image Portal */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: mousePos.x - 150, 
              y: mousePos.y - 200 
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            className="fixed pointer-events-none z-[100] w-[300px] h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20"
          >
            <img 
              src={hoveredItem.image} 
              alt={hoveredItem.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-6xl md:text-8xl font-normal mb-12 tracking-tighter" style={{ fontFamily: "'Fraunces', serif" }}>
                Curated <br /> <span className="text-amber-600">Menu</span>
              </h2>
              <div className="flex lg:flex-col gap-6 overflow-x-auto pb-6 lg:pb-0 no-scrollbar">
                {Object.keys(menuData).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left text-2xl md:text-4xl font-serif transition-all duration-500 ${
                      activeCategory === cat ? 'text-white' : 'text-white/20 hover:text-white/40'
                    }`}
                  >
                    {cat.split(' ')[1] || cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:w-2/3">
            <motion.div 
              layout
              className="divide-y divide-white/10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {menuData[activeCategory].map((item) => (
                    <motion.div
                      key={item.id}
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="group py-6 md:py-8 flex items-center justify-between transition-all duration-500 cursor-pointer"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-6 mb-1">
                          <span className="text-amber-600 font-bold text-[10px]">0{item.id}</span>
                          <h3 
                            className="text-2xl md:text-4xl font-normal transition-transform duration-500 group-hover:translate-x-6"
                            style={{ fontFamily: "'Fraunces', serif" }}
                          >
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-sm max-w-md ml-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {item.desc}
                        </p>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-white/40 group-hover:text-white transition-colors">
                        ₹{item.price}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Menu;
