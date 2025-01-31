'use client';
import { CartProvider as ShoppingCartProvider } from 'use-shopping-cart';
import { ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  return (
    <ShoppingCartProvider
    //   mode="payment" // ✅ Correct mode for Stripe Checkout
      cartMode="checkout-session" // ✅ Set cartMode for session-based checkout
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string} // ✅ Stripe Public Key
    //   successUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/success`} // ✅ Redirect on successful payment
    //   cancelUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/cart`} // ✅ Redirect if payment is canceled
      currency="USD"
      shouldPersist={true}
    >
      {children}
    </ShoppingCartProvider>
  );
}
