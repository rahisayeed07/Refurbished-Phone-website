/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { X, Lock, ShieldCheck, CreditCard, ChevronRight, CheckCircle2, Leaf, Heart } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  cart: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function CheckoutModal({
  cart,
  isOpen,
  onClose,
  onSuccess
}: CheckoutModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // Steps: 1: Contact, 2: Shipping, 3: Payment, 4: Confirmed Success
  
  // Checkout Form States
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalOffsetCo2 = cart.reduce((sum, item) => sum + (item.quantity * 80), 0);
  const randomOrderNum = Math.floor(100000 + Math.random() * 900000);

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault();
    if (step === 3) {
      setStep(4);
    } else if (step === 1 || step === 2) {
      setStep((prev) => (prev + 1) as any);
    }
  };

  const handleFinish = () => {
    onSuccess(); // Triggers parent clear cart, etc.
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Visual Backing dark translucent layer */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={step === 4 ? handleFinish : onClose} />

      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-xl w-full z-10 border border-neutral-100 relative max-h-[95vh] overflow-y-auto">
        
        {/* Absolute Exit button */}
        {step !== 4 && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 p-1 hover:bg-neutral-50 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* SECURE HEADER CHECKPOINT */}
        {step !== 4 && (
          <div className="mb-6 flex items-center justify-between border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-display font-black text-neutral-900 uppercase tracking-widest">
                SSL Secured Checkout
              </h3>
            </div>
            {/* Steps indicator progress */}
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-sans font-bold">
              <span className={step === 1 ? 'text-blue-600' : 'text-neutral-400'}>1. Contact</span>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
              <span className={step === 2 ? 'text-blue-600' : 'text-neutral-400'}>2. Delivery</span>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
              <span className={step === 3 ? 'text-blue-600' : 'text-neutral-400'}>3. Payment</span>
            </div>
          </div>
        )}

        {step === 4 ? (
          /* STEP 4: ORDER SUCCESS CELEBRATION CARD */
          <div className="text-center py-6 space-y-6 font-sans">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                Transaction Confirmed
              </span>
              <h3 className="text-2xl font-display font-extrabold text-neutral-900 mt-2">
                Thank you for your order!
              </h3>
              <p className="text-xs text-neutral-400">
                A confirmation receipt with your full 12-Month Guarantee Seal and delivery tracker has been emailed to you.
              </p>
            </div>

            {/* Simulated Receipt Details */}
            <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 text-left space-y-3 max-w-sm mx-auto">
              <div className="flex justify-between text-xs text-neutral-500 border-b border-neutral-150 pb-2">
                <span>Order Reference:</span>
                <strong className="text-neutral-900 font-mono">#RC-{randomOrderNum}</strong>
              </div>
              <div className="flex justify-between text-xs text-neutral-500 pt-0.5">
                <span>Shipping Destination:</span>
                <strong className="text-neutral-900 font-sans">{firstName} {lastName}</strong>
              </div>
              <div className="flex justify-between text-xs text-neutral-500">
                <span>Method:</span>
                <span className="text-emerald-600 font-bold">Express Air (Next-Day)</span>
              </div>
              <div className="flex justify-between text-xs pt-2 border-t border-neutral-200">
                <span className="font-bold text-neutral-800">Total Charged:</span>
                <span className="font-display font-black text-neutral-900">${totalAmount}</span>
              </div>
            </div>

            {/* Green Badge for ecological impact */}
            <div className="bg-emerald-900 text-white rounded-xl p-4 flex items-center gap-3.5 max-w-sm mx-auto shadow-sm">
              <Leaf className="w-8 h-8 text-emerald-400 shrink-0" />
              <div className="text-left">
                <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-300 block">Carbon Diverted Safeguard</span>
                <span className="text-sm font-bold block">Sparing {totalOffsetCo2}kg of Raw CO₂</span>
                <span className="text-[10px] text-emerald-200 leading-snug block">By choosing refurbished, you spared mining demand for raw precious elements.</span>
              </div>
            </div>

            <div className="pt-4 max-w-sm mx-auto">
              <button
                onClick={handleFinish}
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-bold leading-normal tracking-wide transition-all cursor-pointer"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        ) : (
          /* STEPS 1-3: SECURE ACCORDING CHECKOUT FORM FLOW */
          <form onSubmit={handleNextStep} className="space-y-6 font-sans">
            
            {step === 1 && (
              /* CONTACT DETAILS SCREEN */
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Contact Information
                </h4>
                <div className="space-y-1">
                  <label className="text-xs text-neutral-500">Email Address (For transaction confirmations)</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full p-3 bg-neutral-50 hover:bg-neutral-50/70 text-xs text-neutral-800 border border-neutral-200 focus:border-blue-500 rounded-lg outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-neutral-500">Phone Number (For express shipping text alerts)</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (234) 567-8910"
                    className="w-full p-3 bg-neutral-50 hover:bg-neutral-50/70 text-xs text-neutral-800 border border-neutral-200 focus:border-blue-500 rounded-lg outline-hidden"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              /* DELIVERY SCREEN */
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Delivery Address (Express Air Shipping)
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500">First Name</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Jane"
                      className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500">Last Name</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-500">Street Address</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Smart choice lane"
                    className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Boston"
                      className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="02108"
                      className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden"
                    />
                  </div>
                </div>

                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs font-sans text-neutral-600 flex items-center justify-between mt-2">
                  <span className="font-semibold text-neutral-900">Carbon-Neutral Next-Day Ground Air</span>
                  <span className="text-emerald-600 font-bold uppercase py-0.5 px-1.5 bg-emerald-50 rounded tracking-wider text-[10px]">FREE</span>
                </div>
              </div>
            )}

            {step === 3 && (
              /* SECURE SIMULATED CREDIT CARD PAYMENT DETAILS */
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Credit Card Payment info</span>
                  <CreditCard className="w-4 h-4 text-neutral-500" />
                </h4>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-500 font-medium">Name on Card</label>
                  <input
                    type="text"
                    required
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-neutral-500 font-medium">Card Number</label>
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4111 2222 3333 4444"
                    className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500 font-medium">Expiry Month/Year</label>
                    <input
                      type="text"
                      required
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-neutral-500 font-medium">CVV Check</label>
                    <input
                      type="password"
                      required
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      placeholder="•••"
                      maxLength={4}
                      className="w-full p-3 bg-neutral-50 text-xs text-neutral-800 border border-neutral-200 rounded-lg outline-hidden animate-pulse"
                    />
                  </div>
                </div>

                {/* Securing the payment state badges */}
                <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 text-[10px] text-neutral-500 mt-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" /> PCI-DSS Compliant Gateway Verified
                  </span>
                  <span>Charged safely via stripe secure gateway</span>
                </div>
              </div>
            )}

            {/* ACTION FOOTER BUTTON STEPS */}
            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-[10px] text-neutral-400 block font-mono">Total Transaction Amount</span>
                <span className="text-lg font-display font-extrabold text-neutral-900">${totalAmount}</span>
              </div>
              
              <div className="flex gap-2">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep((p) => (p - 1) as any)}
                    className="px-4 py-2 border border-neutral-300 rounded-lg text-xs font-semibold hover:bg-neutral-50 text-neutral-600 transition-colors"
                  >
                    Back
                  </button>
                )}

                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs rounded-lg transition-transform hover:scale-[1.01] flex items-center gap-1 cursor-pointer"
                >
                  {step === 3 ? (
                    <>
                      <Lock className="w-3.5 h-3.5 text-emerald-200" /> Complete Secure Purchase
                    </>
                  ) : (
                    <>
                      Continue Step <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
