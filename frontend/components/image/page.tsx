import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lens } from '@/components/ui/lense';
import { cn } from "@/lib/utils";

interface ImageSwapperProps {
  images: string[];
  altText?: string;
  className?: string;
}

const ImageSwapper: React.FC<ImageSwapperProps> = ({ images, altText = "Product image", className = "" }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  const handleForward = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleBackward = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <div className={`space-y-6 sm:space-y-8 flex flex-col items-center ${className}`}>
      <div className="relative w-full sm:w-3/4 lg:w-1/2 bg-gray-50 rounded-xl overflow-hidden flex justify-center items-center">
        <motion.button
          onClick={handleBackward}
          className="z-30 absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors cursor-pointer"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <AnimatePresence mode="wait">
          <Lens hovering={hovering} setHovering={setHovering}>
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt={`${altText} - View ${selectedIndex + 1}`}
              className="w-full h-[60vh] sm:h-[80vh] object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4, ease: "easeOut" },
                },
              }}
              exit={{
                opacity: 0,
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            />
          </Lens>
        </AnimatePresence>

        <motion.button
          onClick={handleForward}
          className="z-30 absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors cursor-pointer"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      <div className="sm:ml-52 md:ml-52 lg:ml-52 grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              `relative aspect-square rounded-lg overflow-hidden`,
              selectedIndex === index
                ? 'ring-2 ring-blue-500'
                : 'ring-1 ring-gray-200 hover:ring-gray-300'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={image}
              alt={`${altText} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <AnimatePresence>
              {selectedIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black bg-opacity-10"
                />
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ImageSwapper;