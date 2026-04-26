import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '917994600490';

const allItems = ['Normal Chaya', 'Masala Tea', 'Ginger Tea', 'Pazham Pori + Beef', 'Unnakkaya + Beef', 'Mango Juice', 'Dates Shake', 'Cold Coffee', 'Beef Momos'];

const getReply = (text) => {
  const q = text.toLowerCase();
  if (q.includes('menu') || q.includes('food') || q.includes('item')) return `We have: ${allItems.slice(0, 5).join(', ')} and more! 🍵 Check the Menu section above.`;
  if (q.includes('beef')) return 'Our Beef Fry and Beef Momos are customer favourites! 🔥 Both are freshly prepared with Kerala spices.';
  if (q.includes('chaya') || q.includes('tea')) return 'We serve Normal Chaya ₹15, Kadu Chaya ₹12 & Sulaimani ₹20 — all authentic! ☕';
  if (q.includes('price') || q.includes('cost') || q.includes('rate')) return 'Prices start from ₹12 (Kadu Chaya) to ₹150 (Beef Momos). Very affordable! 😊';
  if (q.includes('time') || q.includes('open') || q.includes('close')) return 'We are open every day from 11:00 AM to 11:00 PM. We look forward to seeing you! 😊';
  if (q.includes('location') || q.includes('where') || q.includes('address')) return 'We are located near the Police Station, Vazhakkad, Malappuram, Kerala 📍';
  if (q.includes('order') || q.includes('whatsapp') || q.includes('book')) return `You can order directly via WhatsApp! Click here 👉 wa.me/${WHATSAPP_NUMBER}`;
  if (q.includes('fries') || q.includes('loaded')) return 'Our Loaded Fries (₹120) are topped with cheese, beef & local sauces — evening favourite! 🍟';
  return 'Namaskaram! 🙏 I can help with menu, prices, location, or ordering. Just ask!';
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Namaskaram! 🙏 Welcome to Nadan Chaya. Ask me about menu, prices, location, or ordering!', isBot: true },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { text: getReply(input), isBot: true }]);
    }, 700);
  };

  return (
    <div className="fixed bottom-8 left-6 z-50 flex flex-col items-start">
      {/* Chat window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ height: 440 }}>
          {/* Header */}
          <div className="bg-tea-gold px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">☕</div>
              <div>
                <p className="font-bold text-white text-sm">Chaya Bot</p>
                <p className="text-[10px] text-white/70 uppercase tracking-wider">Always Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-white/70 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.isBot
                      ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                      : 'bg-tea-gold text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about menu, location..."
                className="flex-grow bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-tea-gold/30"
              />
              <button type="submit"
                className="w-10 h-10 rounded-full bg-tea-gold text-white flex items-center justify-center hover:bg-coconut-green transition-colors shrink-0">
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-tea-gold text-white flex items-center justify-center shadow-2xl hover:bg-coconut-green hover:scale-110 transition-all duration-300"
      >
        {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
      </button>
    </div>
  );
};

export default Chatbot;
