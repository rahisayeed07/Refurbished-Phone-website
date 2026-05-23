/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Testimonial, FAQItem } from '../types';

// Import our beautiful main generated image
import heroPhoneImage from '../assets/images/hero_phone_1779549722385.png';

export const mockProducts: Product[] = [
  {
    id: 'apple-iphone-15-pro-128-pristine',
    brand: 'Apple',
    name: 'iPhone 15 Pro',
    storage: '128GB',
    color: 'Natural Titanium',
    originalPrice: 999,
    price: 699,
    rating: 4.9,
    reviewCount: 428,
    condition: 'Pristine',
    batteryHealth: '95% to 100% Guaranteed',
    warranty: '12-Month Premium Warranty',
    features: ['Titanium construction', 'Action Button', 'A17 Pro Chipset', 'Type-C USB 3'],
    image: heroPhoneImage, // Primary high-quality render
    inStock: true,
    highlight: 'Best Seller'
  },
  {
    id: 'apple-iphone-14-pro-256-excellent',
    brand: 'Apple',
    name: 'iPhone 14 Pro',
    storage: '256GB',
    color: 'Deep Purple',
    originalPrice: 1099,
    price: 589,
    rating: 4.8,
    reviewCount: 312,
    condition: 'Excellent',
    batteryHealth: '88% to 94% Guaranteed',
    warranty: '12-Month Premium Warranty',
    features: ['Dynamic Island', '48MP Camera', 'A16 Bionic', 'ProMotion 120Hz Display'],
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    highlight: 'Best Value'
  },
  {
    id: 'samsung-s24-ultra-256-pristine',
    brand: 'Samsung',
    name: 'Galaxy S24 Ultra',
    storage: '256GB',
    color: 'Titanium Gray',
    originalPrice: 1299,
    price: 849,
    rating: 4.9,
    reviewCount: 184,
    condition: 'Pristine',
    batteryHealth: '95% to 100% Guaranteed',
    warranty: '12-Month Premium Warranty',
    features: ['Galaxy AI features', 'Built-in S Pen', '200MP Zoom Camera', 'Snapdragon 8 Gen 3'],
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    highlight: 'Flagship Deal'
  },
  {
    id: 'samsung-s23-ultra-256-excellent',
    brand: 'Samsung',
    name: 'Galaxy S23 Ultra',
    storage: '256GB',
    color: 'Phantom Black',
    originalPrice: 1199,
    price: 599,
    rating: 4.7,
    reviewCount: 224,
    condition: 'Excellent',
    batteryHealth: '85% to 92% Guaranteed',
    warranty: '12-Month Premium Warranty',
    features: ['100x Space Zoom', '5000 mAh Battery', 'S Pen Included', 'Dynamic AMOLED 2X'],
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'google-pixel-8-pro-128-pristine',
    brand: 'Google',
    name: 'Pixel 8 Pro',
    storage: '128GB',
    color: 'Bay Blue',
    originalPrice: 999,
    price: 529,
    rating: 4.8,
    reviewCount: 142,
    condition: 'Pristine',
    batteryHealth: '94% to 100% Guaranteed',
    warranty: '12-Month Premium Warranty',
    features: ['Google Tensor G3', 'Best-in-class AI Camera', 'Magic Eraser & Audio Magic', '7-year Update Cycle'],
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop',
    inStock: true,
    highlight: 'Eco-Choice'
  },
  {
    id: 'apple-iphone-13-128-good',
    brand: 'Apple',
    name: 'iPhone 13',
    storage: '128GB',
    color: 'Midnight Black',
    originalPrice: 799,
    price: 339,
    rating: 4.6,
    reviewCount: 519,
    condition: 'Good',
    batteryHealth: '85% Minimum Guarantee',
    warranty: '12-Month Premium Warranty',
    features: ['Dual-camera system', 'A15 Bionic', 'Super Retina XDR', 'Ceramic Shield front'],
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop',
    inStock: true,
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    rating: 5,
    verified: true,
    date: '3 days ago',
    purchase: 'iPhone 15 Pro, Pristine',
    condition: 'Pristine (Looks 100% Brand New)',
    comment: 'I was honestly terrified of buying a refurbished phone because of the battery. But when this arrived, the battery health showed exactly 99%! There is physically not a single scratch on the titanium frame. Saved $300 and got next-day shipping.',
    objectionSolved: 'Battery Health & Physical Cosmetics'
  },
  {
    id: 'rev-2',
    name: 'David K. Cohen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    rating: 5,
    verified: true,
    date: '1 week ago',
    purchase: 'Galaxy S24 Ultra, Pristine',
    condition: 'Pristine',
    comment: 'The Galaxy S24 Ultra exceeded all expectations. Screen is pixel-perfect, and Samsung Diagnostics confirmed everything is in original working order. The 12-month warranty seal gives me great peace of mind. Highly recommend!',
    objectionSolved: 'Hardware & Warranty Anxiety'
  },
  {
    id: 'rev-3',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150',
    rating: 5,
    verified: true,
    date: '2 weeks ago',
    purchase: 'iPhone 14 Pro, Excellent',
    condition: 'Excellent (Tiny micro-scratch only seen under intense direct light)',
    comment: 'Selected "Excellent" to save an extra $100 and it fits my budget beautifully. My charger arrived neatly wrapped in eco-friendly packaging. If you are on the fence, do it! The e-waste reduction of 80kg of CO2 is icing on the cake.',
    objectionSolved: 'Condition Grading Legitimacy'
  }
];

export const mockFAQs: FAQItem[] = [
  {
    category: 'Battery',
    question: 'How do you guarantee the battery life on refurbished phones?',
    answer: 'Every device we sell undergoes a certified 90-point inspection where the battery chemical age and capacity are tested. We guarantee a minimum of 85% battery health capacity on items graded Excellent or Good, and up to 100% capacity on Pristine devices. If the battery falls below this during your 12-month warranty, we replace it completely free of charge.'
  },
  {
    category: 'Warranty',
    question: 'What is included in the 12-Month Premium Warranty?',
    answer: 'Our warranty mirrors a manufacturer’s warranty. It covers all hardware components including touchscreen responsiveness, ports, camera sensors, volume and power buttons, and microphone assemblies. It does not cover accidental water submersion or cracked screens from dropping, but we offer low-cost fast repair options for our customers.'
  },
  {
    category: 'Grading',
    question: 'What is the precise difference between Pristine, Excellent, and Good?',
    answer: 'Pristine devices have zero visible micro-scratches on screen or chassis and look identical to a brand new factory unit. Excellent items can have very light, unnoticeable hairline scratches that are completely hidden when the screen is turned on. Good devices show standard light cosmetic scuffs or minor casing scratches, making them the absolute highest value pick.'
  },
  {
    category: 'Shipping',
    question: 'What is your return policy and shipping time?',
    answer: 'We provide Free Express Carbon-Neutral Next-Day Shipping on all phone orders. Additionally, we support a 30-Day No-Questions-Asked Free Return policy, where you can request a return label within 30 days of receipt and get a 100% full refund if you are not fully satisfied.'
  },
  {
    category: 'General',
    question: 'What actually comes in the box with my phone?',
    answer: 'Your phone is delivered in a high-quality, magnetic certified recycled presentation box. Beside the phone, you’ll find a premium heavy-duty braided USB-C charging cable, an elegant metal SIM ejector pin, and your printed 12-Month Certificate of Warranty and Inspection Report.'
  }
];
