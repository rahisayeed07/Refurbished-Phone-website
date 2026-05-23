/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, Sparkles, HelpCircle, ArrowUpRight } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  faqs: FAQItem[];
}

export function FAQ({ faqs }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Battery' | 'Warranty' | 'Grading' | 'Shipping'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQs based on active categorizations and search criteria
  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Battery', 'Warranty', 'Grading', 'Shipping'] as const;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 font-mono">
            Direct Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-900 mt-2 tracking-tight">
            We Answer Your Toughest Brand Questions
          </h2>
          <p className="text-sm text-neutral-500 mt-3 font-sans">
            Have a question about what actually ships in the box? Or how we inspect devices? Find the answers immediately below.
          </p>
        </div>

        {/* Categories and Search Helper Bar */}
        <div className="space-y-4 mb-8">
          
          {/* FAQ Search Bar Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-4.5 h-4.5" />
            <input
              type="text"
              placeholder="Search your doubts (e.g. 'cable', 'battery health', 'return policy')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 rounded-xl border border-neutral-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans outline-hidden"
            />
          </div>

          {/* Quick FAQ Categories Toggles */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-3 py-1.5 rounded-full text-[11px] font-sans font-bold border cursor-pointer transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-500 border-neutral-200'
                }`}
              >
                {cat === 'All' ? 'View All Categories' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-neutral-50 rounded-2xl border border-neutral-100">
              <p className="text-xs text-neutral-500">
                No matching answers found for "{searchQuery}". Try typing another query or select 'View All Categories'.
              </p>
            </div>
          ) : (
            filteredFAQs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="bg-neutral-50/50 rounded-xl border border-neutral-200 overflow-hidden transition-all duration-200"
                >
                  {/* Summary trigger button */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-xs sm:text-sm text-neutral-800 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <span className={`p-1 bg-white rounded-full border border-neutral-200 text-neutral-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-600 border-blue-100' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Accordion body panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs text-neutral-500 border-t border-neutral-150 leading-relaxed font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Small Trust Callout under FAQ list */}
        <div className="mt-8 p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-center justify-between text-xs font-sans text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Still have questions about custom phone inspect processes?</span>
          </div>
          <a
            href="mailto:support@regencell.com"
            className="font-bold text-emerald-700 hover:underline flex items-center gap-0.5"
          >
            Ask Support <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
