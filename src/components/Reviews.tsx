/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, ShieldCheck } from 'lucide-react';
import { Testimonial } from '../types';

interface ReviewsProps {
  testimonials: Testimonial[];
}

export function Reviews({ testimonials }: ReviewsProps) {
  return (
    <section id="reviews" className="py-20 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 font-mono">
            Social Proof First
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 mt-2 tracking-tight">
            Overcoming Doubts, One Device at a Time
          </h2>
          <p className="text-sm text-neutral-500 mt-3 font-sans">
            Read how other real buyers tackled their anxieties regarding capacity, grading, and warranties, finding beautiful refurbished phone deals safely.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-4">
                {/* Visual Header with Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400 font-sans font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Main comment */}
                <p className="text-[12.5px] text-neutral-600 leading-relaxed font-sans italic">
                  "{review.comment}"
                </p>
              </div>

              {/* User Bio and Resolved Objection Badge */}
              <div className="pt-6 border-t border-neutral-100 flex flex-col justify-end space-y-4">
                
                {/* Resolved Objection Highlight - A strong CRO signal */}
                <div className="bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100 flex items-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-emerald-700 block">
                      Objection Solved
                    </span>
                    <span className="text-[10.5px] font-sans font-medium text-neutral-700 block">
                      {review.objectionSolved}
                    </span>
                  </div>
                </div>

                {/* Profile info details */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans font-bold text-xs text-neutral-900 leading-tight">
                        {review.name}
                      </span>
                      {review.verified && (
                        <span className="inline-flex bg-blue-50 text-blue-700 text-[8px] font-bold tracking-wider px-1 py-0.2 rounded uppercase">
                          Verified
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-neutral-500 leading-none">
                      Bought {review.purchase}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Global Statistics Highlights Trust Box */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-around gap-8 text-center sm:text-left shadow-xs">
          <div>
            <span className="text-2xl sm:text-3xl font-display font-black text-neutral-900">4.9/5.0</span>
            <span className="text-[10px] text-neutral-400 font-sans block uppercase font-mono tracking-wider mt-0.5">Trustpilot Score</span>
          </div>
          <div className="hidden sm:block h-8 border-r border-neutral-200" />
          
          <div>
            <span className="text-2xl sm:text-3xl font-display font-black text-neutral-900">98.2%</span>
            <span className="text-[10px] text-neutral-400 font-sans block uppercase font-mono tracking-wider mt-0.5">Battery satisfaction</span>
          </div>
          <div className="hidden sm:block h-8 border-r border-neutral-200" />

          <div>
            <span className="text-2xl sm:text-3xl font-display font-black text-neutral-900">12,400+</span>
            <span className="text-[10px] text-neutral-400 font-sans block uppercase font-mono tracking-wider mt-0.5">Phones Diverted</span>
          </div>
        </div>

      </div>
    </section>
  );
}
