/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, BatteryCharging, Truck, Star, ArrowRight } from 'lucide-react';
import heroPhoneImage from '../assets/images/hero_phone_1779549722385.png';

interface HeroProps {
  onBrandSelect: (brand: 'Apple' | 'Samsung' | 'Google' | 'All') => void;
}

export function Hero({ onBrandSelect }: HeroProps) {
  
  const handleCTA = (brand: 'Apple' | 'Samsung') => {
    onBrandSelect(brand);
    const shopGrid = document.getElementById('shop');
    if (shopGrid) {
      shopGrid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-radial from-slate-50 to-neutral-100/50 pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-neutral-100">
      
      {/* Abstract styling grid behind */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge: Sells Trust in 1 Second */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold font-sans tracking-tight"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Save Money. Save Carbon. Guaranteed.
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-neutral-900 tracking-tight leading-[1.08]"
            >
              Premium Tech.<br />
              <span className="text-blue-600">Fraction</span> of the Price.<br />
              <span className="text-emerald-500">Zero</span> E-Waste.
            </motion.h1>

            {/* Subheadline describing guarantee */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-neutral-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Certified refurbished flagship phones with our bulletproof <strong className="text-neutral-900">12-month premium warranty</strong>, free carbon-neutral next-day shipping, and a comprehensive 90-point diagnostic seal of approval.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => handleCTA('Apple')}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-sans font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Shop iPhones
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleCTA('Samsung')}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-800 font-sans font-bold text-sm rounded-xl border border-neutral-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Shop Galaxy series
              </button>
            </motion.div>

            {/* Small Rating Hook */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs"
            >
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-neutral-500 font-sans">
                Rated <strong className="text-neutral-900">4.9/5 stars</strong> across 12,400+ verified customer checkups.
              </p>
            </motion.div>

          </div>

          {/* Hero Right Floating Visual Panel */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-full"
            >
              {/* Background gradient disk */}
              <div className="absolute inset-0 bg-radial from-blue-400/20 to-transparent rounded-full blur-3xl -z-10 aspect-square transform -translate-y-10 scale-125" />

              {/* Float container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative bg-white/20 p-6 rounded-3xl backdrop-blur-md border border-white/40 shadow-2xl overflow-hidden"
              >
                <img
                  src={heroPhoneImage}
                  alt="Certified Pristine Refurbished Premium Smartphone"
                  className="w-full h-auto object-contain max-h-[360px] md:max-h-[420px] mix-blend-normal select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Micro CTA callouts to establish reality */}
                <div className="absolute top-6 left-6 cursor-default bg-black/85 backdrop-blur-md text-white text-[10px] px-2.5 py-1.5 rounded-full border border-white/10 font-mono shadow-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Battery: 100% capacity
                </div>

                <div className="absolute bottom-6 right-6 cursor-default bg-blue-600/90 backdrop-blur-md text-white text-[10px] px-2.5 py-1.5 rounded-full font-sans font-bold shadow-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-blue-100" />
                  12-Month Extended Seal
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Trust Signposts Bar */}
      <div className="bg-white border-t border-b border-neutral-100 py-6 mt-16 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-neutral-100">
            
            <div className="flex flex-col md:flex-row items-center gap-4 px-2 md:px-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-neutral-900">12-Month Warranty</h3>
                <p className="text-[11px] text-neutral-500 mt-0.5">Full hardware failure coverage</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 px-2 md:px-4 pt-4 md:pt-0">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <BatteryCharging className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-neutral-900">85%+ Battery Guarantee</h3>
                <p className="text-[11px] text-neutral-500 mt-0.5">Deep capacity inspection seal</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 px-2 md:px-4 pt-4 md:pt-0">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
                <Truck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-neutral-900">Free Next-Day Air</h3>
                <p className="text-[11px] text-neutral-500 mt-0.5">Carbon-neutral courier express</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 px-2 md:px-4 pt-4 md:pt-0">
              <div className="p-3 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                <div className="flex items-center text-amber-500 text-sm font-bold gap-0.5">
                  5.0 <Star className="w-4 h-4 fill-amber-500 text-amber-500 inline" />
                </div>
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-neutral-900">Trustpilot 5-Star</h3>
                <p className="text-[11px] text-neutral-500 mt-0.5">Over 12,000 verified reviews</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
