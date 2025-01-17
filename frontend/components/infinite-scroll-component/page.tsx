// InfiniteMovingCards.tsx
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
}) => {
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const baseVelocity = speed === "fast" ? 2 : speed === "slow" ? 1 : 1.5;
    const x = useMotionValue(0);
    const springConfig = { damping: 50, stiffness: 400 };
    const smoothX = useSpring(x, springConfig);

    const directionFactor = direction === "right" ? -1 : 1;
    const finalVelocity = baseVelocity * directionFactor;

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
        }
    }, []);

    useAnimationFrame((time, delta) => {
        if (!containerWidth) return;
        x.set((x.get() + finalVelocity * (delta / 1000)) % containerWidth);
    });

    const gradientColors = [
        'from-purple-600 to-pink-500',
        'from-blue-500 to-teal-400',
        'from-green-500 to-emerald-400',
        'from-yellow-400 to-orange-500',
        'from-red-500 to-rose-400'
    ];

    return (
        <div
            ref={containerRef}
            className="overflow-hidden w-full relative"
            style={{ maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)" }}
        >
            <motion.div
                className="flex gap-4 w-fit"
                style={{ x: smoothX }}
                whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
            >
                {items.concat(items).map((item, idx) => {
                    const colorIndex = idx % gradientColors.length;
                    return (
                        <motion.div
                            key={idx}
                            className={`flex-shrink-0 w-[350px] h-[200px] rounded-2xl bg-gradient-to-br ${gradientColors[colorIndex]} p-6 group hover:scale-105 transition-transform duration-300 cursor-pointer`}
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-white font-semibold mb-2 text-lg group-hover:text-white/90">
                                        {item.title}
                                    </div>
                                    <p className="text-white/90 text-sm leading-relaxed line-clamp-3 group-hover:text-white/80">
                                        {item.quote}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-sm font-bold text-gray-800">
                                            {item.name[0]}
                                        </div>
                                        <div className="ml-2">
                                            <p className="text-white text-sm font-medium">{item.name}</p>
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.floor(item.rating)
                                                            ? "text-yellow-300"
                                                            : "text-gray-300"
                                                            }`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

// Demo Component
export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-br from-slate-900 to-slate-800 items-center justify-center relative overflow-hidden">
            <div className="w-full">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">
                    What Our Customers Say
                </h2>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    );
}

const testimonials = [
    {
        quote:
            "I absolutely love the vibrant colors and intricate designs of Jaipuri clothes! The quality is top-notch, and I feel so stylish wearing them.",
        name: "Aarav Patel",
        rating: 3,
        title: "Jaipuri Kurta",
    },
    {
        quote:
            "The Jaipuri sarees are simply stunning! I wore one to a family wedding, and everyone complimented me on the beautiful patterns and fabric.",
        name: "Meera Sharma",
        rating: 4,
        title: "Jaipuri Saree",
    },
    {
        quote:
            "I was looking for a traditional yet comfortable outfit, and the Jaipuri dresses exceeded my expectations. Perfect for any occasion!",
        name: "Priya Gupta",
        rating: 3.4,
        title: "Jaipuri Anarkali Dress",
    },
    {
        quote:
            "The craftsmanship of Jaipuri jackets is unmatched. They are not only stylish but also super comfortable. Highly recommend to anyone looking for ethnic wear.",
        name: "Rajeev Singh",
        rating: 5,
        title: "Jaipuri Jacket",
    },
    {
        quote:
            "I purchased a Jaipuri dupatta, and it has become my go-to accessory. The design is so elegant, and the fabric feels luxurious.",
        name: "Neha Yadav",
        rating: 4.5,
        title: "Jaipuri Dupatta",
    },
    {
        quote:
            "I bought a Jaipuri lehenga for my sister's wedding, and it was absolutely perfect! The embroidery and fabric were flawless. She looked stunning.",
        name: "Ananya Joshi",
        rating: 4,
        title: "Jaipuri Lehenga",
    },
    {
        quote:
            "The Jaipuri tunics are perfect for casual wear. They're so comfortable and have such a unique charm that makes them stand out in any crowd.",
        name: "Vikram Desai",
        rating: 4.3,
        title: "Jaipuri Tunic",
    },
    {
        quote:
            "I ordered a Jaipuri shawl, and I was amazed by the attention to detail. It's a beautiful addition to my winter wardrobe!",
        name: "Rita Mehta",
        rating: 3,
        title: "Jaipuri Shawl",
    },
    {
        quote:
            "Jaipuri kurtis are so versatile! I wear mine for work and casual outings, and it always looks amazing. The comfort is unmatched.",
        name: "Suman Kaur",
        rating: 5,
        title: "Jaipuri Kurti",
    },
    {
        quote:
            "I bought a pair of Jaipuri harem pants, and they are my new favorite go-to outfit for the weekends. Super comfy and stylish!",
        name: "Raghav Sharma",
        rating: 3.2,
        title: "Jaipuri Harem Pants",
    },
    {
        quote:
            "I absolutely adore my Jaipuri cotton saree. It's lightweight and breathable, perfect for the hot summer days. The designs are gorgeous too.",
        name: "Shivani Agarwal",
        rating: 3.5,
        title: "Jaipuri Cotton Saree",
    },
];