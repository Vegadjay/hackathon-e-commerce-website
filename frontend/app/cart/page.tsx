"use client";

import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, AlertCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/store';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

interface CartResponse {
  success: boolean;
  data: {
    products: Array<{
      productId: string;
      quantity: number;
      size: string;
      price: string;
      product: {
        name: string;
        images: string[];
      };
    }>;
    totalPrice: number;
  };
}

export default function CartPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { removeItem, updateQuantity, clearCart } = useCart();

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = Cookies.get('userId');
      
      if (!userId) {
        router.push('/login');
        return;
      }

      try {
        const response = await fetch(`/api/cart/6783546add252cb18a80dfe7`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }

        const data: CartResponse = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch cart items');
        }

        // Transform the API response into CartItem format
        const transformedItems: CartItem[] = data.data.products.map(item => ({
          id: item.productId,
          name: item.product.name,
          price: parseFloat(item.price),
          quantity: item.quantity,
          size: item.size,
          image: item.product.images[0] // Using first image as main image
        }));

        setCartItems(transformedItems);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [router]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleUpdateQuantity = async (itemId: string, newQuantity: number) => {
    const userId = Cookies.get('userId');
    
    try {
      const response = await fetch(`/api/cart`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          productId: itemId,
          quantity: newQuantity
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setCartItems(prevItems =>
          prevItems.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          )
        );
        updateQuantity(itemId, newQuantity);
      }
    } catch (error) {
      console.error('Failed to update quantity:', error);
      alert('Failed to update quantity. Please try again.');
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    const userId = Cookies.get('userId');
    
    try {
      const response = await fetch(`/api/cart`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          productId: itemId
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
        removeItem(itemId);
      }
    } catch (error) {
      console.error('Failed to remove item:', error);
      alert('Failed to remove item. Please try again.');
    }
  };

  const handleClearCart = async () => {
    const userId = Cookies.get('userId');
    
    try {
      const response = await fetch(`/api/cart/clear`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      
      if (data.success) {
        setCartItems([]);
        clearCart();
      }
    } catch (error) {
      console.error('Failed to clear cart:', error);
      alert('Failed to clear cart. Please try again.');
    }
  };

  const handleCheckout = () => {
    clearCart();
    router.push('/checkout-success');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span className="text-lg">Loading cart...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-xl font-semibold text-gray-900">Error Loading Cart</h2>
          <p className="mt-2 text-gray-600">{error}</p>
          <Button onClick={() => window.location.reload()} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-white p-6 shadow-lg"
        >
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              <ShoppingCart className="mr-2 inline-block h-8 w-8" />
              Shopping Cart
            </h1>
            {cartItems.length > 0 && (
              <Button
                variant="destructive"
                onClick={handleClearCart}
                className="flex items-center gap-2"
              >
                <Trash2 className="h-5 w-5" />
                Clear Cart
              </Button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-lg text-gray-600">Your cart is empty</p>
              <Button
                onClick={() => router.push('/')}
                className="mt-4"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.size}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-6 py-6"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">Size: {item.size}</p>
                      <p className="mt-1 text-lg font-medium text-primary">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="rounded-md bg-gray-100 px-3 py-1 text-gray-600 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="text-lg font-medium">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="rounded-md bg-gray-100 px-3 py-1 text-gray-600 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="mt-8 w-full text-lg"
                  size="lg"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}