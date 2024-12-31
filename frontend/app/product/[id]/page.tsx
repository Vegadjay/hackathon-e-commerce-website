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
  return (
    <NavigationMenu className="max-w-full justify-start">
      <NavigationMenuList className="space-x-2">
        {Object.entries(collections).map(([category, items]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2"
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
      </NavigationMenuList>
    </NavigationMenu>
  );
}