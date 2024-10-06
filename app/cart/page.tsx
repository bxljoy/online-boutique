"use client";

import { useCart } from '@/lib/CartContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/products" className="text-primary hover:underline">Continue shopping</Link></p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</p>
            <div className="mt-4 space-x-4">
              <Button onClick={() => clearCart()}>Clear Cart</Button>
              <Button>Proceed to Checkout</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}