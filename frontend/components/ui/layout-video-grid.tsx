"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
    id: number;
    videoUrl: string;
    className: string;
};



export const VideoGrid = ({ cards }: { cards: Card[] }) => {
    return (
        <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4">
            {cards.map((card) => (
                <div key={card.id} className={cn(card.className)}>
                    <motion.div className="relative overflow-hidden bg-black rounded-xl aspect-video">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={card.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};