import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Photo {
  id: string;
  imageUrl: string;
  title: string;
  source: string;
  link?: string;
  tags?: string;
  isNew?: boolean;
  discount?: string;
}

const staticImages: Photo[] = [
  {
    id: 'static1',
    imageUrl: '/corosal/corosal1.webp',
    title: 'New Year Collections',
    source: 'New year collection in jaipuri styles',
    link: '/new-arrival?category=lounge-wear'
  },
  {
    id: 'static2',
    imageUrl: '/corosal/corosal2.webp',
    title: 'Wedding Specials',
    source: 'New wedding collection in jaipuri styles',
    link: '/collections/wedding'
  },
  {
    id: 'static3',
    imageUrl: '/corosal/corosal3.webp',
    title: 'Wedding Western',
    source: 'New wedding in jaipuri and western styles',
    link: '/collections/western-wedding'
  },
  {
    id: 'static4',
    imageUrl: '/corosal/corosal4.webp',
    title: 'Buy one get one free offer',
    source: 'By Jaipuri Adda',
    link: '/offers/bogo'
  },
  {
    id: 'static5',
    imageUrl: '/corosal/corosal5.webp',
    title: 'Western wedding dresses',
    source: 'New wedding in jaipuri and western styles',
    link: 'ethnic-wear?category=traditional-sarees'
  },
  {
    id: 'static6',
    imageUrl: '/corosal/corosal6.webp',
    title: 'Wedding Collections',
    source: 'New Collections From Jaipuri adda',
    link: '/collections/wedding'
  },
  {
    id: 'static7',
    imageUrl: '/corosal/corosal7.webp',
    title: 'Saree From Jaipuri Collection',
    source: 'By Addaa',
    link: '/collections/saree'
  },
];


const FashionCarousel = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPhotos(staticImages);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading && api && !isHovered) {
      const timer = setInterval(() => {
        api.scrollNext();
        updateCurrentIndex();
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [loading, api, isHovered]);

  useEffect(() => {
    if (!api) return;
    api.on('select', updateCurrentIndex);
  }, [api]);

  const updateCurrentIndex = () => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  };

  const handleNext = () => {
    if (api) {
      api.scrollNext();
      updateCurrentIndex();
    }
  };

  const handlePrev = () => {
    if (api) {
      api.scrollPrev();
      updateCurrentIndex();
    }
  };

  return (
    <div
      className="w-full relative group mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
          {loading ? (
            <CarouselItem className="w-full">
              <Card className="border-none w-full h-full">
                <CardContent className="p-0 h-full">
                  <Skeleton className="w-full h-full animate-pulse" />
                </CardContent>
              </Card>
            </CarouselItem>
          ) : (
            photos.map((photo, index) => (
              <CarouselItem key={photo.id} className="w-full md:w-full lg:w-full">
                <Link href={photo.link || '#'} className="block w-full h-full relative group">
                  <Card className="border-none w-full h-full relative overflow-hidden">
                    <CardContent className="p-0 w-full h-full">
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={photo.imageUrl}
                          alt={photo.title}
                          className="w-full h-full object-cover object-center 
                                   transform transition-transform duration-700 
                                   group-hover:scale-110"
                          draggable={false}
                          style={{ objectPosition: '50% 20%' }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                                      opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-wrap gap-2">
                          {photo.isNew && (
                            <Badge className="bg-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                              NEW
                            </Badge>
                          )}
                          {photo.discount && (
                            <Badge className="bg-green-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                              {photo.discount}
                            </Badge>
                          )}
                          {photo.tags && (
                            <Badge className="bg-blue-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                              {photo.tags}
                            </Badge>
                          )}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 transform translate-y-0 
                                      sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-500">
                          <div className="bg-black/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-6">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                              {photo.title}
                            </h3>
                            <p className="text-sm sm:text-lg md:text-xl text-white/80">
                              {photo.source}
                            </p>
                            <button className="mt-2 sm:mt-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-white text-black 
                                           rounded-full text-sm sm:text-base font-semibold transform 
                                           hover:scale-105 transition-transform duration-300 
                                           opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                              Shop Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
      </Carousel>

      <motion.button
        className="hidden sm:flex absolute left-2 sm:left-6 top-1/2
                   bg-white/90 hover:bg-white text-black rounded-full 
                   w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 items-center justify-center
                   shadow-lg transition-all duration-300 z-10
                   opacity-0 group-hover:opacity-100"
        onClick={handlePrev}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        className="hidden sm:flex absolute right-2 sm:right-6 top-1/2 
                   bg-white/90 hover:bg-white text-black rounded-full 
                   w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 items-center justify-center
                   shadow-lg transition-all duration-300 z-10
                   opacity-0 group-hover:opacity-100"
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className="group relative"
          >
            <div className="h-1 sm:h-2 rounded-full transition-all duration-300 bg-white/30 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full
                          ${index === currentIndex
                    ? 'w-8 sm:w-12 bg-white'
                    : 'w-1 sm:w-2 bg-white/50 group-hover:bg-white/70'}`
                }
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FashionCarousel;