import { ShoppingBag } from "lucide-react";
import { ProductGrid } from "@/components/products/product-grid";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MainMenu } from "@/components/layout/menubar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-[1800px] px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="flex items-center text-2xl font-bold">
                <ShoppingBag className="mr-2 h-6 w-6" />
                Fashion Store
              </h1>
              <MainMenu />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <ProductGrid />
    </div>
  );
}