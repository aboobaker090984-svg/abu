import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Afsal KK', text: 'നല്ല നാടൻ ചായയും കടിയും. വാഴക്കാട്ടെ ഏറ്റവും നല്ല സ്പോട്ട്! ❤️', rating: 5, malayalam: true },
  { name: 'Hakh VKD', text: 'ബീഫ് ഫ്രൈ ഒരു രക്ഷയുമില്ല. അടിപൊളി വൈബ്! 🔥', rating: 5, malayalam: true },
  { name: 'Rahul K.', text: 'Ivide ullaa chaya vere level aanu 🔥 Especially that authentic smell — simply nostalgic!', rating: 5 },
  { name: 'Anjali S.', text: 'Pazham pori + beef combo is a MUST try. Best evening spot in Vazhakkad!', rating: 5 },
  { name: 'Abhijit P.', text: 'I came all the way from Kozhikode just for the Irachi Cake, and wow! It didn’t disappoint. The vibe here is something else. 🌊', rating: 5 },
  { name: 'Sneha M.', text: 'Does anyone know the secret spice in their Masala Tea? It’s addictive! ☕🔥 Definitely coming back with the whole gang.', rating: 5 },
  { name: 'Fathima Z.', text: 'Finally, a place that gets the Beef + Pazham Pori combo right! The modern black and white aesthetic makes for great photos too. 📸✨', rating: 5 },
  { name: 'Muhammed R.', text: 'Kulukki Sarbath was super refreshing. Friendly staff and authentic Kerala vibe always 🙌', rating: 5 },
  { name: 'Kiran V.', text: 'The best tea spot in Malappuram! The attention to detail is amazing and the snacks are always fresh.', rating: 5 },
];

const Reviews = () => (
  <section className="section-padding bg-white">
    <div className="container">
      <div className="gsap-fade-up text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Customer <span className="text-tea-gold">Love</span> ❤️</h2>
        <p className="text-gray-500 text-sm">What our locals are saying.</p>
      </div>

      <div className="gsap-stagger-parent grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <div
            key={i}
            className="gsap-stagger-child bg-white p-8 rounded-3xl flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className={j < rev.rating ? 'text-tea-gold fill-tea-gold' : 'text-gray-300'} />
              ))}
            </div>
            <p className={`text-base italic mb-6 flex-grow ${rev.malayalam ? 'font-malayalam' : ''}`}>"{rev.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-tea-gold/20 flex items-center justify-center font-bold text-tea-gold">
                {rev.name[0]}
              </div>
              <span className="font-bold">{rev.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
