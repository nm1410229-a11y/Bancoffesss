import React from 'react';
import { Coffee, MapPin, ArrowRight, Sparkles, Clock } from 'lucide-react';

interface CallToActionProps {
  onVisitShop: () => void;
  onExploreMenu: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onVisitShop, onExploreMenu }) => {
  return (
    <section id="cta" className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#2C1810] to-[#20120B] rounded-3xl p-8 sm:p-14 text-center text-[#FAF7F2] shadow-2xl border border-[#C5A059]/40 relative overflow-hidden">
          
          {/* Subtle light effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#C5A059]/20 blur-3xl rounded-full pointer-events-none" />

          {/* Coffee Icon Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FAF7F2]/10 border border-[#C5A059]/50 mb-6 text-[#C5A059] shadow-inner">
            <Coffee className="w-7 h-7" />
          </div>

          {/* Main Heading strictly matching prompt */}
          <h2
            id="cta-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] mb-4"
          >
            Your Perfect Cup Is Waiting.
          </h2>

          {/* Text strictly matching prompt */}
          <p
            id="cta-text"
            className="text-base sm:text-lg md:text-xl text-[#FAF7F2]/85 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
          >
            Visit BAN Caffe Shop and enjoy great coffee, delicious treats, and unforgettable moments.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Main button strictly named "Visit BAN Caffe Shop" */}
            <button
              id="cta-visit-btn"
              onClick={onVisitShop}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C5A059] text-[#20120B] hover:bg-[#D4AF37] font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95"
            >
              <MapPin className="w-4 h-4 text-[#20120B]" />
              <span>Visit BAN Caffe Shop</span>
            </button>

            <button
              id="cta-menu-btn"
              onClick={onExploreMenu}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-[#FAF7F2] hover:bg-[#FAF7F2]/10 font-semibold text-base transition-all duration-300 cursor-pointer border border-[#FAF7F2]/30 active:scale-95"
            >
              <span>View Favorites</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>

          {/* Quick info strip */}
          <div className="mt-10 pt-8 border-t border-[#FAF7F2]/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#FAF7F2]/75">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              Open Daily: 7:00 AM – 9:00 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              142 Artisan Boulevard
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Free High-Speed Wi-Fi & Cozy Seating
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
