"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Trash2, AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

interface Product {
  productId: string;
  quantity: number;
  size: string;
  price: string;
  _id: string;
}

interface CartResponse {
  success: boolean;
  data: {
    _id: string;
    userId: string;
    products: Product[];
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export default function CartPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [tilt, setTilt] = useState(0);

  // Event handler for mouse movement over the button
  const handleMouseMove = (e: React.MouseEvent) => {
    const button = e.currentTarget;
    const { left, right } = button.getBoundingClientRect();
    const center = (left + right) / 2;
    const distance = e.clientX - center;
    setTilt(distance / 10);
  };

  const handleMouseLeave = () => {
    setTilt(0);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = Cookies.get("userId");
      if (!userId) {
        router.push("/login");
        return;
      }

      try {
        const response = await fetch(`/api/cart/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data: CartResponse = await response.json();

        if (data.success) {
          setCartItems(data.data.products);
          setTotalPrice(data.data.totalPrice);
        } else {
          throw new Error("Failed to fetch cart data");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [router]);

  const handleRemoveItem = async (productId: string) => {
    const userId = Cookies.get("userId");

    if (!userId) {
      alert("User not logged in!");
      return;
    }

    try {
      const deleteResponse = await fetch(`/api/cart/${userId}/removeproduct`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!deleteResponse.ok) {
        throw new Error("Failed to remove item from cart");
      }

      const deleteData = await deleteResponse.json();
      if (deleteData.success) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.productId !== productId)
        );
        setTotalPrice((prevTotal) =>
          prevTotal -
          parseInt(cartItems.find((item) => item.productId === productId)?.price || "0")
        );
      } else {
        throw new Error(deleteData.message || "Error removing item");
      }
    } catch (error) {
      console.error("Failed to remove item:", error);
      alert("Failed to remove item. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="ml-2">Loading cart...</span>
      </div>
    );
  }

  if (error) {
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, bounce: 0.4, type: "spring" }}
          className="flex justify-center mb-4"
        >
          <AlertCircle className="h-14 w-14 text-red-500" />
        </motion.div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Oops! No items in your cart.
        </h2>
        <p className="mt-2 text-gray-600">
          It looks like you haven’t added anything yet.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
        >
          <Button
            onClick={() => router.push("/")}
            className="mt-6 px-8 py-3 text-lg font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 shadow-lg"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} 
            style={{
              transform: `rotateZ(${tilt}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <div className="flex items-center gap-3">
              <motion.img
                src="/animation_gifs/shopping-bags.png"
                alt="Shopping Bag"
                height={24}
                width={24}
                className="h-6 w-6 object-contain"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span>Continue Shopping</span>
            </div>
          </Button>
        </motion.div>
      </motion.div>
    </div>

    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-5xl p-6 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            <ShoppingCart className="inline-block w-6 h-6 mr-2" />
            Your Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item._id} className="flex justify-between py-4">
                  <div>
                    <p className="text-gray-800 font-semibold">
                      Product ID: {item.productId}
                    </p>
                    <p className="text-gray-600">Size: {item.size}</p>
                    <p className="text-gray-600">
                      Price: ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      onClick={() => handleRemoveItem(item.productId)}
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </Button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-right">
              <p className="text-lg font-semibold">Total: ₹{totalPrice}</p>
              <Button
                className="mt-4"
                onClick={() => alert("Proceeding to checkout...")}
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}