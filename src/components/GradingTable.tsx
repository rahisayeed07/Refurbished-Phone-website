/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sparkles, Check, HelpCircle, AlertCircle, ShieldAlert } from 'lucide-react';

export function GradingTable() {
  const [activeTab, setActiveTab] = useState<'Pristine' | 'Excellent' | 'Good'>('Pristine');

  const grades = [
    {
      id: 'Pristine' as const,
      badgeColor: 'bg-blue-600 text-white',
      title: 'Pristine (Like New)',
      subtitle: '99% - 100% cosmetic flawless standard',
      description: 'The highest quality tier. Perfect screens, flawless outer frames, zero hairline cosmetic scratches. Identical to brand new commercial stock.'
    },
    {
      id: 'Excellent' as const,
      badgeColor: 'bg-emerald-600 text-white',
      title: 'Excellent (Premium Value)',
      subtitle: 'Outstanding build with light usage',
      description: 'Minor micro-scratches on frame. Screens are absolutely beautiful and completely scratch-free when activated. No dings or metal notches.'
    },
    {
      id: 'Good' as const,
      badgeColor: 'bg-amber-600 text-white',
      title: 'Good (Smart Budget)',
      subtitle: 'Full device utility, light visual marks',
      description: 'Visible hairline casing scratches or slight bezel color fading. Perfect for children, enterprise setups, or anyone using protective skins/cases.'
    }
  ];

  return (
    <section id="grading" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 font-mono">
            Full Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 mt-2 tracking-tight">
            How Our Grading System Solves Uncertainty
          </h2>
          <p className="text-sm text-neutral-500 mt-3 font-sans">
            Our strict grading means zero surprises. Every single device passes a 90-point functional diagnostic run before our cosmetic grading process even begins.
          </p>
        </div>

        {/* Tab Selection (Mobile-Friendly Grid) */}
        <div className="grid grid-cols-3 max-w-lg mx-auto bg-neutral-100 p-1 rounded-xl mb-12 border border-neutral-200">
          {grades.map((grade) => (
            <button
              key={grade.id}
              onClick={() => setActiveTab(grade.id)}
              className={`py-2 text-xs sm:text-sm font-sans font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === grade.id
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {grade.id}
            </button>
          ))}
        </div>

        {/* Visual Focus Card per Grade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Active Grade Highlight details */}
          <div className="lg:col-span-4 bg-neutral-50 rounded-2xl p-8 border border-neutral-200 flex flex-col justify-between">
            <div className="space-y-4">
              <span className={`inline-flex px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${grades.find(g => g.id === activeTab)?.badgeColor}`}>
                Grade: {activeTab}
              </span>
              <h3 className="text-xl font-display font-bold text-neutral-900">
                {grades.find(g => g.id === activeTab)?.title}
              </h3>
              <p className="text-xs font-sans text-neutral-400 italic">
                {grades.find(g => g.id === activeTab)?.subtitle}
              </p>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans pt-2">
                {grades.find(g => g.id === activeTab)?.description}
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200 mt-6 text-xs font-sans text-neutral-600">
              <span className="font-bold text-neutral-900">Recommended for:</span>
              <p className="mt-1">
                {activeTab === 'Pristine' && 'Gifts, luxury feel, pure-status users who want an identical-to-retail smartphone experience.'}
                {activeTab === 'Excellent' && 'Anyone looking for maximum savings without making noticeable visual sacrifices on original displays.'}
                {activeTab === 'Good' && 'Daily beaters, workspace deployment devices, kids, and anyone wrapping their phone in a secure pouch.'}
              </p>
            </div>
          </div>

          {/* Interactive Specification Grid Table Matrix */}
          <div className="lg:col-span-8 bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden flex flex-col justify-between">
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-100 text-neutral-800 text-xs font-sans font-bold uppercase tracking-wider border-b border-neutral-200">
                    <th className="py-4 px-6">Quality Checklist</th>
                    <th className="py-4 px-4 text-center">Pristine</th>
                    <th className="py-4 px-4 text-center">Excellent</th>
                    <th className="py-4 px-4 text-center">Good</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-sans divide-y divide-neutral-200 text-neutral-700">
                  
                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Front Display Glass</td>
                    <td className="py-4 px-4 text-center text-blue-600 font-bold">100% Flawless</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-medium">Hairlines (Invisible when on)</td>
                    <td className="py-4 px-4 text-center text-neutral-500">Light micro-scratches</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Aluminum/Titanium Chassis</td>
                    <td className="py-4 px-4 text-center text-blue-600 font-bold">100% Spotless</td>
                    <td className="py-4 px-4 text-center text-neutral-500">Faint hair-scuffs</td>
                    <td className="py-4 px-4 text-center text-neutral-500">Visible light-wear or marks</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Guaranteed Battery Health</td>
                    <td className="py-4 px-4 text-center text-neutral-900 font-bold">95% - 100% Capacity</td>
                    <td className="py-4 px-4 text-center text-neutral-900 font-semibold">88% - 94% Capacity</td>
                    <td className="py-4 px-4 text-center text-neutral-900">85% Minimum Guaranteed</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Warranty Coverage Period</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold">12-Month Included</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold">12-Month Included</td>
                    <td className="py-4 px-4 text-center text-emerald-600 font-bold">12-Month Included</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">90-Point Hardware Certification</td>
                    <td className="py-4 px-4 text-center text-blue-600 text-lg">✓</td>
                    <td className="py-4 px-4 text-center text-blue-600 text-lg">✓</td>
                    <td className="py-4 px-4 text-center text-blue-600 text-lg">✓</td>
                  </tr>

                  <tr>
                    <td className="py-4 px-6 font-semibold text-neutral-900">Packaging & Accessories</td>
                    <td className="py-4 px-4 text-center text-neutral-600">Recycled Box + Cable</td>
                    <td className="py-4 px-4 text-center text-neutral-600">Recycled Box + Cable</td>
                    <td className="py-4 px-4 text-center text-neutral-600">Recycled Box + Cable</td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div className="bg-neutral-100 px-6 py-4 border-t border-neutral-200 text-[11px] text-neutral-500 flex items-center gap-2 font-mono">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <span>*Note: Cosmetic grades represent the exterior chassis ONLY. Hardware and functional capacity is certified 100% on ALL tiers.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
