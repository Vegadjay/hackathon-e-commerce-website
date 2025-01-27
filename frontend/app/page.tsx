'use client'
import Loader from "./loading";
import { Suspense } from "react";
import React from "react";
const LazyComponent = React.lazy(() => import('@/components/products/product-grid'));


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Suspense fallback={<Loader />}>
          <LazyComponent />
        </Suspense>
      </main>
    </div>
  );
}
