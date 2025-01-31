"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Star, StarHalf } from "lucide-react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
        rating?: number;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    const gradientColors = [
        'from-purple-600/80 to-pink-500/80',
        'from-blue-500/80 to-teal-400/80',
        'from-green-500/80 to-emerald-400/80',
        'from-yellow-400/80 to-orange-500/80',
        'from-red-500/80 to-rose-400/80'
    ];

    useEffect(() => {
        if (!containerRef.current || !scrollerRef.current) return;

        const scrollerContent = Array.from(scrollerRef.current.children);

        // Create duplicates for infinite scroll
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
                scrollerRef.current.appendChild(duplicatedItem);
            }
        });

        // Set CSS variables for animation
        const directionValue = direction === "left" ? "forwards" : "reverse";
        const speedValue = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "60s";

        containerRef.current.style.setProperty("--animation-direction", directionValue);
        containerRef.current.style.setProperty("--animation-duration", speedValue);

        // Add the styles dynamically
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes scroll {
                from {
                    transform: translateX(0);
                }
                to {
                    transform: translateX(calc(-50%));
                }
            }

            .animate-scroll {
                animation: scroll var(--animation-duration) linear infinite var(--animation-direction);
            }

            .hover-pause:hover .animate-scroll {
                animation-play-state: paused;
            }
        `;
        document.head.appendChild(styleSheet);

        return () => {
            styleSheet.remove();
        };
    }, [direction, speed, items]);

    const StarRating = ({ rating }: { rating: number }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <div className="flex items-center gap-1">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                {hasHalfStar && (
                    <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                )}
                {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                    <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
                ))}
            </div>
        );
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                pauseOnHover && "hover-pause",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className={`w-[350px] max-w-full relative rounded-2xl border-0 flex-shrink-0 px-8 py-6 md:w-[450px] backdrop-blur-sm bg-gradient-to-br ${gradientColors[idx % gradientColors.length]} shadow-lg hover:shadow-xl transition-all duration-200`}
                        key={`${item.name}-${idx}`}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <StarRating rating={item.rating || 0} />
                            <span className="relative z-20 text-sm leading-[1.6] text-white font-normal mt-3 block">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] text-white font-medium">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.6] text-white/80 font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfiniteMovingCards;