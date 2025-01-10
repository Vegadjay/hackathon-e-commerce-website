"use client";

import { signOut, useSession } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { User, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useRenderContext } from "@/contexts/RenderContext";
import Cookies from "js-cookie";

const collections = {
  "New Arrivals": {
    basePath: "/new-arrival",
    items: [
      { title: "Latest Collections", category: "latest-collection" },
      { title: "Lounge Wear", category: "lounge-wear" },
      { title: "Solid Wear Clothing", category: "solid-wear-clothing" },
      { title: "Plus Size Suits", category: "plus-size" },
      { title: "Bedsheets", category: "bedsheets" }
    ]
  },
  "Ethnic Wear": {
    basePath: "/ethnic-wear",
    items: [
      { title: "Traditional Suits", category: "traditional-suits" },
      { title: "Kurta Sets", category: "kurta-sets" },
      { title: "Indian Wear", category: "indian" },
      { title: "Western Wear", category: "western" },
      { title: "Festive Collection", category: "festive" }
    ]
  },
  "Bestsellers": {
    basePath: "/bestsellers",
    items: [
      { title: "Most Popular", category: "popular" },
      { title: "Trending Now", category: "trending" },
      { title: "Top Rated", category: "top-rated" },
      { title: "Customer Favorites", category: "favorites" },
      { title: "Premium Collection", category: "premium" }
    ]
  },
  "Fabrics": {
    basePath: "/fabrics",
    items: [
      { title: "Cotton", category: "cotton" },
      { title: "Silk", category: "silk" },
      { title: "Chiffon", category: "chiffon" },
      { title: "Georgette", category: "georgette" },
      { title: "Premium Fabrics", category: "premium" }
    ]
  },
  "Special Offers": {
    basePath: "/sale",
    items: [
      { title: "Clearance Sale", category: "clearance" },
      { title: "Season End", category: "season-end" },
      { title: "Bundle Deals", category: "bundles" },
      { title: "Student Discount", category: "student" },
      { title: "First Order Discount", category: "first-order" }
    ]
  }
};

export function MainMenu({ isMobile = false, onLinkClick = () => {} }) {
  const [openCategory, setOpenCategory] = useState(null);
  const router = useRouter();

  const handleCategoryClick = (category:any) => {
    if (isMobile) {
      setOpenCategory(openCategory === category ? null : category);
    }
  };

  const handleLinkClick = (basePath:string, category:string) => {
    const url = `${basePath}?category=${category}`;
    router.push(url);
    onLinkClick();
  };

  if (isMobile) {
    return (
      <div className="w-full space-y-1">
        {Object.entries(collections).map(([categoryName, categoryData]) => (
          <div key={categoryName} className="border-b border-gray-100">
            <button
              onClick={() => handleCategoryClick(categoryName)}
              className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-700">{categoryName}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-gray-500 transition-transform duration-200",
                  openCategory === categoryName && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {openCategory === categoryName && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden bg-gray-50"
                >
                  <div className="space-y-1 px-4 py-2">
                    {categoryData.items.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => handleLinkClick(categoryData.basePath, item.category)}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100"
                      >
                        {item.title}
                      </button>
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
        {Object.entries(collections).map(([categoryName, categoryData]) => (
          <NavigationMenuItem key={categoryName}>
            <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              {categoryName}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-3 p-4 lg:w-[650px] lg:grid-cols-2 bg-white shadow-lg rounded-lg">
                {categoryData.items.map((item) => (
                  <li key={item.title}>
                    <NavigationMenuLink asChild>
                      <button
                        onClick={() => handleLinkClick(categoryData.basePath, item.category)}
                        className="block w-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-primary text-left"
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                      </button>
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
  const { data: session, status } = useSession();
  const [isMobile, setIsMobile] = useState(false);
  const [login, setLogin] = useState(false);
  const { shouldRender, triggerRender } = useRenderContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    const token = Cookies.get("token");
    if (token != undefined) {
      setLogin(true);
    }
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));
    triggerRender();
    setLogin(false);
    router.push("/");
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <img src="/logo.png" alt="Company logo"/>
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

            {login ? (
              <div id="profile-dropdown" className="relative inline-block text-left">
                <button
                  onClick={handleToggleDropdown}
                  className="flex items-center justify-center font-semibold rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <img src="user.avif" className="h-8 w-8 bg-gray-200 rounded-full" alt="User avatar" />
                </button>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  >
                    <div className="py-1">
                      <button
                        onClick={() => router.push("/updateprofile")}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Update Profile
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="flex ">
                <button
                  onClick={() => router.push("/login")}
                  className="relative flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
                >
                <User />
                <span className="hidden sm:inline">Login</span>
              </button>
              </div>
            )}

            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="block lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-50 border-t border-gray-200"
          >
            <MainMenu isMobile onLinkClick={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}