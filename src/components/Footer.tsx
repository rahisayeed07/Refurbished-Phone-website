/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, Check, ShieldCheck, Heart, Github, Award } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const paymentMethods = [
    { name: 'Visa', logo: 'https://cdn.jsdelivr.net/gh/aayusharyan/payment-logos/assets/flat/visa.svg' },
    { name: 'Mastercard', logo: 'https://cdn.jsdelivr.net/gh/aayusharyan/payment-logos/assets/flat/mastercard.svg' },
    { name: 'PayPal', logo: 'https://cdn.jsdelivr.net/gh/aayusharyan/payment-logos/assets/flat/paypal.svg' },
    { name: 'Apple Pay', logo: 'https://cdn.jsdelivr.net/gh/aayusharyan/payment-logos/assets/flat/applepay.svg' },
    { name: 'Google Pay', logo: 'https://cdn.jsdelivr.net/gh/aayusharyan/payment-logos/assets/flat/googlepay.svg' }
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Segment: Brand logo + newsletter savings hook */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-blue-600 rounded-lg text-white font-display font-bold text-xs tracking-widest flex items-center justify-center">
                RG
              </span>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                REGEN<span className="text-blue-500">CELL</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              We certify, test, and polish top tier smartphone electronics. Overcoming electronics waste shouldn't cost you premium performance or security.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> Eco-Responsible Certified Retailer
            </div>
          </div>

          {/* Newsletter Input Box */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-sans">
                Claim $20 Off Your First Order
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Receive certified product alerts, flash drops, and a $20 discount welcome coupon instantly.
              </p>
            </div>

            {subscribed ? (
              <div className="bg-emerald-950/50 text-emerald-400 p-4 rounded-xl border border-emerald-800 text-xs font-semibold flex items-center gap-2 max-w-md">
                <Check className="w-4 h-4" /> Subscription successful! Your $20 discount code HAS BEEN SENT to your email inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4" />
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-neutral-800 hover:bg-neutral-800/80 focus:bg-neutral-950 text-xs text-white placeholder-neutral-500 rounded-lg border border-neutral-700 focus:border-blue-500 font-sans outline-hidden"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs rounded-lg transition-transform hover:scale-[1.01] cursor-pointer"
                >
                  Join Us
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Middle Segment: Links structures */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs border-b border-neutral-800">
          
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider">Catalog</h4>
            <ul className="space-y-2">
              <li><a href="#shop" className="hover:text-white transition-colors">Shop All Apple iPhones</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Shop All Samsung Galaxy</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Shop Google Pixel</a></li>
              <li><a href="#grading" className="hover:text-white transition-colors">Condition Grading Matrix</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider">Confidence</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-white transition-colors">90-Point Inspection Lab</a></li>
              <li><a href="#grading" className="hover:text-white transition-colors">12-Month Guarantee Policy</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">30-Day Free Return Portal</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Success Stories</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="#shop" className="hover:text-white transition-colors">Diverting E-Waste Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Supply Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Revenue Partnerships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media Assets</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider">Need Assistance?</h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              We respond to support queries within 2 hours. Our central lab is operating Mon-Fri 8am-6pm.
            </p>
            <p className="text-white font-mono font-bold pt-1">
              support@regencell.com
            </p>
          </div>

        </div>

        {/* Bottom Segment: Trust Payment badges + copyrights */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs">
          
          <div className="space-y-2 text-center md:text-left">
            <p>© 2026 RegenCell Electronics Trading Ltd. All rights reserved.</p>
            <p className="text-[10px] text-neutral-600 font-mono">
              All product lines, company brands, and original trademarks are key properties of Apple Inc, Samsung Group and Google LLC.
            </p>
          </div>

          {/* Secure Payment methods badges flat layout */}
          <div className="flex items-center flex-wrap justify-center gap-3 bg-neutral-800/40 px-4 py-2.5 rounded-xl border border-neutral-800">
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mr-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-500" /> Secure Payments:
            </span>
            <div className="flex items-center gap-2">
              {paymentMethods.map((method, i) => (
                <img
                  key={i}
                  src={method.logo}
                  alt={method.name}
                  className="h-6 w-auto opacity-75 hover:opacity-100 transition-opacity select-none grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
