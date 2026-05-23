/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Product } from '../types';
import { ShieldCheck, BatteryCharging, Star, Sparkles, HelpCircle, Info } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product, condition: 'Pristine' | 'Excellent' | 'Good') => void;
  brandFilter: 'Apple' | 'Samsung' | 'Google' | 'All';
  setBrandFilter: (brand: 'Apple' | 'Samsung' | 'Google' | 'All') => void;
}

export function ProductGrid({
  products,
  addToCart,
  brandFilter,
  setBrandFilter
}: ProductGridProps) {
  // Store selected condition per product: defaults to each product's primary condition
  const [selectedConditions, setSelectedConditions] = useState<Record<string, 'Pristine' | 'Excellent' | 'Good'>>({});
  // Store active tooltip states
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Filter products based on active brand state
  const filteredProducts = brandFilter === 'All'
    ? products
    : products.filter(p => p.brand === brandFilter);

  // Calculate pricing factor based on condition grades:
  // Pristine: Base list price
  // Excellent: 15% discount
  // Good: 30% discount
  const getConditionAdjustedPrice = (product: Product, cond: 'Pristine' | 'Excellent' | 'Good') => {
    let factor = 1.0;
    if (cond === 'Excellent') factor = 0.85;
    if (cond === 'Good') factor = 0.70;
    return Math.round(product.price * factor);
  };

  const getConditionAdjustedOriginalPrice = (product: Product, cond: 'Pristine' | 'Excellent' | 'Good') => {
    let factor = 1.0;
    if (cond === 'Excellent') factor = 0.90;
    if (cond === 'Good') factor = 0.80;
    return Math.round(product.originalPrice * factor);
  };

  const getBatteryHealthByCondition = (cond: 'Pristine' | 'Excellent' | 'Good') => {
    if (cond === 'Pristine') return '95% to 100% capacity';
    if (cond === 'Excellent') return '88% to 94% capacity';
    return '85% Minimum Guaranteed';
  };

  const handleConditionSelect = (productId: string, condition: 'Pristine' | 'Excellent' | 'Good') => {
    setSelectedConditions(prev => ({
      ...prev,
      [productId]: condition
    }));
  };

  return (
    <section id="shop" className="py-20 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 font-mono">
              Certified Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 mt-2 tracking-tight">
              Featured Refurbished Smartphones
            </h2>
            <p className="text-sm text-neutral-500 mt-2 max-w-xl font-sans">
              Filter by brand and select your grade. Toggle grades to instantly see customized savings compared to original price tags.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center bg-neutral-200/50 p-1 rounded-xl border border-neutral-300/30">
            {(['All', 'Apple', 'Samsung', 'Google'] as const).map((brand) => (
              <button
                key={brand}
                onClick={() => setBrandFilter(brand)}
                className={`px-4 sm:px-5 py-2 rounded-lg font-sans font-semibold text-xs sm:text-sm tracking-tight transition-all cursor-pointer ${
                  brandFilter === brand
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                {brand === 'All' ? 'View All' : brand === 'Apple' ? 'Apple (iPhones)' : brand}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Interactive Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentCondition = selectedConditions[product.id] || product.condition;
            const finalPrice = getConditionAdjustedPrice(product, currentCondition);
            const refOriginalPrice = getConditionAdjustedOriginalPrice(product, currentCondition);
            const totalSaved = refOriginalPrice - finalPrice;
            const percentSaved = Math.round((totalSaved / refOriginalPrice) * 100);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group relative"
              >
                {/* Sale Badge / Eco Flag */}
                {product.highlight && (
                  <span className="absolute top-4 left-4 z-15 px-2.5 py-1 text-[9px] font-bold font-mono tracking-wider uppercase rounded-full bg-neutral-900 text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-amber-400" /> {product.highlight}
                  </span>
                )}

                {/* Main Product Image Container */}
                <div className="h-64 bg-slate-50/40 p-8 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-50/70 transition-all">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-[180px] object-contain mix-blend-multiply group-hover:scale-[1.05] transition-all duration-300 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-radial from-neutral-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Brand & Mini Rating */}
                    <div className="flex items-center justify-between text-neutral-400 text-xs">
                      <span className="font-sans font-bold text-[10px] uppercase tracking-wider text-blue-600/85">
                        Certified {product.brand}
                      </span>
                      <div className="flex items-center gap-0.5 font-sans font-semibold text-neutral-800 text-xs bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        {product.rating}
                        <span className="text-[10px] text-neutral-400 font-normal">({product.reviewCount})</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-base sm:text-lg font-display font-bold text-neutral-900 mt-2">
                      {product.name}
                      <span className="text-xs text-neutral-400 font-normal ml-1 border-l border-neutral-200 pl-1.5 font-mono">
                        {product.storage}
                      </span>
                    </h3>

                    {/* Features Badges list */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {product.features.slice(0, 2).map((feat, i) => (
                        <span key={i} className="text-[10px] bg-neutral-100 text-neutral-600 font-sans font-medium px-2 py-0.5 rounded-md">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Condition Selector Toggles - HIGH CRO DRIVER */}
                    <div className="mt-5 pt-4 border-t border-neutral-100">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-sans font-extrabold text-neutral-800 flex items-center gap-1">
                          Select Condition
                          <button
                            onClick={() => setActiveTooltip(activeTooltip === product.id ? null : product.id)}
                            className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
                            aria-label="Condition guide"
                          >
                            <Info className="w-3.5 h-3.5" />
                          </button>
                        </span>

                        {activeTooltip === product.id && (
                          <div className="absolute right-6 left-6 bottom-24 bg-neutral-900 text-white p-3.5 rounded-xl text-xs z-20 border border-neutral-800 shadow-xl font-sans">
                            <h4 className="font-bold mb-1 flex items-center gap-1 text-emerald-400">
                              <Sparkles className="w-3 h-3" /> Grade Quality Guide:
                            </h4>
                            <p className="text-[10px] leading-relaxed text-neutral-300">
                              <strong>Pristine</strong>: Looks completely new. No scratches.<br />
                              <strong>Excellent</strong>: Superficial minor scuffs only. Screen is clear.<br />
                              <strong>Good</strong>: Standard cosmetic wear. 100% inspected. Best price value.
                            </p>
                            <button
                              onClick={() => setActiveTooltip(null)}
                              className="mt-2 text-[10px] underline font-bold hover:text-blue-300 block text-right"
                            >
                              Close
                            </button>
                          </div>
                        )}

                        <span className="text-[10px] text-neutral-500 font-mono italic">
                          Warranty OK Included
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-1.5 bg-neutral-100/65 rounded-lg p-1 border border-neutral-200">
                        {(['Pristine', 'Excellent', 'Good'] as const).map((cond) => (
                          <button
                            key={cond}
                            onClick={() => handleConditionSelect(product.id, cond)}
                            className={`py-1 text-[10px] font-sans font-bold rounded-md transition-all cursor-pointer ${
                              currentCondition === cond
                                ? 'bg-white text-neutral-900 shadow-xs border border-neutral-200'
                                : 'text-neutral-500 hover:text-neutral-800'
                            }`}
                          >
                            {cond}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing Matrix and Conversion Action */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="flex justify-between items-baseline">
                      <div>
                        {/* Price adjusted according to chosen condition */}
                        <span className="text-2xl sm:text-3xl font-display font-extrabold text-neutral-900">
                          ${finalPrice}
                        </span>
                        
                        {/* crossed MSRP */}
                        <span className="text-xs text-neutral-400 line-through ml-2 font-mono">
                          ${refOriginalPrice}
                        </span>
                      </div>

                      {/* savings badge */}
                      <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-100">
                        -{percentSaved}% OFF • Save ${totalSaved}
                      </span>
                    </div>

                    {/* Battery health note tailored to conditions */}
                    <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-neutral-500 font-sans">
                      <BatteryCharging className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Battery health guarantee: <strong className="text-neutral-700">{getBatteryHealthByCondition(currentCondition)}</strong></span>
                    </div>

                    {/* 12M Guarantee Tag */}
                    <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-neutral-500 font-sans">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      <span>12-Month Guarantee Warranty included</span>
                    </div>

                    {/* Add to Cart button */}
                    <button
                      onClick={() => addToCart(product, currentCondition)}
                      className="w-full mt-5 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs rounded-lg shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-center relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      Add to Basket
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
}
