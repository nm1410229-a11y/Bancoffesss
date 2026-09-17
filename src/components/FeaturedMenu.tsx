import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/coffeeData';
import { Plus, Check, Star, Flame, Sparkles } from 'lucide-react';

interface FeaturedMenuProps {
  onAddToCart: (item: MenuItem) => void;
  recentlyAddedId: string | null;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ onAddToCart, recentlyAddedId }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hot' | 'cold' | 'pastry'>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE6DD] text-[#8C5E3C] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Signature Selections
          </div>
          <h2
            id="featured-menu-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#20120B] tracking-tight"
          >
            Our Favorites
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4A2E1B]/80 font-normal">
            Carefully curated, dialled to perfection, and prepared fresh to order at BAN Caffe Shop.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist">
            <button
              id="filter-all"
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#2C1810] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#EFE6DD] text-[#4A2E1B] hover:bg-[#E4D5C7]'
              }`}
            >
              All Favorites ({MENU_ITEMS.length})
            </button>
            <button
              id="filter-hot"
              onClick={() => setActiveCategory('hot')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === 'hot'
                  ? 'bg-[#2C1810] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#EFE6DD] text-[#4A2E1B] hover:bg-[#E4D5C7]'
              }`}
            >
              Hot Classics
            </button>
            <button
              id="filter-cold"
              onClick={() => setActiveCategory('cold')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === 'cold'
                  ? 'bg-[#2C1810] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#EFE6DD] text-[#4A2E1B] hover:bg-[#E4D5C7]'
              }`}
            >
              Cold Brew & Iced
            </button>
            <button
              id="filter-pastry"
              onClick={() => setActiveCategory('pastry')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === 'pastry'
                  ? 'bg-[#2C1810] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#EFE6DD] text-[#4A2E1B] hover:bg-[#E4D5C7]'
              }`}
            >
              Fresh Pastries
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isJustAdded = recentlyAddedId === item.id;

            return (
              <div
                key={item.id}
                id={`menu-card-${item.id}`}
                className="group bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E8DEC8]/70 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* Product Image Box */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#2C1810]/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.tag && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#FAF7F2]/90 backdrop-blur-md text-[#8C5E3C] border border-[#E8DEC8] shadow-xs">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Rating Pill */}
                  <div className="absolute top-3 right-3 bg-[#20120B]/80 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 text-[#FAF7F2] text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
                    <span>{item.rating}</span>
                  </div>

                  {item.calories && (
                    <div className="absolute bottom-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-medium text-[#4A2E1B]">
                      {item.calories}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3
                        id={`menu-name-${item.id}`}
                        className="font-serif text-2xl font-bold text-[#20120B] group-hover:text-[#8C5E3C] transition-colors"
                      >
                        {item.name}
                      </h3>
                      <span
                        id={`menu-price-${item.id}`}
                        className="text-xl font-bold text-[#8C5E3C] font-serif"
                      >
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    <p
                      id={`menu-desc-${item.id}`}
                      className="text-sm text-[#4A2E1B]/80 leading-relaxed line-clamp-2"
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom: Add to Cart Button */}
                  <div className="pt-5 mt-4 border-t border-[#E8DEC8]/50 flex items-center justify-between">
                    <span className="text-xs text-[#8C5E3C] font-medium flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#C5A059]" />
                      Barista Handcrafted
                    </span>

                    <button
                      id={`add-to-cart-btn-${item.id}`}
                      onClick={() => onAddToCart(item)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                        isJustAdded
                          ? 'bg-[#2E7D32] text-white'
                          : 'bg-[#2C1810] text-[#FAF7F2] hover:bg-[#8C5E3C]'
                      }`}
                      aria-label={`Add ${item.name} to cart for $${item.price.toFixed(2)}`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-[#C5A059]" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
