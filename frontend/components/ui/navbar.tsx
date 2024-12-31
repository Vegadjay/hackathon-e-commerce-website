"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/store";

const collections = {
  "New Arrivals": [
    { title: "Spring Collection", href: "#" },
    { title: "Summer Essentials", href: "#" },
    { title: "Limited Edition", href: "#" },
  ],
  Collections: [
    { title: "Casual Wear", href: "#" },
    { title: "Formal Attire", href: "#" },
    { title: "Sports & Active", href: "#" },
    { title: "Seasonal Trends", href: "#" },
  ],
  Brands: [
    { title: "Premium Brands", href: "#" },
    { title: "Designer Labels", href: "#" },
    { title: "Sustainable Fashion", href: "#" },
  ],
  "Special Offers": [
    { title: "Clearance Sale", href: "#" },
    { title: "Bundle Deals", href: "#" },
    { title: "Student Discount", href: "#" },
  ],
};

export function MainMenu() {
  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList className="flex flex-col lg:flex-row lg:space-x-4">
        {Object.entries(collections).map(([category, items]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger className="text-sm font-medium text-gray-700">
              {category}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid w-[300px] gap-3 p-4 lg:w-[500px] lg:grid-cols-2 bg-white"
              >
                {items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </motion.ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function Navbar() {
  const items = useCart((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">Fashion Store</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1 px-8">
            <MainMenu />
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white"
                >
                  {itemCount}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t lg:hidden"
          >
            <div className="py-4">
              <MainMenu />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;