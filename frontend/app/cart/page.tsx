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

  // Mouse interaction for button tilt effect
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-red-50"
      >
        <div className="flex items-center space-x-3">
          <Loader2 className="h-8 w-8 text-red-500 animate-spin" />
          <span className="text-red-700 font-semibold">Loading cart...</span>
        </div>
      </motion.div>
    );
  }

  if (error || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 bg-white rounded-xl shadow-lg"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, bounce: 0.4, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <AlertCircle className="h-16 w-16 text-red-500" />
          </motion.div>
          <h2 className="text-3xl font-bold text-red-900 mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-red-700 mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
          >
            <Button
              onClick={() => router.push("/")}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateZ(${tilt}deg)`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <ShoppingCart className="mr-3" />
              Continue Shopping
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-red-50 py-12"
    >
      <div className="mx-auto max-w-5xl p-8 bg-white rounded-xl shadow-lg">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <h1 className="text-3xl font-bold text-red-900 flex items-center">
            <ShoppingCart className="mr-4 text-red-500" size={32} />
            Your Cart
          </h1>
        </motion.div>

        <ul className="divide-y divide-red-200">
          {cartItems.map((item) => (
            <motion.li
              key={item._id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center py-6 hover:bg-red-50 rounded-lg px-4"
            >
              <div>
                <p className="text-red-900 font-semibold text-lg">
                  Product ID: {item.productId}
                </p>
                <p className="text-red-700">Size: {item.size}</p>
                <p className="text-red-800 font-medium">
                  Price: ₹{item.price} x {item.quantity}
                </p>
              </div>
              <Button
                variant="destructive"
                onClick={() => handleRemoveItem(item.productId)}
                className="bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
              >
                <Trash2 className="mr-2" />
                Remove
              </Button>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 pt-6 border-t border-red-200 text-right"
        >
          <p className="text-2xl font-bold text-red-900 mb-4">
            Total: ₹{totalPrice}
          </p>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => alert("Proceeding to checkout...")}
          >
            Proceed to Checkout
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}