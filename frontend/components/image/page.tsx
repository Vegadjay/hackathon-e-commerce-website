import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lens } from '@/components/ui/lense';
import { cn } from "@/lib/utils";

interface ImageSwapperProps {
  images: string[];
  altText?: string;
}

const ImageSwapper: React.FC<ImageSwapperProps> = ({ images, altText = "Product image" }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  return (
    <div className="-space-y-16  ">
      <div className="relative h-[580px] sm:h-[700px] md:h-[580px] lg:h-[1320px] w-full bg-gray-50 rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <Lens hovering={hovering} setHovering={setHovering}>
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt={`${altText} - View ${selectedIndex + 1}`}
              className="w-full h-full object-cover"
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

        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 opacity-0 hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
            className="p-2 sm:p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
            className="p-2 sm:p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`
              relative aspect-square rounded-lg overflow-hidden
              ${selectedIndex === index 
                ? 'ring-2 ring-blue-500' 
                : 'ring-1 ring-gray-200 hover:ring-gray-300'
              }
            `}
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
