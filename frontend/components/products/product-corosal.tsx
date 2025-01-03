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
  const [direction, setDirection] = useState(0);

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
      title: 'Autumn Elegance',
      source: 'Style Studio',
    },
    {
      id: 'static4',
      imageUrl: 'https://wallpaperaccess.com/full/6567939.jpg',
      title: 'Spring Fashion',
      source: 'Style Studio',
    },
    {
      id: 'static5',
      imageUrl: 'https://wallpaperaccess.com/full/8045724.jpg',
      title: 'Evening Collection',
      source: 'Style Studio',
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const overlayVariants = {
    enter: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const textVariants = {
    enter: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -20,
      opacity: 0,
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
        setDirection(1);
        setCurrentIndex((prevIndex) => 
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [loading, photos.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full relative group">
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
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <CarouselItem key={photos[currentIndex].id} className="w-full h-full">
                <motion.div
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                    scale: { duration: 0.5 },
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
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 5 }}
                      />
                      <motion.div
                        variants={overlayVariants}
                        initial="enter"
                        animate="visible"
                        exit="exit"
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-8 py-16"
                      >
                        <div className="max-w-7xl mx-auto">
                          <motion.p 
                            variants={textVariants}
                            className="text-white text-4xl font-bold mb-4"
                          >
                            {photos[currentIndex].title}
                          </motion.p>
                          <motion.p 
                            variants={textVariants}
                            className="text-white/80 text-2xl mb-3"
                          >
                            By: {photos[currentIndex].source}
                          </motion.p>
                          {photos[currentIndex].tags && (
                            <motion.p 
                              variants={textVariants}
                              className="text-white/60 text-xl"
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

      <motion.button
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handlePrev}
      >
        ←
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleNext}
      >
        →
      </motion.button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full ${index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
            initial={false}
            animate={{
              width: index === currentIndex ? 32 : 8,
              backgroundColor: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.5)',
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default FashionCarousel;