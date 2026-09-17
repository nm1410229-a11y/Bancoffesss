import React from 'react';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';
import { REVIEWS } from '../data/coffeeData';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F5EFEB] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] text-[#8C5E3C] text-xs font-semibold uppercase tracking-widest mb-3 border border-[#E8DEC8]">
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            Loved By Coffee Lovers
          </div>

          <h2
            id="reviews-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20120B] tracking-tight"
          >
            What Our Customers Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A2E1B]/80 font-normal">
            Real stories from guests who start their day with BAN Caffe Shop.
          </p>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E8DEC8]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Top: 5-Star Rating & Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#C5A059] fill-[#C5A059]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C5A059]/40" />
                </div>

                {/* Review Text */}
                <p
                  id={`review-text-${review.id}`}
                  className="text-sm sm:text-base text-[#4A2E1B]/90 italic leading-relaxed mb-6"
                >
                  “{review.comment}”
                </p>
              </div>

              {/* Customer Profile Row */}
              <div className="pt-4 border-t border-[#E8DEC8]/60 flex items-center gap-3.5">
                <div className="relative">
                  <img
                    id={`review-avatar-${review.id}`}
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A059]/40 shadow-xs"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#2C1810] rounded-full p-0.5 text-[#FAF7F2]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    id={`review-name-${review.id}`}
                    className="font-serif text-lg font-bold text-[#20120B] truncate"
                  >
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#8C5E3C] font-medium truncate">
                    {review.role}
                  </p>
                  <p className="text-[11px] text-[#4A2E1B]/60 truncate mt-0.5">
                    Favorite: {review.favorite}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
