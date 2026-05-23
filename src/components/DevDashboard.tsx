/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, Terminal, FileCode, CheckCircle2, ChevronRight, CornerRightDown, Hammer, Database, Layers } from 'lucide-react';

export function DevDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'components' | 'cro'>('components');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Toggle Round Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-3 bg-neutral-900 border border-neutral-700/60 hover:border-neutral-500 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
        aria-label="Toggle architecture visualization"
      >
        <span className="w-8 h-8 rounded-full bg-blue-600/90 text-white flex items-center justify-center font-mono text-xs font-bold leading-normal">
          {"</>"}
        </span>
        <span className="text-xs font-mono font-semibold pr-3 hidden sm:inline">
          {isOpen ? 'Close Blueprint' : 'View Component Architecture'}
        </span>
      </button>

      {/* Floating Panel Drawer */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-[480px] bg-neutral-950 border border-neutral-800 text-neutral-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[82vh] animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-neutral-900 px-5 py-4 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Phase 1: Architecture Blueprint
              </h3>
            </div>
            <span className="text-[9px] font-mono bg-blue-950 text-blue-400 px-2 py-0.5 rounded border border-blue-900 font-bold">
              v1.0 Ready
            </span>
          </div>

          {/* Sub Navigation */}
          <div className="grid grid-cols-2 bg-neutral-900/60 border-b border-neutral-800 p-1">
            <button
              onClick={() => setActiveTab('components')}
              className={`py-2 text-[10px] sm:text-xs font-mono font-bold tracking-tight rounded-md transition-colors cursor-pointer ${
                activeTab === 'components'
                  ? 'bg-neutral-800 text-white border border-neutral-700/50'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              Component Diagram Tree
            </button>
            <button
              onClick={() => setActiveTab('cro')}
              className={`py-2 text-[10px] sm:text-xs font-mono font-bold tracking-tight rounded-md transition-colors cursor-pointer ${
                activeTab === 'cro'
                  ? 'bg-neutral-800 text-white border border-neutral-700/50'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              CRO Decisions Checklist
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="p-5 overflow-y-auto flex-1 space-y-4 max-h-[50vh]">
            
            {activeTab === 'components' && (
              /* TREE MATRIX ASCII LAYOUT */
              <div className="space-y-4">
                <p className="text-[11px] text-neutral-400 font-mono leading-relaxed">
                  Below is the structural map showing how states, actions, catalog queries, and components reside in our client-only React tree:
                </p>

                {/* Simulated ASCII Tree */}
                <pre className="p-4 bg-neutral-950 text-[10px] text-emerald-400 font-mono leading-relaxed rounded-xl border border-neutral-800 overflow-x-auto whitespace-pre">
{`App.tsx [Parent state controller]
 ├── Types.ts [Shared interfaces]
 ├── MockData.ts [Static database catalog values]
 │
 ├── Header [Cart Count Indicator + Details Slider Drawer]
 │    └── Cart Drawer Panel (Secure payment callout)
 │
 ├── Hero [Interactive brand hooks & Titanium 3D render asset]
 │    └── Floating status callouts ("Battery 100%", "2-Year Lock")
 │
 ├── ValueProps [Core pillar grids & carbon offset slider calculator]
 │    └── Dynamic savings output (average CO2 vs. dollars)
 │
 ├── ProductGrid [Brand matrices, custom pricing grade checks]
 │    └── Interactive Condition Grade Selector (A/B/C)
 │
 ├── GradingTable [Full transparent checklist comparing specs]
 │
 ├── Reviews [Objections-blocking cards pointing to customer doubts]
 │    └── Resolved Objection tag highlights ("Battery capacity", Cosmetics)
 │
 ├── FAQ [Accordion-style drop-down triggers with search text box]
 │
 ├── Footer [Newsletter Coupon deals, SSL secure checkout anchors]
 │
 └── CheckoutModal [Contact, Shipping, Credit Payment validation, Success]`}
                </pre>

                {/* Small State flow details */}
                <div className="space-y-2 pt-2 text-[11px]">
                  <h4 className="font-mono font-bold text-white flex items-center gap-1.5 text-[11.5px]">
                    <Database className="w-3.5 h-3.5 text-blue-400" /> Central Data States:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-400 font-mono text-[10px]">
                    <li><strong>cart</strong>: Array containing chosen products, quantities, and selected condition grade state.</li>
                    <li><strong>brandFilter</strong>: State managing catalog selections.</li>
                    <li><strong>checkoutOpen</strong>: Controls the multi-step transaction portal.</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'cro' && (
              /* CRO IN DEPTH CHECKLIST */
              <div className="space-y-4 font-mono text-[11px]">
                <p className="text-neutral-400 leading-relaxed">
                  Refurbished phone conversion depends heavily on removing **perceived risks**. Here are the explicit design optimizations we implemented:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5 p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11.5px] mb-0.5">Value Price Toggles</strong>
                      <span className="text-neutral-400 text-[10.5px] leading-relaxed block">
                        Allowing users to dynamic click Pristine, Excellent, or Good right on each phone card recalculates prices instantly, presenting clear MSRP anchors and saving badge calculations.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11.5px] mb-0.5">Carbon & Dollar Savings Calculator</strong>
                      <span className="text-neutral-400 text-[10.5px] leading-relaxed block">
                        An interactive environmental impact slider highlights ecological CO2 savings alongside financial benefits directly, adding a powerful ethical booster.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11.5px] mb-0.5">Objections-Slaying Testimonials</strong>
                      <span className="text-neutral-400 text-[10.5px] leading-relaxed block">
                        Reviews don't just mention quality—each review is badged with the exact fear it solved (e.g., "Battery capacity worries", "Visual cosmetics scratches").
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 bg-neutral-900 rounded-xl border border-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-[11.5px] mb-0.5">Multi-Step Re-assurance Checkout</strong>
                      <span className="text-neutral-400 text-[10.5px] leading-relaxed block">
                        Our full 256-bit secure checkout features constant reminders of the 12-month hardware warranty and zero shipping charges to prevent basket abandonment.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer of panel info */}
          <div className="bg-neutral-900/60 px-5 py-3.5 border-t border-neutral-800 text-[9.5px] text-neutral-500 text-center font-mono">
            Crafted for Google Antigravity e-commerce checkup
          </div>

        </div>
      )}

    </div>
  );
}
