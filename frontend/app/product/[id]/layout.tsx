'use client';
import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Product from './page';
import { products } from './data';
import { Products } from './data';

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
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Product 
        id={selectedProduct.id}
        name={selectedProduct.name}
        price={selectedProduct.price}
        rating={selectedProduct.rating}
        reviews={selectedProduct.reviews}
        answers={selectedProduct.answers}
        inStock={selectedProduct.inStock}
        delivery={selectedProduct.delivery}
        deliveryDate={selectedProduct.deliveryDate}
        seller={selectedProduct.seller}
        category={selectedProduct.category}
        model={selectedProduct.model}
        images={selectedProduct.images}
        features={selectedProduct.features}
        description={selectedProduct.description}
      />
    </div>
  );
}

export default Layout;