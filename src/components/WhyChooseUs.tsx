import React from 'react';
import { Coffee, Sprout, Heart, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'freshly-brewed',
      icon: Coffee,
      title: 'Freshly Brewed',
      description: 'Fresh coffee prepared every day.',
      subtext: 'Small batches grounded seconds before extraction for optimum aroma and body.',
      badge: 'Daily Roast',
    },
    {
      id: 'quality-ingredients',
      icon: Sprout,
      title: 'Quality Ingredients',
      description: 'We use carefully selected ingredients.',
      subtext: 'Organic milk, authentic Madagascar vanilla, and ethically traded cacao.',
      badge: 'Pure & Clean',
    },
    {
      id: 'made-with-love',
      icon: Heart,
      title: 'Made With Love',
      description: 'Every cup is prepared with passion.',
      subtext: 'Crafted with genuine care by passionate baristas who take pride in hospitality.',
      badge: 'Handcrafted',
    },
    {
      id: 'cozy-atmosphere',
      icon: Sparkles,
      title: 'Cozy Atmosphere',
      description: 'A comfortable place to relax and enjoy.',
      subtext: 'Warm walnut timber, cozy seating nooks, and curated ambient acoustic melodies.',
      badge: 'Sanctuary',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6DD] text-[#8C5E3C] text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="text-base">☕</span>
            The BAN Experience
          </div>
          <h2
            id="why-choose-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20120B] tracking-tight"
          >
            Why Choose BAN Caffe Shop?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A2E1B]/80 font-normal">
            We are dedicated to elevating your everyday coffee ritual into a truly memorable moment.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="group relative bg-[#FFFFFF] rounded-2xl p-7 border border-[#E8DEC8]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
              >
                {/* Subtle hover accent banner */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-transparent group-hover:bg-[#C5A059] rounded-b-full transition-colors duration-300" />

                <div>
                  {/* Icon and badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F5EFEB] group-hover:bg-[#2C1810] text-[#8C5E3C] group-hover:text-[#C5A059] flex items-center justify-center transition-colors duration-300 shadow-xs border border-[#E8DEC8]">
                      <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EFE6DD]/70 text-[#8C5E3C] border border-[#E8DEC8]">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    id={`feature-title-${feature.id}`}
                    className="font-serif text-2xl font-bold text-[#20120B] group-hover:text-[#8C5E3C] transition-colors mb-2"
                  >
                    {feature.title}
                  </h3>

                  {/* Description strictly matching prompt */}
                  <p
                    id={`feature-desc-${feature.id}`}
                    className="text-sm font-semibold text-[#8C5E3C] mb-2 leading-relaxed"
                  >
                    {feature.description}
                  </p>

                  <p className="text-xs text-[#4A2E1B]/75 leading-relaxed">
                    {feature.subtext}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DEC8]/60 flex items-center justify-between text-xs text-[#8C5E3C] font-medium">
                  <span>Guaranteed Quality</span>
                  <span className="font-serif font-bold">0{idx + 1}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
