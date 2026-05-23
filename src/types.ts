/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  brand: 'Apple' | 'Samsung' | 'Google';
  name: string;
  storage: string;
  color: string;
  originalPrice: number;
  price: number;
  rating: number;
  reviewCount: number;
  condition: 'Pristine' | 'Excellent' | 'Good';
  batteryHealth: string;
  warranty: string;
  features: string[];
  image: string;
  inStock: boolean;
  highlight?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedCondition: 'Pristine' | 'Excellent' | 'Good';
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  verified: boolean;
  date: string;
  purchase: string;
  condition: string;
  comment: string;
  objectionSolved: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Battery' | 'Warranty' | 'Grading' | 'Shipping' | 'General';
}
