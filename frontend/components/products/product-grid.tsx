"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import FashionCarousel from "@/components/products/product-corosal";
import { AppleCardsCarouselDemo } from "@/app/product/component/apple-card-corosal";
import Earthcomponent from "@/components/earthcomponent/earth-component";
import { VideoGrid } from "@/components/ui/layout-video-grid";
import { HeroScrollDemo } from "@/components/scroll-component/page";
import { InfiniteMovingCardsDemo } from "@/components/infinite-scroll-component/page";
import ProductGridComponent from "@/components/sale-product-grid/page";
import Filtercomponent from "@/components/filter-component/filter";
import Heading from "@/components/title/page";


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

      <div className="mt-6">
        <Heading text="Step into Tradition with Rajwadi Poshak" />
        <FashionCarousel />
      </div>




      {/* Second component */}
      <div className="mt-20">
        <Heading text="Elevate Your Style: Timeless Silk Suit Ensembles" />
        <AppleCardsCarouselDemo />
      </div>


      {/* Fourth Fiter component */}

      {/* <Filtercomponent /> */}

      {/* Our Products */}

      <div className="mt-20">
        <Heading text="On Sale Products" />
        {/* <Filtercomponent /> */}
        <ProductGridComponent />
      </div>

      {/* Add here to that grid component */}


      <div className="mt-20">
        <Heading text="Video Gallery" />
        {/* @ts-ignore */}
        <VideoGrid cards={cards} />
      </div>
      {/* Scroll Effect Component */}

      <div className="-mt-20">
        <HeroScrollDemo title="Top Pick of the Season" discription="Checkout Here" imageId={238} />
      </div>


      {/* Third Component */}
      <div className="mt-20">
        <Heading text="Fast, Reliable, and Right to Your Door!" />
        <Earthcomponent />
      </div>

      {/* Infinite Scrolling Feedback */}
      <InfiniteMovingCardsDemo />

    </motion.div>
  );
}