import { ProductGrid } from "@/components/products/product-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Suspense fallback={<Skeleton />}>
          <ProductGrid />
        </Suspense>
      </main>
    </div>
  );
}
