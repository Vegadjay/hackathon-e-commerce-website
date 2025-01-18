"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const collections = {
  "New Arrivals": [
    { title: "Spring Collection", href: "#" },
    { title: "Summer Essentials", href: "#" },
    { title: "Limited Edition", href: "#" },
  ],
  "Collections": [
    { title: "Casual Wear", href: "#" },
    { title: "Formal Attire", href: "#" },
    { title: "Sports & Active", href: "#" },
    { title: "Seasonal Trends", href: "#" },
  ],
  "Brands": [
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
  const itemCount = 3;

  return (
    <NavigationMenu className="max-w-full justify-start">
      <NavigationMenuList className="space-x-2 flex items-center flex-col md:flex-row">
        {Object.entries(collections).map(([category, items]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 "
              >
                {items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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

        <NavigationMenuItem>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
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
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MainMenu;
