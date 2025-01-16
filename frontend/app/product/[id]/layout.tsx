// Layout.tsx
'use client';
import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Product from './page';
import { products } from './data';
import { Skeleton } from "@/components/ui/skeleton";

interface Products {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  answers: number;
  inStock: boolean;
  delivery: string;
  deliveryDate: string;
  seller: string;
  category: string;
  model: string;
  images: string[];
  features: string[];
  description: string;
  chartArray?: { month: string; revenue: number; }[];
}

const Layout = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  useEffect(() => {
    const routeId = params?.id;
    const queryId = searchParams.get('id');

    const id = Array.isArray(routeId) ? routeId[0] : routeId || (Array.isArray(queryId) ? queryId[0] : queryId) || '';

    if (id) {
      const numericId = parseInt(id, 10);
      if (!isNaN(numericId)) {
        const foundProduct = products.find(p => p.id === numericId);
        if (foundProduct) {
          setSelectedProduct(foundProduct);
        }
      }
    }
  }, [params, searchParams]);

  if (!selectedProduct) {
    return <div className="w-full h-screen">
      <Skeleton className="w-full h-full" />
    </div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Product id={selectedProduct.id} />
    </div>
  );
}

export default Layout;
