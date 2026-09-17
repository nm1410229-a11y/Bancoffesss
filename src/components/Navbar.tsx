import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Coffee, Phone, Sparkles } from 'lucide-react';
import logoImg from '../assets/images/ban_coffee_logo_1789656120095.jpg';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOrderNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'menu', 'about', 'why-us', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
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
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DEC8]/80 py-3'
          : 'bg-[#FAF7F2]/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            aria-label="BAN Caffe Shop Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#C5A059] shadow-sm flex items-center justify-center bg-[#2C1810]">
              <img
                src={logoImg}
                alt="BAN Caffe Shop Logo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2C1810] group-hover:text-[#8C5E3C] transition-colors flex items-center gap-1.5">
                <span>☕</span> BAN Caffe Shop
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#C5A059]">
                Artisanal Roastery
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <button
              id="nav-link-home"
              onClick={() => scrollTo('home')}
              className={`text-sm font-medium tracking-wide transition-colors py-1 cursor-pointer relative ${
                activeSection === 'home' ? 'text-[#8C5E3C] font-semibold' : 'text-[#4A2E1B] hover:text-[#8C5E3C]'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
              )}
            </button>
            <button
              id="nav-link-menu"
              onClick={() => scrollTo('menu')}
              className={`text-sm font-medium tracking-wide transition-colors py-1 cursor-pointer relative ${
                activeSection === 'menu' ? 'text-[#8C5E3C] font-semibold' : 'text-[#4A2E1B] hover:text-[#8C5E3C]'
              }`}
            >
              Menu
              {activeSection === 'menu' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
              )}
            </button>
            <button
              id="nav-link-about"
              onClick={() => scrollTo('about')}
              className={`text-sm font-medium tracking-wide transition-colors py-1 cursor-pointer relative ${
                activeSection === 'about' ? 'text-[#8C5E3C] font-semibold' : 'text-[#4A2E1B] hover:text-[#8C5E3C]'
              }`}
            >
              About Us
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
              )}
            </button>
            <button
              id="nav-link-contact"
              onClick={() => scrollTo('contact')}
              className={`text-sm font-medium tracking-wide transition-colors py-1 cursor-pointer relative ${
                activeSection === 'contact' ? 'text-[#8C5E3C] font-semibold' : 'text-[#4A2E1B] hover:text-[#8C5E3C]'
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
              )}
            </button>
          </nav>

          {/* Action Buttons: Cart + Order Now */}
          <div className="flex items-center gap-3">
            {/* Cart Drawer Trigger */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-[#2C1810] hover:bg-[#EFE6DD] transition-all cursor-pointer border border-[#E8DEC8]/60 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/40"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8C5E3C] text-[#FAF7F2] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF7F2] shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Now Button */}
            <button
              id="nav-order-now-btn"
              onClick={onOrderNow}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#2C1810] text-[#FAF7F2] hover:bg-[#4A2E1B] text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-[#C5A059]/40 active:scale-95"
            >
              <Sparkles className="w-4 h-4 mr-2 text-[#C5A059]" />
              Order Now
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#2C1810] hover:bg-[#EFE6DD] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#FAF7F2] border-b border-[#E8DEC8] px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2">
            <button
              id="mobile-link-home"
              onClick={() => scrollTo('home')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                activeSection === 'home' ? 'bg-[#EFE6DD] text-[#8C5E3C] font-semibold' : 'text-[#2C1810]'
              }`}
            >
              Home
            </button>
            <button
              id="mobile-link-menu"
              onClick={() => scrollTo('menu')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                activeSection === 'menu' ? 'bg-[#EFE6DD] text-[#8C5E3C] font-semibold' : 'text-[#2C1810]'
              }`}
            >
              Menu
            </button>
            <button
              id="mobile-link-about"
              onClick={() => scrollTo('about')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                activeSection === 'about' ? 'bg-[#EFE6DD] text-[#8C5E3C] font-semibold' : 'text-[#2C1810]'
              }`}
            >
              About Us
            </button>
            <button
              id="mobile-link-contact"
              onClick={() => scrollTo('contact')}
              className={`text-left px-3 py-2.5 rounded-lg text-base font-medium ${
                activeSection === 'contact' ? 'bg-[#EFE6DD] text-[#8C5E3C] font-semibold' : 'text-[#2C1810]'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8DEC8]/60 flex flex-col gap-2">
            <button
              id="mobile-order-now-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOrderNow();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2C1810] text-[#FAF7F2] font-semibold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
