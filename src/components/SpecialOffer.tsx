import React, { useState } from 'react';
import { Tag, Sparkles, Check, Copy, ArrowRight, Clock } from 'lucide-react';

interface SpecialOfferProps {
  onOrderNow: () => void;
  onApplyCoupon: (code: string) => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onOrderNow, onApplyCoupon }) => {
  const [copied, setCopied] = useState(false);
  const promoCode = 'BANCOFFEE20';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    onApplyCoupon(promoCode);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="special-offer" className="py-16 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#20120B] via-[#2C1810] to-[#3D2314] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#C5A059]/30">
          
          {/* Decorative background lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8C5E3C]/20 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Special Coffee Offer
              </div>

              {/* Title / Main Text strictly as requested */}
              <h2
                id="special-offer-title"
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] leading-tight"
              >
                Special Coffee Offer
              </h2>

              <p
                id="special-offer-subtitle"
                className="text-xl sm:text-2xl md:text-3xl font-medium text-[#C5A059] italic"
              >
                “Get 20% OFF your favorite coffee this week!”
              </p>

              <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-xl">
                Treat yourself to the rich aromas of our handcrafted roasts and artisanal pastries.
                Valid for both dine-in pickups and online orders across our entire favorites menu.
              </p>

              {/* Coupon interactive badge */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF7F2]/10 border border-[#C5A059]/60 font-mono text-sm tracking-wider text-[#FAF7F2]">
                  <Tag className="w-4 h-4 text-[#C5A059]" />
                  <span>CODE: <strong className="text-[#C5A059]">{promoCode}</strong></span>
                </div>

                <button
                  id="copy-promo-btn"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF7F2]/15 hover:bg-[#FAF7F2]/25 text-xs font-semibold transition-colors cursor-pointer border border-[#FAF7F2]/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Applied & Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Apply Coupon</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="p-6 rounded-2xl bg-[#FAF7F2]/10 backdrop-blur-md border border-[#FAF7F2]/20 text-center w-full max-w-xs space-y-4">
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  Limited Time Offer
                </div>

                <div className="text-center">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-[#FAF7F2]">20%</span>
                  <span className="block text-xs uppercase tracking-widest text-[#FAF7F2]/70 font-semibold mt-1">
                    Instant Savings
                  </span>
                </div>

                {/* Order Now Button as required */}
                <button
                  id="special-offer-order-now-btn"
                  onClick={() => {
                    onApplyCoupon(promoCode);
                    onOrderNow();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5A059] text-[#20120B] hover:bg-[#D4AF37] font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-[#FAF7F2]/60">
                  Applied automatically at checkout with code {promoCode}.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
