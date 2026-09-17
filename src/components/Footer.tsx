import React from 'react';
import { Coffee, Phone, Mail, Clock, Instagram, Facebook, Twitter, MapPin, Heart, ArrowUp } from 'lucide-react';
import logoImg from '../assets/images/ban_coffee_logo_1789656120095.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#20120B] text-[#FAF7F2] pt-16 pb-12 border-t border-[#C5A059]/30 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#FAF7F2]/15">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C5A059] bg-[#2C1810]">
                <img
                  src={logoImg}
                  alt="BAN Caffe Shop Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
                  BAN Caffe Shop
                </span>
                <p className="text-xs tracking-widest uppercase text-[#C5A059] font-medium">
                  Artisanal Coffee & Roastery
                </p>
              </div>
            </div>

            <p className="text-sm text-[#FAF7F2]/80 leading-relaxed max-w-sm">
              Fresh Coffee. Great Taste. Beautiful Moments. Welcome to BAN Caffe Shop, where every cup is crafted with devotion, ethically sourced beans, and warm community spirit.
            </p>

            {/* Social Media Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#FAF7F2]/10 hover:bg-[#C5A059] hover:text-[#20120B] transition-colors flex items-center justify-center text-[#FAF7F2] border border-[#FAF7F2]/20"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#FAF7F2]/10 hover:bg-[#C5A059] hover:text-[#20120B] transition-colors flex items-center justify-center text-[#FAF7F2] border border-[#FAF7F2]/20"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-full bg-[#FAF7F2]/10 hover:bg-[#C5A059] hover:text-[#20120B] transition-colors flex items-center justify-center text-[#FAF7F2] border border-[#FAF7F2]/20"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#C5A059] tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('menu')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Opening Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#C5A059] tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm text-[#FAF7F2]/80">
              <div>
                <p className="font-semibold text-[#FAF7F2]">Monday – Friday</p>
                <p className="text-xs text-[#FAF7F2]/70">7:00 AM – 8:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#FAF7F2]">Saturday – Sunday</p>
                <p className="text-xs text-[#FAF7F2]/70">8:00 AM – 9:00 PM</p>
              </div>
              <p className="text-[11px] text-[#C5A059] pt-1">
                ★ Holiday hours may vary. Outdoor patio open daily.
              </p>
            </div>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#C5A059] tracking-wide">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[#FAF7F2]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                <span>142 Artisan Boulevard, Central District</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+15552345678" className="hover:text-[#C5A059] transition-colors">
                  +1 (555) 234-5678
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:hello@bancaffeshop.com" className="hover:text-[#C5A059] transition-colors">
                  hello@bancaffeshop.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright strictly as requested */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p id="copyright-text">
            © 2026 BAN Caffe Shop. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[#FAF7F2]/75">
              Brewed with <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" /> by BAN Caffe Shop
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#FAF7F2]/10 hover:bg-[#C5A059] hover:text-[#20120B] text-[#FAF7F2] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
