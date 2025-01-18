import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Truck, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Heading from '@/components/title/page';
import { ProductFilters } from '@/components/products/product-filters';

export interface Products {
    id: number;
    name: string | "";
    price: number;
    sale?: string;
    rating: number;
    reviews: number;
    answers: number;
    inStock: boolean;
    delivery: string;
    deliveryDate: string;
    seller: string;
    color: string[];
    category: string;
    model: string;
    size?: string[];
    images: string[];
    features: string[];
    description: string;
}


const products = [
    {
        "id": 334,
        "name": "Wildflower White Dress with Embroidery Detailing",
        "price": 3499,
        "sale": "33% Off",
        "rating": 4.9,
        "reviews": 2183,
        "answers": 28,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Off white"
        ],
        "category": "season-end",
        "model": "RP-790)",
        "size": [
            ""
        ],
        "images": [
            "/detailphotos/334.1.webp",
            "/detailphotos/334.2.webp",
            "/detailphotos/334.3.webp",
            "/detailphotos/334.4.webp",
            "/detailphotos/334.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure silk",
            "Fit - Relaxed (CODE :RP-790)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Unleash your inner wildflower with this stunning white dress featuring intricate embroidery detailing. Perfect for those who love to take risks, this dress will make you feel bold and adventurous. Stand out from the crowd and embrace the challenge of standing out with this unique and beautiful dress.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 3791
            },
            {
                "month": "Feb",
                "revenue": 1079
            },
            {
                "month": "Mar",
                "revenue": 2583
            },
            {
                "month": "Apr",
                "revenue": 7253
            },
            {
                "month": "May",
                "revenue": 9101
            },
            {
                "month": "Jun",
                "revenue": 6803
            },
            {
                "month": "Jul",
                "revenue": 5394
            },
            {
                "month": "Aug",
                "revenue": 2989
            },
            {
                "month": "Sep",
                "revenue": 9182
            },
            {
                "month": "Oct",
                "revenue": 2470
            },
            {
                "month": "Nov",
                "revenue": 8169
            },
            {
                "month": "Dec",
                "revenue": 3377
            }
        ]
    },
    {
        "id": 335,
        "name": "Classic Navy Stripes Cord Set",
        "price": 1899,
        "sale": "30% Off",
        "rating": 4.8,
        "reviews": 2383,
        "answers": 30,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Off white"
        ],
        "category": "season-end",
        "model": "RP-739 Co-ord Set)",
        "size": [
            ""
        ],
        "images": [
            "/detailphotos/335.1.webp",
            "/detailphotos/335.2.webp",
            "/detailphotos/335.3.webp",
            "/detailphotos/335.4.webp",
            "/detailphotos/335.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton fabric with Chanderi dupatta",
            "Fit - Relaxed (CODE :RP-739 Co-ord Set)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Indulge in the comfort and luxury of our Classic Navy Stripes Cord Set. Made from breathable fabric with a timeless navy stripe design, this set is both comfortable and fashionable. Elevate your style with this exclusive, high-end cord set.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 2903
            },
            {
                "month": "Feb",
                "revenue": 4234
            },
            {
                "month": "Mar",
                "revenue": 7611
            },
            {
                "month": "Apr",
                "revenue": 9355
            },
            {
                "month": "May",
                "revenue": 9503
            },
            {
                "month": "Jun",
                "revenue": 3184
            },
            {
                "month": "Jul",
                "revenue": 5052
            },
            {
                "month": "Aug",
                "revenue": 9469
            },
            {
                "month": "Sep",
                "revenue": 8458
            },
            {
                "month": "Oct",
                "revenue": 6925
            },
            {
                "month": "Nov",
                "revenue": 9172
            },
            {
                "month": "Dec",
                "revenue": 3571
            }
        ]
    },
    {
        "id": 336,
        "name": "Midnight Mirage Co-ord Set",
        "price": 2899,
        "sale": "40% Off",
        "rating": 4.7,
        "reviews": 3483,
        "answers": 32,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Black"
        ],
        "category": "season-end",
        "model": "RP-810)",
        "size": [
            ""
        ],
        "images": [
            "/detailphotos/336.1.webp",
            "/detailphotos/336.2.webp",
            "/detailphotos/336.3.webp",
            "/detailphotos/336.4.webp",
            "/detailphotos/336.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton fabric with Chanderi dupatta",
            "Fit - Relaxed (CODE :RP-810)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Indulge in the opulence and allure of the Midnight Mirage Coord Set. With its striking design and luxurious fabrics, this set is perfect for those seeking to make a statement. Featuring intricate details and a unique aesthetic, this set is a must-have for those with refined taste.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 8563
            },
            {
                "month": "Feb",
                "revenue": 8529
            },
            {
                "month": "Mar",
                "revenue": 2441
            },
            {
                "month": "Apr",
                "revenue": 6043
            },
            {
                "month": "May",
                "revenue": 9498
            },
            {
                "month": "Jun",
                "revenue": 7586
            },
            {
                "month": "Jul",
                "revenue": 5447
            },
            {
                "month": "Aug",
                "revenue": 1790
            },
            {
                "month": "Sep",
                "revenue": 2747
            },
            {
                "month": "Oct",
                "revenue": 3018
            },
            {
                "month": "Nov",
                "revenue": 9495
            },
            {
                "month": "Dec",
                "revenue": 7329
            }
        ]
    },
    {
        "id": 337,
        "name": "Akshara Peach A-Line Suit Set",
        "price": 3199,
        "sale": "35% Off",
        "rating": 4.6,
        "reviews": 4583,
        "answers": 34,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Black"
        ],
        "category": "season-end",
        "model": "RP-767)",
        "size": [
            ""
        ],
        "images": [
            "/detailphotos/337.1.webp",
            "/detailphotos/337.2.webp",
            "/detailphotos/337.3.webp",
            "/detailphotos/337.4.webp",
            "/detailphotos/337.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton fabric with Chanderi dupatta",
            "Fit - Relaxed (CODE :RP-767)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Introducing the Akshara Peach A-Line Suit Set - your new go-to for comfort and fashion. Made with breathable material, this set will keep you feeling cool and stylish all day long. Perfect for any occasion, it's a must-have in your wardrobe.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 1785
            },
            {
                "month": "Feb",
                "revenue": 7325
            },
            {
                "month": "Mar",
                "revenue": 9792
            },
            {
                "month": "Apr",
                "revenue": 2659
            },
            {
                "month": "May",
                "revenue": 5632
            },
            {
                "month": "Jun",
                "revenue": 1856
            },
            {
                "month": "Jul",
                "revenue": 1180
            },
            {
                "month": "Aug",
                "revenue": 3461
            },
            {
                "month": "Sep",
                "revenue": 7380
            },
            {
                "month": "Oct",
                "revenue": 9638
            },
            {
                "month": "Nov",
                "revenue": 7421
            },
            {
                "month": "Dec",
                "revenue": 3856
            }
        ]
    },
    {
        "id": 338,
        "name": "Season's Delight Straight Fit Cotton Suit Set",
        "price": 2499,
        "sale": "37% Off",
        "rating": 4.5,
        "reviews": 5683,
        "answers": 45,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Pink And Maroon"
        ],
        "category": "season-end",
        "model": "RP-476)",
        "size": [
            ""
        ],
        "images": [
            "/detailphotos/338.1.webp",
            "/detailphotos/338.2.webp",
            "/detailphotos/338.3.webp",
            "/detailphotos/338.4.webp",
            "/detailphotos/338.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton with Chiffon dupatta",
            "Fit - Relaxed (CODE :RP-476)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Be in the spotlight for your fashion choices with this Season's Delight Straight Fit Cotton Suit from Jaipuri Adaah. Customized pure Handblock and draped with a Chiffon dupatta, it features 3/4 sleeves with embroidery. Go with a pink or white wedge to finish the entire ensemble.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 9044
            },
            {
                "month": "Feb",
                "revenue": 5111
            },
            {
                "month": "Mar",
                "revenue": 2640
            },
            {
                "month": "Apr",
                "revenue": 8153
            },
            {
                "month": "May",
                "revenue": 6799
            },
            {
                "month": "Jun",
                "revenue": 2054
            },
            {
                "month": "Jul",
                "revenue": 2605
            },
            {
                "month": "Aug",
                "revenue": 6475
            },
            {
                "month": "Sep",
                "revenue": 3162
            },
            {
                "month": "Oct",
                "revenue": 4852
            },
            {
                "month": "Nov",
                "revenue": 9043
            },
            {
                "month": "Dec",
                "revenue": 2661
            }
        ]
    },
    {
        "id": 339,
        "name": "Ritzy Blue Lace Embroidered Straight Suit Set",
        "price": 2299,
        "sale": "39% Off",
        "rating": 4.4,
        "reviews": 6783,
        "answers": 47,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Green"
        ],
        "category": "season-end",
        "model": "RP-365)",
        "size": [
            ""
        ],
        "images": [
            "/detailphotos/339.1.webp",
            "/detailphotos/339.2.webp",
            "/detailphotos/339.3.webp",
            "/detailphotos/339.4.webp",
            "/detailphotos/339.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton with Chiffon dupatta",
            "Fit - Relaxed (CODE :RP-365)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Complement your wardrobe collection with this Ritzy Blue Lace Embroidered Straight Suit from Jaipuri Adaah. Highlighted with beautiful pearl lace detailing on borders, the Kurta hosts a V-neckline, a perfect choice for both casuals and outdoors. Drape the bottle green chiffon dupatta from the front for a rich look.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 2238
            },
            {
                "month": "Feb",
                "revenue": 3071
            },
            {
                "month": "Mar",
                "revenue": 1115
            },
            {
                "month": "Apr",
                "revenue": 5565
            },
            {
                "month": "May",
                "revenue": 7171
            },
            {
                "month": "Jun",
                "revenue": 2523
            },
            {
                "month": "Jul",
                "revenue": 8212
            },
            {
                "month": "Aug",
                "revenue": 7356
            },
            {
                "month": "Sep",
                "revenue": 8623
            },
            {
                "month": "Oct",
                "revenue": 9765
            },
            {
                "month": "Nov",
                "revenue": 9223
            },
            {
                "month": "Dec",
                "revenue": 9170
            }
        ]
    },
    {
        "id": 340,
        "name": "Palace Pink Gher Suit Set",
        "price": 1840,
        "sale": "40% Off",
        "rating": 4.3,
        "reviews": 7883,
        "answers": 49,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Pink"
        ],
        "category": "season-end",
        "model": "RP-596)",
        "size": [
            ""
        ],
        "images": [
            "/detailphotos/340.1.webp",
            "/detailphotos/340.2.webp",
            "/detailphotos/340.3.webp",
            "/detailphotos/340.4.webp",
            "/detailphotos/340.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton with Chiffon dupatta",
            "Fit - Relaxed (CODE :RP-596)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Rock your unique style with our Palace Pink Gher Suit Set! This playful and quirky set features a palace pink gher suit that will make you stand out from the crowd. Show off your fun-loving personality with this bold and stylish ensemble. Perfect for any occasion, bring some humor and flair into your wardrobe today!",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 8941
            },
            {
                "month": "Feb",
                "revenue": 9049
            },
            {
                "month": "Mar",
                "revenue": 2100
            },
            {
                "month": "Apr",
                "revenue": 4786
            },
            {
                "month": "May",
                "revenue": 9092
            },
            {
                "month": "Jun",
                "revenue": 3245
            },
            {
                "month": "Jul",
                "revenue": 7638
            },
            {
                "month": "Aug",
                "revenue": 2146
            },
            {
                "month": "Sep",
                "revenue": 7783
            },
            {
                "month": "Oct",
                "revenue": 6009
            },
            {
                "month": "Nov",
                "revenue": 5777
            },
            {
                "month": "Dec",
                "revenue": 8771
            }
        ]
    },
    {
        "id": 341,
        "name": "Women Coffee Brown Slub Effect V-Neck Pure Cotton T-shirt",
        "sale": "60% Off",
        "price": 799,
        "rating": 3.7,
        "reviews": 4800,
        "answers": 160,
        "inStock": true,
        "delivery": "100 RS.",
        "deliveryDate": "Not specified",
        "color": [
            "Grey"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "clearance",
        "model": "Not specified",
        "images": [
            "/detailphotos/296.1.jpg",
            "/detailphotos/296.2.jpg",
            "/detailphotos/296.3.jpg",
            "/detailphotos/296.4.jpg"
        ],
        "features": [
            "solid fit and flare T-shirt",
            "V Shape collar",
            "For Party Occasion",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Chiffon fabric"
        ],
        "description": "Solid print fit and flare T-shirt with sleeve and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 1764
            },
            {
                "month": "Feb",
                "revenue": 7940
            },
            {
                "month": "Mar",
                "revenue": 3198
            },
            {
                "month": "Apr",
                "revenue": 5714
            },
            {
                "month": "May",
                "revenue": 5279
            },
            {
                "month": "Jun",
                "revenue": 7777
            },
            {
                "month": "Jul",
                "revenue": 6238
            },
            {
                "month": "Aug",
                "revenue": 9103
            },
            {
                "month": "Sep",
                "revenue": 9325
            },
            {
                "month": "Oct",
                "revenue": 1752
            },
            {
                "month": "Nov",
                "revenue": 8588
            },
            {
                "month": "Dec",
                "revenue": 6281
            }
        ]
    },
    {
        "id": 342,
        "name": "Women Green Cotton Relaxed Fit T-shirt",
        "sale": "55% Off",
        "price": 999,
        "rating": 3.5,
        "reviews": 4700,
        "answers": 175,
        "inStock": true,
        "delivery": "100 RS.",
        "deliveryDate": "Not specified",
        "color": [
            "Green"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "clearance",
        "model": "Not specified",
        "images": [
            "/detailphotos/342.1.jpg",
            "/detailphotos/342.2.jpg",
            "/detailphotos/342.3.jpg",
            "/detailphotos/342.4.jpg"
        ],
        "features": [
            "solid fit and flare T-shirt",
            "V Shape collar",
            "For Party Occasion",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Chiffon fabric"
        ],
        "description": "Solid print fit and flare T-shirt with sleeve and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 4628
            },
            {
                "month": "Feb",
                "revenue": 9122
            },
            {
                "month": "Mar",
                "revenue": 2691
            },
            {
                "month": "Apr",
                "revenue": 3882
            },
            {
                "month": "May",
                "revenue": 2987
            },
            {
                "month": "Jun",
                "revenue": 8050
            },
            {
                "month": "Jul",
                "revenue": 4463
            },
            {
                "month": "Aug",
                "revenue": 8422
            },
            {
                "month": "Sep",
                "revenue": 1619
            },
            {
                "month": "Oct",
                "revenue": 6545
            },
            {
                "month": "Nov",
                "revenue": 7431
            },
            {
                "month": "Dec",
                "revenue": 7643
            }
        ]
    },
    {
        "id": 343,
        "name": "Antimicrobial Finish Training Rapid-Dry T-shirt",
        "sale": "50% Off",
        "price": 899,
        "rating": 3.4,
        "reviews": 4850,
        "answers": 178,
        "inStock": true,
        "delivery": "100 RS.",
        "deliveryDate": "Not specified",
        "color": [
            "Black"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "clearance",
        "model": "Not specified",
        "images": [
            "/detailphotos/343.1.jpg",
            "/detailphotos/343.2.jpg",
            "/detailphotos/343.3.jpg",
            "/detailphotos/343.4.jpg"
        ],
        "features": [
            "solid fit and flare T-shirt",
            "V Shape collar",
            "For Party Occasion",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Chiffon fabric"
        ],
        "description": "Solid print fit and flare T-shirt with sleeve and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 1751
            },
            {
                "month": "Feb",
                "revenue": 9847
            },
            {
                "month": "Mar",
                "revenue": 9410
            },
            {
                "month": "Apr",
                "revenue": 3113
            },
            {
                "month": "May",
                "revenue": 1114
            },
            {
                "month": "Jun",
                "revenue": 9940
            },
            {
                "month": "Jul",
                "revenue": 3764
            },
            {
                "month": "Aug",
                "revenue": 3709
            },
            {
                "month": "Sep",
                "revenue": 6219
            },
            {
                "month": "Oct",
                "revenue": 6837
            },
            {
                "month": "Nov",
                "revenue": 8226
            },
            {
                "month": "Dec",
                "revenue": 2499
            }
        ]
    },
    {
        "id": 344,
        "name": "Women Graphic Printed Round Neck Cotton Oversized T-Shirt",
        "sale": "61% Off",
        "price": 899,
        "rating": 3.6,
        "reviews": 5100,
        "answers": 173,
        "inStock": true,
        "delivery": "100 RS.",
        "deliveryDate": "Not specified",
        "color": [
            "White",
            "Green"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "clearance",
        "model": "Not specified",
        "images": [
            "/detailphotos/344.1.jpg",
            "/detailphotos/344.2.jpg",
            "/detailphotos/344.3.jpg",
            "/detailphotos/344.4.jpg"
        ],
        "features": [
            "solid fit and flare T-shirt",
            "Rounded Shape collar",
            "For Party Occasion",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Chiffon fabric"
        ],
        "description": "Graphic print fit and flare T-shirt with sleeve and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 1930
            },
            {
                "month": "Feb",
                "revenue": 5538
            },
            {
                "month": "Mar",
                "revenue": 3551
            },
            {
                "month": "Apr",
                "revenue": 8073
            },
            {
                "month": "May",
                "revenue": 9269
            },
            {
                "month": "Jun",
                "revenue": 5541
            },
            {
                "month": "Jul",
                "revenue": 7631
            },
            {
                "month": "Aug",
                "revenue": 6639
            },
            {
                "month": "Sep",
                "revenue": 6453
            },
            {
                "month": "Oct",
                "revenue": 3501
            },
            {
                "month": "Nov",
                "revenue": 9407
            },
            {
                "month": "Dec",
                "revenue": 6797
            }
        ]
    },
    {
        "id": 345,
        "name": "Mandarin Flush Micro Floral Oversized T-shirt",
        "sale": "59% Off",
        "price": 999,
        "rating": 3.3,
        "reviews": 5200,
        "answers": 176,
        "inStock": true,
        "delivery": "100 RS.",
        "deliveryDate": "Not specified",
        "color": [
            "Orange"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "clearance",
        "model": "Not specified",
        "images": [
            "/detailphotos/345.1.jpg",
            "/detailphotos/345.2.jpg",
            "/detailphotos/345.3.jpg",
            "/detailphotos/345.4.jpg"
        ],
        "features": [
            "solid fit and flare T-shirt",
            "Round Shape collar",
            "For Party Occasion",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Chiffon fabric"
        ],
        "description": "Graphic print fit and flare T-shirt with sleeve and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 2816
            },
            {
                "month": "Feb",
                "revenue": 5129
            },
            {
                "month": "Mar",
                "revenue": 1386
            },
            {
                "month": "Apr",
                "revenue": 2895
            },
            {
                "month": "May",
                "revenue": 1866
            },
            {
                "month": "Jun",
                "revenue": 1138
            },
            {
                "month": "Jul",
                "revenue": 6388
            },
            {
                "month": "Aug",
                "revenue": 2767
            },
            {
                "month": "Sep",
                "revenue": 5480
            },
            {
                "month": "Oct",
                "revenue": 7503
            },
            {
                "month": "Nov",
                "revenue": 2027
            },
            {
                "month": "Dec",
                "revenue": 2424
            }
        ]
    },
    {
        "id": 346,
        "name": "Floral Embroidered Net Sweetheart Neck Straight Kurta With Trousers & Dupatta",
        "sale": "35% Off",
        "price": 3599,
        "rating": 4.1,
        "reviews": 6750,
        "answers": 290,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "color": [
            "Pink"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "first-order",
        "model": "Not specified",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/346.1.jpg",
            "/detailphotos/346.2.jpg",
            "/detailphotos/346.3.jpg",
            "/detailphotos/346.4.jpg",
            "/detailphotos/346.5.jpg",
            "/detailphotos/346.6.jpg"
        ],
        "features": [
            "solid fit and flare Kurta",
            "Round Shape collar",
            "For Party Occasion",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Cotton fabric"
        ],
        "description": "Graphic print fit and flare Kurta with Gathered detail and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 2607
            },
            {
                "month": "Feb",
                "revenue": 6878
            },
            {
                "month": "Mar",
                "revenue": 6964
            },
            {
                "month": "Apr",
                "revenue": 8372
            },
            {
                "month": "May",
                "revenue": 7121
            },
            {
                "month": "Jun",
                "revenue": 1019
            },
            {
                "month": "Jul",
                "revenue": 2838
            },
            {
                "month": "Aug",
                "revenue": 9288
            },
            {
                "month": "Sep",
                "revenue": 2385
            },
            {
                "month": "Oct",
                "revenue": 1408
            },
            {
                "month": "Nov",
                "revenue": 3369
            },
            {
                "month": "Dec",
                "revenue": 9618
            }
        ]
    },
    {
        "id": 347,
        "name": "Floral Embroidered Net Sweetheart Neck Straight Kurta With Trousers & Dupatta",
        "sale": "30% Off",
        "price": 3599,
        "rating": 4.3,
        "reviews": 6900,
        "answers": 300,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "color": [
            "Blue"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "first-order",
        "model": "Not specified",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/347.1.jpg",
            "/detailphotos/347.2.jpg",
            "/detailphotos/347.3.jpg",
            "/detailphotos/347.4.jpg"
        ],
        "features": [
            "solid fit and flare Kurta",
            "Round Shape collar",
            "For Party Occasion",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Cotton fabric"
        ],
        "description": "Graphic print fit and flare Kurta with Gathered detail and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 9706
            },
            {
                "month": "Feb",
                "revenue": 5625
            },
            {
                "month": "Mar",
                "revenue": 7244
            },
            {
                "month": "Apr",
                "revenue": 3329
            },
            {
                "month": "May",
                "revenue": 1574
            },
            {
                "month": "Jun",
                "revenue": 2799
            },
            {
                "month": "Jul",
                "revenue": 8843
            },
            {
                "month": "Aug",
                "revenue": 9407
            },
            {
                "month": "Sep",
                "revenue": 5058
            },
            {
                "month": "Oct",
                "revenue": 7781
            },
            {
                "month": "Nov",
                "revenue": 4533
            },
            {
                "month": "Dec",
                "revenue": 3779
            }
        ]
    },
    {
        "id": 348,
        "name": "Floral Embroidered Net Sweetheart Neck Straight Kurta With Trousers & Dupatta",
        "sale": "32% Off",
        "price": 3599,
        "rating": 4.2,
        "reviews": 7100,
        "answers": 320,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "color": [
            "SkyBlue"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "first-order",
        "model": "Not specified",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/detailphotos/348.1.jpg",
            "/detailphotos/348.2.jpg",
            "/detailphotos/348.3.jpg",
            "/detailphotos/348.4.jpg"
        ],
        "features": [
            "solid fit and flare Kurta",
            "Round Shape collar",
            "For Party Occasion",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Cotton fabric"
        ],
        "description": "Graphic print fit and flare Kurta with Gathered detail and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 1994
            },
            {
                "month": "Feb",
                "revenue": 2777
            },
            {
                "month": "Mar",
                "revenue": 7633
            },
            {
                "month": "Apr",
                "revenue": 1973
            },
            {
                "month": "May",
                "revenue": 3498
            },
            {
                "month": "Jun",
                "revenue": 1585
            },
            {
                "month": "Jul",
                "revenue": 3222
            },
            {
                "month": "Aug",
                "revenue": 8717
            },
            {
                "month": "Sep",
                "revenue": 5175
            },
            {
                "month": "Oct",
                "revenue": 2079
            },
            {
                "month": "Nov",
                "revenue": 1553
            },
            {
                "month": "Dec",
                "revenue": 4361
            }
        ]
    },
    {
        "id": 349,
        "name": "Geometric Printed Block Print Saree",
        "sale": "29% Off",
        "price": 3999,
        "rating": 4.5,
        "reviews": 7300,
        "answers": 340,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "color": [
            "Orange "
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "first-order",
        "model": "Not specified",
        "images": [
            "/detailphotos/349.1.jpg",
            "/detailphotos/349.2.jpg",
            "/detailphotos/349.3.jpg",
            "/detailphotos/349.4.jpg"
        ],
        "features": [
            "Solid Block saree with embellished border",
            "traditional Saree with a bright Orange base",
            "Pure Cotton Fabric",
            "For Festive Occasion",
            "Saree length 5.5 Meter",
            "Blouse length 90 CM"
        ],
        "description": "Orange  saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 9037
            },
            {
                "month": "Feb",
                "revenue": 2381
            },
            {
                "month": "Mar",
                "revenue": 1359
            },
            {
                "month": "Apr",
                "revenue": 4895
            },
            {
                "month": "May",
                "revenue": 2983
            },
            {
                "month": "Jun",
                "revenue": 2206
            },
            {
                "month": "Jul",
                "revenue": 2157
            },
            {
                "month": "Aug",
                "revenue": 9850
            },
            {
                "month": "Sep",
                "revenue": 8104
            },
            {
                "month": "Oct",
                "revenue": 6810
            },
            {
                "month": "Nov",
                "revenue": 4243
            },
            {
                "month": "Dec",
                "revenue": 9415
            }
        ]
    },
    {
        "id": 350,
        "name": "Geometric Printed Saree",
        "sale": "37% Off",
        "price": 3999,
        "rating": 4,
        "reviews": 6450,
        "answers": 280,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "color": [
            "Green"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "first-order",
        "model": "Not specified",
        "images": [
            "/detailphotos/350.1.jpg",
            "/detailphotos/350.2.jpg",
            "/detailphotos/350.3.jpg",
            "/detailphotos/350.4.jpg"
        ],
        "features": [
            "Solid Geometric Pattern saree with embellished border",
            "traditional Saree with a bright Green base",
            "Pure Cotton Fabric",
            "For Festive Occasion",
            "Saree length 5.5 Meter",
            "Blouse length 90 CM"
        ],
        "description": "Green saree with Geometric Pattern with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 7307
            },
            {
                "month": "Feb",
                "revenue": 1750
            },
            {
                "month": "Mar",
                "revenue": 2547
            },
            {
                "month": "Apr",
                "revenue": 3134
            },
            {
                "month": "May",
                "revenue": 3344
            },
            {
                "month": "Jun",
                "revenue": 7115
            },
            {
                "month": "Jul",
                "revenue": 7667
            },
            {
                "month": "Aug",
                "revenue": 9654
            },
            {
                "month": "Sep",
                "revenue": 5993
            },
            {
                "month": "Oct",
                "revenue": 4670
            },
            {
                "month": "Nov",
                "revenue": 6980
            },
            {
                "month": "Dec",
                "revenue": 9220
            }
        ]
    },
    // 
    {
        "id": 109,
        "name": "Mesmerizing Blue Handblock Printed Cotton Kaftan",
        "sale": "45% off",
        "price": 1959,
        "rating": 4.8,
        "reviews": 6887,
        "answers": 105,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Blue"
        ],
        "category": "lounge-wear",
        "model": "RP-275-K)",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/109.1.webp",
            "/detailphotos/109.2.webp",
            "/detailphotos/109.3.webp",
            "/detailphotos/109.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton",
            "Fit - Relaxed (CODE :RP-275-K)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Easy maintenance and care requirements\n- Features innovative styling elements\n- Premium quality materials ensuring lasting comfort and durability\n- Available in a range of carefully curated sizes",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 8358
            },
            {
                "month": "Feb",
                "revenue": 6551
            },
            {
                "month": "Mar",
                "revenue": 9301
            },
            {
                "month": "Apr",
                "revenue": 6794
            },
            {
                "month": "May",
                "revenue": 5797
            },
            {
                "month": "Jun",
                "revenue": 6519
            },
            {
                "month": "Jul",
                "revenue": 8478
            },
            {
                "month": "Aug",
                "revenue": 8311
            },
            {
                "month": "Sep",
                "revenue": 8178
            },
            {
                "month": "Oct",
                "revenue": 8028
            },
            {
                "month": "Nov",
                "revenue": 3328
            },
            {
                "month": "Dec",
                "revenue": 7913
            }
        ]
    },
    {
        "id": 110,
        "name": "A Natural Tint Of Green Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
        "sale": "45% off",
        "price": 2499,
        "rating": 4.5,
        "reviews": 6237,
        "answers": 247,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Green"
        ],
        "category": "lounge-wear",
        "model": "RP-179)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/110.1.webp",
            "/detailphotos/110.2.webp",
            "/detailphotos/110.3.webp",
            "/detailphotos/110.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton",
            "Fit - Relaxed (CODE :RP-179)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Features innovative styling elements\n- Created using sustainable practices\n- Versatile design suitable for multiple occasions\n- Available in a range of carefully curated sizes",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 7996
            },
            {
                "month": "Feb",
                "revenue": 9227
            },
            {
                "month": "Mar",
                "revenue": 6995
            },
            {
                "month": "Apr",
                "revenue": 4828
            },
            {
                "month": "May",
                "revenue": 7298
            },
            {
                "month": "Jun",
                "revenue": 8946
            },
            {
                "month": "Jul",
                "revenue": 3430
            },
            {
                "month": "Aug",
                "revenue": 1320
            },
            {
                "month": "Sep",
                "revenue": 7309
            },
            {
                "month": "Oct",
                "revenue": 6910
            },
            {
                "month": "Nov",
                "revenue": 2644
            },
            {
                "month": "Dec",
                "revenue": 8079
            }
        ]
    },
    {
        "id": 111,
        "name": "An Intrinsic Yellow Blossom Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
        "sale": "45% off",
        "price": 2499,
        "rating": 4.1,
        "reviews": 12887,
        "answers": 167,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Blue",
            "Yellow"
        ],
        "category": "lounge-wear",
        "model": "RP-281)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/detailphotos/111.1.webp",
            "/detailphotos/111.2.webp",
            "/detailphotos/111.3.webp",
            "/detailphotos/111.4.webp",
            "/detailphotos/111.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton",
            "Fit - Relaxed (CODE :RP-281)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Created using sustainable practices\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Features innovative styling elements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 3752
            },
            {
                "month": "Feb",
                "revenue": 3488
            },
            {
                "month": "Mar",
                "revenue": 5843
            },
            {
                "month": "Apr",
                "revenue": 3497
            },
            {
                "month": "May",
                "revenue": 5336
            },
            {
                "month": "Jun",
                "revenue": 7393
            },
            {
                "month": "Jul",
                "revenue": 2395
            },
            {
                "month": "Aug",
                "revenue": 3847
            },
            {
                "month": "Sep",
                "revenue": 1646
            },
            {
                "month": "Oct",
                "revenue": 3796
            },
            {
                "month": "Nov",
                "revenue": 4697
            },
            {
                "month": "Dec",
                "revenue": 3120
            }
        ]
    },
    {
        "id": 112,
        "name": "The Soothing Mystical Hued Handblock Printed Cotton Kaftan",
        "sale": "45% off",
        "price": 1959,
        "rating": 4.1,
        "reviews": 12887,
        "answers": 167,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Green"
        ],
        "category": "lounge-wear",
        "model": "RP-215-K)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/112.1.webp",
            "/detailphotos/112.2.webp",
            "/detailphotos/112.3.webp",
            "/detailphotos/112.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton",
            "Fit - Relaxed (CODE :RP-215-K)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Versatile design suitable for multiple occasions\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices\n- Expertly crafted with attention to every detail",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 2904
            },
            {
                "month": "Feb",
                "revenue": 6735
            },
            {
                "month": "Mar",
                "revenue": 2532
            },
            {
                "month": "Apr",
                "revenue": 8388
            },
            {
                "month": "May",
                "revenue": 1769
            },
            {
                "month": "Jun",
                "revenue": 6161
            },
            {
                "month": "Jul",
                "revenue": 2383
            },
            {
                "month": "Aug",
                "revenue": 8503
            },
            {
                "month": "Sep",
                "revenue": 5902
            },
            {
                "month": "Oct",
                "revenue": 6268
            },
            {
                "month": "Nov",
                "revenue": 7486
            },
            {
                "month": "Dec",
                "revenue": 3550
            }
        ]
    },
    {
        "id": 113,
        "name": "An Absolute Chic Handblock Cotton Night Suit",
        "sale": "45% off",
        "price": 2199,
        "rating": 4.5,
        "reviews": 2387,
        "answers": 23,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Green"
        ],
        "category": "lounge-wear",
        "model": "RP-215-K)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/113.1.webp",
            "/detailphotos/113.2.webp",
            "/detailphotos/113.3.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton(Mul)",
            "Fit - Relaxed (CODE :RP-215-K)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Expertly crafted with attention to every detail\n- Easy maintenance and care requirements\n- Designed to provide optimal comfort throughout the day\n- Available in a range of carefully curated sizes",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 4612
            },
            {
                "month": "Feb",
                "revenue": 3492
            },
            {
                "month": "Mar",
                "revenue": 2818
            },
            {
                "month": "Apr",
                "revenue": 9918
            },
            {
                "month": "May",
                "revenue": 3175
            },
            {
                "month": "Jun",
                "revenue": 1443
            },
            {
                "month": "Jul",
                "revenue": 6902
            },
            {
                "month": "Aug",
                "revenue": 8060
            },
            {
                "month": "Sep",
                "revenue": 1745
            },
            {
                "month": "Oct",
                "revenue": 2139
            },
            {
                "month": "Nov",
                "revenue": 3134
            },
            {
                "month": "Dec",
                "revenue": 4883
            }
        ]
    },
    {
        "id": 114,
        "name": "A Fit For A Queen Handblock Cotton Night Suit",
        "sale": "45% off",
        "price": 2199,
        "rating": 4.2,
        "reviews": 6387,
        "answers": 213,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Pink"
        ],
        "category": "lounge-wear",
        "model": "RP-215-K)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/114.1.webp",
            "/detailphotos/114.2.webp",
            "/detailphotos/114.3.webp",
            "/detailphotos/114.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton",
            "Fit - Relaxed (CODE :RP-215-K)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Available in a range of carefully curated sizes\n- Easy maintenance and care requirements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 2570
            },
            {
                "month": "Feb",
                "revenue": 9633
            },
            {
                "month": "Mar",
                "revenue": 6115
            },
            {
                "month": "Apr",
                "revenue": 2574
            },
            {
                "month": "May",
                "revenue": 2622
            },
            {
                "month": "Jun",
                "revenue": 7272
            },
            {
                "month": "Jul",
                "revenue": 8089
            },
            {
                "month": "Aug",
                "revenue": 2188
            },
            {
                "month": "Sep",
                "revenue": 7467
            },
            {
                "month": "Oct",
                "revenue": 8915
            },
            {
                "month": "Nov",
                "revenue": 7758
            },
            {
                "month": "Dec",
                "revenue": 1072
            }
        ]
    },
    {
        "id": 115,
        "name": "A Tender Green Tone Handblock Cotton Night Suit",
        "sale": "45% off",
        "price": 2199,
        "rating": 4.9,
        "reviews": 4387,
        "answers": 104,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Green"
        ],
        "category": "lounge-wear",
        "model": "RP-276 NSC)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/115.1.webp",
            "/detailphotos/115.2.webp",
            "/detailphotos/115.3.webp",
            "/detailphotos/115.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton",
            "Fit - Relaxed (CODE :RP-276 NSC)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Features innovative styling elements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 9774
            },
            {
                "month": "Feb",
                "revenue": 6870
            },
            {
                "month": "Mar",
                "revenue": 1576
            },
            {
                "month": "Apr",
                "revenue": 2786
            },
            {
                "month": "May",
                "revenue": 6834
            },
            {
                "month": "Jun",
                "revenue": 2023
            },
            {
                "month": "Jul",
                "revenue": 6369
            },
            {
                "month": "Aug",
                "revenue": 7954
            },
            {
                "month": "Sep",
                "revenue": 3175
            },
            {
                "month": "Oct",
                "revenue": 5022
            },
            {
                "month": "Nov",
                "revenue": 5329
            },
            {
                "month": "Dec",
                "revenue": 4612
            }
        ]
    },
    {
        "id": 116,
        "name": "An Eloquent Beige Handblock Cotton Night Suit",
        "sale": "45% off",
        "price": 2199,
        "rating": 5,
        "reviews": 3046,
        "answers": 78,
        "inStock": true,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Pink"
        ],
        "category": "lounge-wear",
        "model": "RP-276 NSC)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/116.1.webp",
            "/detailphotos/116.2.webp",
            "/detailphotos/116.3.webp",
            "/detailphotos/116.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton",
            "Fit - Relaxed (CODE :RP-276 NSC)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Available in a range of carefully curated sizes\n- Expertly crafted with attention to every detail",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 6217
            },
            {
                "month": "Feb",
                "revenue": 6997
            },
            {
                "month": "Mar",
                "revenue": 8138
            },
            {
                "month": "Apr",
                "revenue": 3045
            },
            {
                "month": "May",
                "revenue": 7660
            },
            {
                "month": "Jun",
                "revenue": 4799
            },
            {
                "month": "Jul",
                "revenue": 1077
            },
            {
                "month": "Aug",
                "revenue": 5072
            },
            {
                "month": "Sep",
                "revenue": 5060
            },
            {
                "month": "Oct",
                "revenue": 9598
            },
            {
                "month": "Nov",
                "revenue": 3521
            },
            {
                "month": "Dec",
                "revenue": 4381
            }
        ]
    },
    {
        "id": 117,
        "name": "An Eloquent Beige Handblock Cotton Night Suit",
        "sale": "45% off",
        "price": 4049,
        "rating": 4.5,
        "reviews": 8765,
        "answers": 134,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Blue"
        ],
        "category": "lounge-wear",
        "model": "RP-555 WD)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/detailphotos/117.1.webp",
            "/detailphotos/117.2.webp",
            "/detailphotos/117.3.webp",
            "/detailphotos/117.4.webp",
            "/detailphotos/117.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton",
            "Fit - Relaxed (CODE :RP-555 WD)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Easy maintenance and care requirements\n- Designed to provide optimal comfort throughout the day\n- Features innovative styling elements\n- Versatile design suitable for multiple occasions",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 5424
            },
            {
                "month": "Feb",
                "revenue": 5920
            },
            {
                "month": "Mar",
                "revenue": 2647
            },
            {
                "month": "Apr",
                "revenue": 4987
            },
            {
                "month": "May",
                "revenue": 3973
            },
            {
                "month": "Jun",
                "revenue": 1223
            },
            {
                "month": "Jul",
                "revenue": 4206
            },
            {
                "month": "Aug",
                "revenue": 8521
            },
            {
                "month": "Sep",
                "revenue": 8878
            },
            {
                "month": "Oct",
                "revenue": 9342
            },
            {
                "month": "Nov",
                "revenue": 9203
            },
            {
                "month": "Dec",
                "revenue": 1303
            }
        ]
    },
    {
        "id": 118,
        "name": "Black Airey Linen Long Kurta",
        "sale": "45% off",
        "price": 999,
        "rating": 4.1,
        "reviews": 5765,
        "answers": 127,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Black"
        ],
        "category": "solid-wear-clothing",
        "model": "RP-PLK103BLACK)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/118.1.webp",
            "/detailphotos/118.2.webp",
            "/detailphotos/118.3.webp",
            "/detailphotos/118.4.webp",
            "/detailphotos/118.5.webp",
            "/detailphotos/118.6.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Airey Linen",
            "Fit - Relaxed (CODE :RP-PLK103BLACK)",
            "Washing instruction-  Always use mild detergent and Dry in shade",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Features innovative styling elements\n- Easy maintenance and care requirements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 5474
            },
            {
                "month": "Feb",
                "revenue": 6646
            },
            {
                "month": "Mar",
                "revenue": 6832
            },
            {
                "month": "Apr",
                "revenue": 3998
            },
            {
                "month": "May",
                "revenue": 5749
            },
            {
                "month": "Jun",
                "revenue": 9046
            },
            {
                "month": "Jul",
                "revenue": 3302
            },
            {
                "month": "Aug",
                "revenue": 2078
            },
            {
                "month": "Sep",
                "revenue": 4694
            },
            {
                "month": "Oct",
                "revenue": 7757
            },
            {
                "month": "Nov",
                "revenue": 2883
            },
            {
                "month": "Dec",
                "revenue": 5385
            }
        ]
    },
    {
        "id": 119,
        "name": "Navy Blue Airey Linen Long Kurta",
        "sale": "45% off",
        "price": 999,
        "rating": 4.1,
        "reviews": 5765,
        "answers": 127,
        "inStock": true,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "NavyBlue"
        ],
        "category": "solid-wear-clothing",
        "model": "RP-PLK103NAVYBLUE)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/119.1.webp",
            "/detailphotos/119.2.webp",
            "/detailphotos/119.3.webp",
            "/detailphotos/119.4.webp",
            "/detailphotos/119.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Airey Linen",
            "Fit - Relaxed (CODE :RP-PLK103NAVYBLUE)",
            "Washing instruction-  Always use mild detergent and Dry in shade",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 7534
            },
            {
                "month": "Feb",
                "revenue": 2433
            },
            {
                "month": "Mar",
                "revenue": 6189
            },
            {
                "month": "Apr",
                "revenue": 3830
            },
            {
                "month": "May",
                "revenue": 6239
            },
            {
                "month": "Jun",
                "revenue": 3796
            },
            {
                "month": "Jul",
                "revenue": 7767
            },
            {
                "month": "Aug",
                "revenue": 2888
            },
            {
                "month": "Sep",
                "revenue": 9298
            },
            {
                "month": "Oct",
                "revenue": 9729
            },
            {
                "month": "Nov",
                "revenue": 7344
            },
            {
                "month": "Dec",
                "revenue": 5728
            }
        ]
    },
]

const ProductGridComponent = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                        <a href={`/product/${product.id}`} className="relative pt-[100%] bg-gray-50 block">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="absolute top-0 left-0 w-full h-full object-contain p-4"
                            />
                            {/* Sale badge */}
                            {product.sale && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold shadow-md">
                                    {product.sale} OFF
                                </div>
                            )}
                        </a>

                        <div className="p-4 flex flex-col flex-1">
                            <a href={`/product/${product.id}`} className="group">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold truncate flex-1">
                                        {product.name}
                                    </h3>
                                </div>
                            </a>

                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold">Rs. {product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGridComponent;

