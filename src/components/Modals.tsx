import React from 'react';
import { X, MapPin, Clock, Phone, Navigation, CheckCircle2, Coffee, Sparkles } from 'lucide-react';
import interiorImg from '../assets/images/ban_interior_1789656146909.jpg';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreMenu: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose, onExploreMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        {/* Dialog Box */}
        <div className="inline-block w-full max-w-2xl my-8 p-6 sm:p-8 text-left align-middle transition-all transform bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#C5A059]/40 relative z-10 overflow-hidden">
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#2C1810] hover:bg-[#EFE6DD] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#2C1810] text-[#C5A059] flex items-center justify-center text-lg">
              ☕
            </div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20120B]">
                Visit BAN Caffe Shop
              </h3>
              <p className="text-xs text-[#8C5E3C] uppercase tracking-widest font-semibold">
                Your Neighborhood Coffee Sanctuary
              </p>
            </div>
          </div>

          {/* Interior preview photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/8] mb-6 border border-[#E8DEC8]">
            <img
              src={interiorImg}
              alt="BAN Caffe Shop seating"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
              <span className="font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                Cozy leather seating & garden courtyard
              </span>
              <span className="bg-[#FAF7F2]/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                Walk-ins Welcome
              </span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8DEC8]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E3C] uppercase mb-1">
                <MapPin className="w-3.5 h-3.5" />
                Location
              </div>
              <p className="text-sm font-semibold text-[#20120B]">142 Artisan Boulevard</p>
              <p className="text-xs text-[#4A2E1B]/75 mt-0.5">Central District • Free customer parking in rear</p>
            </div>

            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E8DEC8]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E3C] uppercase mb-1">
                <Clock className="w-3.5 h-3.5" />
                Hours
              </div>
              <p className="text-sm font-semibold text-[#20120B]">Mon – Fri: 7:00 AM – 8:00 PM</p>
              <p className="text-xs text-[#4A2E1B]/75 mt-0.5">Sat – Sun: 8:00 AM – 9:00 PM</p>
            </div>
          </div>

          <div className="bg-[#EFE6DD]/70 p-4 rounded-xl text-xs text-[#4A2E1B] space-y-1 mb-6">
            <p className="font-semibold text-[#20120B]">Amenities for Guests:</p>
            <p>• Ultra-fast optical Wi-Fi & quiet work desks with power outlets</p>
            <p>• Pet-friendly outdoor seating patio with fresh water bowls</p>
            <p>• Daily pour-over bar featuring rotating microlot origins</p>
          </div>

          {/* Action footer */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2 border-t border-[#E8DEC8]">
            <button
              onClick={() => {
                onClose();
                onExploreMenu();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#FAF7F2] border border-[#8C5E3C]/40 text-[#20120B] text-xs font-semibold hover:bg-[#EFE6DD] transition-colors"
            >
              Browse Today’s Roasts
            </button>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-[#2C1810] text-[#FAF7F2] text-xs font-semibold hover:bg-[#4A2E1B] transition-colors shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Get Directions</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

interface OrderSuccessModalProps {
  orderData: { orderId: string; total: number; count: number } | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ orderData, onClose }) => {
  if (!orderData) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="inline-block w-full max-w-md my-8 p-6 sm:p-8 text-center align-middle transition-all transform bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#C5A059]/50 relative z-10">
          
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4 border border-emerald-300">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase font-bold tracking-widest text-[#8C5E3C]">
            Order Confirmed
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#20120B] mt-1 mb-2">
            Thank You for Ordering!
          </h3>

          <p className="text-sm text-[#4A2E1B]/80 mb-6">
            Our baristas at <strong>BAN Caffe Shop</strong> are already preparing your fresh coffee with passion.
          </p>

          <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E8DEC8] text-left space-y-2 mb-6">
            <div className="flex justify-between text-xs">
              <span className="text-[#4A2E1B]/70">Order Number:</span>
              <span className="font-mono font-bold text-[#20120B]">{orderData.orderId}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#4A2E1B]/70">Items:</span>
              <span className="font-bold text-[#20120B]">{orderData.count} item(s)</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#4A2E1B]/70">Total Paid:</span>
              <span className="font-bold text-[#8C5E3C]">${orderData.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs pt-2 border-t border-[#E8DEC8]">
              <span className="text-[#4A2E1B]/70">Estimated Pickup:</span>
              <span className="font-bold text-emerald-700">In 10–12 Minutes</span>
            </div>
          </div>

          <div className="bg-[#EFE6DD] p-3 rounded-xl text-xs text-[#8C5E3C] font-medium mb-6">
            📍 Pickup Counter: 142 Artisan Boulevard (Ask for {orderData.orderId})
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#2C1810] text-[#FAF7F2] hover:bg-[#4A2E1B] font-semibold text-sm transition-colors cursor-pointer shadow-md"
          >
            Enjoy Your Moment
          </button>

        </div>

      </div>
    </div>
  );
};
