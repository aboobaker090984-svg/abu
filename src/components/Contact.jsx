import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '917994600490';

const Contact = () => (
  <section id="contact" className="section-padding bg-misty-white">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Info side */}
        <div className="gsap-fade-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit Our <span className="text-tea-gold">Shop</span>
          </h2>
          <p className="text-gray-500 mb-10 text-sm">
            Stop by for a warm cup of tea and a great conversation. We're right in the heart of Vazhakkad.
          </p>

          <div className="space-y-8">
            {[
              {
                icon: <MapPin size={22} className="text-black" />,
                bg: 'bg-black/10',
                label: 'Our Location',
                value: 'Near Police Station, Vazhakkad, Malappuram, Kerala',
              },
              {
                icon: <Clock size={22} className="text-black" />,
                bg: 'bg-black/10',
                label: 'Opening Hours',
                value: 'Every day: 11:00 AM – 11:00 PM',
              },
              {
                icon: <Phone size={22} className="text-black" />,
                bg: 'bg-black/10',
                label: 'Call Us',
                value: '+91 79946 00490',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-base mb-0.5">{item.label}</h4>
                  <p className="text-gray-500 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="btn mt-12 bg-black text-white hover:bg-gray-800 hover:-translate-y-0.5 shadow-md gap-2 text-sm px-8 py-4"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Booking form */}
        <div className="gsap-fade-right glass p-8 md:p-10 rounded-[2rem] border border-white/20">
          <h3 className="text-2xl font-bold mb-1">Event & Tea Talk Booking</h3>
          <p className="text-sm text-gray-500 mb-8">Book your group table or "Tea Talk" session in advance.</p>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const phone = e.target.phone.value;
              const date = e.target.date.value;
              const people = e.target.people.value;
              const msg = e.target.msg.value;
              const text = `Hello Nadan Chaya! I'd like to book a table.%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0APeople: ${people}%0ANote: ${msg}`;
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Your Name" required
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-tea-gold outline-none transition-colors text-sm" />
              <input name="phone" type="tel" placeholder="Phone Number" required
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-tea-gold outline-none transition-colors text-sm" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="date" type="date" required
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-tea-gold outline-none transition-colors text-sm" />
              <input name="people" type="number" placeholder="Number of People" required
                className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-tea-gold outline-none transition-colors text-sm" />
            </div>
            <textarea name="msg" rows="3" placeholder="Tell us about your event..."
              className="w-full px-5 py-4 rounded-2xl bg-white border border-gray-200 focus:border-tea-gold outline-none transition-colors text-sm" />
            <button type="submit" className="btn btn-primary w-full justify-center py-4">
              <Send size={18} />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 h-80 md:h-96 rounded-[2rem] overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          title="Nadan Chaya Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7827.305537636006!2d75.9501!3d11.2173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6456f51f5010b%3A0xc3f58e1d51a7b3!2sVazhakkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1713980000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Contact;
