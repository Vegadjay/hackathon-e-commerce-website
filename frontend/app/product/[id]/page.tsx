// Page.tsx

'use client'
import { useState } from "react";
import Layout from "@/app/product/[id]/layout"; 
import { useRouter, useSearchParams } from "next/navigation";
import { products } from './transformed_product'
const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const productId = parseInt(searchParams.get('id') || '1', 10);
  const product = products.find(p => p.id === productId);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Added to cart successfully!');
    } catch (error) {
      alert('Failed to add to cart. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      router.push(`/checkout?productId=${product.id}&quantity=${quantity}`);
    } else {
      alert('Product not found');
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout
      product={product}
      quantity={quantity}
      setQuantity={setQuantity}
      isLoading={isLoading}
      handleAddToCart={handleAddToCart}
      handleBuyNow={handleBuyNow}
    />
  );
};

export default Page;
