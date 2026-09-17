import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Check, Sparkles, Coffee } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  couponCode: string;
  onApplyCoupon: (code: string) => void;
  onCheckoutSuccess: (orderSummary: { orderId: string; total: number; count: number }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  couponCode,
  onApplyCoupon,
  onCheckoutSuccess,
}) => {
  const [inputCoupon, setInputCoupon] = useState(couponCode || '');
  const [couponError, setCouponError] = useState('');
  const [orderType, setOrderType] = useState<'takeaway' | 'dinein'>('takeaway');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const isCouponApplied = couponCode.toUpperCase() === 'BANCOFFEE20';
  const discount = isCouponApplied ? subtotal * 0.20 : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + tax;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCoupon.trim().toUpperCase() === 'BANCOFFEE20') {
      onApplyCoupon('BANCOFFEE20');
      setCouponError('');
    } else {
      setCouponError('Invalid code. Try BANCOFFEE20 for 20% OFF.');
    }
  };

  const handleCheckout = () => {
    const randomId = 'BAN-' + Math.floor(1000 + Math.random() * 9000);
    onCheckoutSuccess({
      orderId: randomId,
      total,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
    });
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-[#E8DEC8]">
          
          {/* Drawer Header */}
          <div className="p-6 bg-[#FAF7F2] border-b border-[#E8DEC8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2C1810] text-[#C5A059] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#20120B]">Your Order</h3>
                <p className="text-xs text-[#8C5E3C]">BAN Caffe Shop Fresh Picks</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#2C1810] hover:bg-[#EFE6DD] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#EFE6DD] flex items-center justify-center text-[#8C5E3C]">
                  <Coffee className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#20120B]">Your Cart is Empty</h4>
                <p className="text-sm text-[#4A2E1B]/70 max-w-xs">
                  Treat yourself to our signature brews and freshly baked croissants.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#2C1810] text-[#FAF7F2] text-xs font-semibold hover:bg-[#4A2E1B] transition-colors"
                >
                  Explore Our Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Selector */}
                <div className="bg-[#FFFFFF] p-1.5 rounded-xl border border-[#E8DEC8] flex">
                  <button
                    onClick={() => setOrderType('takeaway')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'bg-[#2C1810] text-[#FAF7F2]'
                        : 'text-[#4A2E1B] hover:text-[#2C1810]'
                    }`}
                  >
                    Quick Takeaway
                  </button>
                  <button
                    onClick={() => setOrderType('dinein')}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      orderType === 'dinein'
                        ? 'bg-[#2C1810] text-[#FAF7F2]'
                        : 'text-[#4A2E1B] hover:text-[#2C1810]'
                    }`}
                  >
                    Café Dine-In
                  </button>
                </div>

                {items.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="bg-[#FFFFFF] p-3.5 rounded-xl border border-[#E8DEC8] shadow-xs flex items-center gap-3.5"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-16 h-16 rounded-lg object-cover bg-[#FAF7F2] shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-serif text-base font-bold text-[#20120B] truncate">
                          {cartItem.item.name}
                        </h5>
                        <span className="text-sm font-bold text-[#8C5E3C] shrink-0">
                          ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                        </span>
                      </div>

                      <p className="text-xs text-[#4A2E1B]/70 mt-0.5">
                        ${cartItem.item.price.toFixed(2)} each
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#E8DEC8] rounded-lg px-2 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
                            className="p-1 hover:text-[#8C5E3C] transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-1 text-[#20120B]">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
                            className="p-1 hover:text-[#8C5E3C] transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(cartItem.item.id)}
                          className="text-xs text-rose-600 hover:text-rose-700 p-1 cursor-pointer flex items-center gap-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Drawer Footer / Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 bg-[#FFFFFF] border-t border-[#E8DEC8] space-y-4">
              
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={inputCoupon}
                      onChange={(e) => {
                        setInputCoupon(e.target.value);
                        setCouponError('');
                      }}
                      placeholder="Promo code (e.g. BANCOFFEE20)"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8DEC8] uppercase text-[#20120B] focus:outline-none focus:ring-1 focus:ring-[#8C5E3C]"
                    />
                    <Tag className="w-3.5 h-3.5 text-[#8C5E3C] absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-xl bg-[#2C1810] hover:bg-[#4A2E1B] text-[#FAF7F2] text-xs font-semibold cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {isCouponApplied && (
                  <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" /> 20% discount coupon applied!
                  </p>
                )}
                {couponError && (
                  <p className="text-[11px] text-rose-600">{couponError}</p>
                )}
              </form>

              {/* Price Calculation Breakdown */}
              <div className="space-y-1.5 text-xs text-[#4A2E1B]/80 pt-2 border-t border-[#E8DEC8]/60">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#20120B]">${subtotal.toFixed(2)}</span>
                </div>

                {isCouponApplied && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Special Offer (20% OFF)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#20120B] pt-2 border-t border-[#E8DEC8]">
                  <span className="font-serif text-lg">Total</span>
                  <span className="font-serif text-xl text-[#8C5E3C]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-xl bg-[#2C1810] text-[#FAF7F2] hover:bg-[#8C5E3C] font-semibold text-sm shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Complete Order (${total.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
