'use client';

import { useState, useEffect } from "react";
import { useSearchParams, useParams, redirect, useRouter } from "next/navigation";
import Product from './page';
import { Skeleton } from "@/components/ui/skeleton";

interface Products {
  _id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  answers: number;
  inStock: number;
  delivery: string;
  deliveryDate: string;
  seller: string;
  category: string;
  model: string;
  images: string[];
  features: string[];
  description: string;
  chartArray?: { month: string; revenue: number }[];
}

const Layout = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
  const router = useRouter();

  const fetchProductById = async (productId: string) => {
    try {
      const response = await fetch(`/api/product/${productId}`).then((res) => res.json());
      if (response.success) {
        setSelectedProduct(response.data);
      } else {
        router.back();
        console.error(`Failed to fetch product: ${response.error}`);
      }
    } catch (error) {
      console.error(`Error fetching product: ${error}`);
    }
  };

  useEffect(() => {
    const id: any = params?.id || searchParams.get('id') || '';

    if (id) {
      fetchProductById(id);
    }
  }, []);

  if (!selectedProduct) {
    return (
      <div className="w-full h-screen">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Product product={selectedProduct} />
    </div>
  );
};

export default Layout;
