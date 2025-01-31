import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lens } from '@/components/ui/lense';
import { cn } from "lib/utils";

interface ImageSwapperProps {
  images: string[];
  altText?: string;
  className?: string;
}

const ImageSwapper: React.FC<ImageSwapperProps> = ({ images, altText = "Product image", className = "" }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  return (
    <div className={`space-y-6 sm:space-y-8 flex flex-col items-center ${className}`}>
      <div className="relative w-full sm:w-3/4 lg:w-1/2 bg-gray-50 hover:cursor-none rounded-xl overflow-hidden flex justify-center items-center">
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
      </div>

      <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-3">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              `relative aspect-square rounded-lg overflow-hidden w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24`,
              selectedIndex === index
                ? 'ring-2 ring-red-400'
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