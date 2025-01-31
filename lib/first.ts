interface Product {
    id: number;
    name: string | "";
    sale?: string;
    price: number;
    rating: number;
    reviews: number;
    inStock: Number;
    delivery: string;
    deliveryDate: string;
    seller: string;
    color?: string[];
    category: string;
    video?: string;
    model: string;
    size?: string[];
    images: string[];
    features: string[];
    description: string;
    chartData: ChartData[];
}

interface ChartData {
  month: string;
  revenue: number;
}

const products = [
    {
        "name": "Lavanya Habutai Silk Suit Set",
        "price": 5999,
        "rating": 4.2,
        "reviews": 5000,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Maroon",
            "Green"
        ],
        "category": "latest-collection",
        "model": "RP-817)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/22.1.webp",
            "/detailphotos/22.2.webp",
            "/detailphotos/22.3.webp",
            "/detailphotos/22.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Cotton",
            "Fit - Relaxed (CODE :RP-817)",
            "Washing instruction-  Dry clean only",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Designed to provide optimal comfort throughout the day",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 2311
            },
            {
                "month": "Feb",
                "revenue": 2540
            },
            {
                "month": "Mar",
                "revenue": 2333
            },
            {
                "month": "Apr",
                "revenue": 4855
            },
            {
                "month": "May",
                "revenue": 3047
            },
            {
                "month": "Jun",
                "revenue": 8751
            },
            {
                "month": "Jul",
                "revenue": 6790
            },
            {
                "month": "Aug",
                "revenue": 2797
            },
            {
                "month": "Sep",
                "revenue": 7951
            },
            {
                "month": "Oct",
                "revenue": 7368
            },
            {
                "month": "Nov",
                "revenue": 2873
            },
            {
                "month": "Dec",
                "revenue": 5281
            }
        ]
    },
    {
        "name": "Jade Oasis Coord Set with Floral Embroidered Detailing",
        "price": 3299,
        "rating": 4.9,
        "reviews": 12030,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Green"
        ],
        "category": "lounge-wear",
        "model": "RP-787)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/33.1.webp",
            "/detailphotos/33.2.webp",
            "/detailphotos/33.3.webp",
            "/detailphotos/33.4.webp",
            "/detailphotos/33.5.webp",
            "/detailphotos/33.6.webp",
            "/detailphotos/33.7.webp"
        ],
        "video": "/detailvideos/33.mp4",
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Cotton",
            "Fit - Relaxed (CODE :RP-787)",
            "Washing instruction-  Separate wash only (Might bleed color) eferably Dry clean.",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 4353
            },
            {
                "month": "Feb",
                "revenue": 9585
            },
            {
                "month": "Mar",
                "revenue": 9849
            },
            {
                "month": "Apr",
                "revenue": 3679
            },
            {
                "month": "May",
                "revenue": 2966
            },
            {
                "month": "Jun",
                "revenue": 2645
            },
            {
                "month": "Jul",
                "revenue": 2561
            },
            {
                "month": "Aug",
                "revenue": 7296
            },
            {
                "month": "Sep",
                "revenue": 8925
            },
            {
                "month": "Oct",
                "revenue": 8388
            },
            {
                "month": "Nov",
                "revenue": 1402
            },
            {
                "month": "Dec",
                "revenue": 4318
            }
        ]
    },
    {
        "name": "Black Airey Linen Long Kurta",
        "price": 999,
        "rating": 4.1,
        "reviews": 5765,
        "inStock": 10,
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
        "name": "Mogra Gher Mul Cotton Suit Set (Plus Size)",
        "price": 3199,
        "rating": 4.5,
        "reviews": 4868,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Yellow"
        ],
        "category": "plus-size",
        "model": "RP-792 PS)",
        "size": [
            "3XL",
            "4XL",
            "5XL",
            "6XL",
            "7XL"
        ],
        "images": [
            "/detailphotos/149.1.webp",
            "/detailphotos/149.2.webp",
            "/detailphotos/149.3.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Cotton",
            "Fit - Relaxed (CODE :RP-792 PS)",
            "Washing instruction-  Always use mild detergent and Dry in shade",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Experience unparalleled sophistication with this remarkable addition to our premium collection. Every aspect of this piece has been carefully considered and expertly executed, resulting in a garment that exceeds expectations in both style and comfort.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Available in a range of carefully curated sizes\n- Features innovative styling elements\n- Designed to provide optimal comfort throughout the day\n- Premium quality materials ensuring lasting comfort and durability",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 7790
            },
            {
                "month": "Feb",
                "revenue": 7312
            },
            {
                "month": "Mar",
                "revenue": 3375
            },
            {
                "month": "Apr",
                "revenue": 2558
            },
            {
                "month": "May",
                "revenue": 6597
            },
            {
                "month": "Jun",
                "revenue": 3279
            },
            {
                "month": "Jul",
                "revenue": 7795
            },
            {
                "month": "Aug",
                "revenue": 3774
            },
            {
                "month": "Sep",
                "revenue": 5866
            },
            {
                "month": "Oct",
                "revenue": 5361
            },
            {
                "month": "Nov",
                "revenue": 5850
            },
            {
                "month": "Dec",
                "revenue": 7774
            }
        ]
    },
    {
        "name": "Yellow Festive Bandhani Embroidered Pure Georgette Saree",
        "price": 6799,
        "rating": 4,
        "reviews": 7700,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "seller": "Rajvadi Poshaak Premium co.",
        "color": [
            "Yellow",
            "Red"
        ],
        "category": "indian-sarees",
        "model": "Not specified",
        "images": [
            "/detailphotos/61.1.jpg",
            "/detailphotos/61.2.jpg",
            "/detailphotos/61.3.jpg",
            "/detailphotos/61.4.jpg",
            "/detailphotos/61.5.jpg",
            "/detailphotos/61.6.jpg"
        ],
        "features": [
            "Embrace the festive with this Mulmul Cotton Saree",
            "Traditional bandhani print in vibrant red and yellow tones",
            "Pure Georgette Fabric",
            "For Traditional Occasion",
            "Saree length 5.5 Meter",
            "Blouse length 80 CM"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Designed to provide optimal comfort throughout the day\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 4099
            },
            {
                "month": "Feb",
                "revenue": 9541
            },
            {
                "month": "Mar",
                "revenue": 2349
            },
            {
                "month": "Apr",
                "revenue": 5817
            },
            {
                "month": "May",
                "revenue": 3766
            },
            {
                "month": "Jun",
                "revenue": 2296
            },
            {
                "month": "Jul",
                "revenue": 5394
            },
            {
                "month": "Aug",
                "revenue": 4797
            },
            {
                "month": "Sep",
                "revenue": 2728
            },
            {
                "month": "Oct",
                "revenue": 1317
            },
            {
                "month": "Nov",
                "revenue": 5572
            },
            {
                "month": "Dec",
                "revenue": 5302
            }
        ]
    },
    {
        "name": "Treasured Soft Pure Handblock Cotton King Size Bedsheet",
        "price": 2799,
        "rating": 4.5,
        "reviews": 22,
        "inStock": 10,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Pink and White Green"
        ],
        "category": "bedsheets",
        "model": "RP-101 BS)",
        "size": [
            "KING SIZE 90X108 INCHES",
            "SUPERKING SIZE 108X108 INCHES"
        ],
        "images": [
            "/detailphotos/194.1.webp",
            "/detailphotos/194.2.webp",
            "/detailphotos/194.2.webp",
            "/detailphotos/194.2.webp",
            "/detailphotos/194.2.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Cotton",
            "Fit - Relaxed (CODE :RP-101 BS)",
            "Washing instruction-  A gentle machine wash cycle or hand wash in cold water using mild detergent",
            "Bed Sheet Size: Queen Size 108 x 108 Inches",
            "Pillow Cover Size: 28 x 18 Inches"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Features innovative styling elements\n- Created using sustainable practices\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 6681
            },
            {
                "month": "Feb",
                "revenue": 3985
            },
            {
                "month": "Mar",
                "revenue": 9729
            },
            {
                "month": "Apr",
                "revenue": 6329
            },
            {
                "month": "May",
                "revenue": 8869
            },
            {
                "month": "Jun",
                "revenue": 1505
            },
            {
                "month": "Jul",
                "revenue": 5278
            },
            {
                "month": "Aug",
                "revenue": 4474
            },
            {
                "month": "Sep",
                "revenue": 7440
            },
            {
                "month": "Oct",
                "revenue": 9205
            },
            {
                "month": "Nov",
                "revenue": 5334
            },
            {
                "month": "Dec",
                "revenue": 7241
            }
        ]
    },
    {
        "name": "Mogra Gher Mul Cotton Suit Set",
        "price": 2899,
        "rating": 5.5,
        "reviews": 11000,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "9 To 12 Working days",
        "seller": "Rajwadi Poshak Co.",
        "color": [
            "Yellow"
        ],
        "category": "traditional-suits",
        "model": "Fit - Relaxed (Code JA-792)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/2.1.webp",
            "/detailphotos/2.2.webp",
            "/detailphotos/2.3.webp",
            "/detailphotos/2.4.webp"
        ],
        "features": [
            "Fit - Relaxed (Code JA-792)",
            "Dispatch Time : 9 To 12 Working days",
            "Hand wash separately in cold water.",
            "Always use mild detergent.",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Created using sustainable practices\n- Easy maintenance and care requirements\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 4462
            },
            {
                "month": "Feb",
                "revenue": 9890
            },
            {
                "month": "Mar",
                "revenue": 4460
            },
            {
                "month": "Apr",
                "revenue": 3291
            },
            {
                "month": "May",
                "revenue": 8408
            },
            {
                "month": "Jun",
                "revenue": 5472
            },
            {
                "month": "Jul",
                "revenue": 7908
            },
            {
                "month": "Aug",
                "revenue": 8042
            },
            {
                "month": "Sep",
                "revenue": 7254
            },
            {
                "month": "Oct",
                "revenue": 8370
            },
            {
                "month": "Nov",
                "revenue": 4672
            },
            {
                "month": "Dec",
                "revenue": 9454
            }
        ]
    },
    {
        "name": "Indigo Dream Suit Set",
        "price": 3199,
        "rating": 5,
        "reviews": 10000,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshak Co.",
        "color": [
            "NavyBlue"
        ],
        "category": "kurta-sets",
        "model": "JA-729)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/detailphotos/1.1.webp",
            "/detailphotos/1.2.webp",
            "/detailphotos/1.3.webp",
            "/detailphotos/1.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Cotton",
            "Fit - Relaxed (CODE :JA-729)",
            "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions\n- Created using sustainable practices\n- Designed to provide optimal comfort throughout the day",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 3299
            },
            {
                "month": "Feb",
                "revenue": 9288
            },
            {
                "month": "Mar",
                "revenue": 3805
            },
            {
                "month": "Apr",
                "revenue": 6201
            },
            {
                "month": "May",
                "revenue": 3738
            },
            {
                "month": "Jun",
                "revenue": 9049
            },
            {
                "month": "Jul",
                "revenue": 1570
            },
            {
                "month": "Aug",
                "revenue": 6660
            },
            {
                "month": "Sep",
                "revenue": 7550
            },
            {
                "month": "Oct",
                "revenue": 3678
            },
            {
                "month": "Nov",
                "revenue": 3764
            },
            {
                "month": "Dec",
                "revenue": 9824
            }
        ]
    },
    {
        "name": "Women Cotton Floral Printed Fit and Flare Midi Dress",
        "price": 2999,
        "rating": 4.6,
        "reviews": 5812,
        "inStock": 10,
        "delivery": "100 RS.",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Pink"
        ],
        "category": "indian",
        "model": "Not specified",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "images": [
            "/detailphotos/361.1.jpg",
            "/detailphotos/361.2.jpg",
            "/detailphotos/361.3.jpg",
            "/detailphotos/361.4.jpg",
            "/detailphotos/361.5.jpg",
            "/detailphotos/361.6.jpg"
        ],
        "features": [
            "floral print fit and flare dress",
            "Round neck",
            "Sleeveless, flutter sleeve",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Cotton fabric"
        ],
        "description": "floral print fit and flare dress with sleeve and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 9482
            },
            {
                "month": "Feb",
                "revenue": 6540
            },
            {
                "month": "Mar",
                "revenue": 9102
            },
            {
                "month": "Apr",
                "revenue": 2525
            },
            {
                "month": "May",
                "revenue": 4715
            },
            {
                "month": "Jun",
                "revenue": 2920
            },
            {
                "month": "Jul",
                "revenue": 9899
            },
            {
                "month": "Aug",
                "revenue": 2476
            },
            {
                "month": "Sep",
                "revenue": 1466
            },
            {
                "month": "Oct",
                "revenue": 3183
            },
            {
                "month": "Nov",
                "revenue": 6776
            },
            {
                "month": "Dec",
                "revenue": 3525
            }
        ]
    },
    {
        "name": "Mulmul Cotton Printed Saree",
        "price": 3499,
        "rating": 3.9,
        "reviews": 7700,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "seller": "Rajvadi Poshaak Co.",
        "color": [
            "yellow"
        ],
        "category": "traditional-sarees",
        "model": "Not specified",
        "images": [
            "/detailphotos/51.1.jpg",
            "/detailphotos/51.2.jpg",
            "/detailphotos/51.3.jpg",
            "/detailphotos/51.4.jpg",
            "/detailphotos/51.5.jpg",
            "/detailphotos/51.6.jpg"
        ],
        "features": [
            "Simplicity with this Mulmul Cotton Saree",
            "Traditional tie-dye pattern in vibrant yellow and red tones",
            "Quick dip wash or Dry clean",
            "For Daily Occasion",
            "Saree length 5.5 Meter",
            "Blouse length 90 CM"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Available in a range of carefully curated sizes\n- Easy maintenance and care requirements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 4705
            },
            {
                "month": "Feb",
                "revenue": 9953
            },
            {
                "month": "Mar",
                "revenue": 6743
            },
            {
                "month": "Apr",
                "revenue": 9694
            },
            {
                "month": "May",
                "revenue": 9584
            },
            {
                "month": "Jun",
                "revenue": 4540
            },
            {
                "month": "Jul",
                "revenue": 5780
            },
            {
                "month": "Aug",
                "revenue": 2766
            },
            {
                "month": "Sep",
                "revenue": 6260
            },
            {
                "month": "Oct",
                "revenue": 9065
            },
            {
                "month": "Nov",
                "revenue": 4722
            },
            {
                "month": "Dec",
                "revenue": 8153
            }
        ]
    },
    {
        "name": "Floral Printed Georgette Fit & Flare Midi Dress",
        "price": 2599,
        "rating": 4.9,
        "reviews": 7641,
        "inStock": 10,
        "delivery": "100 RS.",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "White",
            "Blue"
        ],
        "category": "popular",
        "model": "Not specified",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "images": [
            "/detailphotos/376.1.jpg",
            "/detailphotos/376.2.jpg",
            "/detailphotos/376.3.jpg",
            "/detailphotos/376.4.jpg",
            "/detailphotos/376.5.jpg",
            "/detailphotos/376.6.jpg"
        ],
        "features": [
            "Floral print fit and flare dress",
            "Round neck",
            "Sleeveless, flutter sleeve",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Cotton fabric"
        ],
        "description": "Floral print fit and flare dress with sleeve and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 3329
            },
            {
                "month": "Feb",
                "revenue": 3482
            },
            {
                "month": "Mar",
                "revenue": 2670
            },
            {
                "month": "Apr",
                "revenue": 7832
            },
            {
                "month": "May",
                "revenue": 5383
            },
            {
                "month": "Jun",
                "revenue": 7067
            },
            {
                "month": "Jul",
                "revenue": 2626
            },
            {
                "month": "Aug",
                "revenue": 9606
            },
            {
                "month": "Sep",
                "revenue": 8040
            },
            {
                "month": "Oct",
                "revenue": 7635
            },
            {
                "month": "Nov",
                "revenue": 4411
            },
            {
                "month": "Dec",
                "revenue": 9602
            }
        ]
    },
    {
        "name": "Pankhuri Pink Cotton Jaal Print Straight Pintuck Kurta",
        "price": 1899,
        "rating": 4.2,
        "reviews": 9483,
        "inStock": 10,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Pink"
        ],
        "category": "trending",
        "model": "RP-643 Kurta)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "images": [
            "/detailphotos/161.1.webp",
            "/detailphotos/161.2.webp",
            "/detailphotos/161.3.webp",
            "/detailphotos/161.4.webp",
            "/detailphotos/161.5.webp"
        ],
        "video": "/detailvideos/161.mp4",
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Cotton",
            "Fit - Relaxed (CODE :RP-643 Kurta)",
            "Washing instruction-  Always use mild detergent and Dry in shade",
            "Kurta length 46",
            "Pant length 38"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Versatile design suitable for multiple occasions\n- Easy maintenance and care requirements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 6598
            },
            {
                "month": "Feb",
                "revenue": 8347
            },
            {
                "month": "Mar",
                "revenue": 2008
            },
            {
                "month": "Apr",
                "revenue": 5895
            },
            {
                "month": "May",
                "revenue": 1504
            },
            {
                "month": "Jun",
                "revenue": 3673
            },
            {
                "month": "Jul",
                "revenue": 8588
            },
            {
                "month": "Aug",
                "revenue": 4350
            },
            {
                "month": "Sep",
                "revenue": 1587
            },
            {
                "month": "Oct",
                "revenue": 7930
            },
            {
                "month": "Nov",
                "revenue": 5206
            },
            {
                "month": "Dec",
                "revenue": 5371
            }
        ]
    },
    {
        "name": "Red Applique Handwork Cotton Suit Set",
        "price": 2599,
        "rating": 4.9,
        "reviews": 5373,
        "inStock": 10,
        "delivery": "Rs. 100",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Red"
        ],
        "category": "top-rated",
        "model": "RP-600)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "images": [
            "/detailphotos/181.1.webp",
            "/detailphotos/181.2.webp",
            "/detailphotos/181.3.webp",
            "/detailphotos/181.4.webp",
            "/detailphotos/181.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Handblock Cotton Kurta And Pant Only",
            "Fit - Relaxed (CODE :RP-600)",
            "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
            "Kurta length 42"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Created using sustainable practices\n- Features innovative styling elements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 7866
            },
            {
                "month": "Feb",
                "revenue": 4985
            },
            {
                "month": "Mar",
                "revenue": 9967
            },
            {
                "month": "Apr",
                "revenue": 9793
            },
            {
                "month": "May",
                "revenue": 4934
            },
            {
                "month": "Jun",
                "revenue": 4292
            },
            {
                "month": "Jul",
                "revenue": 9704
            },
            {
                "month": "Aug",
                "revenue": 7533
            },
            {
                "month": "Sep",
                "revenue": 7658
            },
            {
                "month": "Oct",
                "revenue": 8712
            },
            {
                "month": "Nov",
                "revenue": 9431
            },
            {
                "month": "Dec",
                "revenue": 9424
            }
        ]
    },
    {
        "name": "Paisley Kashish Block Print Kurta Pant Set",
        "price": 4099,
        "rating": 4.4,
        "reviews": 8533,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Mud"
        ],
        "category": "favorites",
        "model": "RP-769 WD)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "images": [
            "/detailphotos/171.1.webp",
            "/detailphotos/171.2.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Cotton",
            "Fit - Relaxed (CODE :RP-769 WD)",
            "Washing instruction-  Always use mild detergent and Dry in shade",
            "Kurta length 42"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThis versatile piece can be styled in numerous ways to create distinctive looks for different occasions. Pair it with complementary accessories to elevate the ensemble for formal events, or dress it down for a sophisticated casual appearance. The possibilities are endless, making it a valuable addition to any fashion-conscious wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Created using sustainable practices\n- Premium quality materials ensuring lasting comfort and durability\n- Expertly crafted with attention to every detail\n- Designed to provide optimal comfort throughout the day",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 9886
            },
            {
                "month": "Feb",
                "revenue": 3593
            },
            {
                "month": "Mar",
                "revenue": 3505
            },
            {
                "month": "Apr",
                "revenue": 8030
            },
            {
                "month": "May",
                "revenue": 7520
            },
            {
                "month": "Jun",
                "revenue": 7945
            },
            {
                "month": "Jul",
                "revenue": 7036
            },
            {
                "month": "Aug",
                "revenue": 6322
            },
            {
                "month": "Sep",
                "revenue": 4230
            },
            {
                "month": "Oct",
                "revenue": 2929
            },
            {
                "month": "Nov",
                "revenue": 2442
            },
            {
                "month": "Dec",
                "revenue": 7467
            }
        ]
    },
    {
        "name": "Women Green Premium Casual Shirt",
        "price": 2349,
        "rating": 4.2,
        "reviews": 6150,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "color": [
            "Green"
        ],
        "seller": "Rajvadi Poshaak Co.",
        "category": "premium",
        "model": "Not specified",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "XXL"
        ],
        "images": [
            "/detailphotos/259.1.jpg",
            "/detailphotos/259.2.jpg",
            "/detailphotos/259.3.jpg",
            "/detailphotos/259.4.jpg",
            "/detailphotos/259.5.jpg",
            "/detailphotos/259.6.jpg"
        ],
        "features": [
            "solid opaque Casual shirt",
            "spread collar",
            "Pure Polyester Material",
            "For Casual Occasion",
            "Regular Fit",
            "Machine wash"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nOur master craftsmen have selected the finest materials, combining traditional techniques with modern innovation. The fabric's unique composition allows for optimal breathability while maintaining its shape and color through multiple washes. This exceptional quality ensures that the garment remains a cherished part of your wardrobe for years to come.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nThis ensemble is perfectly suited for those special moments that demand both comfort and sophistication. Its versatile nature makes it appropriate for various social settings, from formal ceremonies to upscale casual events. The timeless appeal ensures you'll always appear appropriately dressed with minimal effort.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Expertly crafted with attention to every detail\n- Designed to provide optimal comfort throughout the day\n- Created using sustainable practices\n- Easy maintenance and care requirements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 9575
            },
            {
                "month": "Feb",
                "revenue": 9906
            },
            {
                "month": "Mar",
                "revenue": 4866
            },
            {
                "month": "Apr",
                "revenue": 8818
            },
            {
                "month": "May",
                "revenue": 4200
            },
            {
                "month": "Jun",
                "revenue": 7102
            },
            {
                "month": "Jul",
                "revenue": 9740
            },
            {
                "month": "Aug",
                "revenue": 3054
            },
            {
                "month": "Sep",
                "revenue": 1237
            },
            {
                "month": "Oct",
                "revenue": 5900
            },
            {
                "month": "Nov",
                "revenue": 7202
            },
            {
                "month": "Dec",
                "revenue": 1737
            }
        ]
    },
    {
        "name": "Gerua Chanderi Silk Unstitched Suit Set",
        "price": 4399,
        "rating": 4.4,
        "reviews": 8457,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Red"
        ],
        "category": "cotton",
        "model": "RP-814 UNSTICHED SET)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/301.1.webp",
            "/detailphotos/301.2.webp",
            "/detailphotos/301.3.webp",
            "/detailphotos/301.4.webp",
            "/detailphotos/301.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant",
            "Fit - Relaxed (CODE :RP-814 UNSTICHED SET)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta Length - 2.5 Meters",
            "Pant Length - 2.5 Meters"
        ],
        "description": "Indulge in luxury with our Gerua Chanderi Silk Unstitched Suit Set. Made with high-quality chanderi silk, this set exudes elegance and sophistication. Unleash your inner fashionista with this exclusive piece, perfect for any occasion. Experience the art of fine dressing with Gerua.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 2917
            },
            {
                "month": "Feb",
                "revenue": 2776
            },
            {
                "month": "Mar",
                "revenue": 2162
            },
            {
                "month": "Apr",
                "revenue": 7959
            },
            {
                "month": "May",
                "revenue": 1664
            },
            {
                "month": "Jun",
                "revenue": 9418
            },
            {
                "month": "Jul",
                "revenue": 6310
            },
            {
                "month": "Aug",
                "revenue": 5883
            },
            {
                "month": "Sep",
                "revenue": 4564
            },
            {
                "month": "Oct",
                "revenue": 3696
            },
            {
                "month": "Nov",
                "revenue": 1189
            },
            {
                "month": "Dec",
                "revenue": 1705
            }
        ]
    },
    {
        "name": "Lavanya Habutai Silk Unstitched suit set",
        "price": 4999,
        "rating": 4.4,
        "reviews": 3447,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Maroon",
            "Green"
        ],
        "category": "silk",
        "model": "RP-817)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/305.1.webp",
            "/detailphotos/305.2.webp",
            "/detailphotos/305.3.webp",
            "/detailphotos/305.4.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant",
            "Fit - Relaxed (CODE :RP-817)",
            "Washing instruction-  Dry clean only",
            "Kurta Length - 2.5 Meters",
            "Pant Length - 2.5 Meters"
        ],
        "description": "Lavanya Habutai Silk Unstitched suit set",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 4317
            },
            {
                "month": "Feb",
                "revenue": 4393
            },
            {
                "month": "Mar",
                "revenue": 6653
            },
            {
                "month": "Apr",
                "revenue": 8361
            },
            {
                "month": "May",
                "revenue": 9070
            },
            {
                "month": "Jun",
                "revenue": 6113
            },
            {
                "month": "Jul",
                "revenue": 3852
            },
            {
                "month": "Aug",
                "revenue": 8591
            },
            {
                "month": "Sep",
                "revenue": 3661
            },
            {
                "month": "Oct",
                "revenue": 5999
            },
            {
                "month": "Nov",
                "revenue": 3560
            },
            {
                "month": "Dec",
                "revenue": 2894
            }
        ]
    },
    {
        "name": "Halter Neck Sleeveless Chiffon Fit & Flare Midi Dress",
        "price": 2799,
        "rating": 4.5,
        "reviews": 6794,
        "inStock": 10,
        "delivery": "100 RS.",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Black"
        ],
        "category": "chiffon",
        "model": "Not specified",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "images": [
            "/detailphotos/391.1.jpg",
            "/detailphotos/391.2.jpg",
            "/detailphotos/391.3.jpg",
            "/detailphotos/391.4.jpg"
        ],
        "features": [
            "Plain print fit and flare dress",
            "Round neck",
            "Sleeveless, flutter sleeve",
            "Gathered or pleated detail",
            "Midi length in flared hem",
            "Chiffon fabric"
        ],
        "description": "Plain print fit and flare dress with sleeve and Good fabric.",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 1262
            },
            {
                "month": "Feb",
                "revenue": 7130
            },
            {
                "month": "Mar",
                "revenue": 3629
            },
            {
                "month": "Apr",
                "revenue": 5098
            },
            {
                "month": "May",
                "revenue": 8876
            },
            {
                "month": "Jun",
                "revenue": 9234
            },
            {
                "month": "Jul",
                "revenue": 8580
            },
            {
                "month": "Aug",
                "revenue": 1106
            },
            {
                "month": "Sep",
                "revenue": 8756
            },
            {
                "month": "Oct",
                "revenue": 2107
            },
            {
                "month": "Nov",
                "revenue": 9111
            },
            {
                "month": "Dec",
                "revenue": 2348
            }
        ]
    },
    {
        "name": "Women Coffee Brown Slub Effect V-Neck Pure Cotton T-shirt",
        "sale": "60% Off",
        "price": 799,
        "rating": 3.7,
        "reviews": 4800,
        "inStock": 10,
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
        "name": "Wildflower White Dress with Embroidery Detailing",
        "price": 3499,
        "sale": "33% Off",
        "rating": 4.9,
        "reviews": 2183,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Off white"
        ],
        "category": "season-end",
        "model": "RP-790)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
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
        "name": "RASHIDA RED COTTON ANARKALI UNSTITCHED SUIT SET",
        "price": 3299,
        "sale": "Buy 2 Get 1 free",
        "rating": 4.9,
        "reviews": 2783,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "5 To 6 Working days",
        "seller": "Rajwadi Poshaak Co.",
        "color": [
            "Red"
        ],
        "category": "bundles",
        "model": "RP-689 UNSTICHED)",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "images": [
            "/detailphotos/325.1.webp",
            "/detailphotos/325.2.webp",
            "/detailphotos/325.3.webp",
            "/detailphotos/325.4.webp",
            "/detailphotos/325.5.webp"
        ],
        "features": [
            "Dispatch Time : 5 To 6 Working days",
            "Fabric - Pure Cotton",
            "Fit - Relaxed (CODE :RP-689 UNSTICHED)",
            "Washing instruction-  Quick dip wash or Dry clean",
            "Kurta Length - 2.5 Meters",
            "Pant Length - 2.5 Meters"
        ],
        "description": "RASHIDA RED COTTON ANARKALI UNSTITCHED SUIT SET",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 4474
            },
            {
                "month": "Feb",
                "revenue": 1434
            },
            {
                "month": "Mar",
                "revenue": 2202
            },
            {
                "month": "Apr",
                "revenue": 4515
            },
            {
                "month": "May",
                "revenue": 4081
            },
            {
                "month": "Jun",
                "revenue": 7191
            },
            {
                "month": "Jul",
                "revenue": 6196
            },
            {
                "month": "Aug",
                "revenue": 9298
            },
            {
                "month": "Sep",
                "revenue": 1668
            },
            {
                "month": "Oct",
                "revenue": 2717
            },
            {
                "month": "Nov",
                "revenue": 7234
            },
            {
                "month": "Dec",
                "revenue": 2347
            }
        ]
    },
    {
        "name": "Floral Embroidered Net Sweetheart Neck Straight Kurta With Trousers & Dupatta",
        "sale": "35% Off",
        "price": 3599,
        "rating": 4.1,
        "reviews": 6750,
        "inStock": 10,
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
        "name": "Mulmul Cotton Printed Saree",
        "price": 3499,
        "rating": 4.4,
        "reviews": 6247,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "seller": "Rajvadi Poshaak Co.",
        "color": [
            "NavyBlue",
            "Pink"
        ],
        "category": "western",
        "model": "Not specified",
        "images": [
            "/detailphotos/88.1.jpg",
            "/detailphotos/88.2.jpg",
            "/detailphotos/88.3.jpg",
            "/detailphotos/88.4.jpg",
            "/detailphotos/88.5.jpg",
            "/detailphotos/88.6.jpg"
        ],
        "features": [
            "Simplicity with this Mulmul Cotton Saree",
            "Traditional Floral pattern in NavyBlue and Pink tones",
            "Quick dip wash or Dry clean",
            "For Daily Occasion",
            "Saree length 5.5 Meter",
            "Blouse length 90 CM"
        ],
        "description": "Discover the epitome of refined elegance with this exceptional piece from our premium collection. Each garment represents the perfect fusion of traditional craftsmanship and contemporary design sensibilities, creating an ensemble that stands apart in both quality and style.\n\nCrafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nOur designers have masterfully combined elements of traditional artistry with modern aesthetics. The silhouette has been carefully crafted to flatter various body types, while the thoughtful incorporation of design elements ensures versatility in styling options.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nTo maintain the pristine condition of your garment, we recommend following our specialized care instructions. The fabric responds well to gentle handling and appropriate cleaning methods. Regular maintenance will ensure that the colors remain vibrant and the material maintains its superior quality throughout its lifetime.\n\nKey Features:\n- Premium quality materials ensuring lasting comfort and durability\n- Easy maintenance and care requirements\n- Available in a range of carefully curated sizes\n- Features innovative styling elements",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 6710
            },
            {
                "month": "Feb",
                "revenue": 2244
            },
            {
                "month": "Mar",
                "revenue": 7535
            },
            {
                "month": "Apr",
                "revenue": 3331
            },
            {
                "month": "May",
                "revenue": 9871
            },
            {
                "month": "Jun",
                "revenue": 2749
            },
            {
                "month": "Jul",
                "revenue": 1235
            },
            {
                "month": "Aug",
                "revenue": 9222
            },
            {
                "month": "Sep",
                "revenue": 8108
            },
            {
                "month": "Oct",
                "revenue": 6696
            },
            {
                "month": "Nov",
                "revenue": 2543
            },
            {
                "month": "Dec",
                "revenue": 4399
            }
        ]
    },
    {
        "name": "Mulmul Cotton Printed Saree",
        "price": 3499,
        "rating": 4.2,
        "reviews": 6700,
        "inStock": 10,
        "delivery": "FREE delivery",
        "deliveryDate": "Not specified",
        "seller": "Rajvadi Poshaak Co.",
        "color": [
            "Purple"
        ],
        "category": "festive",
        "model": "Not specified",
        "images": [
            "/detailphotos/74.1.jpg",
            "/detailphotos/74.2.jpg",
            "/detailphotos/74.3.jpg",
            "/detailphotos/74.4.jpg",
            "/detailphotos/74.5.jpg",
            "/detailphotos/74.6.jpg"
        ],
        "features": [
            "Simplicity with this Mulmul Cotton Saree",
            "Traditional tie-dye pattern in vibrant white and Purple tones",
            "Quick dip wash or Dry clean",
            "For Daily Occasion",
            "Saree length 5.5 Meter",
            "Blouse length 90 CM"
        ],
        "description": "Immerse yourself in luxury with this masterfully crafted piece from our exclusive collection. This exceptional creation embodies our commitment to excellence, combining superior craftsmanship with contemporary design elements.Crafted with meticulous attention to detail, this piece features premium quality materials that ensure both durability and comfort. The fabric undergoes rigorous quality testing to maintain our high standards of excellence. Each thread is carefully selected to create a perfect balance of strength and softness, resulting in a garment that not only looks exceptional but feels incredible against your skin.\n\nThe design philosophy behind this piece draws inspiration from both contemporary trends and timeless classics. Every element has been thoughtfully incorporated to create a harmonious balance of style and functionality. The intricate patterns and carefully placed details showcase our commitment to excellence in fashion design.\n\nThe versatility of this design allows for creative styling options that suit various occasions. Whether you're attending a formal gathering or enjoying a casual outing, this piece can be accessorized to create the perfect look. Its adaptable nature makes it an essential component of a well-curated wardrobe.\n\nPerfect for a wide range of occasions, from formal celebrations to elegant casual gatherings. The sophisticated design ensures you'll make a lasting impression at any event. Whether you're attending a wedding, corporate function, or social gathering, this piece will help you maintain an air of refined elegance.\n\nOur garments are designed to withstand regular wear while maintaining their exceptional quality. With proper care and attention, this piece will continue to exude elegance and sophistication. We recommend following the detailed care label instructions to preserve the fabric's unique properties.\n\nKey Features:\n- Created using sustainable practices\n- Features innovative styling elements\n- Easy maintenance and care requirements\n- Versatile design suitable for multiple occasions",
        "chartData": [
            {
                "month": "Jan",
                "revenue": 7806
            },
            {
                "month": "Feb",
                "revenue": 1381
            },
            {
                "month": "Mar",
                "revenue": 5066
            },
            {
                "month": "Apr",
                "revenue": 8175
            },
            {
                "month": "May",
                "revenue": 8168
            },
            {
                "month": "Jun",
                "revenue": 8020
            },
            {
                "month": "Jul",
                "revenue": 6355
            },
            {
                "month": "Aug",
                "revenue": 7988
            },
            {
                "month": "Sep",
                "revenue": 3369
            },
            {
                "month": "Oct",
                "revenue": 7864
            },
            {
                "month": "Nov",
                "revenue": 6529
            },
            {
                "month": "Dec",
                "revenue": 1202
            }
        ]
    },
]