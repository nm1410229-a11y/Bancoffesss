/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedMenu } from './components/FeaturedMenu';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SpecialOffer } from './components/SpecialOffer';
import { CustomerReviews } from './components/CustomerReviews';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { VisitModal, OrderSuccessModal } from './components/Modals';
import { MenuItem, CartItem } from './types';
import { Check, ShoppingBag, ArrowRight } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Pre-populate with 1 favorite item so users can immediately experience the cart
    {
      item: {
        id: 'cappuccino',
        name: 'Cappuccino',
        category: 'hot',
        price: 4.75,
        description: 'Rich espresso balanced with velvety steamed whole milk and a thick, cloud-like foam dusted with dark cocoa.',
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
        tag: 'Best Seller',
        calories: '140 kcal',
        rating: 4.9,
      },
      quantity: 1,
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [orderSuccessData, setOrderSuccessData] = useState<{ orderId: string; total: number; count: number } | null>(null);
  const [couponCode, setCouponCode] = useState('BANCOFFEE20');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (item: MenuItem) => {
    setRecentlyAddedId(item.id);
    setTimeout(() => setRecentlyAddedId(null), 1200);

    setCartItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    showToast(`Added ${item.name} to your order!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => {
          if (i.item.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C1810]">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderNow={() => {
          if (cartItems.length > 0) {
            setIsCartOpen(true);
          } else {
            scrollToMenu();
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
          onOrderNow={() => {
            if (cartItems.length > 0) {
              setIsCartOpen(true);
            } else {
              scrollToMenu();
            }
          }}
        />

        {/* 3. Featured Menu ("Our Favorites") */}
        <FeaturedMenu
          onAddToCart={handleAddToCart}
          recentlyAddedId={recentlyAddedId}
        />

        {/* 4. About BAN Caffe Shop ("More Than Just Coffee") */}
        <AboutSection
          onExploreMore={() => setIsVisitModalOpen(true)}
        />

        {/* 5. Why Choose BAN Caffe Shop? */}
        <WhyChooseUs />

        {/* 6. Special Offer */}
        <SpecialOffer
          onOrderNow={() => {
            setIsCartOpen(true);
          }}
          onApplyCoupon={(code) => {
            setCouponCode(code);
            showToast(`Coupon ${code} applied for 20% OFF!`);
          }}
        />

        {/* 7. Customer Reviews ("What Our Customers Say") */}
        <CustomerReviews />

        {/* 8. Call To Action ("Your Perfect Cup Is Waiting.") */}
        <CallToAction
          onVisitShop={() => setIsVisitModalOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* Contact & Location Details */}
        <ContactSection />

      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        couponCode={couponCode}
        onApplyCoupon={(code) => setCouponCode(code)}
        onCheckoutSuccess={(summary) => setOrderSuccessData(summary)}
      />

      {/* Visit BAN Caffe Shop Modal */}
      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
        onExploreMenu={scrollToMenu}
      />

      {/* Order Placement Success Modal */}
      <OrderSuccessModal
        orderData={orderSuccessData}
        onClose={() => setOrderSuccessData(null)}
      />

      {/* Floating Action Button for Mobile Order/Cart */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#2C1810] text-[#FAF7F2] shadow-2xl border border-[#C5A059] font-bold text-sm active:scale-95"
          aria-label="Open Order Cart"
        >
          <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
          <span>Cart</span>
          {totalCartCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#8C5E3C] text-xs flex items-center justify-center font-bold">
              {totalCartCount}
            </span>
          )}
        </button>
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#20120B] text-[#FAF7F2] px-5 py-3 rounded-full shadow-2xl border border-[#C5A059]/50 flex items-center gap-3 text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-2 underline text-[#C5A059] hover:text-[#FAF7F2] font-semibold flex items-center gap-1 cursor-pointer"
          >
            View Cart <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      )}

    </div>
  );
}

