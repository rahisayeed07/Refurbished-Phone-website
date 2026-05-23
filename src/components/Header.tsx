/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ShoppingBag, Menu, X, ShieldCheck, BatteryCharging, Sparkles, Trash2, Minus, Plus, CreditCard, Lock } from 'lucide-react';
import { Product, CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  updateQuantity: (productId: string, condition: string, amount: number) => void;
  removeItem: (productId: string, condition: string) => void;
  triggerCheckout: () => void;
}

export function Header({
  cart,
  cartOpen,
  setCartOpen,
  updateQuantity,
  removeItem,
  triggerCheckout
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gradingModalOpen, setGradingModalOpen] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const navLinks = [
    { label: 'Shop Apple', href: '#shop' },
    { label: 'Shop Samsung', href: '#shop' },
    { label: 'Grading Guide', href: '#grading' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faq' }
  ];

  return (
    <>
      {/* Top Banner Alert - Massive CRO driver */}
      <div className="bg-neutral-900 text-white text-xs py-2 px-4 font-sans text-center flex items-center justify-center gap-4 border-b border-neutral-800">
        <span className="flex items-center gap-1.5 font-medium text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" /> Certified 90-Point Inspected
        </span>
        <span className="hidden md:inline text-neutral-400">|</span>
        <span className="flex items-center gap-1.5 font-medium text-blue-400">
          <BatteryCharging className="w-3.5 h-3.5" /> Min. 85% Battery Health Guaranteed
        </span>
        <span className="hidden md:inline text-neutral-400">|</span>
        <span className="flex items-center gap-1.5 font-medium text-amber-400">
          <Sparkles className="w-3.5 h-3.5" /> Free Express Next-Day Shipping
        </span>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center gap-2">
                <span className="p-1.5 bg-blue-600 rounded-lg text-white font-display font-bold text-sm tracking-widest flex items-center justify-center">
                  RG
                </span>
                <span className="font-display font-extrabold text-lg tracking-tight text-neutral-900">
                  REGEN<span className="text-blue-600">CELL</span>
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-500 hover:text-blue-600 font-sans font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              
              {/* Grading quick info trigger */}
              <button
                onClick={() => setGradingModalOpen(true)}
                className="hidden lg:inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 bg-neutral-50 hover:bg-neutral-100 font-medium px-2.5 py-1.5 rounded-full transition-colors border border-neutral-200"
              >
                <Sparkles className="w-3 h-3 text-emerald-500" /> Condition Grades
              </button>

              {/* Shopping Cart Button */}
              <button
                id="cart-toggle-btn"
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 bg-neutral-50 hover:bg-neutral-100 rounded-full transition-colors border border-neutral-200 cursor-pointer"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5 text-neutral-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white font-sans text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* High Contrast Shop All CTA */}
              <a
                href="#shop"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent font-sans font-medium text-sm rounded-lg text-white bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] shadow-sm transition-all duration-150 active:scale-[0.98] cursor-pointer"
              >
                Shop Deals
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-50"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-100 transition-all duration-200 ease-in-out">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-base font-sans font-medium text-neutral-700 hover:bg-neutral-50 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="p-3">
                <a
                  href="#shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-sans font-semibold text-sm shadow-sm transition-colors"
                >
                  Shop Best Sellers
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Cart Slider / Drawer Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 overflow-hidden">
            {/* Dark backing overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
              onClick={() => setCartOpen(false)}
            />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl border-l border-neutral-100">
                  
                  {/* Cart Header */}
                  <div className="px-6 py-6 border-b border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-blue-600" />
                      <h2 className="text-lg font-display font-bold text-neutral-900">Your Basket</h2>
                      {cartCount > 0 && (
                        <span className="bg-neutral-100 text-neutral-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                          {cartCount} item{cartCount > 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="p-1 rounded-full text-neutral-400 hover:text-neutral-500 hover:bg-neutral-50 cursor-pointer"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Cart Content */}
                  <div className="flex-1 overflow-y-auto py-4 px-6">
                    {cart.length === 0 ? (
                      <div className="text-center py-16 flex flex-col items-center justify-center px-4">
                        <div className="p-4 bg-neutral-50 text-neutral-400 rounded-full mb-4">
                          <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                        </div>
                        <h3 className="font-display font-medium text-base text-neutral-800 mb-1">Your cart is empty</h3>
                        <p className="text-xs text-neutral-500 max-w-xs mb-6">
                          Check out our pristine refurbished flagship devices and claim your 12-month warrantied trade up today.
                        </p>
                        <button
                          onClick={() => {
                            setCartOpen(false);
                            window.location.href = "#shop";
                          }}
                          className="px-6 py-2.5 bg-blue-600 text-white font-sans text-xs font-semibold rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
                        >
                          Start Shopping
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {cart.map((item, index) => (
                          <div
                            key={`${item.product.id}-${item.selectedCondition}-${index}`}
                            className="flex items-start gap-4 pb-4 border-b border-neutral-100"
                          >
                            <div className="w-16 h-16 rounded-lg bg-neutral-50 p-1.5 flex items-center justify-center border border-neutral-100 flex-shrink-0 overflow-hidden">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <h4 className="font-sans font-bold text-sm text-neutral-900 leading-tight">
                                    {item.product.name}
                                  </h4>
                                  <p className="text-xs text-neutral-500 mt-0.5">
                                    {item.product.storage} • {item.product.color}
                                  </p>
                                  <div className="mt-1.5 flex items-center gap-2">
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                      Grade: {item.selectedCondition}
                                    </span>
                                    <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-0.5">
                                      <ShieldCheck className="w-3 h-3" /> Warranty OK
                                    </span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="font-sans font-bold text-sm text-neutral-900">
                                    ${item.product.price}
                                  </p>
                                  {item.product.originalPrice > item.product.price && (
                                    <p className="text-[10px] text-neutral-400 line-through">
                                      ${item.product.originalPrice}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Quantity selection and delete */}
                              <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center border border-neutral-200 rounded-md bg-neutral-50">
                                  <button
                                    onClick={() => updateQuantity(item.product.id, item.selectedCondition, -1)}
                                    className="p-1 text-neutral-500 hover:text-neutral-800"
                                  >
                                    <Minus className="w-3.5 h-3.5" />
                                  </button>
                                  <span className="px-2.5 font-sans font-semibold text-xs text-neutral-700">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.product.id, item.selectedCondition, 1)}
                                    className="p-1 text-neutral-500 hover:text-neutral-800"
                                  >
                                    <Plus className="w-3.5 h-3.5" />
                                  </button>
                                </div>

                                <button
                                  onClick={() => removeItem(item.product.id, item.selectedCondition)}
                                  className="text-neutral-400 hover:text-red-500 p-1 flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-3.5 h-3.5" /> Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cart Footer Summary */}
                  {cart.length > 0 && (
                    <div className="border-t border-neutral-100 bg-neutral-50 px-6 py-6">
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-neutral-600 text-xs">
                          <span>Subtotal</span>
                          <span>${cartTotal}</span>
                        </div>
                        <div className="flex justify-between text-neutral-600 text-xs">
                          <span>Carbon-Neutral Express Shipping</span>
                          <span className="text-emerald-600 font-semibold uppercase tracking-wider text-[10px] bg-emerald-50 px-1.5 py-0.5 rounded">
                            FREE
                          </span>
                        </div>
                        <div className="flex justify-between text-neutral-600 text-xs">
                          <span>12-Month Extended Warranty Cover</span>
                          <span className="text-blue-600 font-semibold uppercase tracking-wider text-[10px] bg-blue-50 px-1.5 py-0.5 rounded">
                            INCLUDED
                          </span>
                        </div>
                        <div className="pt-2 border-t border-neutral-200 flex justify-between items-center text-neutral-900">
                          <span className="text-sm font-bold">Estimated Total</span>
                          <span className="text-xl font-display font-extrabold text-neutral-900">${cartTotal}</span>
                        </div>
                      </div>

                      {/* CRO-focused Checkouts */}
                      <button
                        onClick={triggerCheckout}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm rounded-lg shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-center relative overflow-hidden group mb-3"
                      >
                        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Lock className="w-4 h-4 text-emerald-200" />
                        Secure Checkout Now
                      </button>

                      <div className="flex items-center justify-center gap-1 text-[10px] text-neutral-400 font-sans">
                        <CreditCard className="w-3 h-3 text-neutral-400" /> Secure 256-Bit SSL Encrypted Connection
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Grading Guide Modal Overlay */}
      {gradingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setGradingModalOpen(false)} />
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-xl w-full z-10 border border-neutral-100 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setGradingModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 p-1 hover:bg-neutral-50 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-display font-extrabold text-neutral-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" /> Inside our 3-Grade Quality Check
            </h3>
            <p className="text-xs text-neutral-500 mb-6 font-sans">
              We certify every phone cosmetically and run a 90-point diagnostic. Here are our exact levels:
            </p>

            <div className="space-y-4 font-sans">
              <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100">
                <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wider mb-2">
                  Pristine (Like New)
                </span>
                <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                  The screen and body are absolutely flawless. To the human eye, this is identical to a brand-new retail phone out of the box. Absolutely zero cosmetic blemishes.
                </p>
                <span className="text-[10px] text-blue-600 font-mono mt-1 block">Expected Battery: 95% - 100% Health</span>
              </div>

              <div className="p-3.5 bg-neutral-50/80 rounded-xl border border-neutral-200">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white uppercase tracking-wider mb-2">
                  Excellent
                </span>
                <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                  May have extremely faint, superficial hair-scratches on the frame. The screen is clear of anything recognizable during usage. High-performing value tier.
                </p>
                <span className="text-[10px] text-emerald-600 font-mono mt-1 block">Expected Battery: 88% - 94% Health</span>
              </div>

              <div className="p-3.5 bg-neutral-50/50 rounded-xl border border-neutral-200">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white uppercase tracking-wider mb-2">
                  Good (Highest Value)
                </span>
                <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                  Light cosmetic wear, faint scuffs or back chassis micro-scratches. Perfect for anyone who puts a case on immediately anyway. Fully functional hardware and screen.
                </p>
                <span className="text-[10px] text-amber-600 font-mono mt-1 block">Expected Battery: 85% Minimum Guarantee</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
              <button
                onClick={() => setGradingModalOpen(false)}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
