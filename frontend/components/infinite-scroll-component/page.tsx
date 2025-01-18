"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
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