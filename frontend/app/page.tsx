import { ProductGrid } from "@/components/products/product-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"></header>
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}
