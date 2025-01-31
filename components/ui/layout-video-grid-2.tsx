"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
    id: number;
    videoUrl: string;
    className: string;
    orientation?: 'landscape' | 'portrait';
    title?: string;
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

export const VideoGrid = ({ cards, title = "Video Gallery" }: { cards: Card[], title?: string }) => {
    return (
        <div className="w-full min-h-screen bg-white text-black">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center py-8 md:py-12"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    {title}
                </h1>
                <div className="h-1 w-24 bg-black mx-auto mt-4 rounded-full" />
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full h-full p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-2 sm:gap-3 md:gap-4"
            >
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                            "transition-all duration-300",
                            card.className
                        )}
                    >
                        <motion.div
                            className={cn(
                                "relative overflow-hidden bg-gray-100 shadow-lg rounded-lg md:rounded-xl",
                                "group hover:shadow-xl hover:shadow-black/10",
                                card.orientation === 'portrait'
                                    ? 'h-[30rem] sm:h-[40rem] md:h-[45rem] lg:h-[56.5rem]'
                                    : 'aspect-video'
                            )}
                        >
                            <video
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={card.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {card.title && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 backdrop-blur-sm"
                                >
                                    <h3 className="text-lg font-medium text-black">
                                        {card.title}
                                    </h3>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};