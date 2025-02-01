'use client'
import Loader from "./loading";
import { Suspense, useEffect, useState } from "react";
import React from "react";
import { useRenderContext } from "@/contexts/RenderContext";
const LazyComponent = React.lazy(() => import('@/components/products/product-grid'));

export default function Home() {
  const { shouldRender } = useRenderContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [shouldRender]);

  return (
    <div className="min-h-screen bg-background">
      {isLoading ? <Loader /> :
        <main>
          <Suspense fallback={<Loader />}>
            <LazyComponent />
          </Suspense>
        </main>
      }
    </div>
  );
}
