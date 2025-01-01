import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const FashionCarousel = () => {
  interface Photo {
    id: string;
    imageUrl: string;
    title: string;
    source: string;
    tags?: string;
  }

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const staticImages = [
    {
      id: 'static1',
      imageUrl: 'https://wallpaperaccess.com/full/4161698.jpg',
      title: 'Summer Collection',
      source: 'Fashion Gallery',
    },
    {
      id: 'static2',
      imageUrl: 'https://wallpaperaccess.com/full/288747.jpg',
      title: 'Winter Wear',
      source: 'Style Studio',
    },
    {
      id: 'static3',
      imageUrl: 'https://wallpaperaccess.com/full/7333817.jpg',
      title: 'Winter Wear',
      source: 'Style Studio',
    },
    {
      id: 'static4',
      imageUrl: 'https://wallpaperaccess.com/full/6567939.jpg',
      title: 'Winter Wear',
      source: 'Style Studio',
    },
    {
      id: 'static5',
      imageUrl: 'https://wallpaperaccess.com/full/8045724.jpg',
      title: 'Winter Wear',
      source: 'Style Studio',
    },
  ];

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.9,
    },
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPhotos(staticImages);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [loading, photos.length]);

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="h-[80vh]">
          {loading ? (
            <CarouselItem>
              <Card className="border-none w-full h-full">
                <CardContent className="p-0 h-full">
                  <Skeleton className="w-full h-full" />
                </CardContent>
              </Card>
            </CarouselItem>
          ) : (
            <AnimatePresence mode="wait">
              <CarouselItem key={photos[currentIndex].id} className="w-full h-full">
                <motion.div
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    opacity: { duration: 0.8 },
                    scale: { duration: 1 },
                  }}
                  className="w-full h-full"
                >
                  <Card className="border-none w-full h-full relative overflow-hidden">
                    <CardContent className="p-0 w-full h-full">
                      <motion.img
                        key={photos[currentIndex].imageUrl}
                        src={photos[currentIndex].imageUrl}
                        alt={photos[currentIndex].title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 3 }}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-8 py-12"
                      >
                        <div className="max-w-7xl mx-auto">
                          <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-white text-3xl font-bold mb-2"
                          >
                            {photos[currentIndex].title}
                          </motion.p>
                          <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="text-white/80 text-xl mb-2"
                          >
                            By: {photos[currentIndex].source}
                          </motion.p>
                          {photos[currentIndex].tags && (
                            <motion.p 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.9, duration: 0.5 }}
                              className="text-white/60 text-lg"
                            >
                              {photos[currentIndex].tags}
                            </motion.p>
                          )}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            </AnimatePresence>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FashionCarousel;