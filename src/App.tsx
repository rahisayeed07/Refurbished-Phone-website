/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { ProductGrid } from './components/ProductGrid';
import { GradingTable } from './components/GradingTable';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { DevDashboard } from './components/DevDashboard';

import { Product, CartItem } from './types';
import { mockProducts, mockTestimonials, mockFAQs } from './data/mockData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [brandFilter, setBrandFilter] = useState<'Apple' | 'Samsung' | 'Google' | 'All'>('All');

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('regencell_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error('Error parsing saved cart:', err);
      }
    }
  }, []);

  // Save cart changes to local storage
  const saveCartToStorage = (newCart: CartItem[]) => {
    localStorage.setItem('regencell_cart', JSON.stringify(newCart));
  };

  const handleAddToCart = (product: Product, condition: 'Pristine' | 'Excellent' | 'Good') => {
    setCart((prevCart) => {
      // Find item with same product id AND same condition grade
      const existingIdx = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedCondition === condition
      );

      let updatedCart: CartItem[];

      if (existingIdx > -1) {
        updatedCart = prevCart.map((item, idx) => {
          if (idx === existingIdx) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        // Adjust product properties to display accurate condition inside cart
        const adjustedProd = { ...product, condition };
        // Adjust pricing based on selected condition
        let priceFactor = 1.0;
        if (condition === 'Excellent') priceFactor = 0.85;
        if (condition === 'Good') priceFactor = 0.70;
        adjustedProd.price = Math.round(product.price * priceFactor);

        updatedCart = [...prevCart, { product: adjustedProd, quantity: 1, selectedCondition: condition }];
      }

      saveCartToStorage(updatedCart);
      return updatedCart;
    });

    // Automatically open the cart slides - excellent psychological visual impulse CRO action
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, condition: string, amount: number) => {
    setCart((prevCart) => {
      const idx = prevCart.findIndex(
        (item) => item.product.id === productId && item.selectedCondition === condition
      );

      if (idx === -1) return prevCart;

      let updatedCart = [...prevCart];
      const nextQty = updatedCart[idx].quantity + amount;

      if (nextQty <= 0) {
        updatedCart.splice(idx, 1);
      } else {
        updatedCart[idx] = { ...updatedCart[idx], quantity: nextQty };
      }

      saveCartToStorage(updatedCart);
      return updatedCart;
    });
  };

  const handleRemoveItem = (productId: string, condition: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedCondition === condition)
      );
      saveCartToStorage(updatedCart);
      return updatedCart;
    });
  };

  const handleCheckoutSuccess = () => {
    // Clear cart upon successful transaction confirm
    setCart([]);
    localStorage.removeItem('regencell_cart');
  };

  return (
    <div className="min-h-screen bg-slate-50/20 text-neutral-900 font-sans tracking-normal relative">
      
      {/* Structural Header Navigation */}
      <Header
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        updateQuantity={handleUpdateQuantity}
        removeItem={handleRemoveItem}
        triggerCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Main Structural Flow Content */}
      <main>
        
        {/* Above-the-fold Hero Spotlight with floating cards */}
        <Hero onBrandSelect={setBrandFilter} />

        {/* Brand Core Value Props Grid + Carbon Offset Calcs slider */}
        <ValueProps />

        {/* Dynamic products catalogs tab cards filters */}
        <ProductGrid
          products={mockProducts}
          addToCart={handleAddToCart}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
        />

        {/* Clear conditions grading comparison timeline matrix */}
        <GradingTable />

        {/* Verified user social validations testimonials cards */}
        <Reviews testimonials={mockTestimonials} />

        {/* Drop panel accordions targeting common objections */}
        <FAQ faqs={mockFAQs} />

      </main>

      {/* Trust and Policy compliant layout Footer */}
      <Footer />

      {/* Multi-step express secured transactional Checkout portal dialog */}
      <CheckoutModal
        cart={cart}
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Interactive ASCII tree developer blueprints widget overlay */}
      <DevDashboard />

    </div>
  );
}
