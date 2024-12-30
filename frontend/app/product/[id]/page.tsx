"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import { useCart } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(params.id));
  const addToCart = useCart((state) => state.addItem);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      size: selectedSize,
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-4 text-3xl font-bold text-primary">
                ${product.price}
              </p>
              <p className="mt-4 text-gray-600">{product.description}</p>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">Select Size</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'bg-primary text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">Quantity</h2>
                <div className="mt-4 flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-md bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-md bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 text-lg"
                size="lg"
              >
                Add to Cart
              </Button>
              <Button
                onClick={() => router.push('/cart')}
                variant="outline"
                className="flex-1 text-lg"
                size="lg"
              >
                View Cart
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}