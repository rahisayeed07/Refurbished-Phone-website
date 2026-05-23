/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, DollarSign, Leaf, Trophy, ShieldAlert, ArrowRight } from 'lucide-react';

export function ValueProps() {
  const [phoneCount, setPhoneCount] = useState(2);

  // Carbon math: Every refurbished phone saves ~80kg of CO2 and averages $350 savings vs. buying brand new
  const carbonSaved = phoneCount * 80;
  const financialSaved = phoneCount * 350;

  return (
    <section className="py-20 bg-white border-b border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 font-mono">
            Smart Tech Choice
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 mt-2 tracking-tight">
            Why Hundreds of Thousands Choose Refurbished
          </h2>
          <p className="text-sm text-neutral-500 mt-3 font-sans">
            Overcoming buyer anxiety is simple when quality is certified, prices are honest, and every purchase actively restores the planet.
          </p>
        </div>

        {/* 3-Column Core Values Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Item 1: Pristine Quality */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200/60 hover:border-blue-500/20 transition-all shadow-xs flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Trophy className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-3">Like-New Quality</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                Every phone in our facility runs through an exhaustive <strong className="text-neutral-800">90-point engineering test</strong>. From camera sensors and display pixels to microphone arrays, Bluetooth, and battery health—we certify 100% operation.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-blue-600 font-semibold font-sans">
              90-Point Protocol <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Item 2: Massive Savings */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200/60 hover:border-emerald-500/20 transition-all shadow-xs flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <DollarSign className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-3">Anchored Savings</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                Get the exact premium flagships you love (Apple, Samsung, Google) at <strong className="text-neutral-800">up to 40% off original MSRP retail prices</strong>. Our direct sourcing and volume inspection keep your wallet flat and satisfied.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold font-sans">
              Save up to $450 <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Item 3: Eco-Friendly */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200/60 hover:border-amber-500/20 transition-all shadow-xs flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
                <Leaf className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-900 mb-3">Earth First (Eco-Minded)</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                Producing a single smartphone eats over <strong className="text-neutral-800">80 kilograms of raw CO2</strong>. Sparing electronic parts and diverting devices from toxic landfills avoids chemical seepage and minimizes mining demand.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center gap-1.5 text-xs text-amber-600 font-semibold font-sans">
              Divert 80kg CO₂ / phone <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* Dynamic Impact Visualizer Calculator - MASSIVE CRO Booster */}
        <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-widest uppercase">
                Interactive Green Calculator
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                Calculate Your Environmental & Financial Impact
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Move the count slider to see how simple it is to protect raw natural habitats and secure heavy financial savings for your family by buying refurbished.
              </p>

              {/* Slider Controller */}
              <div className="pt-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-sans text-neutral-300">
                  <span>Number of Phones Needed</span>
                  <span className="font-mono bg-neutral-800 text-white px-2 py-0.5 rounded font-bold text-sm">
                    {phoneCount} {phoneCount === 1 ? 'Device' : 'Devices'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={phoneCount}
                  onChange={(e) => setPhoneCount(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>
            </div>

            {/* Impact Metric Outputs */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              
              <div className="bg-neutral-800/60 backdrop-blur-md rounded-2xl p-6 border border-neutral-700/50 text-center">
                <span className="text-xs text-neutral-400 font-sans block mb-1">Carbon Diverted</span>
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-emerald-400 block tracking-tight">
                  {carbonSaved} kg
                </span>
                <span className="text-[10px] text-neutral-500 font-sans block mt-1.5 max-w-[140px] mx-auto">
                  Equivalent to planting {Math.round(carbonSaved / 20)} mature evergreen trees!
                </span>
              </div>

              <div className="bg-neutral-800/60 backdrop-blur-md rounded-2xl p-6 border border-neutral-700/50 text-center">
                <span className="text-xs text-neutral-400 font-sans block mb-1">Estimated Savings</span>
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-blue-400 block tracking-tight">
                  ${financialSaved}
                </span>
                <span className="text-[10px] text-neutral-500 font-sans block mt-1.5 max-w-[140px] mx-auto">
                  Compared to retail store launch prices.
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
