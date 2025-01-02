"use client";


// todo: Where you use google login than use this all things like signIn and signOut method.
import { signOut, useSession } from "next-auth/react";
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
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from "react";
import { useCart } from "@/lib/store";
import { useRouter } from "next/navigation";


const collections = {
  "New Arrivals": [
    { title: "Latest Collections", href: "/new-arrivals" },
    { title: "LOUNGE WEAR", href: "/lounge-wear" },
    { title: "Solid Wear Clothing", href: "/solid-wear" },
    { title: "PLUS SIZE SUITS", href: "/plus-size" },
    { title: "Bedsheets", href: "/bedsheets" }
  ],
  "Ethnic Wear": [
    { title: "Traditional Suits", href: "/ethnic-wear/suits" },
    { title: "Kurta Sets", href: "/ethnic-wear/kurta-sets" },
    { title: "Indian Wear", href: "/ethnic-wear/indian" },
    { title: "Western Wear", href: "/ethnic-wear/western" },
    { title: "Festive Collection", href: "/ethnic-wear/festive" }
  ],
  "Bestsellers": [
    { title: "Most Popular", href: "/bestsellers/popular" },
    { title: "Trending Now", href: "/bestsellers/trending" },
    { title: "Top Rated", href: "/bestsellers/top-rated" },
    { title: "Customer Favorites", href: "/bestsellers/favorites" },
    { title: "Premium Collection", href: "/bestsellers/premium" }
  ],
  "Fabrics": [
    { title: "Cotton", href: "/fabrics/cotton" },
    { title: "Silk", href: "/fabrics/silk" },
    { title: "Chiffon", href: "/fabrics/chiffon" },
    { title: "Georgette", href: "/fabrics/georgette" },
    { title: "Premium Fabrics", href: "/fabrics/premium" }
  ],
  "Special Offers": [
    { title: "Clearance Sale", href: "/sale/clearance" },
    { title: "Season End", href: "/sale/season-end" },
    { title: "Bundle Deals", href: "/sale/bundles" },
    { title: "Student Discount", href: "/sale/student" },
    { title: "First Order Discount", href: "/sale/first-order" }
  ]
};

export function MainMenu({ isMobile = false, onLinkClick = () => {} }) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    if (isMobile) {
      setOpenCategory(openCategory === category ? null : category);
    }
  };


  if (isMobile) {
    return (
      <div className="w-full space-y-1">
        {Object.entries(collections).map(([category, items]) => (
          <div key={category} className="border-b border-gray-100">
            <button
              onClick={() => handleCategoryClick(category)}
              className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-700">{category}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-gray-500 transition-transform duration-200",
                  openCategory === category && "rotate-180"
                )}
              />
            </button>

            
            <AnimatePresence initial={false}>
              {openCategory === category && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden bg-gray-50"
                >
                  <div className="space-y-1 px-4 py-2">
                    {items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => onLinkClick()}
                        className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    );
  }

  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList className="flex space-x-4">
        {Object.entries(collections).map(([category, items]) => (
          <NavigationMenuItem key={category}>
            <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              {category}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 lg:w-[650px] lg:grid-cols-2 bg-white shadow-lg rounded-lg">
                {items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-primary"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function Navbar() {
    const router = useRouter();
  const items = useCart((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">Fashion Store</span>
          </Link>

          <div className="hidden lg:block flex-1 px-8">
            <MainMenu />
          </div>

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

            {session ? (
              <button
                onClick={() => signOut()}
                className="rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {router.push('/register')}}
                className="relative flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
              >
                Login
              </button>
            )}

            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="lg:hidden rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-lg overflow-y-auto lg:hidden"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <span className="text-xl font-bold">Menu</span>
                <button
                  onClick={handleCloseMenu}
                  className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="py-4">
                <MainMenu isMobile={true} onLinkClick={handleCloseMenu} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;