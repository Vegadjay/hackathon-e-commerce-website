"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import FashionCarousel from "@/components/products/product-corosal";
import { AppleCardsCarouselDemo } from "@/app/product/component/apple-card-corosal";
import Earthcomponent from "@/components/earthcomponent/earth-component";
import { VideoGrid } from "@/components/ui/layout-video-grid";
import { HeroScrollDemo } from "@/components/scroll-component/page";
import Filtercomponent from "@/components/filter-component/filter";


const cards = [
  {
    id: 1,
    videoUrl: "/website_videos/big1.mp4",
    className: "col-span-2",
    orientation: 'landscape'
  },
  {
    id: 2,
    videoUrl: "/website_videos/long2.mp4",
    className: "row-span-2",
    orientation: 'portrait'
  },
  {
    id: 3,
    videoUrl: "/website_videos/landscap.mp4",
    className: "col-span-2",
    orientation: 'landscape'
  }
];

const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};



export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current) {
        setShowFilters(false);
      } else {
        setShowFilters(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, priceRange, selectedSizes]);


  return (
    <motion.div
      className="mx-auto max-w-[1800px]"
      initial="hidden"
      animate="visible"
      variants={pageTransition}
    >

      {/* here add two or more Component here ... */}

      {/* <Textanimation /> */}

      <div className="mt-10">
        <FashionCarousel />
      </div>


      {/* second component */}

      <Earthcomponent />

      {/* Third Component */}

      <AppleCardsCarouselDemo />

      {/* Fourth Fiter component */}

      {/* <Filtercomponent /> */}

      {/* Add here to that grid component */}
      {/* @ts-ignore */}
      <VideoGrid cards={cards} />


      {/* Scroll Effect Component */}

      <HeroScrollDemo title="Our Bestsellers" discription="Checkout Here" imageId={238} />

      {/* Infinite Scrolling Feedback */}

    </motion.div>
  );
}