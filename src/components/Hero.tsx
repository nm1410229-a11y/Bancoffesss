import React from 'react';
import { Sparkles, ArrowRight, Award, Clock, Heart, Coffee } from 'lucide-react';
import heroImg from '../assets/images/ban_hero_coffee_1789656134232.jpg';

interface HeroProps {
  onExploreMenu: () => void;
  onOrderNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOrderNow }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFEB] to-[#FAF7F2]"
    >
      {/* Subtle decorative background glow and coffee bean rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#8C5E3C]/10 rounded-full blur-2xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6DD] border border-[#C5A059]/30 text-[#4A2E1B] text-xs font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              Specialty Coffee & Bakery House
            </div>

            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-[#20120B] leading-[1.1]"
            >
              Welcome to <br className="hidden sm:block" />
              <span className="text-[#8C5E3C] relative inline-block">
                BAN Caffe Shop
                <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-[#C5A059]/40 rounded-full" />
              </span>
            </h1>

            {/* Subheading */}
            <p
              id="hero-subheading"
              className="text-lg sm:text-xl md:text-2xl font-medium text-[#8C5E3C] italic tracking-wide"
            >
              “Fresh Coffee. Great Taste. Beautiful Moments.”
            </p>

            {/* Description */}
            <p
              id="hero-description"
              className="text-base sm:text-lg text-[#4A2E1B]/85 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Enjoy freshly brewed coffee, delicious treats, and a warm atmosphere at BAN Caffe Shop.
              Every roast is crafted with ethical beans, artisanal precision, and heartfelt hospitality.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2C1810] text-[#FAF7F2] hover:bg-[#4A2E1B] font-semibold text-base shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-[#C5A059]/40 active:scale-98"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-[#C5A059]" />
              </button>

              <button
                id="hero-order-now-btn"
                onClick={onOrderNow}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FAF7F2] text-[#2C1810] hover:bg-[#EFE6DD] font-semibold text-base shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border-2 border-[#8C5E3C]/30 active:scale-98"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#C5A059]" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-[#E8DEC8]/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">100%</p>
                <p className="text-xs sm:text-sm text-[#4A2E1B]/75">Arabica Single Origin</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">4.9★</p>
                <p className="text-xs sm:text-sm text-[#4A2E1B]/75">Over 1,200 Reviews</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">Fresh</p>
                <p className="text-xs sm:text-sm text-[#4A2E1B]/75">Roasted Every Morning</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Quality Image with Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-[#C5A059]/20 rounded-3xl transform rotate-2 scale-105 filter blur-xs -z-10" />
              <div className="absolute inset-0 bg-[#2C1810]/5 rounded-3xl transform -rotate-1 -z-10" />

              {/* Main Image Frame */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-[#FAF7F2] shadow-2xl bg-[#2C1810] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  id="hero-coffee-image"
                  src={heroImg}
                  alt="Freshly brewed artisanal coffee at BAN Caffe Shop"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#20120B]/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#FAF7F2]">
                  <span className="text-xs font-medium tracking-wide bg-[#20120B]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#FAF7F2]/20 flex items-center gap-1.5">
                    <Coffee className="w-3.5 h-3.5 text-[#C5A059]" />
                    Dialed In Daily at 93°C
                  </span>
                  <span className="text-xs font-semibold text-[#C5A059]">
                    BAN Signature
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-[#FAF7F2]/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-[#E8DEC8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8C5E3C] text-[#FAF7F2] flex items-center justify-center shadow-xs">
                  <Award className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2C1810]">Gold Standard</p>
                  <p className="text-[11px] text-[#4A2E1B]/70">Specialty Grade 88+</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#FAF7F2]/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-[#E8DEC8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2C1810] text-[#FAF7F2] flex items-center justify-center shadow-xs">
                  <Heart className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2C1810]">Made With Love</p>
                  <p className="text-[11px] text-[#4A2E1B]/70">Warm & Welcoming</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
