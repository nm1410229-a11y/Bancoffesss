import React from 'react';
import { Coffee, Award, Compass, Users, Sparkles } from 'lucide-react';
import interiorImg from '../assets/images/ban_interior_1789656146909.jpg';

interface AboutSectionProps {
  onExploreMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreMore }) => {
  return (
    <section id="about" className="py-20 bg-[#F5EFEB] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Café Interior Image & Story Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative background border frame */}
              <div className="absolute inset-0 bg-[#C5A059]/30 rounded-3xl transform -rotate-2 scale-102 filter blur-xs -z-10" />
              
              {/* Main Interior Photo */}
              <div className="relative overflow-hidden rounded-3xl border-4 border-[#FAF7F2] shadow-2xl bg-[#20120B] aspect-[4/3]">
                <img
                  id="about-interior-image"
                  src={interiorImg}
                  alt="Cozy, elegant interior of BAN Caffe Shop"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#20120B]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating caption on image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
                    The BAN Space
                  </span>
                  <p className="text-[#FAF7F2] font-serif text-lg font-medium">
                    Designed for slow mornings, inspired conversations, and peaceful breaks.
                  </p>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#2C1810] text-[#FAF7F2] p-5 rounded-2xl shadow-xl border border-[#C5A059]/40 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059] text-[#2C1810] flex items-center justify-center font-serif text-2xl font-bold shadow-xs">
                    ☕
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold text-[#FAF7F2]">Since Day One</p>
                    <p className="text-xs text-[#FAF7F2]/80">Uncompromising roasting craft</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 text-[#8C5E3C] text-xs font-semibold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Our Heritage & Philosophy
            </div>

            {/* Title */}
            <h2
              id="about-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20120B] tracking-tight leading-tight"
            >
              More Than Just Coffee
            </h2>

            {/* Description as requested */}
            <p
              id="about-description"
              className="text-base sm:text-lg text-[#4A2E1B]/90 font-normal leading-relaxed"
            >
              BAN Caffe Shop is a cozy place where great coffee, delicious food, and good moments come together.
              We carefully prepare every cup using quality ingredients and passion.
            </p>

            <p className="text-sm sm:text-base text-[#4A2E1B]/80 leading-relaxed">
              We partner directly with sustainable small-batch coffee farmers across high-altitude regions to bring
              unparalleled depth and complexity to your cup. From our custom slow-roasting profiles to our buttery,
              freshly baked artisanal pastries, every detail is treated with devotion.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#EFE6DD] text-[#8C5E3C] mt-0.5">
                  <Award className="w-5 h-5 text-[#8C5E3C]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#20120B]">Direct Trade Beans</h4>
                  <p className="text-xs text-[#4A2E1B]/75 mt-0.5">Supporting regenerative farming and ethical partnerships.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#EFE6DD] text-[#8C5E3C] mt-0.5">
                  <Coffee className="w-5 h-5 text-[#8C5E3C]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#20120B]">Artisanal Precision</h4>
                  <p className="text-xs text-[#4A2E1B]/75 mt-0.5">Calibrated water chemistry, grind geometry & extraction.</p>
                </div>
              </div>
            </div>

            {/* Café Stats / Factoids */}
            <div className="pt-4 flex items-center gap-6 sm:gap-8 border-t border-[#E8DEC8]">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#20120B]">100%</span>
                <p className="text-xs text-[#4A2E1B]/70 font-medium">Pure Arabica</p>
              </div>
              <div className="h-8 w-px bg-[#E8DEC8]" />
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#20120B]">Daily</span>
                <p className="text-xs text-[#4A2E1B]/70 font-medium">Fresh Baked Treats</p>
              </div>
              <div className="h-8 w-px bg-[#E8DEC8]" />
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#20120B]">Zero</span>
                <p className="text-xs text-[#4A2E1B]/70 font-medium">Artificial Additives</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
