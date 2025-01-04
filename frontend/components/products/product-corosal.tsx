import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface Photo {
  id: string;
  imageUrl: string;
  title: string;
  source: string;
  tags?: string;
}

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
  enter: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
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
  enter: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const staticImages: Photo[] = [
  {
    id: 'static1',
    imageUrl: '/corosal/corosal1.webp',
    title: 'New Year Collections',
    source: 'New year collection in jaipuri styles',
  },
  {
    id: 'static2',
    imageUrl: '/corosal/corosal2.webp',
    title: 'Wedding Specials',
    source: 'New wedding collection in jaipuri styles',
  },
  {
    id: 'static3',
    imageUrl: '/corosal/corosal3.webp',
    title: 'Wedding Western',
    source: 'New wedding in jaipuri and western styles',
  },
  {
    id: 'static4',
    imageUrl: '/corosal/corosal4.webp',
    title: 'Buy one get one free offer',
    source: 'By Jaipuri Adda',
  },
  {
    id: 'static5',
    imageUrl: '/corosal/corosal5.webp',
    title: 'Western wedding dresses',
    source: 'New wedding in jaipuri and western styles',
  },
  {
    id: 'static6',
    imageUrl: '/corosal/corosal6.webp',
    title: 'Weddin Collections',
    source: 'New Collections From Jaipuri adda',
  },
  {
    id: 'static7',
    imageUrl: '/corosal/corosal7.webp',
    title: 'Saree From Jaipuri Collection',
    source: 'By Addaa',
  },

];

const FashionCarousel = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
        <CarouselContent className="h-[50vh] md:h-[60vh] lg:h-[80vh]">
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
                      <motion.div className="relative w-full h-full">
                        <motion.img
                          key={photos[currentIndex].imageUrl}
                          src={photos[currentIndex].imageUrl}
                          alt={photos[currentIndex].title}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 5 }}
                        />
                        <motion.div
                          variants={overlayVariants}
                          initial="enter"
                          animate="visible"
                          exit="exit"
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 md:px-8 py-8 md:py-16"
                        >
                          <div className="max-w-7xl mx-auto">
                            <motion.p 
                              variants={textVariants}
                              className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4"
                            >
                              {photos[currentIndex].title}
                            </motion.p>
                            <motion.p 
                              variants={textVariants}
                              className="text-white/80 text-lg md:text-xl lg:text-2xl mb-2 md:mb-3"
                            >
                              By: {photos[currentIndex].source}
                            </motion.p>
                            {photos[currentIndex].tags && (
                              <motion.p 
                                variants={textVariants}
                                className="text-white/60 text-base md:text-lg lg:text-xl"
                              >
                                {photos[currentIndex].tags}
                              </motion.p>
                            )}
                          </div>
                        </motion.div>
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
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handlePrev}
      >
        ←
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 md:p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={handleNext}
      >
        →
      </motion.button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1.5 md:h-2 rounded-full ${
              index === currentIndex ? 'w-6 md:w-8 bg-white' : 'w-1.5 md:w-2 bg-white/50'
            }`}
            initial={false}
            animate={{
              width: index === currentIndex ? 24 : 6,
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