interface Product {
  id: number;
  name: string | "";
  price: number;
  rating: number;
  reviews: number;
  answers: number;
  inStock: boolean;
  delivery: string;
  deliveryDate: string;
  seller: string;
  color?: string[];
  category: string;
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

export const products: Product[] = [{
  "id": 1,
  "name": "Indigo Dream Suit Set",
  "price": 3199,
  "rating": 5,
  "reviews": 10000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Indigo Apparel Co.",
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
  "description": "A captivating ensemble embodying elegance and grace. This three-piece set features 3/4 sleeves, exquisite neckline work, and a beautiful lotus motif print throughout. Completing the look is a stunning dupatta adorned with playful tassels. Embrace the allure of the 'Indigo Dream' and let your style shine with its timeless charm.",
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
  "id": 2,
  "name": "Mogra Gher Mul Cotton Suit Set",
  "price": 2899,
  "rating": 5.5,
  "reviews": 11000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "9 To 12 Working days",
  "seller": "Indigo Apparel Co.",
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
  "description": "Indulge in the luxury of the Mogra Gher Mul Cotton Suit Set. This premium set is made from high-quality cotton for a luxurious feel and features intricate Mogra Gher weaving. Elevate your style with this elegant and exclusive suit set.",
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
  "id": 3,
  "name": "Tarin Green Floral Print Embroidered Suit Set",
  "price": 3199,
  "rating": 4.5,
  "reviews": 9000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Green"
  ],
  "category": "kurta-sets",
  "model": "Fit - Relaxed (Code JA-704)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/3.1.webp",
    "/detailphotos/3.2.webp",
    "/detailphotos/3.3.webp",
    "/detailphotos/3.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-704)",
    "Hand wash separately in cold water.",
    "Dispatching Time-4-5 days",
    "Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Verdant Green Cotton Kalidar Kurta Adorned With Intricate Floral Prints And Delicate Thread Work On The Neckline. This Charming Ensemble Combines Comfort With Elegance, Making It Ideal For Both Casual Outings And Festive Occasions..",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8138
    },
    {
      "month": "Feb",
      "revenue": 5430
    },
    {
      "month": "Mar",
      "revenue": 2160
    },
    {
      "month": "Apr",
      "revenue": 6267
    },
    {
      "month": "May",
      "revenue": 2254
    },
    {
      "month": "Jun",
      "revenue": 1674
    },
    {
      "month": "Jul",
      "revenue": 3770
    },
    {
      "month": "Aug",
      "revenue": 5341
    },
    {
      "month": "Sep",
      "revenue": 7835
    },
    {
      "month": "Oct",
      "revenue": 5503
    },
    {
      "month": "Nov",
      "revenue": 7483
    },
    {
      "month": "Dec",
      "revenue": 2839
    }
  ]
},
{
  "id": 4,
  "name": "Izza Blue Floral Handblock Print Suit Set",
  "price": 4899,
  "rating": 3.5,
  "reviews": 7000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Blue"
  ],
  "category": "traditional-suits",
  "model": "Fit - Relaxed (Code JA-701)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/4.1.webp",
    "/detailphotos/4.2.webp",
    "/detailphotos/4.3.webp",
    "/detailphotos/4.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-701)",
    "Dry in shade.",
    "Always use mild detergent",
    "Hand wash separately in cold water.",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Stunning Alia Cut Suit Set Featuring A Full-Sleeve Kurta Adorned With Handblock Floral Print In Vibrant Blue Cotton Fabric. The V-Neck Adds Elegance, Complemented By A Kota Doriya Dupatta. Perfect Fusion Of Tradition And Modernity, Exuding Charm And Grace.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5153
    },
    {
      "month": "Feb",
      "revenue": 8058
    },
    {
      "month": "Mar",
      "revenue": 4855
    },
    {
      "month": "Apr",
      "revenue": 7984
    },
    {
      "month": "May",
      "revenue": 2997
    },
    {
      "month": "Jun",
      "revenue": 9300
    },
    {
      "month": "Jul",
      "revenue": 1872
    },
    {
      "month": "Aug",
      "revenue": 6189
    },
    {
      "month": "Sep",
      "revenue": 1097
    },
    {
      "month": "Oct",
      "revenue": 1599
    },
    {
      "month": "Nov",
      "revenue": 8833
    },
    {
      "month": "Dec",
      "revenue": 3173
    }
  ]
},
{
  "id": 5,
  "name": "Bhargavi with Chanderi Dupttta Suit Set",
  "price": 4299,
  "rating": 2.6,
  "reviews": 5200,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "White"
  ],
  "category": "traditional-suits",
  "model": "Fit - Relaxed (Code JA-478)",
  "size": [
    "S",
    "M",
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/5.1.webp",
    "/detailphotos/5.2.webp",
    "/detailphotos/5.3.webp",
    "/detailphotos/5.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-478)",
    " Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "First Wash- Color may bleed slightly",
    "DISPATCH TIME 5 To 6 Working day",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Combine simplicity and style effortlessly with Bhargavi Chanderi dupatta Suit Set from Jaipuri Adaah. Made with pure hand-block cotton, it features a round neck with a small V and has 3/4 sleeves. Tag with a pair of classy studs and nude wedges to flaunt your walk.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3261
    },
    {
      "month": "Feb",
      "revenue": 3826
    },
    {
      "month": "Mar",
      "revenue": 4106
    },
    {
      "month": "Apr",
      "revenue": 5550
    },
    {
      "month": "May",
      "revenue": 7872
    },
    {
      "month": "Jun",
      "revenue": 1960
    },
    {
      "month": "Jul",
      "revenue": 8668
    },
    {
      "month": "Aug",
      "revenue": 3794
    },
    {
      "month": "Sep",
      "revenue": 1970
    },
    {
      "month": "Oct",
      "revenue": 3308
    },
    {
      "month": "Nov",
      "revenue": 5377
    },
    {
      "month": "Dec",
      "revenue": 2886
    }
  ]
},
{
  "id": 6,
  "name": "Ryza Megenta Floral Flarey Suit Set",
  "price": 4899,
  "rating": 6,
  "reviews": 12000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Megenta"
  ],
  "category": "traditional-suits",
  "model": "Fit - Relaxed (Code JA-718)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/6.1.webp",
    "/detailphotos/6.2.webp",
    "/detailphotos/6.3.webp",
    "/detailphotos/6.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-718)",
    "Hand wash separately in cold water",
    "Always use mild detergent.",
    "Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Ryza presents a mesmerizing Magenta Floral Flarey Suit Set with delicate handwork on the neckline border, light gathers on the front, and a graceful Kota Dori Dupatta. Featuring 3/4th sleeves and straight buti print pants, it exudes elegance and charm effortlessly",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2814
    },
    {
      "month": "Feb",
      "revenue": 7839
    },
    {
      "month": "Mar",
      "revenue": 2112
    },
    {
      "month": "Apr",
      "revenue": 6767
    },
    {
      "month": "May",
      "revenue": 8250
    },
    {
      "month": "Jun",
      "revenue": 8061
    },
    {
      "month": "Jul",
      "revenue": 2662
    },
    {
      "month": "Aug",
      "revenue": 7248
    },
    {
      "month": "Sep",
      "revenue": 2791
    },
    {
      "month": "Oct",
      "revenue": 4239
    },
    {
      "month": "Nov",
      "revenue": 4824
    },
    {
      "month": "Dec",
      "revenue": 8081
    }
  ]
},
{
  "id": 7,
  "name": "Paisley Kashish Block Print Suit Set",
  "price": 4799,
  "rating": 4.5,
  "reviews": 9000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Mud"
  ],
  "category": "kurta-sets",
  "model": "Fit - Relaxed (Code JA-SKU-769)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/7.1.webp",
    "/detailphotos/7.2.webp",
    "/detailphotos/7.3.webp",
    "/detailphotos/7.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-SKU-769)",
    "Quick dip wash or Dry clean",
    "Hand wash separately in cold water",
    "Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Elevate your style with our Paisley Kashish Block Print Suit Set. This unique set features a beautiful Jahota Block print design on a comfortable cotton material, perfect for any occasion. The kotadoriya dupatta adds a touch of elegance to complete the look. Upgrade your wardrobe with this must-have ensemble",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6686
    },
    {
      "month": "Feb",
      "revenue": 9461
    },
    {
      "month": "Mar",
      "revenue": 4686
    },
    {
      "month": "Apr",
      "revenue": 5376
    },
    {
      "month": "May",
      "revenue": 7769
    },
    {
      "month": "Jun",
      "revenue": 1558
    },
    {
      "month": "Jul",
      "revenue": 1379
    },
    {
      "month": "Aug",
      "revenue": 6591
    },
    {
      "month": "Sep",
      "revenue": 7455
    },
    {
      "month": "Oct",
      "revenue": 1557
    },
    {
      "month": "Nov",
      "revenue": 6841
    },
    {
      "month": "Dec",
      "revenue": 8362
    }
  ]
},
{
  "id": 8,
  "name": "Gaeti Green Embroidery Handblock Chanderi Kurta Pant Set",
  "price": 4999,
  "rating": 4,
  "reviews": 8000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Green"
  ],
  "category": "kurta-sets",
  "model": "Fit - Relaxed (Code JA-657 WD)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/8.1.webp",
    "/detailphotos/3.2.webp",
    "/detailphotos/3.3.webp",
    "/detailphotos/3.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-657 WD)",
    "Hand wash separately in cold water",
    "Always use mild detergent.",
    "8 To 9 Working day",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Make a statement with the Gaeti Green embroidery Handblock Chanderi Kurta Pant Set. Crafted from chanderi fabric, this set features a beautiful handblock print with floral details and intricate thread work on the neck. Stand out in this vibrant green color embrace your unique style",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4466
    },
    {
      "month": "Feb",
      "revenue": 7675
    },
    {
      "month": "Mar",
      "revenue": 5773
    },
    {
      "month": "Apr",
      "revenue": 5116
    },
    {
      "month": "May",
      "revenue": 1651
    },
    {
      "month": "Jun",
      "revenue": 7954
    },
    {
      "month": "Jul",
      "revenue": 7597
    },
    {
      "month": "Aug",
      "revenue": 5959
    },
    {
      "month": "Sep",
      "revenue": 5167
    },
    {
      "month": "Oct",
      "revenue": 3325
    },
    {
      "month": "Nov",
      "revenue": 6788
    },
    {
      "month": "Dec",
      "revenue": 9097
    }
  ]
},
{
  "id": 9,
  "name": "Royal Affairs Handblock Kurta and Pant Only",
  "price": 3399,
  "rating": 4.2,
  "reviews": 8500,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Indigo Apparel Co.",
  "color": [
    "White"
  ],
  "category": "kurta-sets",
  "model": "Fit - Relaxed (Code JA-453 WD)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/9.1.webp",
    "/detailphotos/9.2.webp",
    "/detailphotos/9.3.webp",
    "/detailphotos/9.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-453 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8851
    },
    {
      "month": "Feb",
      "revenue": 7093
    },
    {
      "month": "Mar",
      "revenue": 6277
    },
    {
      "month": "Apr",
      "revenue": 8788
    },
    {
      "month": "May",
      "revenue": 8379
    },
    {
      "month": "Jun",
      "revenue": 5094
    },
    {
      "month": "Jul",
      "revenue": 9128
    },
    {
      "month": "Aug",
      "revenue": 3520
    },
    {
      "month": "Sep",
      "revenue": 3917
    },
    {
      "month": "Oct",
      "revenue": 8905
    },
    {
      "month": "Nov",
      "revenue": 3787
    },
    {
      "month": "Dec",
      "revenue": 5337
    }
  ]
},
{
  "id": 10,
  "name": "Patina Handblock Short Kurta",
  "price": 1499,
  "rating": 4.3,
  "reviews": 8600,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Green"
  ],
  "category": "traditional-suits",
  "model": "Fit - Relaxed (Code JA_607_SKP)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/10.1.webp",
    "/detailphotos/10.2.webp",
    "/detailphotos/10.3.webp",
    "/detailphotos/10.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA_607_SKP)",
    "Fabric - Pure Cotton",
    "Do not soak",
    "Always use mild detergent",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Introducing our Buti print kurta, featuring a playful green color  unique block print design. Made with comfortable cotton fabric, this short kurta is perfect for adding a touch of quirkiness to any outfit. Get ready to stand out in style",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7128
    },
    {
      "month": "Feb",
      "revenue": 6756
    },
    {
      "month": "Mar",
      "revenue": 9268
    },
    {
      "month": "Apr",
      "revenue": 1084
    },
    {
      "month": "May",
      "revenue": 5843
    },
    {
      "month": "Jun",
      "revenue": 6510
    },
    {
      "month": "Jul",
      "revenue": 1297
    },
    {
      "month": "Aug",
      "revenue": 4548
    },
    {
      "month": "Sep",
      "revenue": 7764
    },
    {
      "month": "Oct",
      "revenue": 5978
    },
    {
      "month": "Nov",
      "revenue": 1744
    },
    {
      "month": "Dec",
      "revenue": 5368
    }
  ]
},
{
  "id": 11,
  "name": "Peach Floral Buti Print Cotton Short Kurta",
  "price": 1499,
  "rating": 3.8,
  "reviews": 7500,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Peach"
  ],
  "category": "traditional-suits",
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
    "/detailphotos/11.1.webp",
    "/detailphotos/11.2.webp",
    "/detailphotos/11.3.webp",
    "/detailphotos/11.4.webp"
  ],
  "features": [
    "Fit - Relaxed (code : JA-649-SKP)",
    "Kurta- Pure Handblock  Cotton",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Dispatch Time : 5 To 6 Working days",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Delightful Pink Short Kurta Crafted From Soft Fabric And Adorned With Intricate Buti Print, Accentuated By A Chic Flat Collar. This Stylish Ensemble Effortlessly Blends Comfort And Sophistication, Perfect For Adding A Touch Of Charm To Any Casual Or Semi-Formal Occasion",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6762
    },
    {
      "month": "Feb",
      "revenue": 3793
    },
    {
      "month": "Mar",
      "revenue": 5362
    },
    {
      "month": "Apr",
      "revenue": 2109
    },
    {
      "month": "May",
      "revenue": 6235
    },
    {
      "month": "Jun",
      "revenue": 6624
    },
    {
      "month": "Jul",
      "revenue": 2198
    },
    {
      "month": "Aug",
      "revenue": 5686
    },
    {
      "month": "Sep",
      "revenue": 5758
    },
    {
      "month": "Oct",
      "revenue": 7949
    },
    {
      "month": "Nov",
      "revenue": 2268
    },
    {
      "month": "Dec",
      "revenue": 2969
    }
  ]
},
{
  "id": 12,
  "name": "FLORAL FANTASY SHORT KURTA",
  "price": 1099,
  "rating": 1,
  "reviews": 2000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Indigo Apparel Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "traditional-suits",
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
    "/detailphotos/12.1.webp",
    "/detailphotos/12.2.webp",
    "/detailphotos/12.3.webp",
    "/detailphotos/12.4.webp"
  ],
  "features": [
    "Fit - Relaxed (code : JA-589-SK)",
    "Kurta- Pure Cotton",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Dispatch Time : 5 To 6 Working days",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "NOTE: READY GARMENT MEASUREMENTS WOULD BE 2 INCHES BIGGER IN BUST AND 4 INCHES BIGGER IN KURTA WAIST",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5403
    },
    {
      "month": "Feb",
      "revenue": 1401
    },
    {
      "month": "Mar",
      "revenue": 9797
    },
    {
      "month": "Apr",
      "revenue": 7072
    },
    {
      "month": "May",
      "revenue": 3534
    },
    {
      "month": "Jun",
      "revenue": 4623
    },
    {
      "month": "Jul",
      "revenue": 5619
    },
    {
      "month": "Aug",
      "revenue": 4318
    },
    {
      "month": "Sep",
      "revenue": 4954
    },
    {
      "month": "Oct",
      "revenue": 9720
    },
    {
      "month": "Nov",
      "revenue": 4745
    },
    {
      "month": "Dec",
      "revenue": 9988
    }
  ]
},
{
  "id": 13,
  "name": "Mogra Gher Mul Cotton Suit Set",
  "price": 2899,
  "rating": 4,
  "reviews": 8000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "9 To 12 Working days",
  "seller": "Indigo Apparel Co.",
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
    "/detailphotos/13.1.webp",
    "/detailphotos/13.2.webp",
    "/detailphotos/13.3.webp",
    "/detailphotos/13.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-792)",
    "Hand wash separately in cold water",
    "Always use mild detergent",
    "Dispatch Time : 9 To 12 Working days",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in the luxury of the Mogra Gher Mul Cotton Suit Set. This premium set is made from high-quality cotton for a luxurious feel and features intricate Mogra Gher weaving. Elevate your style with this elegant and exclusive suit set",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7909
    },
    {
      "month": "Feb",
      "revenue": 3044
    },
    {
      "month": "Mar",
      "revenue": 7785
    },
    {
      "month": "Apr",
      "revenue": 1590
    },
    {
      "month": "May",
      "revenue": 1975
    },
    {
      "month": "Jun",
      "revenue": 8818
    },
    {
      "month": "Jul",
      "revenue": 8277
    },
    {
      "month": "Aug",
      "revenue": 1193
    },
    {
      "month": "Sep",
      "revenue": 9746
    },
    {
      "month": "Oct",
      "revenue": 9924
    },
    {
      "month": "Nov",
      "revenue": 2434
    },
    {
      "month": "Dec",
      "revenue": 3381
    }
  ]
},
{
  "id": 14,
  "name": "Najia Green Floral Handblock Print Suit Set",
  "price": 4899,
  "rating": 1,
  "reviews": 2000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Green"
  ],
  "category": "traditional-suits",
  "model": "Not specified",
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/14.1.webp",
    "/detailphotos/14.2.webp",
    "/detailphotos/14.3.webp",
    "/detailphotos/14.4.webp"
  ],
  "features": [
    "Fit - Relaxed (code : JA-589-SK)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta- Pure Cotton",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "NOTE: READY GARMENT MEASUREMENTS WOULD BE 2 INCHES BIGGER IN BUST AND 4 INCHES BIGGER IN KURTA WAIST",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7983
    },
    {
      "month": "Feb",
      "revenue": 1322
    },
    {
      "month": "Mar",
      "revenue": 1218
    },
    {
      "month": "Apr",
      "revenue": 6609
    },
    {
      "month": "May",
      "revenue": 6482
    },
    {
      "month": "Jun",
      "revenue": 8734
    },
    {
      "month": "Jul",
      "revenue": 3144
    },
    {
      "month": "Aug",
      "revenue": 3910
    },
    {
      "month": "Sep",
      "revenue": 5686
    },
    {
      "month": "Oct",
      "revenue": 1107
    },
    {
      "month": "Nov",
      "revenue": 3747
    },
    {
      "month": "Dec",
      "revenue": 5360
    }
  ]
},
{
  "id": 15,
  "name": "Mehreen Maroon Anarkali Cotton Suit Set",
  "price": 3449,
  "rating": 4,
  "reviews": 8000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Maroon"
  ],
  "category": "traditional-suits",
  "model": "Fit - Relaxed (Code JA-687)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/15.1.webp",
    "/detailphotos/15.2.webp",
    "/detailphotos/15.3.webp",
    "/detailphotos/15.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-687)",
    "Hand wash separately in cold water",
    "Dry in shade",
    "Do not soak",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Flaunt your unique style with our maroon floral jaal gathered kurta and buti pant set! Made from soft and breathable cotton fabric, this set is not only comfortable, but also eye-catching. Perfect for any occasion, it's a must-have for your wardrobe",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9165
    },
    {
      "month": "Feb",
      "revenue": 4301
    },
    {
      "month": "Mar",
      "revenue": 1258
    },
    {
      "month": "Apr",
      "revenue": 8361
    },
    {
      "month": "May",
      "revenue": 1962
    },
    {
      "month": "Jun",
      "revenue": 2253
    },
    {
      "month": "Jul",
      "revenue": 7295
    },
    {
      "month": "Aug",
      "revenue": 2152
    },
    {
      "month": "Sep",
      "revenue": 9867
    },
    {
      "month": "Oct",
      "revenue": 2413
    },
    {
      "month": "Nov",
      "revenue": 7783
    },
    {
      "month": "Dec",
      "revenue": 5538
    }
  ]
},
{
  "id": 16,
  "name": "Bageecha Chanderi Silk Suit with Handwork Detailing",
  "price": 6199,
  "rating": 3.8,
  "reviews": 7500,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Green"
  ],
  "category": "traditional-suits",
  "model": "Fit - Relaxed (Code JA-819)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/16.1.webp",
    "/detailphotos/16.2.webp",
    "/detailphotos/16.3.webp",
    "/detailphotos/16.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-819)",
    "8 To 9 Working day",
    "Dry in shade",
    "Hand wash separately in cold water.",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Elevate your style with our Bageecha Chanderi Silk Suit. Crafted from luxurious silk, this suit features intricate handwork detailing that adds a touch of elegance to any occasion. Perfect for the sophisticated and exclusive woman who appreciates art and fine craftsmanship. Indulge in a truly exquisite experience with this premium suit",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7703
    },
    {
      "month": "Feb",
      "revenue": 8532
    },
    {
      "month": "Mar",
      "revenue": 7512
    },
    {
      "month": "Apr",
      "revenue": 5270
    },
    {
      "month": "May",
      "revenue": 4802
    },
    {
      "month": "Jun",
      "revenue": 2218
    },
    {
      "month": "Jul",
      "revenue": 2305
    },
    {
      "month": "Aug",
      "revenue": 2703
    },
    {
      "month": "Sep",
      "revenue": 5177
    },
    {
      "month": "Oct",
      "revenue": 4286
    },
    {
      "month": "Nov",
      "revenue": 6672
    },
    {
      "month": "Dec",
      "revenue": 9578
    }
  ]
},
{
  "id": 17,
  "name": "Parnia Peach Embroidery Handblock Chanderi Suit Set",
  "price": 5899,
  "rating": 3.9,
  "reviews": 7800,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Peach"
  ],
  "category": "traditional-suits",
  "model": "Fit - Relaxed (Code JA-649)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/17.1.webp",
    "/detailphotos/17.2.webp",
    "/detailphotos/17.3.webp",
    "/detailphotos/17.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-649)",
    "Hand wash separately in cold water",
    "Always use mild detergent",
    "8 To 9 Working day",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Fabric -  Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7953
    },
    {
      "month": "Feb",
      "revenue": 2974
    },
    {
      "month": "Mar",
      "revenue": 2528
    },
    {
      "month": "Apr",
      "revenue": 4079
    },
    {
      "month": "May",
      "revenue": 1428
    },
    {
      "month": "Jun",
      "revenue": 5606
    },
    {
      "month": "Jul",
      "revenue": 6933
    },
    {
      "month": "Aug",
      "revenue": 7438
    },
    {
      "month": "Sep",
      "revenue": 1160
    },
    {
      "month": "Oct",
      "revenue": 1101
    },
    {
      "month": "Nov",
      "revenue": 1801
    },
    {
      "month": "Dec",
      "revenue": 1146
    }
  ]
},
{
  "id": 18,
  "name": "Iris Blue Floral Chanderi Straight Fit Suit Set",
  "price": 5499,
  "rating": 3.8,
  "reviews": 7600,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "SkyBlue"
  ],
  "category": "traditional-suits",
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
    "/detailphotos/18.1.webp",
    "/detailphotos/18.2.webp",
    "/detailphotos/18.3.webp",
    "/detailphotos/18.4.webp"
  ],
  "features": [
    "Fit - Relaxed code  JA-789",
    "Fabric -  Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant",
    "Quick dip wash or Dry clean",
    "dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Dressed in our Iris Blue Floral Straight Fit Suit Set, your style will bloom like a garden. The chanderi kurta and cotton pant offer a luxurious experience, while the dupatta adds a touch of elegance. Embrace sophistication and elevate your wardrobe with this exclusive set",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6604
    },
    {
      "month": "Feb",
      "revenue": 3677
    },
    {
      "month": "Mar",
      "revenue": 3794
    },
    {
      "month": "Apr",
      "revenue": 3532
    },
    {
      "month": "May",
      "revenue": 7501
    },
    {
      "month": "Jun",
      "revenue": 5834
    },
    {
      "month": "Jul",
      "revenue": 6040
    },
    {
      "month": "Aug",
      "revenue": 4022
    },
    {
      "month": "Sep",
      "revenue": 4398
    },
    {
      "month": "Oct",
      "revenue": 7678
    },
    {
      "month": "Nov",
      "revenue": 6684
    },
    {
      "month": "Dec",
      "revenue": 6385
    }
  ]
},
{
  "id": 19,
  "name": "Naadia Block Printed Cotton Kalidaar Handwork Suit Set",
  "price": 4899,
  "rating": 4.2,
  "reviews": 8300,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Green"
  ],
  "category": "kurta-sets",
  "model": "Fit - Relaxed (Code JA-622)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/19.1.webp",
    "/detailphotos/19.2.webp",
    "/detailphotos/19.3.webp",
    "/detailphotos/19.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-622)",
    "Hand wash separately in cold water",
    "Always use mild detergent",
    "Do not soak",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "This Naadia Block Printed Cotton Kalidaar Handwork Suit Set is the epitome of ethnic elegance. Boasting a captivating green floral block print with delicate handwork detail on the kurta, this anarkali suit set is crafted from pure cotton for a luxurious feel, with a traditional chanderi silk dupatta for a hint of opulence. A timeless classic for all special occasions",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3206
    },
    {
      "month": "Feb",
      "revenue": 5946
    },
    {
      "month": "Mar",
      "revenue": 4952
    },
    {
      "month": "Apr",
      "revenue": 8926
    },
    {
      "month": "May",
      "revenue": 2604
    },
    {
      "month": "Jun",
      "revenue": 7249
    },
    {
      "month": "Jul",
      "revenue": 2786
    },
    {
      "month": "Aug",
      "revenue": 3114
    },
    {
      "month": "Sep",
      "revenue": 9727
    },
    {
      "month": "Oct",
      "revenue": 3245
    },
    {
      "month": "Nov",
      "revenue": 3429
    },
    {
      "month": "Dec",
      "revenue": 1903
    }
  ]
},
{
  "id": 20,
  "name": "Yami Yellow Embroidered Anarkali Suit Set",
  "price": 5499,
  "rating": 2.2,
  "reviews": 4500,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Yellow"
  ],
  "category": "kurta-sets",
  "model": "Fit - Relaxed (Code JA-615)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/20.1.webp",
    "/detailphotos/20.2.webp",
    "/detailphotos/20.3.webp",
    "/detailphotos/20.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-615)",
    "Dry clean only",
    "8 To 9 Working day",
    "Hand wash separately in cold water",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "This exquisite Yami yellow floral chinon anarkali suit set features a vivid yellow floral print atop a luxurious handwork of ethnic embroidery. The anarkali-style set is a beautiful blend of classic elegance and contemporary flare, perfect for making the desired statement in any setting. Crafted with indulgence in mind, this set is sure to make you feel as glamorous as it looks",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4787
    },
    {
      "month": "Feb",
      "revenue": 4256
    },
    {
      "month": "Mar",
      "revenue": 5153
    },
    {
      "month": "Apr",
      "revenue": 3164
    },
    {
      "month": "May",
      "revenue": 1760
    },
    {
      "month": "Jun",
      "revenue": 3299
    },
    {
      "month": "Jul",
      "revenue": 9496
    },
    {
      "month": "Aug",
      "revenue": 2625
    },
    {
      "month": "Sep",
      "revenue": 9457
    },
    {
      "month": "Oct",
      "revenue": 1124
    },
    {
      "month": "Nov",
      "revenue": 7260
    },
    {
      "month": "Dec",
      "revenue": 8286
    }
  ]
},
{
  "id": 21,
  "name": "Paakiza Purple Cotton Straight Handwork Suit Set",
  "price": 5399,
  "rating": 4.5,
  "reviews": 8900,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "color": [
    "Purple"
  ],
  "category": "kurta-sets",
  "model": "Fit - Relaxed (Code JA-627)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/21.1.webp",
    "/detailphotos/22.2.webp",
    "/detailphotos/23.3.webp",
    "/detailphotos/23.4.webp"
  ],
  "features": [
    "Fit - Relaxed (Code JA-627)",
    "Fabric - Pure Cotton",
    "Hand wash separately in cold water.",
    "8 To 9 Working day",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Look effortless and charming in this elegant Paakiza Purple Cotton Straight Handwork Suit Set. The pure cotton fabric is comfortable and the mirror work and handwork make it perfect for special occasions. The soothing purple color a fashionable straight fit adds a stylish touch, perfect for party wear",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4317
    },
    {
      "month": "Feb",
      "revenue": 6095
    },
    {
      "month": "Mar",
      "revenue": 5607
    },
    {
      "month": "Apr",
      "revenue": 4806
    },
    {
      "month": "May",
      "revenue": 4811
    },
    {
      "month": "Jun",
      "revenue": 5615
    },
    {
      "month": "Jul",
      "revenue": 1630
    },
    {
      "month": "Aug",
      "revenue": 2216
    },
    {
      "month": "Sep",
      "revenue": 1096
    },
    {
      "month": "Oct",
      "revenue": 9687
    },
    {
      "month": "Nov",
      "revenue": 7804
    },
    {
      "month": "Dec",
      "revenue": 9134
    }
  ]
},
{
  "id": 22,
  "name": "Lavanya Habutai Silk Suit Set",
  "price": 5999,
  "rating": 4.2,
  "reviews": 5000,
  "answers": 154,
  "inStock": true,
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
  "description": "TOP PREMIUM PURE BEMBERG HABUTAI SILK SOLID COLOR WITH EMBROIDERY, ORGANZA JACQUARD SLEEVES & JARI LACE.",
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
  "id": 23,
  "name": "Kusum Suit Set in Silk with Handwork",
  "price": 5999,
  "rating": 4,
  "reviews": 5760,
  "answers": 206,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink",
    "Green"
  ],
  "category": "latest-collection",
  "model": "RP-816)",
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
    "/detailphotos/23.1.webp",
    "/detailphotos/23.2.webp",
    "/detailphotos/23.3.webp",
    "/detailphotos/23.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-816)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "TOP- PREMIUM BEMBERG SILK JACQUARD WITH EMBROIDERY & HAND WORK AND JARI LACE FOR DAMAN.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9921
    },
    {
      "month": "Feb",
      "revenue": 5130
    },
    {
      "month": "Mar",
      "revenue": 4178
    },
    {
      "month": "Apr",
      "revenue": 6388
    },
    {
      "month": "May",
      "revenue": 7529
    },
    {
      "month": "Jun",
      "revenue": 7794
    },
    {
      "month": "Jul",
      "revenue": 3871
    },
    {
      "month": "Aug",
      "revenue": 1479
    },
    {
      "month": "Sep",
      "revenue": 1660
    },
    {
      "month": "Oct",
      "revenue": 3943
    },
    {
      "month": "Nov",
      "revenue": 3490
    },
    {
      "month": "Dec",
      "revenue": 9330
    }
  ]
},
{
  "id": 24,
  "name": "Tyohar Jacquard Silk Handwork Suit Set with Organza Dupatta",
  "price": 5999,
  "rating": 4.3,
  "reviews": 12000,
  "answers": 398,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Brown"
  ],
  "category": "latest-collection",
  "model": "RP-806)",
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
    "/detailphotos/24.1.webp",
    "/detailphotos/24.2.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-806)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "TOP- PREMIUM PURE SILK JACQUARD SOLID COLOR WITH EMBROIDERY AND HAND WORK, JARI LACE FOR DAMAN.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8938
    },
    {
      "month": "Feb",
      "revenue": 2376
    },
    {
      "month": "Mar",
      "revenue": 1941
    },
    {
      "month": "Apr",
      "revenue": 3425
    },
    {
      "month": "May",
      "revenue": 5207
    },
    {
      "month": "Jun",
      "revenue": 5056
    },
    {
      "month": "Jul",
      "revenue": 4392
    },
    {
      "month": "Aug",
      "revenue": 4708
    },
    {
      "month": "Sep",
      "revenue": 3415
    },
    {
      "month": "Oct",
      "revenue": 9244
    },
    {
      "month": "Nov",
      "revenue": 3620
    },
    {
      "month": "Dec",
      "revenue": 2434
    }
  ]
},
{
  "id": 25,
  "name": "Riyaaz Silk Suit Set with Jacquard Crush Dupatta",
  "price": 5499,
  "rating": 4.6,
  "reviews": 7041,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon",
    "Grey"
  ],
  "category": "latest-collection",
  "model": "RP-798)",
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
    "/detailphotos/25.1.webp",
    "/detailphotos/25.2.webp",
    "/detailphotos/25.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-798)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Elevate your style with the Riyaaz Silk Suit Set. Made from luxurious silk and adorned with a beautiful Jacquard Crush Dupatta, this set will bring sophistication to any occasion. Perfectly crafted for the modern woman, it exudes elegance and exclusivity. Transform your wardrobe with this premium piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5098
    },
    {
      "month": "Feb",
      "revenue": 9153
    },
    {
      "month": "Mar",
      "revenue": 4008
    },
    {
      "month": "Apr",
      "revenue": 7830
    },
    {
      "month": "May",
      "revenue": 9726
    },
    {
      "month": "Jun",
      "revenue": 1356
    },
    {
      "month": "Jul",
      "revenue": 9517
    },
    {
      "month": "Aug",
      "revenue": 9032
    },
    {
      "month": "Sep",
      "revenue": 4979
    },
    {
      "month": "Oct",
      "revenue": 1961
    },
    {
      "month": "Nov",
      "revenue": 6936
    },
    {
      "month": "Dec",
      "revenue": 9756
    }
  ]
},
{
  "id": 26,
  "name": "Sanjari Muslin Silk Suit Set with Organza Dupatta",
  "price": 5499,
  "rating": 4.4,
  "reviews": 9496,
  "answers": 276,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Brown",
    "Green"
  ],
  "category": "latest-collection",
  "model": "RP-812)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/26.1.webp",
    "/detailphotos/26.2.webp",
    "/detailphotos/26.3.webp",
    "/detailphotos/26.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-812)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in luxury with our Sanjari Muslin Silk Suit Set, featuring a delicate organza dupatta. Made with the finest silk, this set exudes sophistication and elegance. Elevate your style and make a statement with this exclusive piece. Perfect for any occasion, it's a must-have for your wardrobe.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3855
    },
    {
      "month": "Feb",
      "revenue": 8335
    },
    {
      "month": "Mar",
      "revenue": 8186
    },
    {
      "month": "Apr",
      "revenue": 8628
    },
    {
      "month": "May",
      "revenue": 4791
    },
    {
      "month": "Jun",
      "revenue": 9257
    },
    {
      "month": "Jul",
      "revenue": 3443
    },
    {
      "month": "Aug",
      "revenue": 9994
    },
    {
      "month": "Sep",
      "revenue": 7117
    },
    {
      "month": "Oct",
      "revenue": 6956
    },
    {
      "month": "Nov",
      "revenue": 2325
    },
    {
      "month": "Dec",
      "revenue": 9046
    }
  ]
},
{
  "id": 27,
  "name": "Naari Zari Silk Suit Set with Patchwork & Embroidery",
  "price": 6499,
  "rating": 4.9,
  "reviews": 4303,
  "answers": 122,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Brown"
  ],
  "category": "latest-collection",
  "model": "RP-813)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/27.1.webp",
    "/detailphotos/27.2.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-813)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Experience luxury and elegance with our Naari Zari Silk Suit Set, featuring exquisite patchwork and intricate embroidery. Made from premium materials, this set exudes sophistication and exclusivity. Elevate your wardrobe with this tasteful fusion of art and fashion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1269
    },
    {
      "month": "Feb",
      "revenue": 9416
    },
    {
      "month": "Mar",
      "revenue": 5931
    },
    {
      "month": "Apr",
      "revenue": 8028
    },
    {
      "month": "May",
      "revenue": 2885
    },
    {
      "month": "Jun",
      "revenue": 9114
    },
    {
      "month": "Jul",
      "revenue": 7542
    },
    {
      "month": "Aug",
      "revenue": 7972
    },
    {
      "month": "Sep",
      "revenue": 9487
    },
    {
      "month": "Oct",
      "revenue": 4416
    },
    {
      "month": "Nov",
      "revenue": 1911
    },
    {
      "month": "Dec",
      "revenue": 9316
    }
  ]
},
{
  "id": 28,
  "name": "Sakhi Silk Suit Set with Embroidered Floral Detailing",
  "price": 5999,
  "rating": 4.5,
  "reviews": 7403,
  "answers": 156,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Cream",
    "Yellow"
  ],
  "category": "latest-collection",
  "model": "RP-804)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/28.1.webp",
    "/detailphotos/28.2.webp",
    "/detailphotos/28.3.webp",
    "/detailphotos/28.4.webp",
    "/detailphotos/28.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-804)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "TOP- PREMIUM BEMBERG SILK SOLID COLOR WITH EMBROIDERY & EMBROIDERY LACE FOR DAMAN AND SLEEVES.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5867
    },
    {
      "month": "Feb",
      "revenue": 1300
    },
    {
      "month": "Mar",
      "revenue": 2849
    },
    {
      "month": "Apr",
      "revenue": 5449
    },
    {
      "month": "May",
      "revenue": 7790
    },
    {
      "month": "Jun",
      "revenue": 3713
    },
    {
      "month": "Jul",
      "revenue": 5802
    },
    {
      "month": "Aug",
      "revenue": 9518
    },
    {
      "month": "Sep",
      "revenue": 1020
    },
    {
      "month": "Oct",
      "revenue": 8313
    },
    {
      "month": "Nov",
      "revenue": 9275
    },
    {
      "month": "Dec",
      "revenue": 5843
    }
  ]
},
{
  "id": 29,
  "name": "Kalyani Silk Satin Embroidered Suit Set with Organza Dupatta",
  "price": 5999,
  "rating": 5,
  "reviews": 200,
  "answers": 34,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Cream",
    "Yellow"
  ],
  "category": "latest-collection",
  "model": "RP-794)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/29.1.webp",
    "/detailphotos/29.2.webp",
    "/detailphotos/29.3.webp",
    "/detailphotos/29.4.webp",
    "/detailphotos/29.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-794)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in luxury with our Kalyani Silk Satin Embroidered Suit Set, complete with a stunning Organza Dupatta. The intricate embroidery adds a touch of elegance, while the soft silk satin fabric drapes beautifully for a flattering fit. Elevate your style with this sophisticated and exclusive suit set.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8216
    },
    {
      "month": "Feb",
      "revenue": 8600
    },
    {
      "month": "Mar",
      "revenue": 6442
    },
    {
      "month": "Apr",
      "revenue": 7475
    },
    {
      "month": "May",
      "revenue": 2149
    },
    {
      "month": "Jun",
      "revenue": 9706
    },
    {
      "month": "Jul",
      "revenue": 6919
    },
    {
      "month": "Aug",
      "revenue": 7004
    },
    {
      "month": "Sep",
      "revenue": 3081
    },
    {
      "month": "Oct",
      "revenue": 3032
    },
    {
      "month": "Nov",
      "revenue": 3662
    },
    {
      "month": "Dec",
      "revenue": 5814
    }
  ]
},
{
  "id": 30,
  "name": "Ruby Floral A-line Silk Suit set",
  "price": 5499,
  "rating": 4.2,
  "reviews": 10200,
  "answers": 304,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "SkyBlue"
  ],
  "category": "latest-collection",
  "model": "RP-782)",
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/30.1.webp",
    "/detailphotos/30.2.webp",
    "/detailphotos/30.3.webp",
    "/detailphotos/30.4.webp",
    "/detailphotos/30.5.webp",
    "/detailvideos/30.mp4"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-782)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in the luxury and sophistication of our Ruby Floral A-line Silk Suit set. Made from premium silk, the set features a stunning ruby floral design that exudes elegance and exclusivity. Elevate your style with this tasteful and timeless piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5941
    },
    {
      "month": "Feb",
      "revenue": 2378
    },
    {
      "month": "Mar",
      "revenue": 4888
    },
    {
      "month": "Apr",
      "revenue": 6838
    },
    {
      "month": "May",
      "revenue": 6765
    },
    {
      "month": "Jun",
      "revenue": 5782
    },
    {
      "month": "Jul",
      "revenue": 9616
    },
    {
      "month": "Aug",
      "revenue": 4010
    },
    {
      "month": "Sep",
      "revenue": 8054
    },
    {
      "month": "Oct",
      "revenue": 7718
    },
    {
      "month": "Nov",
      "revenue": 9264
    },
    {
      "month": "Dec",
      "revenue": 7966
    }
  ]
},
{
  "id": 31,
  "name": "Ruby Floral A-line Silk Suit set",
  "price": 5699,
  "rating": 4.6,
  "reviews": 7450,
  "answers": 127,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "latest-collection",
  "model": "RP-777)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/31.1.webp",
    "/detailphotos/31.2.webp",
    "/detailphotos/31.3.webp",
    "/detailphotos/31.4.webp",
    "/detailphotos/31.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant",
    "Fit - Relaxed (CODE :RP-782)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in luxury with our Vrinda Chanderi Silk Straight Fit Suit Set. Made from the finest Chanderi silk, this suit set exudes elegance and sophistication. The straight fit adds a flattering touch, making you stand out in any occasion. Elevate your style with our premium suit set.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6189
    },
    {
      "month": "Feb",
      "revenue": 5232
    },
    {
      "month": "Mar",
      "revenue": 4825
    },
    {
      "month": "Apr",
      "revenue": 9224
    },
    {
      "month": "May",
      "revenue": 6857
    },
    {
      "month": "Jun",
      "revenue": 4785
    },
    {
      "month": "Jul",
      "revenue": 3779
    },
    {
      "month": "Aug",
      "revenue": 8205
    },
    {
      "month": "Sep",
      "revenue": 5596
    },
    {
      "month": "Oct",
      "revenue": 7249
    },
    {
      "month": "Nov",
      "revenue": 6391
    },
    {
      "month": "Dec",
      "revenue": 5739
    }
  ]
},
{
  "id": 32,
  "name": "Gerua Chanderi Silk Suit with Handwork Detailing",
  "price": 5999,
  "rating": 4.5,
  "reviews": 7230,
  "answers": 97,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Red"
  ],
  "category": "latest-collection",
  "model": "RP-814)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/32.1.webp",
    "/detailphotos/32.2.webp",
    "/detailphotos/32.3.webp",
    "/detailphotos/32.4.webp",
    "/detailphotos/32.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-814)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in luxury with our Gerua Chanderi Silk Suit, featuring exquisite handwork detailing. Crafted from the finest silk, this suit boasts a timeless elegance that will elevate any occasion. Experience the refined sophistication of this piece and make a statement wherever you go.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4217
    },
    {
      "month": "Feb",
      "revenue": 8806
    },
    {
      "month": "Mar",
      "revenue": 5912
    },
    {
      "month": "Apr",
      "revenue": 6154
    },
    {
      "month": "May",
      "revenue": 9117
    },
    {
      "month": "Jun",
      "revenue": 8776
    },
    {
      "month": "Jul",
      "revenue": 7599
    },
    {
      "month": "Aug",
      "revenue": 7024
    },
    {
      "month": "Sep",
      "revenue": 8607
    },
    {
      "month": "Oct",
      "revenue": 5559
    },
    {
      "month": "Nov",
      "revenue": 7469
    },
    {
      "month": "Dec",
      "revenue": 8374
    }
  ]
},
{
  "id": 33,
  "name": "Jade Oasis Coord Set with Floral Embroidered Detailing",
  "price": 3299,
  "rating": 4.9,
  "reviews": 12030,
  "answers": 345,
  "inStock": true,
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
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-787)",
    "Washing instruction-  Separate wash only (Might bleed color) eferably Dry clean.",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Unleash your adventurous spirit with our Jade Oasis Coord Set. This set features exquisite floral embroidered detailing, adding a touch of elegance to your daring look. Take on any challenge in style and stand out from the crowd with this bold ensemble.",
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
  "id": 34,
  "name": "Moonlight silk Embroidered Coord Set",
  "price": 3299,
  "rating": 4.8,
  "reviews": 10676,
  "answers": 237,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Cream"
  ],
  "category": "lounge-wear",
  "model": "RP-781)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/34.1.webp",
    "/detailphotos/34.2.webp",
    "/detailphotos/34.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-781)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in luxury with our Moonlight silk Embroidered Coord Set. Made with the finest silk and intricate embroidery, this set exudes elegance and beauty. Perfect for special occasions or adding a touch of sophistication to your everyday look. Elevate your style with this beautiful Coord Set.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5905
    },
    {
      "month": "Feb",
      "revenue": 3177
    },
    {
      "month": "Mar",
      "revenue": 5024
    },
    {
      "month": "Apr",
      "revenue": 2296
    },
    {
      "month": "May",
      "revenue": 2468
    },
    {
      "month": "Jun",
      "revenue": 7977
    },
    {
      "month": "Jul",
      "revenue": 1363
    },
    {
      "month": "Aug",
      "revenue": 1971
    },
    {
      "month": "Sep",
      "revenue": 4363
    },
    {
      "month": "Oct",
      "revenue": 2843
    },
    {
      "month": "Nov",
      "revenue": 9247
    },
    {
      "month": "Dec",
      "revenue": 5682
    }
  ]
},
{
  "id": 35,
  "name": "Sun & Moon Pink Embroidered Coord Set",
  "price": 2899,
  "rating": 4.1,
  "reviews": 9676,
  "answers": 130,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "lounge-wear",
  "model": "RP-780)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/35.1.webp",
    "/detailphotos/35.2.webp",
    "/detailphotos/35.3.webp",
    "/detailphotos/35.4.webp",
    "/detailphotos/35.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-780)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in the luxurious elegance of our Sun & Moon Pink Embroidered Coord Set. This sophisticated set features intricate embroidery and a delicate pink hue, evoking the beauty and mystery of the sun and moon. Perfect for those seeking high-end fashion with a touch of the ethereal.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3220
    },
    {
      "month": "Feb",
      "revenue": 5368
    },
    {
      "month": "Mar",
      "revenue": 2958
    },
    {
      "month": "Apr",
      "revenue": 6116
    },
    {
      "month": "May",
      "revenue": 3364
    },
    {
      "month": "Jun",
      "revenue": 5079
    },
    {
      "month": "Jul",
      "revenue": 3634
    },
    {
      "month": "Aug",
      "revenue": 8506
    },
    {
      "month": "Sep",
      "revenue": 8591
    },
    {
      "month": "Oct",
      "revenue": 3797
    },
    {
      "month": "Nov",
      "revenue": 8508
    },
    {
      "month": "Dec",
      "revenue": 5336
    }
  ]
},
{
  "id": 36,
  "name": "Ink Blue Handblock Co- Ord Set",
  "price": 3699,
  "rating": 4.3,
  "reviews": 8776,
  "answers": 245,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "lounge-wear",
  "model": "RP-555)",
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/36.1.webp",
    "/detailphotos/36.2.webp",
    "/detailphotos/36.3.webp",
    "/detailphotos/36.4.webp",
    "/detailphotos/36.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-555)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Elevate your fashion game with our Ink Blue Handblock Co-Ord Set. Made with breathable materials, this comfortable and fashionable set is perfect for any occasion. Step out in style and make a statement with this unique and trendy set. Co-ordinate your look effortlessly!",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4885
    },
    {
      "month": "Feb",
      "revenue": 6142
    },
    {
      "month": "Mar",
      "revenue": 6489
    },
    {
      "month": "Apr",
      "revenue": 8517
    },
    {
      "month": "May",
      "revenue": 7187
    },
    {
      "month": "Jun",
      "revenue": 5662
    },
    {
      "month": "Jul",
      "revenue": 4569
    },
    {
      "month": "Aug",
      "revenue": 2966
    },
    {
      "month": "Sep",
      "revenue": 6217
    },
    {
      "month": "Oct",
      "revenue": 9957
    },
    {
      "month": "Nov",
      "revenue": 8484
    },
    {
      "month": "Dec",
      "revenue": 7461
    }
  ]
},
{
  "id": 37,
  "name": "Desi Bloom Handblock Cotton Floral coord set",
  "price": 3699,
  "rating": 4.6,
  "reviews": 4276,
  "answers": 85,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "MultiColor"
  ],
  "category": "lounge-wear",
  "model": "RP-607)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/37.1.webp",
    "/detailphotos/37.2.webp",
    "/detailphotos/37.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-607)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Get ready to bloom in our Desi Bloom Handblock Cotton Floral coord set! Made with comfortable and breathable cotton, this set is perfect for any occasion. The handblock print adds a fashionable touch, making you stand out in style. (Don't forget to stop and smell the flowers, too!)",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3256
    },
    {
      "month": "Feb",
      "revenue": 6916
    },
    {
      "month": "Mar",
      "revenue": 8784
    },
    {
      "month": "Apr",
      "revenue": 4254
    },
    {
      "month": "May",
      "revenue": 1347
    },
    {
      "month": "Jun",
      "revenue": 9251
    },
    {
      "month": "Jul",
      "revenue": 7494
    },
    {
      "month": "Aug",
      "revenue": 3000
    },
    {
      "month": "Sep",
      "revenue": 2789
    },
    {
      "month": "Oct",
      "revenue": 5224
    },
    {
      "month": "Nov",
      "revenue": 4260
    },
    {
      "month": "Dec",
      "revenue": 6394
    }
  ]
},
{
  "id": 38,
  "name": "Abstract Waves Black Cord Set",
  "price": 1999,
  "rating": 4.1,
  "reviews": 10376,
  "answers": 293,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "DarkBlue"
  ],
  "category": "lounge-wear",
  "model": "RP-733)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/38.1.webp",
    "/detailphotos/38.2.webp",
    "/detailphotos/38.3.webp",
    "/detailphotos/38.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-733)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in luxury with our exquisite Abstract Waves Black Cord Set. This beautiful and comfortable set features abstract wave designs that will add an elegant touch to any outfit. Embrace sophistication and comfort with this exclusive cord set.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2936
    },
    {
      "month": "Feb",
      "revenue": 2086
    },
    {
      "month": "Mar",
      "revenue": 2271
    },
    {
      "month": "Apr",
      "revenue": 2317
    },
    {
      "month": "May",
      "revenue": 2357
    },
    {
      "month": "Jun",
      "revenue": 8406
    },
    {
      "month": "Jul",
      "revenue": 7533
    },
    {
      "month": "Aug",
      "revenue": 9706
    },
    {
      "month": "Sep",
      "revenue": 1074
    },
    {
      "month": "Oct",
      "revenue": 3140
    },
    {
      "month": "Nov",
      "revenue": 3003
    },
    {
      "month": "Dec",
      "revenue": 8760
    }
  ]
},
{
  "id": 39,
  "name": "Sage Green Handblock Co-Ord Set",
  "price": 3299,
  "rating": 4.7,
  "reviews": 6376,
  "answers": 113,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "MultiColor"
  ],
  "category": "lounge-wear",
  "model": "RP-575)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/39.1.webp",
    "/detailphotos/39.2.webp",
    "/detailphotos/39.3.webp",
    "/detailphotos/39.4.webp",
    "/detailphotos/39.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-575)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Discover the Sage Green Handblock Co-Ord Set and its exquisitely crafted floral pattern, skillfully handblock-printed on the finest cotton fabric. This luxe two-piece set is a refined choice for women, beautifully draped in a subtle yet charismatic green hue. Indulge in the exclusivity of this impressive creation.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5057
    },
    {
      "month": "Feb",
      "revenue": 5320
    },
    {
      "month": "Mar",
      "revenue": 4702
    },
    {
      "month": "Apr",
      "revenue": 2338
    },
    {
      "month": "May",
      "revenue": 2541
    },
    {
      "month": "Jun",
      "revenue": 9177
    },
    {
      "month": "Jul",
      "revenue": 2223
    },
    {
      "month": "Aug",
      "revenue": 1794
    },
    {
      "month": "Sep",
      "revenue": 9278
    },
    {
      "month": "Oct",
      "revenue": 7693
    },
    {
      "month": "Nov",
      "revenue": 5660
    },
    {
      "month": "Dec",
      "revenue": 4808
    }
  ]
},
{
  "id": 40,
  "name": "Sunrise Splash White Cord Set",
  "price": 1999,
  "rating": 4.4,
  "reviews": 9376,
  "answers": 243,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "MultiColor"
  ],
  "category": "lounge-wear",
  "model": "RP-740)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/40.1.webp",
    "/detailphotos/40.2.webp",
    "/detailphotos/40.3.webp",
    "/detailphotos/40.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-740)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Get ready to make a splash with the Sunrise Splash White Cord Set! This comfortable and breathable set will keep you feeling stylish and cool all day long. Bring some fun and fashion to your wardrobe with this must-have set.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4010
    },
    {
      "month": "Feb",
      "revenue": 6691
    },
    {
      "month": "Mar",
      "revenue": 4774
    },
    {
      "month": "Apr",
      "revenue": 2554
    },
    {
      "month": "May",
      "revenue": 6920
    },
    {
      "month": "Jun",
      "revenue": 5561
    },
    {
      "month": "Jul",
      "revenue": 2324
    },
    {
      "month": "Aug",
      "revenue": 7488
    },
    {
      "month": "Sep",
      "revenue": 2840
    },
    {
      "month": "Oct",
      "revenue": 3996
    },
    {
      "month": "Nov",
      "revenue": 4967
    },
    {
      "month": "Dec",
      "revenue": 8022
    }
  ]
},
{
  "id": 41,
  "name": "Rosheen Red Floral Cord set",
  "price": 3699,
  "rating": 4.3,
  "reviews": 12376,
  "answers": 346,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Red",
    "MultiColor"
  ],
  "category": "lounge-wear",
  "model": "RP-746)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/41.1.webp",
    "/detailphotos/41.2.webp",
    "/detailphotos/41.3.webp",
    "/detailphotos/41.4.webp",
    "/detailphotos/41.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-746)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Get ready to stand out in style with the Rosheen Red Floral Cord set! This set is not only comfortable and breathable, but also incredibly fashionable. With its bold and vibrant floral pattern, this set is perfect for making a statement and staying comfortable all day long. Don't miss out on this must-have fashion piece!",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3656
    },
    {
      "month": "Feb",
      "revenue": 5084
    },
    {
      "month": "Mar",
      "revenue": 5917
    },
    {
      "month": "Apr",
      "revenue": 7129
    },
    {
      "month": "May",
      "revenue": 5928
    },
    {
      "month": "Jun",
      "revenue": 1031
    },
    {
      "month": "Jul",
      "revenue": 5837
    },
    {
      "month": "Aug",
      "revenue": 8123
    },
    {
      "month": "Sep",
      "revenue": 3047
    },
    {
      "month": "Oct",
      "revenue": 7242
    },
    {
      "month": "Nov",
      "revenue": 4177
    },
    {
      "month": "Dec",
      "revenue": 3842
    }
  ]
},
{
  "id": 42,
  "name": "Yellow Safari Cord Set",
  "price": 1999,
  "rating": 4.1,
  "reviews": 13446,
  "answers": 346,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Yellow"
  ],
  "category": "lounge-wear",
  "model": "RP-736)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/42.1.webp",
    "/detailphotos/42.2.webp",
    "/detailphotos/42.3.webp",
    "/detailphotos/42.4.webp",
    "/detailphotos/42.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-736)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Don't just blend in with the crowd, stand out with our Yellow Safari Cord Set! Comfortable, breathable, and oh-so-fashionable, this set will help you make a statement wherever you go. Perfect for those who want to add a touch of fun and playfulness to their wardrobe.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8069
    },
    {
      "month": "Feb",
      "revenue": 4568
    },
    {
      "month": "Mar",
      "revenue": 2392
    },
    {
      "month": "Apr",
      "revenue": 1229
    },
    {
      "month": "May",
      "revenue": 4497
    },
    {
      "month": "Jun",
      "revenue": 9840
    },
    {
      "month": "Jul",
      "revenue": 5501
    },
    {
      "month": "Aug",
      "revenue": 8490
    },
    {
      "month": "Sep",
      "revenue": 1351
    },
    {
      "month": "Oct",
      "revenue": 3774
    },
    {
      "month": "Nov",
      "revenue": 5995
    },
    {
      "month": "Dec",
      "revenue": 7258
    }
  ]
},
{
  "id": 43,
  "name": "Yellow Safari Cord Set",
  "price": 3299,
  "rating": 4.5,
  "reviews": 6446,
  "answers": 196,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "lounge-wear",
  "model": "RP-598)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/43.1.webp",
    "/detailphotos/43.2.webp",
    "/detailphotos/43.3.webp",
    "/detailphotos/43.4.webp",
    "/detailphotos/43.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-598)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Achieve dreamy style with our exquisite Dreamy Floral Hand-block Co-Ord Set. Expertly crafted from luxuriant peach cotton cord and adorned with a delicate floral print in a hand block style, this set exudes a timeless sophistication that promises to elevate any ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4911
    },
    {
      "month": "Feb",
      "revenue": 3681
    },
    {
      "month": "Mar",
      "revenue": 1268
    },
    {
      "month": "Apr",
      "revenue": 1628
    },
    {
      "month": "May",
      "revenue": 1328
    },
    {
      "month": "Jun",
      "revenue": 5546
    },
    {
      "month": "Jul",
      "revenue": 4198
    },
    {
      "month": "Aug",
      "revenue": 9303
    },
    {
      "month": "Sep",
      "revenue": 8535
    },
    {
      "month": "Oct",
      "revenue": 8850
    },
    {
      "month": "Nov",
      "revenue": 8651
    },
    {
      "month": "Dec",
      "revenue": 7902
    }
  ]
},
{
  "id": 44,
  "name": "Green Goddess Coord Set in Silk with Floral Motifs",
  "price": 2999,
  "rating": 4.1,
  "reviews": 12046,
  "answers": 245,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "lounge-wear",
  "model": "RP-800)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/44.1.webp",
    "/detailphotos/44.2.webp",
    "/detailphotos/44.3.webp",
    "/detailphotos/44.4.webp",
    "/detailphotos/44.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-800)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in luxury with our Green Goddess Coord Set. Made with premium silk and adorned with stunning floral motifs, this set exudes elegance and sophistication. Feel like a goddess in this tasteful and exclusive ensemble, perfect for any special occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9681
    },
    {
      "month": "Feb",
      "revenue": 2948
    },
    {
      "month": "Mar",
      "revenue": 8800
    },
    {
      "month": "Apr",
      "revenue": 3980
    },
    {
      "month": "May",
      "revenue": 3884
    },
    {
      "month": "Jun",
      "revenue": 3913
    },
    {
      "month": "Jul",
      "revenue": 4709
    },
    {
      "month": "Aug",
      "revenue": 8244
    },
    {
      "month": "Sep",
      "revenue": 4303
    },
    {
      "month": "Oct",
      "revenue": 1256
    },
    {
      "month": "Nov",
      "revenue": 2625
    },
    {
      "month": "Dec",
      "revenue": 8526
    }
  ]
},
{
  "id": 45,
  "name": "Midnight Jungle Cord Set",
  "price": 1899,
  "rating": 4.7,
  "reviews": 7046,
  "answers": 245,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "lounge-wear",
  "model": "RP-734)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/45.1.webp",
    "/detailphotos/45.2.webp",
    "/detailphotos/45.3.webp",
    "/detailphotos/45.4.webp",
    "/detailphotos/45.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-734)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Experience the luxurious comfort of our Midnight Jungle Cord Set. Made with breathable materials, this fashionable set will keep you feeling cool and stylish all day long. Embrace the elegance and exclusivity of this set, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2601
    },
    {
      "month": "Feb",
      "revenue": 6573
    },
    {
      "month": "Mar",
      "revenue": 8079
    },
    {
      "month": "Apr",
      "revenue": 2813
    },
    {
      "month": "May",
      "revenue": 1358
    },
    {
      "month": "Jun",
      "revenue": 1934
    },
    {
      "month": "Jul",
      "revenue": 3143
    },
    {
      "month": "Aug",
      "revenue": 4501
    },
    {
      "month": "Sep",
      "revenue": 8848
    },
    {
      "month": "Oct",
      "revenue": 9398
    },
    {
      "month": "Nov",
      "revenue": 6754
    },
    {
      "month": "Dec",
      "revenue": 9461
    }
  ]
},
{
  "id": 46,
  "name": "Maharani Pink Handblock Cotton Floral Coord Set",
  "price": 3699,
  "rating": 4.5,
  "reviews": 8746,
  "answers": 268,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "lounge-wear",
  "model": "RP-612)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/46.1.webp",
    "/detailphotos/46.2.webp",
    "/detailphotos/46.3.webp",
    "/detailphotos/46.4.webp",
    "/detailphotos/46.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-612)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Get ready to feel like royalty in our Maharani Pink Handblock Cotton Floral Coord Set! Featuring a comfortable and breathable design, this set is a must-have for any fashionable individual. Say goodbye to boring outfits and hello to a regally stylish look!",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6487
    },
    {
      "month": "Feb",
      "revenue": 9506
    },
    {
      "month": "Mar",
      "revenue": 8548
    },
    {
      "month": "Apr",
      "revenue": 1519
    },
    {
      "month": "May",
      "revenue": 5286
    },
    {
      "month": "Jun",
      "revenue": 3138
    },
    {
      "month": "Jul",
      "revenue": 1883
    },
    {
      "month": "Aug",
      "revenue": 2471
    },
    {
      "month": "Sep",
      "revenue": 7957
    },
    {
      "month": "Oct",
      "revenue": 8580
    },
    {
      "month": "Nov",
      "revenue": 7234
    },
    {
      "month": "Dec",
      "revenue": 4697
    }
  ]
},
{
  "id": 47,
  "name": "Sunset Leopard Print Cord set",
  "price": 1899,
  "rating": 4.1,
  "reviews": 13646,
  "answers": 123,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "MultiColor"
  ],
  "category": "lounge-wear",
  "model": "RP-738)",
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/47.1.webp",
    "/detailphotos/47.2.webp",
    "/detailphotos/47.3.webp",
    "/detailphotos/47.4.webp",
    "/detailphotos/47.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-738)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our Sunset Leopard Print Cord set. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4138
    },
    {
      "month": "Feb",
      "revenue": 3885
    },
    {
      "month": "Mar",
      "revenue": 5746
    },
    {
      "month": "Apr",
      "revenue": 4720
    },
    {
      "month": "May",
      "revenue": 8680
    },
    {
      "month": "Jun",
      "revenue": 9288
    },
    {
      "month": "Jul",
      "revenue": 8103
    },
    {
      "month": "Aug",
      "revenue": 6444
    },
    {
      "month": "Sep",
      "revenue": 3895
    },
    {
      "month": "Oct",
      "revenue": 8403
    },
    {
      "month": "Nov",
      "revenue": 6905
    },
    {
      "month": "Dec",
      "revenue": 4916
    }
  ]
},
{
  "id": 48,
  "name": "Sky Blue Semi Formal Handblock Kaftan",
  "price": 2199,
  "rating": 4.3,
  "reviews": 5646,
  "answers": 183,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "SkyBlue"
  ],
  "category": "lounge-wear",
  "model": "RP-479-KFL-(KF))",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/48.1.webp",
    "/detailphotos/48.2.webp",
    "/detailphotos/48.3.webp",
    "/detailphotos/48.4.webp",
    "/detailphotos/48.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-479-KFL-(KF))",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our Sky Blue Semi Formal Handblock Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7219
    },
    {
      "month": "Feb",
      "revenue": 2651
    },
    {
      "month": "Mar",
      "revenue": 3095
    },
    {
      "month": "Apr",
      "revenue": 7872
    },
    {
      "month": "May",
      "revenue": 5935
    },
    {
      "month": "Jun",
      "revenue": 6873
    },
    {
      "month": "Jul",
      "revenue": 8257
    },
    {
      "month": "Aug",
      "revenue": 7440
    },
    {
      "month": "Sep",
      "revenue": 4890
    },
    {
      "month": "Oct",
      "revenue": 6422
    },
    {
      "month": "Nov",
      "revenue": 7343
    },
    {
      "month": "Dec",
      "revenue": 9226
    }
  ]
},
{
  "id": 49,
  "name": "Royal Red Handblock Kaftan",
  "price": 2199,
  "rating": 4.7,
  "reviews": 4646,
  "answers": 103,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Red"
  ],
  "category": "lounge-wear",
  "model": "RP-451-KFL-(KF))",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/49.1.webp",
    "/detailphotos/49.2.webp",
    "/detailphotos/49.3.webp",
    "/detailphotos/49.4.webp",
    "/detailphotos/49.5.webp",
    "/detailphotos/49.6.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-451-KFL-(KF))",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our Royal Red Handblock Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7960
    },
    {
      "month": "Feb",
      "revenue": 4145
    },
    {
      "month": "Mar",
      "revenue": 3650
    },
    {
      "month": "Apr",
      "revenue": 8633
    },
    {
      "month": "May",
      "revenue": 7713
    },
    {
      "month": "Jun",
      "revenue": 3933
    },
    {
      "month": "Jul",
      "revenue": 8213
    },
    {
      "month": "Aug",
      "revenue": 2064
    },
    {
      "month": "Sep",
      "revenue": 1275
    },
    {
      "month": "Oct",
      "revenue": 9609
    },
    {
      "month": "Nov",
      "revenue": 2295
    },
    {
      "month": "Dec",
      "revenue": 3154
    }
  ]
},
{
  "id": 50,
  "name": "Bouncy Beige Floral Handblock Mul Cotton Kaftan",
  "price": 2199,
  "rating": 4.1,
  "reviews": 9846,
  "answers": 163,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "lounge-wear",
  "model": "RP-204-K)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/50.1.webp",
    "/detailphotos/50.2.webp",
    "/detailphotos/50.3.webp",
    "/detailphotos/50.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton(Mul)",
    "Fit - Relaxed (CODE :RP-204-K)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our Bouncy Beige Floral Handblock Mul Cotton Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3778
    },
    {
      "month": "Feb",
      "revenue": 1856
    },
    {
      "month": "Mar",
      "revenue": 9548
    },
    {
      "month": "Apr",
      "revenue": 7887
    },
    {
      "month": "May",
      "revenue": 7528
    },
    {
      "month": "Jun",
      "revenue": 1960
    },
    {
      "month": "Jul",
      "revenue": 9430
    },
    {
      "month": "Aug",
      "revenue": 6580
    },
    {
      "month": "Sep",
      "revenue": 4392
    },
    {
      "month": "Oct",
      "revenue": 6246
    },
    {
      "month": "Nov",
      "revenue": 2504
    },
    {
      "month": "Dec",
      "revenue": 6377
    }
  ]
},
{
  "id": 51,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 3.9,
  "reviews": 7700,
  "answers": 244,
  "inStock": true,
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
  "description": "Embrace simplicity with this Mulmul Cotton Traditional tie-dye pattern in vibrant yellow and red tones Saree. It has Tie and Dye prints on Pure Cotton fabric.",
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
  "id": 52,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 3.5,
  "reviews": 7600,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "yellow"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/52.1.jpg",
    "/detailphotos/52.2.jpg",
    "/detailphotos/52.3.jpg",
    "/detailphotos/52.4.jpg",
    "/detailphotos/52.5.jpg",
    "/detailphotos/52.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Modern geometric print in white over a bright yellow base",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Modern geometric print in white over a bright yellow base Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2925
    },
    {
      "month": "Feb",
      "revenue": 9069
    },
    {
      "month": "Mar",
      "revenue": 1730
    },
    {
      "month": "Apr",
      "revenue": 2880
    },
    {
      "month": "May",
      "revenue": 6612
    },
    {
      "month": "Jun",
      "revenue": 9649
    },
    {
      "month": "Jul",
      "revenue": 2964
    },
    {
      "month": "Aug",
      "revenue": 7801
    },
    {
      "month": "Sep",
      "revenue": 8850
    },
    {
      "month": "Oct",
      "revenue": 8253
    },
    {
      "month": "Nov",
      "revenue": 1219
    },
    {
      "month": "Dec",
      "revenue": 1307
    }
  ]
},
{
  "id": 53,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3599,
  "rating": 4,
  "reviews": 8100,
  "answers": 294,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "orange"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/53.1.jpg",
    "/detailphotos/53.2.jpg",
    "/detailphotos/53.3.jpg",
    "/detailphotos/53.4.jpg",
    "/detailphotos/53.5.jpg",
    "/detailphotos/53.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "traditional geometric print in white over a bright orange base",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton traditional geometric print in white over a bright orange base Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2208
    },
    {
      "month": "Feb",
      "revenue": 7653
    },
    {
      "month": "Mar",
      "revenue": 1555
    },
    {
      "month": "Apr",
      "revenue": 9352
    },
    {
      "month": "May",
      "revenue": 1502
    },
    {
      "month": "Jun",
      "revenue": 8079
    },
    {
      "month": "Jul",
      "revenue": 9309
    },
    {
      "month": "Aug",
      "revenue": 5356
    },
    {
      "month": "Sep",
      "revenue": 1592
    },
    {
      "month": "Oct",
      "revenue": 8429
    },
    {
      "month": "Nov",
      "revenue": 9131
    },
    {
      "month": "Dec",
      "revenue": 8572
    }
  ]
},
{
  "id": 54,
  "name": "Blue Party Wear Sequin Work Georgette Saree",
  "price": 5399,
  "rating": 4.1,
  "reviews": 7900,
  "answers": 274,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Blue"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/54.1.jpg",
    "/detailphotos/54.2.jpg",
    "/detailphotos/54.3.jpg",
    "/detailphotos/54.4.jpg",
    "/detailphotos/54.5.jpg",
    "/detailphotos/54.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Blue Georgette",
    "traditional  print in white over a bright blue base",
    "Pure Georgette Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "A sparkling star, this Party Wear Sequin Work Blue Georgette Saree has a golden sequin work border and sequin embellishments.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9975
    },
    {
      "month": "Feb",
      "revenue": 5521
    },
    {
      "month": "Mar",
      "revenue": 2011
    },
    {
      "month": "Apr",
      "revenue": 7565
    },
    {
      "month": "May",
      "revenue": 2690
    },
    {
      "month": "Jun",
      "revenue": 1013
    },
    {
      "month": "Jul",
      "revenue": 6552
    },
    {
      "month": "Aug",
      "revenue": 1966
    },
    {
      "month": "Sep",
      "revenue": 9331
    },
    {
      "month": "Oct",
      "revenue": 9643
    },
    {
      "month": "Nov",
      "revenue": 4879
    },
    {
      "month": "Dec",
      "revenue": 6091
    }
  ]
},
{
  "id": 55,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 3.6,
  "reviews": 6600,
  "answers": 184,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
  "color": [
    "White"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/55.1.jpg",
    "/detailphotos/55.2.jpg",
    "/detailphotos/55.3.jpg",
    "/detailphotos/55.4.jpg",
    "/detailphotos/55.5.jpg",
    "/detailphotos/55.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "traditional pattern print in red over a bright white base",
    "Pure Georgette Fabric",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton traditional pattern print in red over a bright white base Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6123
    },
    {
      "month": "Feb",
      "revenue": 9342
    },
    {
      "month": "Mar",
      "revenue": 8660
    },
    {
      "month": "Apr",
      "revenue": 2328
    },
    {
      "month": "May",
      "revenue": 4882
    },
    {
      "month": "Jun",
      "revenue": 7106
    },
    {
      "month": "Jul",
      "revenue": 5291
    },
    {
      "month": "Aug",
      "revenue": 4822
    },
    {
      "month": "Sep",
      "revenue": 4829
    },
    {
      "month": "Oct",
      "revenue": 5869
    },
    {
      "month": "Nov",
      "revenue": 2594
    },
    {
      "month": "Dec",
      "revenue": 5079
    }
  ]
},
{
  "id": 56,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 3.8,
  "reviews": 7800,
  "answers": 259,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
  "color": [
    "Blue",
    "White"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/56.1.jpg",
    "/detailphotos/56.2.jpg",
    "/detailphotos/56.3.jpg",
    "/detailphotos/56.4.jpg",
    "/detailphotos/56.5.jpg",
    "/detailphotos/56.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "traditional flower pattern print in white over a bright blue base",
    "Pure Cotton",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton traditional flower pattern print in white over a bright blue base Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9991
    },
    {
      "month": "Feb",
      "revenue": 3462
    },
    {
      "month": "Mar",
      "revenue": 3774
    },
    {
      "month": "Apr",
      "revenue": 5235
    },
    {
      "month": "May",
      "revenue": 2754
    },
    {
      "month": "Jun",
      "revenue": 9032
    },
    {
      "month": "Jul",
      "revenue": 9330
    },
    {
      "month": "Aug",
      "revenue": 6577
    },
    {
      "month": "Sep",
      "revenue": 1109
    },
    {
      "month": "Oct",
      "revenue": 9397
    },
    {
      "month": "Nov",
      "revenue": 3539
    },
    {
      "month": "Dec",
      "revenue": 5926
    }
  ]
},
{
  "id": 57,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 3.8,
  "reviews": 7100,
  "answers": 174,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
  "color": [
    "Blue",
    "White"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/57.1.jpg",
    "/detailphotos/57.2.jpg",
    "/detailphotos/57.3.jpg",
    "/detailphotos/57.4.jpg",
    "/detailphotos/57.5.jpg",
    "/detailphotos/57.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "traditional geometric print in black and blue over a bright white base",
    "Pure Cotton",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton traditional geometric print in black and blue over a bright white base Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6963
    },
    {
      "month": "Feb",
      "revenue": 2780
    },
    {
      "month": "Mar",
      "revenue": 2981
    },
    {
      "month": "Apr",
      "revenue": 8419
    },
    {
      "month": "May",
      "revenue": 6449
    },
    {
      "month": "Jun",
      "revenue": 1792
    },
    {
      "month": "Jul",
      "revenue": 4709
    },
    {
      "month": "Aug",
      "revenue": 4688
    },
    {
      "month": "Sep",
      "revenue": 3303
    },
    {
      "month": "Oct",
      "revenue": 2309
    },
    {
      "month": "Nov",
      "revenue": 5603
    },
    {
      "month": "Dec",
      "revenue": 2091
    }
  ]
},
{
  "id": 58,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 3.6,
  "reviews": 6600,
  "answers": 184,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
  "color": [
    "Pink"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/58.1.jpg",
    "/detailphotos/58.2.jpg",
    "/detailphotos/58.3.jpg",
    "/detailphotos/58.4.jpg",
    "/detailphotos/58.5.jpg",
    "/detailphotos/58.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "traditional flower print in red over a bright pink base",
    "Pure Cotton",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton flower print in red over a bright pink base Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2945
    },
    {
      "month": "Feb",
      "revenue": 4140
    },
    {
      "month": "Mar",
      "revenue": 9725
    },
    {
      "month": "Apr",
      "revenue": 4656
    },
    {
      "month": "May",
      "revenue": 8307
    },
    {
      "month": "Jun",
      "revenue": 6484
    },
    {
      "month": "Jul",
      "revenue": 8736
    },
    {
      "month": "Aug",
      "revenue": 4886
    },
    {
      "month": "Sep",
      "revenue": 5670
    },
    {
      "month": "Oct",
      "revenue": 5492
    },
    {
      "month": "Nov",
      "revenue": 7356
    },
    {
      "month": "Dec",
      "revenue": 7753
    }
  ]
},
{
  "id": 59,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4,
  "reviews": 7900,
  "answers": 284,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
  "color": [
    "NavyBlue"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/59.1.jpg",
    "/detailphotos/59.2.jpg",
    "/detailphotos/59.3.jpg",
    "/detailphotos/59.4.jpg",
    "/detailphotos/59.5.jpg",
    "/detailphotos/59.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "traditional colorful geometric print over a bright NavyBlue base",
    "Pure Cotton",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton traditional colorful geometric print over a bright NavyBlue base Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8848
    },
    {
      "month": "Feb",
      "revenue": 7667
    },
    {
      "month": "Mar",
      "revenue": 4546
    },
    {
      "month": "Apr",
      "revenue": 7398
    },
    {
      "month": "May",
      "revenue": 8007
    },
    {
      "month": "Jun",
      "revenue": 3544
    },
    {
      "month": "Jul",
      "revenue": 7329
    },
    {
      "month": "Aug",
      "revenue": 7468
    },
    {
      "month": "Sep",
      "revenue": 3956
    },
    {
      "month": "Oct",
      "revenue": 9383
    },
    {
      "month": "Nov",
      "revenue": 5337
    },
    {
      "month": "Dec",
      "revenue": 8626
    }
  ]
},
{
  "id": 60,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4,
  "reviews": 7800,
  "answers": 264,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
  "color": [
    "Orange"
  ],
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/60.1.jpg",
    "/detailphotos/60.2.jpg",
    "/detailphotos/60.3.jpg",
    "/detailphotos/60.4.jpg",
    "/detailphotos/60.5.jpg",
    "/detailphotos/60.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "traditional pattern print in white over a Orange base",
    "Pure Cotton",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton traditional pattern print in white over a Orange base Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7829
    },
    {
      "month": "Feb",
      "revenue": 2646
    },
    {
      "month": "Mar",
      "revenue": 8024
    },
    {
      "month": "Apr",
      "revenue": 8409
    },
    {
      "month": "May",
      "revenue": 7015
    },
    {
      "month": "Jun",
      "revenue": 2985
    },
    {
      "month": "Jul",
      "revenue": 6986
    },
    {
      "month": "Aug",
      "revenue": 4250
    },
    {
      "month": "Sep",
      "revenue": 2442
    },
    {
      "month": "Oct",
      "revenue": 7162
    },
    {
      "month": "Nov",
      "revenue": 5232
    },
    {
      "month": "Dec",
      "revenue": 3110
    }
  ]
},
{
  "id": 61,
  "name": "Yellow Festive Bandhani Embroidered Pure Georgette Saree",
  "price": 6799,
  "rating": 4,
  "reviews": 7700,
  "answers": 244,
  "inStock": true,
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
  "description": "Embrace the festive charm of the yellow And Red Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
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
  "id": 62,
  "name": "Multicolour Traditional Embroidered Bandhani Pure Georgette Saree",
  "price": 5799,
  "rating": 3.9,
  "reviews": 6700,
  "answers": 164,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Multicolour"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/62.1.jpg",
    "/detailphotos/62.2.jpg",
    "/detailphotos/62.3.jpg",
    "/detailphotos/62.4.jpg",
    "/detailphotos/62.5.jpg",
    "/detailphotos/62.6.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Traditional bandhani print in vibrant Multicolour  tones",
    "Pure Georgette Fabric",
    "For Traditional Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the Multicolour  Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3905
    },
    {
      "month": "Feb",
      "revenue": 7675
    },
    {
      "month": "Mar",
      "revenue": 9509
    },
    {
      "month": "Apr",
      "revenue": 9021
    },
    {
      "month": "May",
      "revenue": 4763
    },
    {
      "month": "Jun",
      "revenue": 6421
    },
    {
      "month": "Jul",
      "revenue": 7097
    },
    {
      "month": "Aug",
      "revenue": 7458
    },
    {
      "month": "Sep",
      "revenue": 2586
    },
    {
      "month": "Oct",
      "revenue": 1561
    },
    {
      "month": "Nov",
      "revenue": 3930
    },
    {
      "month": "Dec",
      "revenue": 3701
    }
  ]
},
{
  "id": 63,
  "name": "Yellow Traditional Embroidered Bandhani Pure Georgette Saree",
  "price": 5599,
  "rating": 3.8,
  "reviews": 5700,
  "answers": 156,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Yellow"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/63.1.jpg",
    "/detailphotos/63.2.jpg",
    "/detailphotos/63.3.jpg",
    "/detailphotos/63.4.jpg",
    "/detailphotos/63.5.jpg",
    "/detailphotos/63.6.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Traditional bandhani print in vibrant red and yellow tones",
    "Pure Georgette Fabric",
    "For Traditional Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the yellow And Red Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5976
    },
    {
      "month": "Feb",
      "revenue": 6648
    },
    {
      "month": "Mar",
      "revenue": 3834
    },
    {
      "month": "Apr",
      "revenue": 7054
    },
    {
      "month": "May",
      "revenue": 2993
    },
    {
      "month": "Jun",
      "revenue": 9567
    },
    {
      "month": "Jul",
      "revenue": 6542
    },
    {
      "month": "Aug",
      "revenue": 6728
    },
    {
      "month": "Sep",
      "revenue": 5493
    },
    {
      "month": "Oct",
      "revenue": 6097
    },
    {
      "month": "Nov",
      "revenue": 1793
    },
    {
      "month": "Dec",
      "revenue": 6065
    }
  ]
},
{
  "id": 64,
  "name": "Heavy Bandhani Embroidered Pure Georgette Pink Saree",
  "price": 5799,
  "rating": 4.2,
  "reviews": 8700,
  "answers": 264,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Pink"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/64.1.jpg",
    "/detailphotos/64.2.jpg",
    "/detailphotos/64.3.jpg",
    "/detailphotos/64.4.jpg",
    "/detailphotos/64.5.jpg",
    "/detailphotos/64.6.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Heavy bandhani print in vibrant Pink tones",
    "Pure Georgette Fabric",
    "For Traditional Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the Heavy Bandhani Embroidered Pure Georgette Saree. It has bandhani print and a heavy embroidered border.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6083
    },
    {
      "month": "Feb",
      "revenue": 7401
    },
    {
      "month": "Mar",
      "revenue": 3336
    },
    {
      "month": "Apr",
      "revenue": 7462
    },
    {
      "month": "May",
      "revenue": 6349
    },
    {
      "month": "Jun",
      "revenue": 3581
    },
    {
      "month": "Jul",
      "revenue": 9918
    },
    {
      "month": "Aug",
      "revenue": 4766
    },
    {
      "month": "Sep",
      "revenue": 4138
    },
    {
      "month": "Oct",
      "revenue": 6968
    },
    {
      "month": "Nov",
      "revenue": 2460
    },
    {
      "month": "Dec",
      "revenue": 3399
    }
  ]
},
{
  "id": 65,
  "name": "Mustard Traditional Bandhani Embroidered Pure Georgette Saree",
  "price": 6399,
  "rating": 3.9,
  "reviews": 6800,
  "answers": 184,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Mustard"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/65.1.jpg",
    "/detailphotos/65.2.jpg",
    "/detailphotos/65.3.jpg",
    "/detailphotos/65.4.jpg",
    "/detailphotos/65.5.jpg",
    "/detailphotos/65.6.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Traditional  bandhani print in vibrant Mustard tones",
    "Pure Georgette Fabric",
    "For Traditional Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the Traditional Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1501
    },
    {
      "month": "Feb",
      "revenue": 2698
    },
    {
      "month": "Mar",
      "revenue": 2058
    },
    {
      "month": "Apr",
      "revenue": 9011
    },
    {
      "month": "May",
      "revenue": 6169
    },
    {
      "month": "Jun",
      "revenue": 1192
    },
    {
      "month": "Jul",
      "revenue": 2816
    },
    {
      "month": "Aug",
      "revenue": 2087
    },
    {
      "month": "Sep",
      "revenue": 1140
    },
    {
      "month": "Oct",
      "revenue": 8643
    },
    {
      "month": "Nov",
      "revenue": 5382
    },
    {
      "month": "Dec",
      "revenue": 6342
    }
  ]
},
{
  "id": 66,
  "name": "Embroidered Georgette Blue Saree with Unstitched Blouse",
  "price": 4599,
  "rating": 3.9,
  "reviews": 7400,
  "answers": 204,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Blue"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/66.1.jpg",
    "/detailphotos/66.2.jpg",
    "/detailphotos/66.3.jpg",
    "/detailphotos/66.4.jpg",
    "/detailphotos/66.5.jpg",
    "/detailphotos/66.6.jpg",
    "/detailphotos/66.7.jpg",
    "/detailphotos/66.8.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Royal and Ethnic look in vibrant blue tones",
    "Pure Georgette Fabric",
    "For festival Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embellished with beautiful patterns, this Embroidered Saree has a royal look. It has ethnic motifs, a heavy border and tassels at the end. this saree comes with an unstitched blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5222
    },
    {
      "month": "Feb",
      "revenue": 3508
    },
    {
      "month": "Mar",
      "revenue": 7392
    },
    {
      "month": "Apr",
      "revenue": 3655
    },
    {
      "month": "May",
      "revenue": 3051
    },
    {
      "month": "Jun",
      "revenue": 4781
    },
    {
      "month": "Jul",
      "revenue": 9911
    },
    {
      "month": "Aug",
      "revenue": 2723
    },
    {
      "month": "Sep",
      "revenue": 2788
    },
    {
      "month": "Oct",
      "revenue": 8197
    },
    {
      "month": "Nov",
      "revenue": 3711
    },
    {
      "month": "Dec",
      "revenue": 5234
    }
  ]
},
{
  "id": 67,
  "name": "Red Traditional Bandhani Embroidered Pure Georgette Saree",
  "price": 5199,
  "rating": 4,
  "reviews": 6500,
  "answers": 198,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Red"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/67.1.jpg",
    "/detailphotos/67.2.jpg",
    "/detailphotos/67.3.jpg",
    "/detailphotos/67.4.jpg",
    "/detailphotos/67.5.jpg",
    "/detailphotos/67.6.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Traditional bandhani print in vibrant red and orange tones",
    "Pure Georgette Fabric",
    "For Traditional Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the yellow And orange Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1637
    },
    {
      "month": "Feb",
      "revenue": 7357
    },
    {
      "month": "Mar",
      "revenue": 4470
    },
    {
      "month": "Apr",
      "revenue": 3748
    },
    {
      "month": "May",
      "revenue": 9953
    },
    {
      "month": "Jun",
      "revenue": 9880
    },
    {
      "month": "Jul",
      "revenue": 1009
    },
    {
      "month": "Aug",
      "revenue": 7927
    },
    {
      "month": "Sep",
      "revenue": 1492
    },
    {
      "month": "Oct",
      "revenue": 5166
    },
    {
      "month": "Nov",
      "revenue": 7293
    },
    {
      "month": "Dec",
      "revenue": 2743
    }
  ]
},
{
  "id": 68,
  "name": "Red Heavy Bandhani Embroidered Pure Georgette Saree",
  "price": 5999,
  "rating": 4.1,
  "reviews": 8200,
  "answers": 264,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Red"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/68.1.jpg",
    "/detailphotos/68.2.jpg",
    "/detailphotos/68.3.jpg",
    "/detailphotos/68.4.jpg",
    "/detailphotos/68.5.jpg",
    "/detailphotos/68.6.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Traditional Heavy bandhani print in vibrant red tones",
    "Pure Georgette Fabric",
    "For Traditional Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the red Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3285
    },
    {
      "month": "Feb",
      "revenue": 6331
    },
    {
      "month": "Mar",
      "revenue": 7234
    },
    {
      "month": "Apr",
      "revenue": 1039
    },
    {
      "month": "May",
      "revenue": 1217
    },
    {
      "month": "Jun",
      "revenue": 5534
    },
    {
      "month": "Jul",
      "revenue": 9214
    },
    {
      "month": "Aug",
      "revenue": 4218
    },
    {
      "month": "Sep",
      "revenue": 8076
    },
    {
      "month": "Oct",
      "revenue": 9485
    },
    {
      "month": "Nov",
      "revenue": 4736
    },
    {
      "month": "Dec",
      "revenue": 2898
    }
  ]
},
{
  "id": 69,
  "name": "Red Festive Embroidered Bandhani Pure Georgette Saree",
  "price": 5799,
  "rating": 4,
  "reviews": 6410,
  "answers": 209,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Red"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/69.1.jpg",
    "/detailphotos/69.2.jpg",
    "/detailphotos/69.3.jpg",
    "/detailphotos/69.4.jpg",
    "/detailphotos/69.5.jpg",
    "/detailphotos/69.6.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Traditional bandhani print in vibrant red tones",
    "Pure Georgette Fabric",
    "For Traditional Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the red Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4632
    },
    {
      "month": "Feb",
      "revenue": 5156
    },
    {
      "month": "Mar",
      "revenue": 5610
    },
    {
      "month": "Apr",
      "revenue": 7400
    },
    {
      "month": "May",
      "revenue": 7619
    },
    {
      "month": "Jun",
      "revenue": 2994
    },
    {
      "month": "Jul",
      "revenue": 6545
    },
    {
      "month": "Aug",
      "revenue": 2217
    },
    {
      "month": "Sep",
      "revenue": 7121
    },
    {
      "month": "Oct",
      "revenue": 3850
    },
    {
      "month": "Nov",
      "revenue": 2207
    },
    {
      "month": "Dec",
      "revenue": 9366
    }
  ]
},
{
  "id": 70,
  "name": "Yellow Heavy Bandhani Embroidered Pure Georgette Saree",
  "price": 6799,
  "rating": 3.9,
  "reviews": 6415,
  "answers": 199,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Yellow"
  ],
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/70.1.jpg",
    "/detailphotos/70.2.jpg",
    "/detailphotos/70.3.jpg",
    "/detailphotos/70.4.jpg",
    "/detailphotos/70.5.jpg",
    "/detailphotos/70.6.jpg"
  ],
  "features": [
    "Embrace the festive with this Mulmul Cotton Saree",
    "Traditional bandhani print in vibrant yellow tones",
    "Pure Georgette Fabric",
    "For Traditional Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the yellow Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7333
    },
    {
      "month": "Feb",
      "revenue": 6020
    },
    {
      "month": "Mar",
      "revenue": 9153
    },
    {
      "month": "Apr",
      "revenue": 3721
    },
    {
      "month": "May",
      "revenue": 3703
    },
    {
      "month": "Jun",
      "revenue": 8315
    },
    {
      "month": "Jul",
      "revenue": 6994
    },
    {
      "month": "Aug",
      "revenue": 5978
    },
    {
      "month": "Sep",
      "revenue": 8377
    },
    {
      "month": "Oct",
      "revenue": 3778
    },
    {
      "month": "Nov",
      "revenue": 4947
    },
    {
      "month": "Dec",
      "revenue": 9316
    }
  ]
},
{
  "id": 71,
  "name": "Party Wear Embroidered Pure Georgette White Saree",
  "price": 5799,
  "rating": 4,
  "reviews": 7510,
  "answers": 254,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "White"
  ],
  "category": "tranding-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/71.1.jpg",
    "/detailphotos/71.2.jpg",
    "/detailphotos/71.3.jpg",
    "/detailphotos/71.4.jpg",
    "/detailphotos/71.5.jpg",
    "/detailphotos/71.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work white Georgette",
    "traditional colourful flower print  over a bright white base",
    "Pure Georgette Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "A glamorous charm to your wardrobe with this Party Wear Embroidered Pure Georgette White Saree. It has beautiful floral thread embroidered details.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3347
    },
    {
      "month": "Feb",
      "revenue": 6563
    },
    {
      "month": "Mar",
      "revenue": 4631
    },
    {
      "month": "Apr",
      "revenue": 3004
    },
    {
      "month": "May",
      "revenue": 4618
    },
    {
      "month": "Jun",
      "revenue": 3658
    },
    {
      "month": "Jul",
      "revenue": 5991
    },
    {
      "month": "Aug",
      "revenue": 2737
    },
    {
      "month": "Sep",
      "revenue": 2995
    },
    {
      "month": "Oct",
      "revenue": 9316
    },
    {
      "month": "Nov",
      "revenue": 7503
    },
    {
      "month": "Dec",
      "revenue": 1687
    }
  ]
},
{
  "id": 72,
  "name": "Party Wear Embroidered Pure Georgette Black Saree",
  "price": 5799,
  "rating": 4.1,
  "reviews": 7980,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Black"
  ],
  "category": "tranding-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/72.1.jpg",
    "/detailphotos/72.2.jpg",
    "/detailphotos/72.3.jpg",
    "/detailphotos/72.4.jpg",
    "/detailphotos/72.5.jpg",
    "/detailphotos/72.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work black Georgette",
    "traditional colourful flower print  over a bright black base",
    "Pure Georgette Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "A glamorous charm to your wardrobe with this Party Wear Embroidered Pure Georgette Black Saree. It has beautiful floral thread embroidered details.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3185
    },
    {
      "month": "Feb",
      "revenue": 1452
    },
    {
      "month": "Mar",
      "revenue": 9621
    },
    {
      "month": "Apr",
      "revenue": 1447
    },
    {
      "month": "May",
      "revenue": 4118
    },
    {
      "month": "Jun",
      "revenue": 7141
    },
    {
      "month": "Jul",
      "revenue": 9215
    },
    {
      "month": "Aug",
      "revenue": 5454
    },
    {
      "month": "Sep",
      "revenue": 3952
    },
    {
      "month": "Oct",
      "revenue": 1494
    },
    {
      "month": "Nov",
      "revenue": 6189
    },
    {
      "month": "Dec",
      "revenue": 3294
    }
  ]
},
{
  "id": 73,
  "name": "Party Wear Embroidered Net Red Saree",
  "price": 7299,
  "rating": 4.2,
  "reviews": 7980,
  "answers": 244,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
  "color": [
    "Red"
  ],
  "category": "tranding-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/73.1.jpg",
    "/detailphotos/73.2.jpg",
    "/detailphotos/73.3.jpg",
    "/detailphotos/73.4.jpg",
    "/detailphotos/73.5.jpg",
    "/detailphotos/73.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work red Georgette",
    "traditional colourful  print  over a bright red base",
    "Pure Georgette Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "A glamorous charm to your wardrobe with this Party Wear Embroidered Net Red Saree. It has beautiful floral thread embroidered details.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7110
    },
    {
      "month": "Feb",
      "revenue": 6397
    },
    {
      "month": "Mar",
      "revenue": 9423
    },
    {
      "month": "Apr",
      "revenue": 6801
    },
    {
      "month": "May",
      "revenue": 1924
    },
    {
      "month": "Jun",
      "revenue": 5482
    },
    {
      "month": "Jul",
      "revenue": 7977
    },
    {
      "month": "Aug",
      "revenue": 7442
    },
    {
      "month": "Sep",
      "revenue": 1983
    },
    {
      "month": "Oct",
      "revenue": 5096
    },
    {
      "month": "Nov",
      "revenue": 9724
    },
    {
      "month": "Dec",
      "revenue": 8325
    }
  ]
},
{
  "id": 74,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.2,
  "reviews": 6700,
  "answers": 254,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Purple"
  ],
  "category": "sarees",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
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
{
  "id": 75,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.1,
  "reviews": 6700,
  "answers": 254,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Purple"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/75.1.jpg",
    "/detailphotos/75.2.jpg",
    "/detailphotos/75.3.jpg",
    "/detailphotos/75.4.jpg",
    "/detailphotos/75.5.jpg",
    "/detailphotos/75.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant white and Purple tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8200
    },
    {
      "month": "Feb",
      "revenue": 6770
    },
    {
      "month": "Mar",
      "revenue": 9442
    },
    {
      "month": "Apr",
      "revenue": 7992
    },
    {
      "month": "May",
      "revenue": 8034
    },
    {
      "month": "Jun",
      "revenue": 9220
    },
    {
      "month": "Jul",
      "revenue": 4704
    },
    {
      "month": "Aug",
      "revenue": 5600
    },
    {
      "month": "Sep",
      "revenue": 4225
    },
    {
      "month": "Oct",
      "revenue": 4436
    },
    {
      "month": "Nov",
      "revenue": 1743
    },
    {
      "month": "Dec",
      "revenue": 4193
    }
  ]
},
{
  "id": 76,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.3,
  "reviews": 6600,
  "answers": 294,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/76.1.jpg",
    "/detailphotos/76.2.jpg",
    "/detailphotos/76.3.jpg",
    "/detailphotos/76.4.jpg",
    "/detailphotos/76.5.jpg",
    "/detailphotos/76.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant white and pink tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3513
    },
    {
      "month": "Feb",
      "revenue": 1030
    },
    {
      "month": "Mar",
      "revenue": 9833
    },
    {
      "month": "Apr",
      "revenue": 6054
    },
    {
      "month": "May",
      "revenue": 7917
    },
    {
      "month": "Jun",
      "revenue": 8655
    },
    {
      "month": "Jul",
      "revenue": 1299
    },
    {
      "month": "Aug",
      "revenue": 4557
    },
    {
      "month": "Sep",
      "revenue": 9088
    },
    {
      "month": "Oct",
      "revenue": 1305
    },
    {
      "month": "Nov",
      "revenue": 1992
    },
    {
      "month": "Dec",
      "revenue": 9617
    }
  ]
},
{
  "id": 77,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 3.9,
  "reviews": 5810,
  "answers": 189,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/77.1.jpg",
    "/detailphotos/77.2.jpg",
    "/detailphotos/77.3.jpg",
    "/detailphotos/77.4.jpg",
    "/detailphotos/77.5.jpg",
    "/detailphotos/77.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant white and pink tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4467
    },
    {
      "month": "Feb",
      "revenue": 7065
    },
    {
      "month": "Mar",
      "revenue": 1465
    },
    {
      "month": "Apr",
      "revenue": 2918
    },
    {
      "month": "May",
      "revenue": 3137
    },
    {
      "month": "Jun",
      "revenue": 6268
    },
    {
      "month": "Jul",
      "revenue": 1675
    },
    {
      "month": "Aug",
      "revenue": 9344
    },
    {
      "month": "Sep",
      "revenue": 9699
    },
    {
      "month": "Oct",
      "revenue": 9686
    },
    {
      "month": "Nov",
      "revenue": 3508
    },
    {
      "month": "Dec",
      "revenue": 6654
    }
  ]
},
{
  "id": 78,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.3,
  "reviews": 5960,
  "answers": 264,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/78.1.jpg",
    "/detailphotos/78.2.jpg",
    "/detailphotos/78.3.jpg",
    "/detailphotos/78.4.jpg",
    "/detailphotos/78.5.jpg",
    "/detailphotos/78.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant white and Pink tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3096
    },
    {
      "month": "Feb",
      "revenue": 5998
    },
    {
      "month": "Mar",
      "revenue": 6654
    },
    {
      "month": "Apr",
      "revenue": 6488
    },
    {
      "month": "May",
      "revenue": 2399
    },
    {
      "month": "Jun",
      "revenue": 6534
    },
    {
      "month": "Jul",
      "revenue": 2406
    },
    {
      "month": "Aug",
      "revenue": 2450
    },
    {
      "month": "Sep",
      "revenue": 7278
    },
    {
      "month": "Oct",
      "revenue": 5654
    },
    {
      "month": "Nov",
      "revenue": 1577
    },
    {
      "month": "Dec",
      "revenue": 2484
    }
  ]
},
{
  "id": 79,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.6,
  "reviews": 8460,
  "answers": 304,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Red",
    "White"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/79.1.jpg",
    "/detailphotos/79.2.jpg",
    "/detailphotos/79.3.jpg",
    "/detailphotos/79.4.jpg",
    "/detailphotos/79.5.jpg",
    "/detailphotos/79.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant white and Pink tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8160
    },
    {
      "month": "Feb",
      "revenue": 3441
    },
    {
      "month": "Mar",
      "revenue": 1277
    },
    {
      "month": "Apr",
      "revenue": 3374
    },
    {
      "month": "May",
      "revenue": 8717
    },
    {
      "month": "Jun",
      "revenue": 3290
    },
    {
      "month": "Jul",
      "revenue": 8649
    },
    {
      "month": "Aug",
      "revenue": 8204
    },
    {
      "month": "Sep",
      "revenue": 1254
    },
    {
      "month": "Oct",
      "revenue": 4166
    },
    {
      "month": "Nov",
      "revenue": 5271
    },
    {
      "month": "Dec",
      "revenue": 7643
    }
  ]
},
{
  "id": 80,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.2,
  "reviews": 6860,
  "answers": 249,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Red",
    "Green"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/80.1.jpg",
    "/detailphotos/80.2.jpg",
    "/detailphotos/80.3.jpg",
    "/detailphotos/80.4.jpg",
    "/detailphotos/80.5.jpg",
    "/detailphotos/80.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant white and Green and Pink tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2142
    },
    {
      "month": "Feb",
      "revenue": 5281
    },
    {
      "month": "Mar",
      "revenue": 9066
    },
    {
      "month": "Apr",
      "revenue": 3744
    },
    {
      "month": "May",
      "revenue": 2579
    },
    {
      "month": "Jun",
      "revenue": 4109
    },
    {
      "month": "Jul",
      "revenue": 1115
    },
    {
      "month": "Aug",
      "revenue": 7748
    },
    {
      "month": "Sep",
      "revenue": 5232
    },
    {
      "month": "Oct",
      "revenue": 9419
    },
    {
      "month": "Nov",
      "revenue": 6661
    },
    {
      "month": "Dec",
      "revenue": 2288
    }
  ]
},
{
  "id": 81,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.3,
  "reviews": 6560,
  "answers": 249,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/81.1.jpg",
    "/detailphotos/81.2.jpg",
    "/detailphotos/81.3.jpg",
    "/detailphotos/81.4.jpg",
    "/detailphotos/81.5.jpg",
    "/detailphotos/81.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant white and  Pink tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5487
    },
    {
      "month": "Feb",
      "revenue": 7604
    },
    {
      "month": "Mar",
      "revenue": 5345
    },
    {
      "month": "Apr",
      "revenue": 7347
    },
    {
      "month": "May",
      "revenue": 7134
    },
    {
      "month": "Jun",
      "revenue": 9649
    },
    {
      "month": "Jul",
      "revenue": 1848
    },
    {
      "month": "Aug",
      "revenue": 4544
    },
    {
      "month": "Sep",
      "revenue": 4947
    },
    {
      "month": "Oct",
      "revenue": 2827
    },
    {
      "month": "Nov",
      "revenue": 2904
    },
    {
      "month": "Dec",
      "revenue": 2864
    }
  ]
},
{
  "id": 82,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.6,
  "reviews": 5960,
  "answers": 169,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Peach"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/82.1.jpg",
    "/detailphotos/82.2.jpg",
    "/detailphotos/82.3.jpg",
    "/detailphotos/82.4.jpg",
    "/detailphotos/82.5.jpg",
    "/detailphotos/82.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant Peach tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1219
    },
    {
      "month": "Feb",
      "revenue": 8679
    },
    {
      "month": "Mar",
      "revenue": 7366
    },
    {
      "month": "Apr",
      "revenue": 8433
    },
    {
      "month": "May",
      "revenue": 9494
    },
    {
      "month": "Jun",
      "revenue": 3593
    },
    {
      "month": "Jul",
      "revenue": 9968
    },
    {
      "month": "Aug",
      "revenue": 8250
    },
    {
      "month": "Sep",
      "revenue": 2759
    },
    {
      "month": "Oct",
      "revenue": 4244
    },
    {
      "month": "Nov",
      "revenue": 3562
    },
    {
      "month": "Dec",
      "revenue": 4104
    }
  ]
},
{
  "id": 83,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.2,
  "reviews": 5930,
  "answers": 190,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Orange"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/83.1.jpg",
    "/detailphotos/83.2.jpg",
    "/detailphotos/83.3.jpg",
    "/detailphotos/83.4.jpg",
    "/detailphotos/83.5.jpg",
    "/detailphotos/83.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant orange tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8837
    },
    {
      "month": "Feb",
      "revenue": 6944
    },
    {
      "month": "Mar",
      "revenue": 5757
    },
    {
      "month": "Apr",
      "revenue": 4163
    },
    {
      "month": "May",
      "revenue": 5722
    },
    {
      "month": "Jun",
      "revenue": 5143
    },
    {
      "month": "Jul",
      "revenue": 3716
    },
    {
      "month": "Aug",
      "revenue": 3270
    },
    {
      "month": "Sep",
      "revenue": 2570
    },
    {
      "month": "Oct",
      "revenue": 2083
    },
    {
      "month": "Nov",
      "revenue": 3574
    },
    {
      "month": "Dec",
      "revenue": 8326
    }
  ]
},
{
  "id": 84,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.3,
  "reviews": 6450,
  "answers": 269,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Orange",
    "Black"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/84.1.jpg",
    "/detailphotos/84.2.jpg",
    "/detailphotos/84.3.jpg",
    "/detailphotos/84.4.jpg",
    "/detailphotos/84.5.jpg",
    "/detailphotos/84.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant orange and black tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8126
    },
    {
      "month": "Feb",
      "revenue": 9416
    },
    {
      "month": "Mar",
      "revenue": 9162
    },
    {
      "month": "Apr",
      "revenue": 7741
    },
    {
      "month": "May",
      "revenue": 2334
    },
    {
      "month": "Jun",
      "revenue": 5807
    },
    {
      "month": "Jul",
      "revenue": 7951
    },
    {
      "month": "Aug",
      "revenue": 8426
    },
    {
      "month": "Sep",
      "revenue": 5258
    },
    {
      "month": "Oct",
      "revenue": 8130
    },
    {
      "month": "Nov",
      "revenue": 1953
    },
    {
      "month": "Dec",
      "revenue": 6733
    }
  ]
},
{
  "id": 85,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.5,
  "reviews": 5490,
  "answers": 169,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/85.1.jpg",
    "/detailphotos/85.2.jpg",
    "/detailphotos/85.3.jpg",
    "/detailphotos/85.4.jpg",
    "/detailphotos/85.5.jpg",
    "/detailphotos/85.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant NavyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1504
    },
    {
      "month": "Feb",
      "revenue": 5470
    },
    {
      "month": "Mar",
      "revenue": 6955
    },
    {
      "month": "Apr",
      "revenue": 9537
    },
    {
      "month": "May",
      "revenue": 8028
    },
    {
      "month": "Jun",
      "revenue": 5543
    },
    {
      "month": "Jul",
      "revenue": 8381
    },
    {
      "month": "Aug",
      "revenue": 8958
    },
    {
      "month": "Sep",
      "revenue": 6590
    },
    {
      "month": "Oct",
      "revenue": 6082
    },
    {
      "month": "Nov",
      "revenue": 4651
    },
    {
      "month": "Dec",
      "revenue": 8101
    }
  ]
},
{
  "id": 86,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.2,
  "reviews": 5560,
  "answers": 149,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "White",
    "Red"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/86.1.jpg",
    "/detailphotos/86.2.jpg",
    "/detailphotos/86.3.jpg",
    "/detailphotos/86.4.jpg",
    "/detailphotos/86.5.jpg",
    "/detailphotos/86.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional tie-dye pattern in vibrant White tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9709
    },
    {
      "month": "Feb",
      "revenue": 8527
    },
    {
      "month": "Mar",
      "revenue": 5736
    },
    {
      "month": "Apr",
      "revenue": 3892
    },
    {
      "month": "May",
      "revenue": 2912
    },
    {
      "month": "Jun",
      "revenue": 9962
    },
    {
      "month": "Jul",
      "revenue": 9284
    },
    {
      "month": "Aug",
      "revenue": 1595
    },
    {
      "month": "Sep",
      "revenue": 2709
    },
    {
      "month": "Oct",
      "revenue": 9004
    },
    {
      "month": "Nov",
      "revenue": 9319
    },
    {
      "month": "Dec",
      "revenue": 8549
    }
  ]
},
{
  "id": 87,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.2,
  "reviews": 5560,
  "answers": 149,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/87.1.jpg",
    "/detailphotos/87.2.jpg",
    "/detailphotos/87.3.jpg",
    "/detailphotos/87.4.jpg",
    "/detailphotos/87.5.jpg",
    "/detailphotos/87.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in vibrant NavyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9782
    },
    {
      "month": "Feb",
      "revenue": 4392
    },
    {
      "month": "Mar",
      "revenue": 5197
    },
    {
      "month": "Apr",
      "revenue": 7947
    },
    {
      "month": "May",
      "revenue": 1698
    },
    {
      "month": "Jun",
      "revenue": 4431
    },
    {
      "month": "Jul",
      "revenue": 8619
    },
    {
      "month": "Aug",
      "revenue": 3014
    },
    {
      "month": "Sep",
      "revenue": 7807
    },
    {
      "month": "Oct",
      "revenue": 2109
    },
    {
      "month": "Nov",
      "revenue": 5910
    },
    {
      "month": "Dec",
      "revenue": 9920
    }
  ]
},
{
  "id": 88,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.4,
  "reviews": 6247,
  "answers": 318,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue",
    "Pink"
  ],
  "category": "sarees",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
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
  "id": 89,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4,
  "reviews": 5894,
  "answers": 272,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "SkyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/89.1.jpg",
    "/detailphotos/89.2.jpg",
    "/detailphotos/89.3.jpg",
    "/detailphotos/89.4.jpg",
    "/detailphotos/89.5.jpg",
    "/detailphotos/89.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern with SkyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6893
    },
    {
      "month": "Feb",
      "revenue": 6564
    },
    {
      "month": "Mar",
      "revenue": 1614
    },
    {
      "month": "Apr",
      "revenue": 8110
    },
    {
      "month": "May",
      "revenue": 8796
    },
    {
      "month": "Jun",
      "revenue": 8173
    },
    {
      "month": "Jul",
      "revenue": 1997
    },
    {
      "month": "Aug",
      "revenue": 8989
    },
    {
      "month": "Sep",
      "revenue": 4981
    },
    {
      "month": "Oct",
      "revenue": 1275
    },
    {
      "month": "Nov",
      "revenue": 3566
    },
    {
      "month": "Dec",
      "revenue": 1862
    }
  ]
},
{
  "id": 90,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 3.9,
  "reviews": 5781,
  "answers": 289,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/90.1.jpg",
    "/detailphotos/90.2.jpg",
    "/detailphotos/90.3.jpg",
    "/detailphotos/90.4.jpg",
    "/detailphotos/90.5.jpg",
    "/detailphotos/90.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in Colourful with NavyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4719
    },
    {
      "month": "Feb",
      "revenue": 7843
    },
    {
      "month": "Mar",
      "revenue": 3437
    },
    {
      "month": "Apr",
      "revenue": 1380
    },
    {
      "month": "May",
      "revenue": 2506
    },
    {
      "month": "Jun",
      "revenue": 6828
    },
    {
      "month": "Jul",
      "revenue": 8792
    },
    {
      "month": "Aug",
      "revenue": 2570
    },
    {
      "month": "Sep",
      "revenue": 9557
    },
    {
      "month": "Oct",
      "revenue": 3514
    },
    {
      "month": "Nov",
      "revenue": 8123
    },
    {
      "month": "Dec",
      "revenue": 8716
    }
  ]
},
{
  "id": 91,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.5,
  "reviews": 7318,
  "answers": 346,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Black",
    "White"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/91.1.jpg",
    "/detailphotos/91.2.jpg",
    "/detailphotos/91.3.jpg",
    "/detailphotos/91.4.jpg",
    "/detailphotos/91.5.jpg",
    "/detailphotos/91.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White with vibrant White and Black tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9796
    },
    {
      "month": "Feb",
      "revenue": 5476
    },
    {
      "month": "Mar",
      "revenue": 9432
    },
    {
      "month": "Apr",
      "revenue": 3079
    },
    {
      "month": "May",
      "revenue": 8745
    },
    {
      "month": "Jun",
      "revenue": 7849
    },
    {
      "month": "Jul",
      "revenue": 9541
    },
    {
      "month": "Aug",
      "revenue": 5770
    },
    {
      "month": "Sep",
      "revenue": 3094
    },
    {
      "month": "Oct",
      "revenue": 1235
    },
    {
      "month": "Nov",
      "revenue": 1399
    },
    {
      "month": "Dec",
      "revenue": 6022
    }
  ]
},
{
  "id": 92,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.2,
  "reviews": 5560,
  "answers": 149,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "SkyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/92.1.jpg",
    "/detailphotos/92.2.jpg",
    "/detailphotos/92.3.jpg",
    "/detailphotos/92.4.jpg",
    "/detailphotos/92.5.jpg",
    "/detailphotos/92.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White with vibrant SkyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3658
    },
    {
      "month": "Feb",
      "revenue": 5800
    },
    {
      "month": "Mar",
      "revenue": 1057
    },
    {
      "month": "Apr",
      "revenue": 5464
    },
    {
      "month": "May",
      "revenue": 8320
    },
    {
      "month": "Jun",
      "revenue": 3617
    },
    {
      "month": "Jul",
      "revenue": 2369
    },
    {
      "month": "Aug",
      "revenue": 6704
    },
    {
      "month": "Sep",
      "revenue": 9854
    },
    {
      "month": "Oct",
      "revenue": 2872
    },
    {
      "month": "Nov",
      "revenue": 9467
    },
    {
      "month": "Dec",
      "revenue": 5516
    }
  ]
},
{
  "id": 93,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.6,
  "reviews": 5800,
  "answers": 240,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/93.1.jpg",
    "/detailphotos/93.2.jpg",
    "/detailphotos/93.3.jpg",
    "/detailphotos/93.4.jpg",
    "/detailphotos/93.5.jpg",
    "/detailphotos/93.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White with vibrant NavyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8146
    },
    {
      "month": "Feb",
      "revenue": 4882
    },
    {
      "month": "Mar",
      "revenue": 6230
    },
    {
      "month": "Apr",
      "revenue": 9970
    },
    {
      "month": "May",
      "revenue": 6661
    },
    {
      "month": "Jun",
      "revenue": 5876
    },
    {
      "month": "Jul",
      "revenue": 4535
    },
    {
      "month": "Aug",
      "revenue": 7777
    },
    {
      "month": "Sep",
      "revenue": 7918
    },
    {
      "month": "Oct",
      "revenue": 8817
    },
    {
      "month": "Nov",
      "revenue": 5558
    },
    {
      "month": "Dec",
      "revenue": 8297
    }
  ]
},
{
  "id": 94,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.8,
  "reviews": 5850,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue",
    "Red"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/94.1.jpg",
    "/detailphotos/94.2.jpg",
    "/detailphotos/94.3.jpg",
    "/detailphotos/94.4.jpg",
    "/detailphotos/94.5.jpg",
    "/detailphotos/94.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White with vibrant NavyBlue and Red tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4377
    },
    {
      "month": "Feb",
      "revenue": 1456
    },
    {
      "month": "Mar",
      "revenue": 2709
    },
    {
      "month": "Apr",
      "revenue": 2793
    },
    {
      "month": "May",
      "revenue": 6757
    },
    {
      "month": "Jun",
      "revenue": 5394
    },
    {
      "month": "Jul",
      "revenue": 1110
    },
    {
      "month": "Aug",
      "revenue": 3666
    },
    {
      "month": "Sep",
      "revenue": 8227
    },
    {
      "month": "Oct",
      "revenue": 8662
    },
    {
      "month": "Nov",
      "revenue": 8571
    },
    {
      "month": "Dec",
      "revenue": 7090
    }
  ]
},
{
  "id": 95,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.4,
  "reviews": 5900,
  "answers": 220,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/95.1.jpg",
    "/detailphotos/95.2.jpg",
    "/detailphotos/95.3.jpg",
    "/detailphotos/95.4.jpg",
    "/detailphotos/95.5.jpg",
    "/detailphotos/95.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White with vibrant NavyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3405
    },
    {
      "month": "Feb",
      "revenue": 4331
    },
    {
      "month": "Mar",
      "revenue": 6134
    },
    {
      "month": "Apr",
      "revenue": 4476
    },
    {
      "month": "May",
      "revenue": 5442
    },
    {
      "month": "Jun",
      "revenue": 1214
    },
    {
      "month": "Jul",
      "revenue": 2157
    },
    {
      "month": "Aug",
      "revenue": 5779
    },
    {
      "month": "Sep",
      "revenue": 1585
    },
    {
      "month": "Oct",
      "revenue": 9079
    },
    {
      "month": "Nov",
      "revenue": 8483
    },
    {
      "month": "Dec",
      "revenue": 5456
    }
  ]
},
{
  "id": 96,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.2,
  "reviews": 6000,
  "answers": 172,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "Red",
    "NavyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/96.1.jpg",
    "/detailphotos/96.2.jpg",
    "/detailphotos/96.3.jpg",
    "/detailphotos/96.4.jpg",
    "/detailphotos/96.5.jpg",
    "/detailphotos/96.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White with vibrant NavyBlue and Red tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5291
    },
    {
      "month": "Feb",
      "revenue": 3616
    },
    {
      "month": "Mar",
      "revenue": 9991
    },
    {
      "month": "Apr",
      "revenue": 8466
    },
    {
      "month": "May",
      "revenue": 9552
    },
    {
      "month": "Jun",
      "revenue": 1469
    },
    {
      "month": "Jul",
      "revenue": 6286
    },
    {
      "month": "Aug",
      "revenue": 1652
    },
    {
      "month": "Sep",
      "revenue": 3214
    },
    {
      "month": "Oct",
      "revenue": 5998
    },
    {
      "month": "Nov",
      "revenue": 7368
    },
    {
      "month": "Dec",
      "revenue": 6175
    }
  ]
},
{
  "id": 97,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.5,
  "reviews": 6100,
  "answers": 183,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue",
    "White"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/97.1.jpg",
    "/detailphotos/97.2.jpg",
    "/detailphotos/97.3.jpg",
    "/detailphotos/97.4.jpg",
    "/detailphotos/97.5.jpg",
    "/detailphotos/97.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White with vibrant NavyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6167
    },
    {
      "month": "Feb",
      "revenue": 4448
    },
    {
      "month": "Mar",
      "revenue": 3162
    },
    {
      "month": "Apr",
      "revenue": 1708
    },
    {
      "month": "May",
      "revenue": 5336
    },
    {
      "month": "Jun",
      "revenue": 4294
    },
    {
      "month": "Jul",
      "revenue": 4430
    },
    {
      "month": "Aug",
      "revenue": 2965
    },
    {
      "month": "Sep",
      "revenue": 6086
    },
    {
      "month": "Oct",
      "revenue": 3180
    },
    {
      "month": "Nov",
      "revenue": 1802
    },
    {
      "month": "Dec",
      "revenue": 1866
    }
  ]
},
{
  "id": 98,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.6,
  "reviews": 6200,
  "answers": 246,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue",
    "White"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/98.1.jpg",
    "/detailphotos/98.2.jpg",
    "/detailphotos/98.3.jpg",
    "/detailphotos/98.4.jpg",
    "/detailphotos/98.5.jpg",
    "/detailphotos/98.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White vibrant NavyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1941
    },
    {
      "month": "Feb",
      "revenue": 7880
    },
    {
      "month": "Mar",
      "revenue": 6832
    },
    {
      "month": "Apr",
      "revenue": 2734
    },
    {
      "month": "May",
      "revenue": 7197
    },
    {
      "month": "Jun",
      "revenue": 6222
    },
    {
      "month": "Jul",
      "revenue": 7493
    },
    {
      "month": "Aug",
      "revenue": 6109
    },
    {
      "month": "Sep",
      "revenue": 5793
    },
    {
      "month": "Oct",
      "revenue": 3875
    },
    {
      "month": "Nov",
      "revenue": 8972
    },
    {
      "month": "Dec",
      "revenue": 8464
    }
  ]
},
{
  "id": 99,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.3,
  "reviews": 6250,
  "answers": 207,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue",
    "Red"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/99.1.jpg",
    "/detailphotos/99.2.jpg",
    "/detailphotos/99.3.jpg",
    "/detailphotos/99.4.jpg",
    "/detailphotos/99.5.jpg",
    "/detailphotos/99.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Floral pattern in White vibrant NavyBlue and Red tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9603
    },
    {
      "month": "Feb",
      "revenue": 7518
    },
    {
      "month": "Mar",
      "revenue": 8140
    },
    {
      "month": "Apr",
      "revenue": 1460
    },
    {
      "month": "May",
      "revenue": 1306
    },
    {
      "month": "Jun",
      "revenue": 9276
    },
    {
      "month": "Jul",
      "revenue": 5343
    },
    {
      "month": "Aug",
      "revenue": 1345
    },
    {
      "month": "Sep",
      "revenue": 5875
    },
    {
      "month": "Oct",
      "revenue": 3544
    },
    {
      "month": "Nov",
      "revenue": 7291
    },
    {
      "month": "Dec",
      "revenue": 6672
    }
  ]
},
{
  "id": 100,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499,
  "rating": 4.4,
  "reviews": 6300,
  "answers": 289,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/100.1.jpg",
    "/detailphotos/100.2.jpg",
    "/detailphotos/100.3.jpg",
    "/detailphotos/100.4.jpg",
    "/detailphotos/100.5.jpg",
    "/detailphotos/100.6.jpg"
  ],
  "features": [
    "Simplicity with this Mulmul Cotton Saree",
    "Traditional Ethnic Motifs pattern in vibrant NavyBlue tones",
    "Quick dip wash or Dry clean",
    "For Daily Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4365
    },
    {
      "month": "Feb",
      "revenue": 6441
    },
    {
      "month": "Mar",
      "revenue": 6210
    },
    {
      "month": "Apr",
      "revenue": 6611
    },
    {
      "month": "May",
      "revenue": 8123
    },
    {
      "month": "Jun",
      "revenue": 6286
    },
    {
      "month": "Jul",
      "revenue": 4318
    },
    {
      "month": "Aug",
      "revenue": 3984
    },
    {
      "month": "Sep",
      "revenue": 7556
    },
    {
      "month": "Oct",
      "revenue": 2544
    },
    {
      "month": "Nov",
      "revenue": 6042
    },
    {
      "month": "Dec",
      "revenue": 4063
    }
  ]
},
{
  "id": 101,
  "name": "A Distinctively Fragile beige Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499,
  "rating": 4.4,
  "reviews": 10846,
  "answers": 243,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "lounge-wear",
  "model": "RP-204)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/101.1.webp",
    "/detailphotos/101.2.webp",
    "/detailphotos/101.3.webp",
    "/detailphotos/101.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton(Mul)",
    "Fit - Relaxed (CODE :RP-204)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our A Distinctively Fragile beige Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2861
    },
    {
      "month": "Feb",
      "revenue": 5934
    },
    {
      "month": "Mar",
      "revenue": 8755
    },
    {
      "month": "Apr",
      "revenue": 2743
    },
    {
      "month": "May",
      "revenue": 9852
    },
    {
      "month": "Jun",
      "revenue": 1850
    },
    {
      "month": "Jul",
      "revenue": 3303
    },
    {
      "month": "Aug",
      "revenue": 1531
    },
    {
      "month": "Sep",
      "revenue": 9853
    },
    {
      "month": "Oct",
      "revenue": 6425
    },
    {
      "month": "Nov",
      "revenue": 8055
    },
    {
      "month": "Dec",
      "revenue": 7426
    }
  ]
},
{
  "id": 102,
  "name": "The Reminiscing Red Blossom Hand-block Printed Cotton Kaftan",
  "price": 2199,
  "rating": 4.9,
  "reviews": 4869,
  "answers": 189,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Red"
  ],
  "category": "lounge-wear",
  "model": "RP-269-K)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/102.1.webp",
    "/detailphotos/102.2.webp",
    "/detailphotos/102.3.webp",
    "/detailphotos/102.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-269-K)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our The Reminiscing Red Blossom Hand-block Printed Cotton Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6544
    },
    {
      "month": "Feb",
      "revenue": 4755
    },
    {
      "month": "Mar",
      "revenue": 7633
    },
    {
      "month": "Apr",
      "revenue": 5334
    },
    {
      "month": "May",
      "revenue": 5073
    },
    {
      "month": "Jun",
      "revenue": 3490
    },
    {
      "month": "Jul",
      "revenue": 1832
    },
    {
      "month": "Aug",
      "revenue": 6373
    },
    {
      "month": "Sep",
      "revenue": 8380
    },
    {
      "month": "Oct",
      "revenue": 3658
    },
    {
      "month": "Nov",
      "revenue": 3503
    },
    {
      "month": "Dec",
      "revenue": 8384
    }
  ]
},
{
  "id": 103,
  "name": "Serene Blue floral Handblock Kaftan Night Suit",
  "price": 2479,
  "rating": 5,
  "reviews": 3269,
  "answers": 59,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "lounge-wear",
  "model": "RP-272)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/103.1.webp",
    "/detailphotos/103.2.webp",
    "/detailphotos/103.3.webp",
    "/detailphotos/103.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-272)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our Serene Blue floral Handblock Kaftan Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8739
    },
    {
      "month": "Feb",
      "revenue": 3202
    },
    {
      "month": "Mar",
      "revenue": 8902
    },
    {
      "month": "Apr",
      "revenue": 3378
    },
    {
      "month": "May",
      "revenue": 3651
    },
    {
      "month": "Jun",
      "revenue": 2462
    },
    {
      "month": "Jul",
      "revenue": 7436
    },
    {
      "month": "Aug",
      "revenue": 2875
    },
    {
      "month": "Sep",
      "revenue": 4303
    },
    {
      "month": "Oct",
      "revenue": 6102
    },
    {
      "month": "Nov",
      "revenue": 4336
    },
    {
      "month": "Dec",
      "revenue": 1644
    }
  ]
},
{
  "id": 104,
  "name": "Maroon & White Handblock Slip-On Kaftan",
  "price": 2199,
  "rating": 4.4,
  "reviews": 5769,
  "answers": 343,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon",
    "White"
  ],
  "category": "lounge-wear",
  "model": "RP-267-KFL-(KF))",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/104.1.webp",
    "/detailphotos/104.2.webp",
    "/detailphotos/104.3.webp",
    "/detailphotos/104.4.webp",
    "/detailphotos/104.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-267-KFL-(KF))",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our Maroon & White Handblock Slip-On Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5593
    },
    {
      "month": "Feb",
      "revenue": 4862
    },
    {
      "month": "Mar",
      "revenue": 3696
    },
    {
      "month": "Apr",
      "revenue": 7428
    },
    {
      "month": "May",
      "revenue": 4956
    },
    {
      "month": "Jun",
      "revenue": 5896
    },
    {
      "month": "Jul",
      "revenue": 8266
    },
    {
      "month": "Aug",
      "revenue": 8010
    },
    {
      "month": "Sep",
      "revenue": 1714
    },
    {
      "month": "Oct",
      "revenue": 9456
    },
    {
      "month": "Nov",
      "revenue": 9070
    },
    {
      "month": "Dec",
      "revenue": 4671
    }
  ]
},
{
  "id": 105,
  "name": "A Playful Green Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499,
  "rating": 4.8,
  "reviews": 6469,
  "answers": 103,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "lounge-wear",
  "model": "RP-215 KFS)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/105.1.webp",
    "/detailphotos/105.2.webp",
    "/detailphotos/105.3.webp",
    "/detailphotos/105.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-215 KFS)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our A Playful Green Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3801
    },
    {
      "month": "Feb",
      "revenue": 5765
    },
    {
      "month": "Mar",
      "revenue": 8188
    },
    {
      "month": "Apr",
      "revenue": 7927
    },
    {
      "month": "May",
      "revenue": 8002
    },
    {
      "month": "Jun",
      "revenue": 1671
    },
    {
      "month": "Jul",
      "revenue": 4301
    },
    {
      "month": "Aug",
      "revenue": 7613
    },
    {
      "month": "Sep",
      "revenue": 2527
    },
    {
      "month": "Oct",
      "revenue": 9771
    },
    {
      "month": "Nov",
      "revenue": 2993
    },
    {
      "month": "Dec",
      "revenue": 1516
    }
  ]
},
{
  "id": 106,
  "name": "Flickering Flames Of Yellow Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499,
  "rating": 4.5,
  "reviews": 12069,
  "answers": 145,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Yellow"
  ],
  "category": "lounge-wear",
  "model": "RP-251)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/106.1.webp",
    "/detailphotos/106.2.webp",
    "/detailphotos/106.3.webp",
    "/detailphotos/106.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton(Mul) ",
    "Fit - Relaxed (CODE :RP-251)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our Flickering Flames Of Yellow Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8644
    },
    {
      "month": "Feb",
      "revenue": 1221
    },
    {
      "month": "Mar",
      "revenue": 5665
    },
    {
      "month": "Apr",
      "revenue": 2057
    },
    {
      "month": "May",
      "revenue": 3831
    },
    {
      "month": "Jun",
      "revenue": 2501
    },
    {
      "month": "Jul",
      "revenue": 2036
    },
    {
      "month": "Aug",
      "revenue": 5376
    },
    {
      "month": "Sep",
      "revenue": 8154
    },
    {
      "month": "Oct",
      "revenue": 5309
    },
    {
      "month": "Nov",
      "revenue": 4437
    },
    {
      "month": "Dec",
      "revenue": 2617
    }
  ]
},
{
  "id": 107,
  "name": "An Exquisitely Attractive Pink Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499,
  "rating": 4.1,
  "reviews": 13900,
  "answers": 345,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "lounge-wear",
  "model": "RP-238)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/107.1.webp",
    "/detailphotos/107.2.webp",
    "/detailphotos/107.3.webp",
    "/detailphotos/107.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton(Mul) ",
    "Fit - Relaxed (CODE :RP-238)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our An Exquisitely Attractive Pink Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3005
    },
    {
      "month": "Feb",
      "revenue": 1558
    },
    {
      "month": "Mar",
      "revenue": 5855
    },
    {
      "month": "Apr",
      "revenue": 9689
    },
    {
      "month": "May",
      "revenue": 5369
    },
    {
      "month": "Jun",
      "revenue": 7040
    },
    {
      "month": "Jul",
      "revenue": 6049
    },
    {
      "month": "Aug",
      "revenue": 8530
    },
    {
      "month": "Sep",
      "revenue": 9190
    },
    {
      "month": "Oct",
      "revenue": 3642
    },
    {
      "month": "Nov",
      "revenue": 6303
    },
    {
      "month": "Dec",
      "revenue": 3110
    }
  ]
},
{
  "id": 108,
  "name": "A Tender Tincture Of Green Handblock Printed Cotton Kaftan Tunic In Contrast With Red Pants (Set of 2)",
  "price": 2499,
  "rating": 4,
  "reviews": 8987,
  "answers": 235,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "lounge-wear",
  "model": "RP-276)",
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/108.1.webp",
    "/detailphotos/108.2.webp",
    "/detailphotos/108.3.webp",
    "/detailphotos/108.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton",
    "Fit - Relaxed (CODE :RP-276)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in ultimate comfort and style with our A Tender Tincture Of Green Handblock Printed Cotton Kaftan Tunic In Contrast With Red Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3421
    },
    {
      "month": "Feb",
      "revenue": 2457
    },
    {
      "month": "Mar",
      "revenue": 1861
    },
    {
      "month": "Apr",
      "revenue": 7870
    },
    {
      "month": "May",
      "revenue": 1077
    },
    {
      "month": "Jun",
      "revenue": 4975
    },
    {
      "month": "Jul",
      "revenue": 1141
    },
    {
      "month": "Aug",
      "revenue": 3117
    },
    {
      "month": "Sep",
      "revenue": 7913
    },
    {
      "month": "Oct",
      "revenue": 1068
    },
    {
      "month": "Nov",
      "revenue": 8461
    },
    {
      "month": "Dec",
      "revenue": 4426
    }
  ]
},
{
  "id": 109,
  "name": "Mesmerizing Blue Handblock Printed Cotton Kaftan",
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
  "description": "Indulge in ultimate comfort and style with our Mesmerizing Blue Handblock Printed Cotton Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
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
  "description": "Indulge in ultimate comfort and style with our Natural Tint Of Green Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
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
  "description": "Indulge in ultimate comfort and style with our Intrinsic Yellow Blossom Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
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
  "description": "Indulge in ultimate comfort and style with our Soothing Mystical Hued Handblock Printed Cotton Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
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
  "description": "Indulge in ultimate comfort and style with our Absolute Chic Handblock Cotton Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
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
  "description": "Indulge in ultimate comfort and style with our Fit For A Queen Handblock Cotton Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
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
  "description": "Indulge in ultimate comfort and style with our Tender Green Tone Handblock Cotton Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
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
  "description": "Indulge in ultimate comfort and style with our Eloquent Beige Handblock Cotton Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion.",
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
  "description": "Indulge in luxury with our Blue Sapphire Gher Handblock Kurta and Pant set. Crafted with precision and elegance, this exclusive set features a stunning blue sapphire color  intricate handblock design. Elevate your style and make a statement with this tasteful and sophisticated ensemble.",
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
  "description": "A sleek black straight long kurta, tailored from airy linen fabric for a comfortable yet sophisticated look. Adorned with a classic flat collar, two handy pockets, and stylish 3/4th sleeves, it exudes timeless elegance. Perfect for versatile styling, adding a touch of refinement to any ensemble effortlessly.",
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
  "description": "A sleek blue straight long kurta, tailored from airy linen fabric for a comfortable yet sophisticated look. Adorned with a classic flat collar, two handy pockets, and stylish 3/4th sleeves, it exudes timeless elegance. Perfect for versatile styling, adding a touch of refinement to any ensemble effortlessly.",
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
{
  "id": 120,
  "name": "Tiffany Blue Airey Linen Long Kurta",
  "price": 999,
  "rating": 4.4,
  "reviews": 3465,
  "answers": 136,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "solid-wear-clothing",
  "model": "RP-PLK103BLUE)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/120.1.webp",
    "/detailphotos/120.2.webp",
    "/detailphotos/120.3.webp",
    "/detailphotos/120.4.webp",
    "/detailphotos/120.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Airey Linen",
    "Fit - Relaxed (CODE :RP-PLK103BLUE)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Tiffany blue straight long kurta crafted from airy linen fabric, epitomizing grace with its flat collar and sleek design. Enhanced with two pockets and 3/4th sleeves, it offers both functionality and sophistication. Ideal for infusing a touch of timeless charm into any ensemble, especially during balmy days.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7758
    },
    {
      "month": "Feb",
      "revenue": 9932
    },
    {
      "month": "Mar",
      "revenue": 9106
    },
    {
      "month": "Apr",
      "revenue": 4837
    },
    {
      "month": "May",
      "revenue": 9325
    },
    {
      "month": "Jun",
      "revenue": 8846
    },
    {
      "month": "Jul",
      "revenue": 9805
    },
    {
      "month": "Aug",
      "revenue": 6702
    },
    {
      "month": "Sep",
      "revenue": 8315
    },
    {
      "month": "Oct",
      "revenue": 2989
    },
    {
      "month": "Nov",
      "revenue": 8857
    },
    {
      "month": "Dec",
      "revenue": 3652
    }
  ]
},
{
  "id": 121,
  "name": "Rose Taupe Airey Linen Long Kurta",
  "price": 999,
  "rating": 4.4,
  "reviews": 3465,
  "answers": 136,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "solid-wear-clothing",
  "model": "RP-PLK103ROSE TAUPE)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/121.1.webp",
    "/detailphotos/121.2.webp",
    "/detailphotos/121.3.webp",
    "/detailphotos/121.4.webp",
    "/detailphotos/121.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Airey Linen",
    "Fit - Relaxed (CODE :RP-PLK103ROSE TAUPE)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A luxurious rose taupe straight long kurta, tailored from airy linen fabric for unparalleled comfort and style. Featuring a sleek flat collar, two functional pockets, and elegant 3/4th sleeves, it exudes refined sophistication. Perfect for infusing understated glamour into any ensemble, ideal for both casual and formal affairs.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1935
    },
    {
      "month": "Feb",
      "revenue": 2235
    },
    {
      "month": "Mar",
      "revenue": 4937
    },
    {
      "month": "Apr",
      "revenue": 8883
    },
    {
      "month": "May",
      "revenue": 4594
    },
    {
      "month": "Jun",
      "revenue": 8860
    },
    {
      "month": "Jul",
      "revenue": 2340
    },
    {
      "month": "Aug",
      "revenue": 7328
    },
    {
      "month": "Sep",
      "revenue": 3485
    },
    {
      "month": "Oct",
      "revenue": 8559
    },
    {
      "month": "Nov",
      "revenue": 4063
    },
    {
      "month": "Dec",
      "revenue": 8910
    }
  ]
},
{
  "id": 122,
  "name": "Flamingo Pink Airey Linen Long Kurta",
  "price": 999,
  "rating": 4.7,
  "reviews": 1365,
  "answers": 13,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "solid-wear-clothing",
  "model": "RP-PLK103PINK)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/122.1.webp",
    "/detailphotos/122.2.webp",
    "/detailphotos/122.3.webp",
    "/detailphotos/122.4.webp",
    "/detailphotos/122.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Airey Linen",
    "Fit - Relaxed (CODE :RP-PLK103PINK)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A flamingo pink, airy linen kurta, exuding elegance with its straight silhouette and flat collar. Designed for comfort, it features 3/4 sleeves and two pockets, blending practicality with style. Perfect for a casual yet chic statement, ideal for warm weather occasions.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5378
    },
    {
      "month": "Feb",
      "revenue": 7033
    },
    {
      "month": "Mar",
      "revenue": 8712
    },
    {
      "month": "Apr",
      "revenue": 1188
    },
    {
      "month": "May",
      "revenue": 9487
    },
    {
      "month": "Jun",
      "revenue": 4407
    },
    {
      "month": "Jul",
      "revenue": 8747
    },
    {
      "month": "Aug",
      "revenue": 9704
    },
    {
      "month": "Sep",
      "revenue": 2134
    },
    {
      "month": "Oct",
      "revenue": 4043
    },
    {
      "month": "Nov",
      "revenue": 7807
    },
    {
      "month": "Dec",
      "revenue": 6101
    }
  ]
},
{
  "id": 123,
  "name": "Seawood Airey Linen Short Kurta",
  "price": 899,
  "rating": 4.3,
  "reviews": 4565,
  "answers": 45,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Seawood"
  ],
  "category": "solid-wear-clothing",
  "model": "RP-PSK102 SEAWOOD)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/123.1.webp",
    "/detailphotos/123.2.webp",
    "/detailphotos/123.3.webp",
    "/detailphotos/123.4.webp",
    "/detailphotos/123.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Airey Linen",
    "Fit - Relaxed (CODE :RP-PSK102 SEAWOOD)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A tranquil seawood short kurta, tailored from airy linen fabric for both comfort and style. With its classic flat collar and chic 3/4th sleeves, it exudes effortless elegance. Perfect for adding a touch of sophistication to your ensemble, ideal for casual outings and semi-formal occasions alike.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2657
    },
    {
      "month": "Feb",
      "revenue": 4656
    },
    {
      "month": "Mar",
      "revenue": 8400
    },
    {
      "month": "Apr",
      "revenue": 2926
    },
    {
      "month": "May",
      "revenue": 3495
    },
    {
      "month": "Jun",
      "revenue": 4216
    },
    {
      "month": "Jul",
      "revenue": 6989
    },
    {
      "month": "Aug",
      "revenue": 9552
    },
    {
      "month": "Sep",
      "revenue": 1385
    },
    {
      "month": "Oct",
      "revenue": 8446
    },
    {
      "month": "Nov",
      "revenue": 2860
    },
    {
      "month": "Dec",
      "revenue": 9608
    }
  ]
},
{
  "id": 124,
  "name": "Umber Airey Linen Short Kurta",
  "price": 899,
  "rating": 4,
  "reviews": 8565,
  "answers": 235,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Umber"
  ],
  "category": "solid-wear-clothing",
  "model": "RP-PSK102 UMBER)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/124.1.webp",
    "/detailphotos/124.2.webp",
    "/detailphotos/124.3.webp",
    "/detailphotos/124.4.webp",
    "/detailphotos/124.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Airey Linen",
    "Fit - Relaxed (CODE :RP-PSK102 UMBER)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "An earthy umber short kurta, fashioned from airy linen fabric, ensuring comfort and style. Its classic flat collar and chic 3/4th sleeves embody timeless elegance. Perfect for infusing a touch of sophistication into any ensemble, ideal for casual outings or semi-formal occasions with its versatile hue.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1203
    },
    {
      "month": "Feb",
      "revenue": 6014
    },
    {
      "month": "Mar",
      "revenue": 6977
    },
    {
      "month": "Apr",
      "revenue": 1041
    },
    {
      "month": "May",
      "revenue": 4101
    },
    {
      "month": "Jun",
      "revenue": 6575
    },
    {
      "month": "Jul",
      "revenue": 3735
    },
    {
      "month": "Aug",
      "revenue": 6899
    },
    {
      "month": "Sep",
      "revenue": 5083
    },
    {
      "month": "Oct",
      "revenue": 7240
    },
    {
      "month": "Nov",
      "revenue": 7155
    },
    {
      "month": "Dec",
      "revenue": 1442
    }
  ]
},
{
  "id": 125,
  "name": "Caramel Airey Linen Short Kurta",
  "price": 999,
  "rating": 4.5,
  "reviews": 3965,
  "answers": 135,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Caramel"
  ],
  "category": "solid-wear-clothing",
  "model": "RP-PLK103CAREMEL)",
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/125.1.webp",
    "/detailphotos/125.2.webp",
    "/detailphotos/125.3.webp",
    "/detailphotos/125.4.webp",
    "/detailphotos/125.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Airey Linen",
    "Fit - Relaxed (CODE :RP-PLK103CAREMEL)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A rich caramel short kurta, tailored from airy linen fabric for a luxurious feel. Its classic flat collar and chic 3/4th sleeves exude understated elegance. Perfect for adding warmth and sophistication to any ensemble, ideal for casual outings or semi-formal gatherings with its versatile hue.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3564
    },
    {
      "month": "Feb",
      "revenue": 9211
    },
    {
      "month": "Mar",
      "revenue": 1339
    },
    {
      "month": "Apr",
      "revenue": 7967
    },
    {
      "month": "May",
      "revenue": 3509
    },
    {
      "month": "Jun",
      "revenue": 9464
    },
    {
      "month": "Jul",
      "revenue": 5494
    },
    {
      "month": "Aug",
      "revenue": 2138
    },
    {
      "month": "Sep",
      "revenue": 9639
    },
    {
      "month": "Oct",
      "revenue": 2370
    },
    {
      "month": "Nov",
      "revenue": 4359
    },
    {
      "month": "Dec",
      "revenue": 8610
    }
  ]
},
{
  "id": 126,
  "name": "Umber Cotton Pants(pant)",
  "price": 899,
  "rating": 4.7,
  "reviews": 4965,
  "answers": 114,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Umber"
  ],
  "category": "solid-wear-clothing",
  "model": "RP-PRP104UMBER)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/126.1.webp",
    "/detailphotos/126.2.webp",
    "/detailphotos/126.3.webp",
    "/detailphotos/126.4.webp",
    "/detailphotos/126.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PRP104UMBER)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Umber-colored straight pants tailored from soft and breathable cotton fabric, ensuring comfort and style. Equipped with two pockets on each side for practicality and convenience. With a half-elasticated, mid-rise waist, they provide flexibility and ease of wear, perfect for versatile dressing with a touch of sophistication.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5216
    },
    {
      "month": "Feb",
      "revenue": 7684
    },
    {
      "month": "Mar",
      "revenue": 7350
    },
    {
      "month": "Apr",
      "revenue": 2162
    },
    {
      "month": "May",
      "revenue": 2163
    },
    {
      "month": "Jun",
      "revenue": 5476
    },
    {
      "month": "Jul",
      "revenue": 7087
    },
    {
      "month": "Aug",
      "revenue": 5889
    },
    {
      "month": "Sep",
      "revenue": 6707
    },
    {
      "month": "Oct",
      "revenue": 9958
    },
    {
      "month": "Nov",
      "revenue": 4995
    },
    {
      "month": "Dec",
      "revenue": 1798
    }
  ]
},
{
  "id": 127,
  "name": "Black Cotton Pants",
  "price": 899,
  "rating": 4.3,
  "reviews": 3065,
  "answers": 109,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Black"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PRP104BLACK)",
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/127.1.webp",
    "/detailphotos/127.2.webp",
    "/detailphotos/127.3.webp",
    "/detailphotos/127.4.webp",
    "/detailphotos/127.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PRP104BLACK)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Classic black straight pants tailored from breathable cotton fabric, blending style with comfort. Equipped with two pockets on each side, they offer functionality and convenience. The half-elasticated, mid-rise waist ensures a flexible fit, making them perfect for versatile styling and effortless sophistication in any setting.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2989
    },
    {
      "month": "Feb",
      "revenue": 4814
    },
    {
      "month": "Mar",
      "revenue": 9268
    },
    {
      "month": "Apr",
      "revenue": 5402
    },
    {
      "month": "May",
      "revenue": 3617
    },
    {
      "month": "Jun",
      "revenue": 3734
    },
    {
      "month": "Jul",
      "revenue": 6297
    },
    {
      "month": "Aug",
      "revenue": 6345
    },
    {
      "month": "Sep",
      "revenue": 2838
    },
    {
      "month": "Oct",
      "revenue": 1753
    },
    {
      "month": "Nov",
      "revenue": 5595
    },
    {
      "month": "Dec",
      "revenue": 4438
    }
  ]
},
{
  "id": 128,
  "name": "Maroon Cotton Pants",
  "price": 899,
  "rating": 5,
  "reviews": 365,
  "answers": 9,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PRP104MAROON)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/128.1.webp",
    "/detailphotos/128.2.webp",
    "/detailphotos/128.3.webp",
    "/detailphotos/128.4.webp",
    "/detailphotos/128.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PRP104MAROON)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A deep maroon straight pants crafted from breathable cotton fabric, ensuring comfort and style. Featuring two pockets on each side, they offer practicality with sophistication. With a half-elasticated, mid-rise waist, they provide flexibility and ease of wear, ideal for versatile dressing with a touch of elegance and comfort.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6179
    },
    {
      "month": "Feb",
      "revenue": 1309
    },
    {
      "month": "Mar",
      "revenue": 6117
    },
    {
      "month": "Apr",
      "revenue": 1738
    },
    {
      "month": "May",
      "revenue": 9238
    },
    {
      "month": "Jun",
      "revenue": 1823
    },
    {
      "month": "Jul",
      "revenue": 7349
    },
    {
      "month": "Aug",
      "revenue": 8247
    },
    {
      "month": "Sep",
      "revenue": 1140
    },
    {
      "month": "Oct",
      "revenue": 7896
    },
    {
      "month": "Nov",
      "revenue": 9814
    },
    {
      "month": "Dec",
      "revenue": 7089
    }
  ]
},
{
  "id": 129,
  "name": "Flamingo Pink Cotton Pant",
  "price": 899,
  "rating": 4.5,
  "reviews": 3695,
  "answers": 92,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PRP104PINK)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/129.1.webp",
    "/detailphotos/129.2.webp",
    "/detailphotos/129.3.webp",
    "/detailphotos/129.4.webp",
    "/detailphotos/129.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PRP104PINK)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A vibrant flamingo-colored straight pants crafted from breathable cotton fabric for a comfortable fit. Featuring two pockets on each side, they offer practicality with style. With a half-elasticated, mid-rise waist, they ensure flexibility and ease of wear, ideal for versatile styling and everyday comfort.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4961
    },
    {
      "month": "Feb",
      "revenue": 9809
    },
    {
      "month": "Mar",
      "revenue": 1940
    },
    {
      "month": "Apr",
      "revenue": 6056
    },
    {
      "month": "May",
      "revenue": 1069
    },
    {
      "month": "Jun",
      "revenue": 1670
    },
    {
      "month": "Jul",
      "revenue": 8778
    },
    {
      "month": "Aug",
      "revenue": 7695
    },
    {
      "month": "Sep",
      "revenue": 4664
    },
    {
      "month": "Oct",
      "revenue": 6348
    },
    {
      "month": "Nov",
      "revenue": 2400
    },
    {
      "month": "Dec",
      "revenue": 3431
    }
  ]
},
{
  "id": 130,
  "name": "Mustard Cotton Pants",
  "price": 899,
  "rating": 4.2,
  "reviews": 5695,
  "answers": 113,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Yellow"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PRP104MUSTARD)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/130.1.webp",
    "/detailphotos/130.2.webp",
    "/detailphotos/130.3.webp",
    "/detailphotos/130.4.webp",
    "/detailphotos/130.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PRP104MUSTARD)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Mustard-colored straight pants made from breathable cotton fabric for comfort and versatility. Featuring two pockets on each side for practicality and convenience. With a half-elasticated, mid-rise waist, they offer flexibility and ease of wear, perfect for effortless yet stylish dressing in any casual or semi-formal setting.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7381
    },
    {
      "month": "Feb",
      "revenue": 9879
    },
    {
      "month": "Mar",
      "revenue": 9467
    },
    {
      "month": "Apr",
      "revenue": 4722
    },
    {
      "month": "May",
      "revenue": 6787
    },
    {
      "month": "Jun",
      "revenue": 8996
    },
    {
      "month": "Jul",
      "revenue": 8418
    },
    {
      "month": "Aug",
      "revenue": 7455
    },
    {
      "month": "Sep",
      "revenue": 4699
    },
    {
      "month": "Oct",
      "revenue": 9390
    },
    {
      "month": "Nov",
      "revenue": 4785
    },
    {
      "month": "Dec",
      "revenue": 7001
    }
  ]
},
{
  "id": 131,
  "name": "Rose Taupe Cotton Pants",
  "price": 899,
  "rating": 4.6,
  "reviews": 7695,
  "answers": 56,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PRP104ROSE TAUPE)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/131.1.webp",
    "/detailphotos/131.2.webp",
    "/detailphotos/131.3.webp",
    "/detailphotos/131.4.webp",
    "/detailphotos/131.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PRP104ROSE TAUPE)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Rose taupe straight pants crafted from soft and breathable cotton fabric, ensuring comfort and style. Equipped with two pockets on each side, they offer functionality with flair. With a half-elasticated, mid-rise waist, they provide flexibility and ease of wear, perfect for versatile dressing with a touch of understated elegance.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3888
    },
    {
      "month": "Feb",
      "revenue": 4268
    },
    {
      "month": "Mar",
      "revenue": 8733
    },
    {
      "month": "Apr",
      "revenue": 5393
    },
    {
      "month": "May",
      "revenue": 7950
    },
    {
      "month": "Jun",
      "revenue": 8363
    },
    {
      "month": "Jul",
      "revenue": 9925
    },
    {
      "month": "Aug",
      "revenue": 4596
    },
    {
      "month": "Sep",
      "revenue": 8081
    },
    {
      "month": "Oct",
      "revenue": 7986
    },
    {
      "month": "Nov",
      "revenue": 5860
    },
    {
      "month": "Dec",
      "revenue": 5763
    }
  ]
},
{
  "id": 132,
  "name": "Seawood Cotton Pants",
  "price": 899,
  "rating": 4.2,
  "reviews": 4595,
  "answers": 126,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Seawood"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PRP104SEAWOOD)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/132.1.webp",
    "/detailphotos/132.2.webp",
    "/detailphotos/132.3.webp",
    "/detailphotos/132.4.webp",
    "/detailphotos/132.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PRP104SEAWOOD)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Seawood-colored straight pants tailored from breathable cotton fabric for comfort and durability. Featuring two pockets on each side, they offer practicality and convenience. With a half-elasticated, mid-rise waist, they ensure flexibility and ease of wear, perfect for versatile styling with a touch of relaxed sophistication.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4262
    },
    {
      "month": "Feb",
      "revenue": 4191
    },
    {
      "month": "Mar",
      "revenue": 7138
    },
    {
      "month": "Apr",
      "revenue": 3280
    },
    {
      "month": "May",
      "revenue": 9440
    },
    {
      "month": "Jun",
      "revenue": 9288
    },
    {
      "month": "Jul",
      "revenue": 7194
    },
    {
      "month": "Aug",
      "revenue": 5682
    },
    {
      "month": "Sep",
      "revenue": 6721
    },
    {
      "month": "Oct",
      "revenue": 3695
    },
    {
      "month": "Nov",
      "revenue": 6368
    },
    {
      "month": "Dec",
      "revenue": 7482
    }
  ]
},
{
  "id": 133,
  "name": "Navy Blue Cotton Pants",
  "price": 899,
  "rating": 4.4,
  "reviews": 12395,
  "answers": 426,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PRP104NAVY BLUE)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/133.1.webp",
    "/detailphotos/133.2.webp",
    "/detailphotos/133.3.webp",
    "/detailphotos/133.4.webp",
    "/detailphotos/133.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PRP104NAVY BLUE)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Navy blue straight pants tailored from breathable cotton fabric, ensuring comfort and versatility. Equipped with two pockets on each side for convenience and practicality. With a half-elasticated, mid-rise waist, they provide flexibility and ease of wear, ideal for effortless yet stylish dressing in any casual or semi-formal setting.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3187
    },
    {
      "month": "Feb",
      "revenue": 8029
    },
    {
      "month": "Mar",
      "revenue": 5706
    },
    {
      "month": "Apr",
      "revenue": 6854
    },
    {
      "month": "May",
      "revenue": 2907
    },
    {
      "month": "Jun",
      "revenue": 4200
    },
    {
      "month": "Jul",
      "revenue": 9304
    },
    {
      "month": "Aug",
      "revenue": 7831
    },
    {
      "month": "Sep",
      "revenue": 6264
    },
    {
      "month": "Oct",
      "revenue": 6883
    },
    {
      "month": "Nov",
      "revenue": 8163
    },
    {
      "month": "Dec",
      "revenue": 1471
    }
  ]
},
{
  "id": 134,
  "name": "Umber Palazzo pant",
  "price": 899,
  "rating": 4,
  "reviews": 3395,
  "answers": 36,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Umber"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PPP106UMBER)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/134.1.webp",
    "/detailphotos/134.2.webp",
    "/detailphotos/134.3.webp",
    "/detailphotos/134.4.webp",
    "/detailphotos/134.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PPP106UMBER)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Umber-colored palazzo pants made from breathable cotton fabric, ensuring comfort and versatility. Designed with pockets on each side for practicality. With a half-elasticated, mid-rise waist, they offer flexibility and ease of wear. Perfect for effortless yet stylish dressing, ideal for various casual or semi-formal occasions.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6620
    },
    {
      "month": "Feb",
      "revenue": 3502
    },
    {
      "month": "Mar",
      "revenue": 9956
    },
    {
      "month": "Apr",
      "revenue": 2216
    },
    {
      "month": "May",
      "revenue": 7421
    },
    {
      "month": "Jun",
      "revenue": 2724
    },
    {
      "month": "Jul",
      "revenue": 5113
    },
    {
      "month": "Aug",
      "revenue": 6597
    },
    {
      "month": "Sep",
      "revenue": 8716
    },
    {
      "month": "Oct",
      "revenue": 7562
    },
    {
      "month": "Nov",
      "revenue": 2199
    },
    {
      "month": "Dec",
      "revenue": 6573
    }
  ]
},
{
  "id": 135,
  "name": "Rose Taupe Palazzo pant",
  "price": 899,
  "rating": 4.5,
  "reviews": 4795,
  "answers": 232,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PPP106ROSE TAUPE)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/135.1.webp",
    "/detailphotos/135.2.webp",
    "/detailphotos/135.3.webp",
    "/detailphotos/135.4.webp",
    "/detailphotos/135.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PPP106ROSE TAUPE)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Seawood-colored palazzo pants tailored from breathable cotton fabric, ensuring comfort and style. Designed with pockets on each side for practicality. With a half-elasticated, mid-rise waist, they offer flexibility and ease of wear. Perfect for versatile dressing, adding a touch of relaxed sophistication to any ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2578
    },
    {
      "month": "Feb",
      "revenue": 2513
    },
    {
      "month": "Mar",
      "revenue": 2338
    },
    {
      "month": "Apr",
      "revenue": 3273
    },
    {
      "month": "May",
      "revenue": 1851
    },
    {
      "month": "Jun",
      "revenue": 7977
    },
    {
      "month": "Jul",
      "revenue": 5998
    },
    {
      "month": "Aug",
      "revenue": 5831
    },
    {
      "month": "Sep",
      "revenue": 5260
    },
    {
      "month": "Oct",
      "revenue": 1285
    },
    {
      "month": "Nov",
      "revenue": 3745
    },
    {
      "month": "Dec",
      "revenue": 7658
    }
  ]
},
{
  "id": 136,
  "name": "Maroon Palazzo pant",
  "price": 899,
  "rating": 4,
  "reviews": 8795,
  "answers": 452,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PPP106MAROON)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL"
  ],
  "images": [
    "/detailphotos/136.1.webp",
    "/detailphotos/136.2.webp",
    "/detailphotos/136.3.webp",
    "/detailphotos/136.4.webp",
    "/detailphotos/136.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PPP106MAROON)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Maroon palazzo pants tailored from soft cotton fabric, blending comfort with style. Adorned with pockets on each side for added functionality. Featuring a half-elasticated, mid-rise waist, they offer flexibility and ease of wear. Perfect for versatile styling, adding a touch of elegance to any ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6174
    },
    {
      "month": "Feb",
      "revenue": 8022
    },
    {
      "month": "Mar",
      "revenue": 7542
    },
    {
      "month": "Apr",
      "revenue": 4742
    },
    {
      "month": "May",
      "revenue": 5241
    },
    {
      "month": "Jun",
      "revenue": 3093
    },
    {
      "month": "Jul",
      "revenue": 8513
    },
    {
      "month": "Aug",
      "revenue": 8307
    },
    {
      "month": "Sep",
      "revenue": 7703
    },
    {
      "month": "Oct",
      "revenue": 9509
    },
    {
      "month": "Nov",
      "revenue": 4343
    },
    {
      "month": "Dec",
      "revenue": 5757
    }
  ]
},
{
  "id": 137,
  "name": "Mustard Palazzo pant",
  "price": 899,
  "rating": 4.7,
  "reviews": 3795,
  "answers": 52,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Yellow"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PPP106MUSTARD)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/137.1.webp",
    "/detailphotos/137.2.webp",
    "/detailphotos/137.3.webp",
    "/detailphotos/137.4.webp",
    "/detailphotos/137.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PPP106MUSTARD)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Mustard palazzo pants tailored from breathable cotton fabric, offering both comfort and style. Featuring pockets on each side for practicality. With a half-elasticated, mid-rise waist, they provide flexibility and ease of wear. Perfect for versatile dressing, adding a vibrant pop of color any ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5553
    },
    {
      "month": "Feb",
      "revenue": 9091
    },
    {
      "month": "Mar",
      "revenue": 9971
    },
    {
      "month": "Apr",
      "revenue": 7708
    },
    {
      "month": "May",
      "revenue": 5196
    },
    {
      "month": "Jun",
      "revenue": 6000
    },
    {
      "month": "Jul",
      "revenue": 1538
    },
    {
      "month": "Aug",
      "revenue": 4239
    },
    {
      "month": "Sep",
      "revenue": 8154
    },
    {
      "month": "Oct",
      "revenue": 7630
    },
    {
      "month": "Nov",
      "revenue": 2650
    },
    {
      "month": "Dec",
      "revenue": 8351
    }
  ]
},
{
  "id": 138,
  "name": "Seawood Palazzo pant",
  "price": 899,
  "rating": 4.2,
  "reviews": 12395,
  "answers": 342,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Seawood"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PPP106SEAWOOD)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/138.1.webp",
    "/detailphotos/138.2.webp",
    "/detailphotos/138.3.webp",
    "/detailphotos/138.4.webp",
    "/detailphotos/138.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PPP106SEAWOOD)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Seawood-colored palazzo pants tailored from breathable cotton fabric, ensuring comfort and style. Designed with pockets on each side for practicality. With a half-elasticated, mid-rise waist, they offer flexibility and ease of wear. Perfect for versatile dressing, adding a touch of relaxed sophistication to any ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7662
    },
    {
      "month": "Feb",
      "revenue": 8800
    },
    {
      "month": "Mar",
      "revenue": 5377
    },
    {
      "month": "Apr",
      "revenue": 5372
    },
    {
      "month": "May",
      "revenue": 8672
    },
    {
      "month": "Jun",
      "revenue": 1676
    },
    {
      "month": "Jul",
      "revenue": 8218
    },
    {
      "month": "Aug",
      "revenue": 5454
    },
    {
      "month": "Sep",
      "revenue": 1260
    },
    {
      "month": "Oct",
      "revenue": 9627
    },
    {
      "month": "Nov",
      "revenue": 2680
    },
    {
      "month": "Dec",
      "revenue": 1096
    }
  ]
},
{
  "id": 139,
  "name": "Pea Green Palazzo pant",
  "price": 899,
  "rating": 4.6,
  "reviews": 6395,
  "answers": 82,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PPP106PEA GREEN)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/139.1.webp",
    "/detailphotos/139.2.webp",
    "/detailphotos/139.3.webp",
    "/detailphotos/139.4.webp",
    "/detailphotos/139.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PPP106PEA GREEN)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Pea green palazzo pants made from soft cotton fabric for a comfortable and stylish wear. Featuring pockets on each side for added functionality. With a half-elasticated, mid-rise waist, they offer flexibility and ease of wear. Perfect for versatile styling, adding a pop of vibrant charm to any ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7715
    },
    {
      "month": "Feb",
      "revenue": 8338
    },
    {
      "month": "Mar",
      "revenue": 3908
    },
    {
      "month": "Apr",
      "revenue": 5156
    },
    {
      "month": "May",
      "revenue": 1355
    },
    {
      "month": "Jun",
      "revenue": 6470
    },
    {
      "month": "Jul",
      "revenue": 5631
    },
    {
      "month": "Aug",
      "revenue": 9507
    },
    {
      "month": "Sep",
      "revenue": 3537
    },
    {
      "month": "Oct",
      "revenue": 6367
    },
    {
      "month": "Nov",
      "revenue": 7592
    },
    {
      "month": "Dec",
      "revenue": 4624
    }
  ]
},
{
  "id": 140,
  "name": "Imperial Red Palazzo pant",
  "price": 899,
  "rating": 5,
  "reviews": 395,
  "answers": 12,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Red"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PPP106IMPERIAL RED)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/140.1.webp",
    "/detailphotos/140.2.webp",
    "/detailphotos/140.3.webp",
    "/detailphotos/140.4.webp",
    "/detailphotos/140.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-PPP106IMPERIAL RED)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Imperial red palazzo pants tailored from soft cotton fabric, ensuring comfort and style. Adorned with pockets on each side for added functionality. Featuring a half-elasticated, mid-rise waist, they offer flexibility and ease of wear. Perfect for versatile styling, adding a bold pop of color any ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7749
    },
    {
      "month": "Feb",
      "revenue": 6439
    },
    {
      "month": "Mar",
      "revenue": 3462
    },
    {
      "month": "Apr",
      "revenue": 7856
    },
    {
      "month": "May",
      "revenue": 4241
    },
    {
      "month": "Jun",
      "revenue": 8797
    },
    {
      "month": "Jul",
      "revenue": 6453
    },
    {
      "month": "Aug",
      "revenue": 3292
    },
    {
      "month": "Sep",
      "revenue": 7672
    },
    {
      "month": "Oct",
      "revenue": 5220
    },
    {
      "month": "Nov",
      "revenue": 4066
    },
    {
      "month": "Dec",
      "revenue": 6316
    }
  ]
},
{
  "id": 141,
  "name": "Off-White 4-Way Stretchable Pants",
  "price": 1199,
  "rating": 4.5,
  "reviews": 3395,
  "answers": 132,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "White"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PSP105OFF WHITE)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/141.1.webp",
    "/detailphotos/141.2.webp",
    "/detailphotos/141.3.webp",
    "/detailphotos/141.4.webp",
    "/detailphotos/141.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Premium Lycra",
    "Fit - Relaxed (CODE :RP-PSP105OFF WHITE)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "These premium off-white pants feature a stretchable material, perfect for all-day comfort. With pockets on both sides, keep your essentials close at hand. Embrace versatility with the 4-way stretch. (Not just for yoga, these pants are perfect for any occasion!)",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7709
    },
    {
      "month": "Feb",
      "revenue": 4677
    },
    {
      "month": "Mar",
      "revenue": 3017
    },
    {
      "month": "Apr",
      "revenue": 5531
    },
    {
      "month": "May",
      "revenue": 8905
    },
    {
      "month": "Jun",
      "revenue": 7403
    },
    {
      "month": "Jul",
      "revenue": 7390
    },
    {
      "month": "Aug",
      "revenue": 4932
    },
    {
      "month": "Sep",
      "revenue": 3448
    },
    {
      "month": "Oct",
      "revenue": 5044
    },
    {
      "month": "Nov",
      "revenue": 5104
    },
    {
      "month": "Dec",
      "revenue": 2685
    }
  ]
},
{
  "id": 142,
  "name": "Burnt Maroon 4-Way Stretchable Pants",
  "price": 1199,
  "rating": 4.7,
  "reviews": 5495,
  "answers": 454,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PSP105BURNT MROON)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/142.1.webp",
    "/detailphotos/142.2.webp",
    "/detailphotos/142.3.webp",
    "/detailphotos/142.4.webp",
    "/detailphotos/142.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Premium Lycra",
    "Fit - Relaxed (CODE :RP-PSP105BURNT MROON)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Upgrade your wardrobe with our Burnt Maroon 4-Way Stretchable Pants. Made from premium lycra fabric, these pants offer the perfect combination of comfort and style. With pockets on both sides, you'll have plenty of room to store your essentials. Embrace the trendy burnt maroon colour and stand out in a sea of black pants.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7210
    },
    {
      "month": "Feb",
      "revenue": 3002
    },
    {
      "month": "Mar",
      "revenue": 3328
    },
    {
      "month": "Apr",
      "revenue": 9668
    },
    {
      "month": "May",
      "revenue": 6073
    },
    {
      "month": "Jun",
      "revenue": 1073
    },
    {
      "month": "Jul",
      "revenue": 5978
    },
    {
      "month": "Aug",
      "revenue": 9793
    },
    {
      "month": "Sep",
      "revenue": 5195
    },
    {
      "month": "Oct",
      "revenue": 6191
    },
    {
      "month": "Nov",
      "revenue": 1250
    },
    {
      "month": "Dec",
      "revenue": 8890
    }
  ]
},
{
  "id": 143,
  "name": "Navy Blue 4-Way Stretchable Pants",
  "price": 1199,
  "rating": 4.2,
  "reviews": 2305,
  "answers": 43,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "NavyBlue"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PSP105NAVY BLUE)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/143.1.webp",
    "/detailphotos/143.2.webp",
    "/detailphotos/143.3.webp",
    "/detailphotos/143.4.webp",
    "/detailphotos/143.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Premium Lycra",
    "Fit - Relaxed (CODE :RP-PSP105NAVY BLUE)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Upgrade your pants game with our Navy Blue 4-Way Stretchable Pants. Made from premium lycra fabric, these pants are not only stylish, but also incredibly comfortable. With pockets on both sides, you'll have easy access to all your essentials. Available in a sleek navy blue color, ese pants are perfect for any occasion. Say goodbye to restrictive pants and hello to ultimate flexibility.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6441
    },
    {
      "month": "Feb",
      "revenue": 3282
    },
    {
      "month": "Mar",
      "revenue": 2623
    },
    {
      "month": "Apr",
      "revenue": 4071
    },
    {
      "month": "May",
      "revenue": 2277
    },
    {
      "month": "Jun",
      "revenue": 6949
    },
    {
      "month": "Jul",
      "revenue": 2987
    },
    {
      "month": "Aug",
      "revenue": 9895
    },
    {
      "month": "Sep",
      "revenue": 2277
    },
    {
      "month": "Oct",
      "revenue": 9250
    },
    {
      "month": "Nov",
      "revenue": 9414
    },
    {
      "month": "Dec",
      "revenue": 9820
    }
  ]
},
{
  "id": 144,
  "name": "Dark Grey 4-Way Stretchable Pants",
  "price": 1199,
  "rating": 4,
  "reviews": 7805,
  "answers": 203,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Grey"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PSP105DARK GREY)",
  "size": [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/144.1.webp",
    "/detailphotos/144.2.webp",
    "/detailphotos/144.3.webp",
    "/detailphotos/144.4.webp",
    "/detailphotos/144.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Premium Lycra",
    "Fit - Relaxed (CODE :RP-PSP105DARK GREY)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Get ready to stretch your style game with our Dark Grey 4-Way Stretchable Pants. Made with premium lycra, these pants offer maximum comfort and flexibility. Plus, with pockets on both sides, you never have to sacrifice style for functionality. Embrace the dark side in style now!",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4072
    },
    {
      "month": "Feb",
      "revenue": 5110
    },
    {
      "month": "Mar",
      "revenue": 6837
    },
    {
      "month": "Apr",
      "revenue": 9210
    },
    {
      "month": "May",
      "revenue": 1032
    },
    {
      "month": "Jun",
      "revenue": 1821
    },
    {
      "month": "Jul",
      "revenue": 3981
    },
    {
      "month": "Aug",
      "revenue": 1023
    },
    {
      "month": "Sep",
      "revenue": 1628
    },
    {
      "month": "Oct",
      "revenue": 6262
    },
    {
      "month": "Nov",
      "revenue": 9542
    },
    {
      "month": "Dec",
      "revenue": 3598
    }
  ]
},
{
  "id": 145,
  "name": "Mustard 4-Way Stretchable Pants",
  "price": 1199,
  "rating": 4.3,
  "reviews": 2305,
  "answers": 13,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Mustard"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PSP105MUSTARD)",
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
    "/detailphotos/145.1.webp",
    "/detailphotos/145.2.webp",
    "/detailphotos/145.3.webp",
    "/detailphotos/145.4.webp",
    "/detailphotos/145.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Premium Lycra",
    "Fit - Relaxed (CODE :RP-PSP105MUSTARD)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Unleash your wild side with these Mustard 4-Way Stretchable Pants! Made with premium lycra fabric, these straight pants provide ultimate comfort and flexibility. With pockets on both sides for convenience, these mustard colored pants add a pop of color tany outfit. Dare to stand out with these stretchy, stylish pants.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8879
    },
    {
      "month": "Feb",
      "revenue": 2654
    },
    {
      "month": "Mar",
      "revenue": 2683
    },
    {
      "month": "Apr",
      "revenue": 5876
    },
    {
      "month": "May",
      "revenue": 4142
    },
    {
      "month": "Jun",
      "revenue": 3204
    },
    {
      "month": "Jul",
      "revenue": 6088
    },
    {
      "month": "Aug",
      "revenue": 1952
    },
    {
      "month": "Sep",
      "revenue": 2048
    },
    {
      "month": "Oct",
      "revenue": 8077
    },
    {
      "month": "Nov",
      "revenue": 9442
    },
    {
      "month": "Dec",
      "revenue": 8457
    }
  ]
},
{
  "id": 146,
  "name": "Maroon 4-Way Stretchable Pants",
  "price": 1199,
  "rating": 4.7,
  "reviews": 4505,
  "answers": 146,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PSP105MUSTARD)",
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
    "/detailphotos/146.1.webp",
    "/detailphotos/146.2.webp",
    "/detailphotos/146.3.webp",
    "/detailphotos/146.4.webp",
    "/detailphotos/146.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Premium Lycra",
    "Fit - Relaxed (CODE :RP-PSP105MUSTARD)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Unleash your wild side with these Mustard 4-Way Stretchable Pants! Made with premium lycra fabric, these straight pants provide ultimate comfort and flexibility. With pockets on both sides for convenience, these mustard colored pants add a pop of color tany outfit. Dare to stand out with these stretchy, stylish pants.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3082
    },
    {
      "month": "Feb",
      "revenue": 2834
    },
    {
      "month": "Mar",
      "revenue": 3440
    },
    {
      "month": "Apr",
      "revenue": 3871
    },
    {
      "month": "May",
      "revenue": 6216
    },
    {
      "month": "Jun",
      "revenue": 3925
    },
    {
      "month": "Jul",
      "revenue": 3400
    },
    {
      "month": "Aug",
      "revenue": 7911
    },
    {
      "month": "Sep",
      "revenue": 6893
    },
    {
      "month": "Oct",
      "revenue": 8979
    },
    {
      "month": "Nov",
      "revenue": 8666
    },
    {
      "month": "Dec",
      "revenue": 7268
    }
  ]
},
{
  "id": 147,
  "name": "Hot Pink 4-Way Stretchable Pants",
  "price": 1199,
  "rating": 4.5,
  "reviews": 7845,
  "answers": 16,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PSP105HOT PINK)",
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
    "/detailphotos/147.1.webp",
    "/detailphotos/147.2.webp",
    "/detailphotos/147.3.webp",
    "/detailphotos/147.4.webp",
    "/detailphotos/147.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Premium Lycra",
    "Fit - Relaxed (CODE :RP-PSP105HOT PINK)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Get ready to stand out in these Hot Pink 4-Way Stretchable Pants. Made with premium lycra fabric, these pants offer ultimate comfort and flexibility. The pockets on both sides add practicality, while the hot pink color adds a bold pop to any outfit. Perfect for those who want to make a statement.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4872
    },
    {
      "month": "Feb",
      "revenue": 9547
    },
    {
      "month": "Mar",
      "revenue": 2669
    },
    {
      "month": "Apr",
      "revenue": 5361
    },
    {
      "month": "May",
      "revenue": 4784
    },
    {
      "month": "Jun",
      "revenue": 5245
    },
    {
      "month": "Jul",
      "revenue": 7636
    },
    {
      "month": "Aug",
      "revenue": 3963
    },
    {
      "month": "Sep",
      "revenue": 9118
    },
    {
      "month": "Oct",
      "revenue": 8770
    },
    {
      "month": "Nov",
      "revenue": 8074
    },
    {
      "month": "Dec",
      "revenue": 2051
    }
  ]
},
{
  "id": 148,
  "name": "Black 4-Way Stretchable Pants",
  "price": 1199,
  "rating": 5,
  "reviews": 8868,
  "answers": 86,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Black"
  ],
  "category": "solid-wear-clothing(pant)",
  "model": "RP-PSP105BLACK)",
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
    "/detailphotos/148.1.webp",
    "/detailphotos/148.2.webp",
    "/detailphotos/148.3.webp",
    "/detailphotos/148.4.webp",
    "/detailphotos/148.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Premium Lycra",
    "Fit - Relaxed (CODE :RP-PSP105BLACK)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Get ready to take on the day in our Black 4-Way Stretchable Pants! Made with premium lycra fabric, these stretchable pants provide maximum comfort and flexibility. With pockets on both sides, you'll have plenty of room to store your essentials. Plus, the sleek black color adds a touch of style to any outfit. Say goodbye to uncomfortable pants and hello to effortless style!",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6409
    },
    {
      "month": "Feb",
      "revenue": 8600
    },
    {
      "month": "Mar",
      "revenue": 6223
    },
    {
      "month": "Apr",
      "revenue": 5312
    },
    {
      "month": "May",
      "revenue": 9917
    },
    {
      "month": "Jun",
      "revenue": 1894
    },
    {
      "month": "Jul",
      "revenue": 4239
    },
    {
      "month": "Aug",
      "revenue": 7037
    },
    {
      "month": "Sep",
      "revenue": 8929
    },
    {
      "month": "Oct",
      "revenue": 5468
    },
    {
      "month": "Nov",
      "revenue": 7043
    },
    {
      "month": "Dec",
      "revenue": 1652
    }
  ]
},
{
  "id": 149,
  "name": "Mogra Gher Mul Cotton Suit Set (Plus Size)",
  "price": 3199,
  "rating": 4.5,
  "reviews": 4868,
  "answers": 46,
  "inStock": true,
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
  "description": "Indulge in the luxury of the Mogra Gher Mul Cotton Suit Set. This premium set is made from high-quality cotton for a luxurious feel and features intricate Mogra Gher weaving. Elevate your style with this elegant and exclusive suit set.",
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
  "id": 150,
  "name": "Saanvi Maroon Floral Print Suit Set (Plus Size)",
  "price": 3199,
  "rating": 4.7,
  "reviews": 1376,
  "answers": 34,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "plus-size",
  "model": "RP-703 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/150.1.webp",
    "/detailphotos/150.2.webp",
    "/detailphotos/150.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-703 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Rich Maroon Alia Cut Suit Set Featuring A Floral Print, Crafted From Breathable Cotton Fabric. The Full-Sleeve Kurta Boasts A Stylish V-Neck Design, Complemented By A Graceful Cotton Dupatta. This Ensemble Blends Sophistication With Comfort, Perfect For Any Event.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4888
    },
    {
      "month": "Feb",
      "revenue": 5661
    },
    {
      "month": "Mar",
      "revenue": 2743
    },
    {
      "month": "Apr",
      "revenue": 1950
    },
    {
      "month": "May",
      "revenue": 7280
    },
    {
      "month": "Jun",
      "revenue": 4180
    },
    {
      "month": "Jul",
      "revenue": 2533
    },
    {
      "month": "Aug",
      "revenue": 7774
    },
    {
      "month": "Sep",
      "revenue": 1270
    },
    {
      "month": "Oct",
      "revenue": 5829
    },
    {
      "month": "Nov",
      "revenue": 3253
    },
    {
      "month": "Dec",
      "revenue": 3068
    }
  ]
},
{
  "id": 151,
  "name": "Goel Green Handblock Pintuck Straight Chanderi Suit Set (Plus Size)",
  "price": 6199,
  "rating": 4.2,
  "reviews": 12576,
  "answers": 231,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "plus-size",
  "model": "RP-685 Plus size)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/151.1.webp",
    "/detailphotos/151.2.webp",
    "/detailphotos/151.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-685 Plus size)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Rock this playful Goel Green Handblock Pintuck Chanderi Straight Suit Set! Featuring a vibrant green color and eye-catching handblock and floral prints on chanderi fabric, this straight suit set will make you stand out. Perfect for a fun, quirky look that doesn't take itself too seriously.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7150
    },
    {
      "month": "Feb",
      "revenue": 4157
    },
    {
      "month": "Mar",
      "revenue": 9824
    },
    {
      "month": "Apr",
      "revenue": 4403
    },
    {
      "month": "May",
      "revenue": 8172
    },
    {
      "month": "Jun",
      "revenue": 7288
    },
    {
      "month": "Jul",
      "revenue": 6939
    },
    {
      "month": "Aug",
      "revenue": 8976
    },
    {
      "month": "Sep",
      "revenue": 3926
    },
    {
      "month": "Oct",
      "revenue": 4192
    },
    {
      "month": "Nov",
      "revenue": 1549
    },
    {
      "month": "Dec",
      "revenue": 7366
    }
  ]
},
{
  "id": 152,
  "name": "Banni Blue Cotton Straight Suit Set (Plus Size)",
  "price": 4799,
  "rating": 5,
  "reviews": 3076,
  "answers": 13,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "plus-size",
  "model": "RP-677 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/152.1.webp",
    "/detailphotos/152.2.webp",
    "/detailphotos/152.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-677 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Dress to impress in our blue floral jaal print cotton straight pant and kurta set! The elegant 3/4th sleeves and v neck with thread work detailing add a touch of sophistication. Complete the look with our gorgeous kota doriya printed dupatta. Perfect for any occasion!",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2500
    },
    {
      "month": "Feb",
      "revenue": 5189
    },
    {
      "month": "Mar",
      "revenue": 2121
    },
    {
      "month": "Apr",
      "revenue": 4843
    },
    {
      "month": "May",
      "revenue": 9999
    },
    {
      "month": "Jun",
      "revenue": 6719
    },
    {
      "month": "Jul",
      "revenue": 8961
    },
    {
      "month": "Aug",
      "revenue": 2668
    },
    {
      "month": "Sep",
      "revenue": 1696
    },
    {
      "month": "Oct",
      "revenue": 4672
    },
    {
      "month": "Nov",
      "revenue": 9757
    },
    {
      "month": "Dec",
      "revenue": 3648
    }
  ]
},
{
  "id": 153,
  "name": "Najia Green Floral Handblock Print Suit Set(Plus Size)",
  "price": 5499,
  "rating": 4.1,
  "reviews": 6898,
  "answers": 124,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "plus-size",
  "model": "RP-702 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/153.1.webp",
    "/detailphotos/153.2.webp",
    "/detailphotos/153.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-702 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Vibrant Green Alia Cut Suit Set Featuring Intricate Floral Handblock Prints On Soft Cotton Fabric. The Full-Sleeve Kurta Boasts A Flattering V-Neck Design, Complemented By A Delicate Kota Doriya Dupatta, Creating A Charming Ensemble That Exudes Elegance And Comfort.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1241
    },
    {
      "month": "Feb",
      "revenue": 6746
    },
    {
      "month": "Mar",
      "revenue": 7240
    },
    {
      "month": "Apr",
      "revenue": 3319
    },
    {
      "month": "May",
      "revenue": 5042
    },
    {
      "month": "Jun",
      "revenue": 9985
    },
    {
      "month": "Jul",
      "revenue": 3344
    },
    {
      "month": "Aug",
      "revenue": 1324
    },
    {
      "month": "Sep",
      "revenue": 8807
    },
    {
      "month": "Oct",
      "revenue": 4849
    },
    {
      "month": "Nov",
      "revenue": 3453
    },
    {
      "month": "Dec",
      "revenue": 5759
    }
  ]
},
{
  "id": 154,
  "name": "Rosheen Red Floral Block Print Embroidered Suit Set (Plus Size)",
  "price": 5499,
  "rating": 4.4,
  "reviews": 4532,
  "answers": 155,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Red"
  ],
  "category": "plus-size",
  "model": "RP-715 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/154.1.webp",
    "/detailphotos/154.2.webp",
    "/detailphotos/154.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-715 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A vivacious swirl of red, blooming with floral handblock print, cotton caresses in an Alia-cut flarey kurta, threaded with whimsy on neck and sleeves. A dance of floral jaal print, buti pant, and Kota Dori dupatta, weaving joyful tales.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8710
    },
    {
      "month": "Feb",
      "revenue": 9736
    },
    {
      "month": "Mar",
      "revenue": 7314
    },
    {
      "month": "Apr",
      "revenue": 5216
    },
    {
      "month": "May",
      "revenue": 3607
    },
    {
      "month": "Jun",
      "revenue": 7598
    },
    {
      "month": "Jul",
      "revenue": 6062
    },
    {
      "month": "Aug",
      "revenue": 8802
    },
    {
      "month": "Sep",
      "revenue": 9165
    },
    {
      "month": "Oct",
      "revenue": 7400
    },
    {
      "month": "Nov",
      "revenue": 1685
    },
    {
      "month": "Dec",
      "revenue": 3840
    }
  ]
},
{
  "id": 155,
  "name": "Izza Blue Floral Handblock Print Suit Set(Plus Size)",
  "price": 5499,
  "rating": 4.7,
  "reviews": 5444,
  "answers": 89,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "plus-size",
  "model": "RP-701 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/155.1.webp",
    "/detailphotos/155.2.webp",
    "/detailphotos/155.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-701 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Stunning Alia Cut Suit Set Featuring A Full-Sleeve Kurta Adorned With Handblock Floral Print In Vibrant Blue Cotton Fabric. The V-Neck Adds Elegance, Complemented By A Kota Doriya Dupatta. Perfect Fusion Of Tradition And Modernity, Exuding Charm And Grace.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5132
    },
    {
      "month": "Feb",
      "revenue": 3523
    },
    {
      "month": "Mar",
      "revenue": 3350
    },
    {
      "month": "Apr",
      "revenue": 1414
    },
    {
      "month": "May",
      "revenue": 1293
    },
    {
      "month": "Jun",
      "revenue": 6955
    },
    {
      "month": "Jul",
      "revenue": 2887
    },
    {
      "month": "Aug",
      "revenue": 5573
    },
    {
      "month": "Sep",
      "revenue": 4050
    },
    {
      "month": "Oct",
      "revenue": 2945
    },
    {
      "month": "Nov",
      "revenue": 9442
    },
    {
      "month": "Dec",
      "revenue": 8035
    }
  ]
},
{
  "id": 156,
  "name": "Shrija Maroon Floral Print Embroidered Suit Set (Plus Size)",
  "price": 3399,
  "rating": 4.2,
  "reviews": 9853,
  "answers": 132,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "plus-size",
  "model": "RP-692 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/156.1.webp",
    "/detailphotos/156.2.webp",
    "/detailphotos/156.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-692 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Captivating Maroon Floral Print Straight Suit Set, Fashioned From Cotton Fabric. The Kurta Is Adorned With Exquisite Gota Patti Work, Adding A Touch Of Traditional Elegance. This Ensemble Exudes Charm And Sophistication, Perfect For Embracing Cultural Festivities With Style.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8918
    },
    {
      "month": "Feb",
      "revenue": 4519
    },
    {
      "month": "Mar",
      "revenue": 5302
    },
    {
      "month": "Apr",
      "revenue": 3513
    },
    {
      "month": "May",
      "revenue": 9206
    },
    {
      "month": "Jun",
      "revenue": 6049
    },
    {
      "month": "Jul",
      "revenue": 8787
    },
    {
      "month": "Aug",
      "revenue": 6377
    },
    {
      "month": "Sep",
      "revenue": 2705
    },
    {
      "month": "Oct",
      "revenue": 6024
    },
    {
      "month": "Nov",
      "revenue": 1299
    },
    {
      "month": "Dec",
      "revenue": 3268
    }
  ]
},
{
  "id": 157,
  "name": "Saanvi Anarkali Flair Suit Set (Plus Size)",
  "price": 3199,
  "rating": 4.5,
  "reviews": 7853,
  "answers": 13,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "plus-size",
  "model": "RP-778 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/157.1.webp",
    "/detailphotos/157.2.webp",
    "/detailphotos/157.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-778 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in the exquisite beauty of our Saanvi Anarkali Flair Suit Set. This luxury ensemble features a beautifully crafted Anarkali top with intricate detailing and a flared silhouette, paired with matching bottoms. Elevate your style and make a statement at any special occasion with this exclusive and elegant piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8441
    },
    {
      "month": "Feb",
      "revenue": 1614
    },
    {
      "month": "Mar",
      "revenue": 4219
    },
    {
      "month": "Apr",
      "revenue": 8604
    },
    {
      "month": "May",
      "revenue": 7980
    },
    {
      "month": "Jun",
      "revenue": 2468
    },
    {
      "month": "Jul",
      "revenue": 7961
    },
    {
      "month": "Aug",
      "revenue": 3651
    },
    {
      "month": "Sep",
      "revenue": 2300
    },
    {
      "month": "Oct",
      "revenue": 5467
    },
    {
      "month": "Nov",
      "revenue": 6346
    },
    {
      "month": "Dec",
      "revenue": 8009
    }
  ]
},
{
  "id": 158,
  "name": "Begu Blue Floral Anarkali Suit Set (Plus Size)",
  "price": 4999,
  "rating": 4.7,
  "reviews": 6563,
  "answers": 190,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "plus-size",
  "model": "RP-653 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/158.1.webp",
    "/detailphotos/158.2.webp",
    "/detailphotos/158.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-653 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Get ready to stand out in this playful floral suit set! Made from cool cotton, this blue suit features a flared cut, unique buti print palazzo pants and jaal printed kota doriya dupatta. Perfect for adding a quirky touch to your wardrobe!",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7348
    },
    {
      "month": "Feb",
      "revenue": 2908
    },
    {
      "month": "Mar",
      "revenue": 8092
    },
    {
      "month": "Apr",
      "revenue": 3663
    },
    {
      "month": "May",
      "revenue": 1766
    },
    {
      "month": "Jun",
      "revenue": 9789
    },
    {
      "month": "Jul",
      "revenue": 4135
    },
    {
      "month": "Aug",
      "revenue": 3953
    },
    {
      "month": "Sep",
      "revenue": 3723
    },
    {
      "month": "Oct",
      "revenue": 4701
    },
    {
      "month": "Nov",
      "revenue": 1700
    },
    {
      "month": "Dec",
      "revenue": 4323
    }
  ]
},
{
  "id": 159,
  "name": "Indigo Dream Suit Set(Plus Size)",
  "price": 3599,
  "rating": 4.4,
  "reviews": 7756,
  "answers": 19,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "plus-size",
  "model": "RP-729 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/159.1.webp",
    "/detailphotos/159.2.webp",
    "/detailphotos/159.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-729 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A captivating ensemble embodying elegance and grace. This three-piece set features 3/4 sleeves, exquisite neckline work, and a beautiful lotus motif print throughout. Completing the look is a stunning dupatta adorned with playful tassels. Embrace the allure of the \"Indigo Dream\" and let your style shine with its timeless charm.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7717
    },
    {
      "month": "Feb",
      "revenue": 9839
    },
    {
      "month": "Mar",
      "revenue": 8567
    },
    {
      "month": "Apr",
      "revenue": 1567
    },
    {
      "month": "May",
      "revenue": 3033
    },
    {
      "month": "Jun",
      "revenue": 6046
    },
    {
      "month": "Jul",
      "revenue": 8694
    },
    {
      "month": "Aug",
      "revenue": 5035
    },
    {
      "month": "Sep",
      "revenue": 4818
    },
    {
      "month": "Oct",
      "revenue": 7895
    },
    {
      "month": "Nov",
      "revenue": 5897
    },
    {
      "month": "Dec",
      "revenue": 7196
    }
  ]
},
{
  "id": 160,
  "name": "Bagh Suit Set with Full Sleeves & Flared Design(Plus Size)",
  "price": 3199,
  "rating": 4.6,
  "reviews": 4654,
  "answers": 343,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "plus-size",
  "model": "RP-788 PS)",
  "size": [
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "7XL"
  ],
  "images": [
    "/detailphotos/160.1.webp",
    "/detailphotos/160.2.webp",
    "/detailphotos/160.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-788 PS)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in the exquisite design of the Bagh Handblock Suit. With full sleeves and a flared silhouette, this suit combines traditional handblock prints with modern elegance. Experience the luxury of high-quality craftsmanship and elevate your style to new heights.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3908
    },
    {
      "month": "Feb",
      "revenue": 4335
    },
    {
      "month": "Mar",
      "revenue": 2030
    },
    {
      "month": "Apr",
      "revenue": 5129
    },
    {
      "month": "May",
      "revenue": 9078
    },
    {
      "month": "Jun",
      "revenue": 2162
    },
    {
      "month": "Jul",
      "revenue": 3098
    },
    {
      "month": "Aug",
      "revenue": 3625
    },
    {
      "month": "Sep",
      "revenue": 2695
    },
    {
      "month": "Oct",
      "revenue": 7701
    },
    {
      "month": "Nov",
      "revenue": 5339
    },
    {
      "month": "Dec",
      "revenue": 8675
    }
  ]
},
{
  "id": 161,
  "name": "Pankhuri Pink Cotton Jaal Print Straight Pintuck Kurta",
  "price": 1899,
  "rating": 4.2,
  "reviews": 9483,
  "answers": 44,
  "inStock": true,
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
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-643 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Brighten up your wardrobe with this comfortable, pure cotton kurta in pink. Featuring a cheerful jaal print, pintuck detailing, this kurta is perfect for everyday wear. Feel your best in Pankhuri's Pink Cotton Jaal Print Straight Pintuck Kurta.",
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
  "id": 162,
  "name": "Maroon Floral Buti Print Cotton Straight Kurta",
  "price": 1599,
  "rating": 4.5,
  "reviews": 6583,
  "answers": 75,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "trending",
  "model": "RP-694 Kurta)",
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
    "/detailphotos/162.1.webp",
    "/detailphotos/162.2.webp",
    "/detailphotos/162.3.webp",
    "/detailphotos/162.4.webp",
    "/detailphotos/162.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-694 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "A Maroon Straight Kurta With A Subtle Buti Print, Featuring A Flattering V-Neck Design And Chic 3/4 Sleeves. Its Elegant Simplicity And Timeless Style Make It A Versatile Wardrobe Staple Suitable For Various",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4019
    },
    {
      "month": "Feb",
      "revenue": 3844
    },
    {
      "month": "Mar",
      "revenue": 7355
    },
    {
      "month": "Apr",
      "revenue": 4027
    },
    {
      "month": "May",
      "revenue": 1775
    },
    {
      "month": "Jun",
      "revenue": 4166
    },
    {
      "month": "Jul",
      "revenue": 3921
    },
    {
      "month": "Aug",
      "revenue": 3230
    },
    {
      "month": "Sep",
      "revenue": 2382
    },
    {
      "month": "Oct",
      "revenue": 8123
    },
    {
      "month": "Nov",
      "revenue": 3634
    },
    {
      "month": "Dec",
      "revenue": 4933
    }
  ]
},
{
  "id": 163,
  "name": "Sea Green Floral Print Cotton Straight Kurta",
  "price": 2399,
  "rating": 4,
  "reviews": 4474,
  "answers": 67,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "trending",
  "model": "RP-696 Kurta)",
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
    "/detailphotos/163.1.webp",
    "/detailphotos/163.2.webp",
    "/detailphotos/163.3.webp",
    "/detailphotos/163.4.webp",
    "/detailphotos/163.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-696 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 42"
  ],
  "description": "A Serene Sea Green Long Kurta, Crafted From Breathable Cotton Fabric And Adorned With Intricate Buti Print. Its Graceful Silhouette Exudes Elegance, While The Soothing Color And Delicate Print Add A Touch Of Sophistication, Perfect For Both Casual And Semi-Formal Occasions. Fabric - Pure Cotton",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8355
    },
    {
      "month": "Feb",
      "revenue": 4737
    },
    {
      "month": "Mar",
      "revenue": 4669
    },
    {
      "month": "Apr",
      "revenue": 1000
    },
    {
      "month": "May",
      "revenue": 1126
    },
    {
      "month": "Jun",
      "revenue": 2475
    },
    {
      "month": "Jul",
      "revenue": 5508
    },
    {
      "month": "Aug",
      "revenue": 8146
    },
    {
      "month": "Sep",
      "revenue": 6248
    },
    {
      "month": "Oct",
      "revenue": 5842
    },
    {
      "month": "Nov",
      "revenue": 5700
    },
    {
      "month": "Dec",
      "revenue": 8747
    }
  ]
},
{
  "id": 164,
  "name": "Peach Floral Buti Print Cotton Straight Kurta",
  "price": 2399,
  "rating": 4,
  "reviews": 4474,
  "answers": 67,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "trending",
  "model": "RP-695 Kurta)",
  "size": [
    "L",
    "XL"
  ],
  "images": [
    "/detailphotos/164.1.webp",
    "/detailphotos/164.2.webp",
    "/detailphotos/164.3.webp",
    "/detailphotos/164.4.webp",
    "/detailphotos/164.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-695 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 42"
  ],
  "description": "A Charming Pink Cotton Kurta Adorned With Delicate Buti Print, Tailored In A Sleek Straight Silhouette. Its Airy And Comfortable Design, Coupled With The Intricate Print, Adds A Touch Of Elegance, Making It Ideal For Casual Outings Or Relaxed Gatherings.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5269
    },
    {
      "month": "Feb",
      "revenue": 8946
    },
    {
      "month": "Mar",
      "revenue": 5357
    },
    {
      "month": "Apr",
      "revenue": 2166
    },
    {
      "month": "May",
      "revenue": 9586
    },
    {
      "month": "Jun",
      "revenue": 6431
    },
    {
      "month": "Jul",
      "revenue": 6047
    },
    {
      "month": "Aug",
      "revenue": 2126
    },
    {
      "month": "Sep",
      "revenue": 3830
    },
    {
      "month": "Oct",
      "revenue": 8868
    },
    {
      "month": "Nov",
      "revenue": 9096
    },
    {
      "month": "Dec",
      "revenue": 9770
    }
  ]
},
{
  "id": 165,
  "name": "Sehar Leafy Handblock Printed Anarkali Kurta",
  "price": 2399,
  "rating": 4.3,
  "reviews": 8745,
  "answers": 49,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Yellow"
  ],
  "category": "trending",
  "model": "RP-716 Kurta)",
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
    "/detailphotos/165.1.webp",
    "/detailphotos/165.2.webp",
    "/detailphotos/165.3.webp",
    "/detailphotos/165.4.webp",
    "/detailphotos/165.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-716 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 42"
  ],
  "description": "Sehar's elegant leafy yellow handblock print cotton anarkali kurta features chudidaar full sleeves and convenient pockets on both sides, combining traditional charm with modern functionality for a sophisticated and practical ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3512
    },
    {
      "month": "Feb",
      "revenue": 9726
    },
    {
      "month": "Mar",
      "revenue": 6820
    },
    {
      "month": "Apr",
      "revenue": 6138
    },
    {
      "month": "May",
      "revenue": 6741
    },
    {
      "month": "Jun",
      "revenue": 7522
    },
    {
      "month": "Jul",
      "revenue": 2076
    },
    {
      "month": "Aug",
      "revenue": 4225
    },
    {
      "month": "Sep",
      "revenue": 4115
    },
    {
      "month": "Oct",
      "revenue": 7154
    },
    {
      "month": "Nov",
      "revenue": 4589
    },
    {
      "month": "Dec",
      "revenue": 1250
    }
  ]
},
{
  "id": 166,
  "name": "Bella Blue Hand Block Print Cotton Straight Kurta",
  "price": 2599,
  "rating": 4.2,
  "reviews": 3479,
  "answers": 34,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "trending",
  "model": "RP-635 Kurta)",
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
    "/detailphotos/166.1.webp",
    "/detailphotos/166.2.webp",
    "/detailphotos/166.3.webp",
    "/detailphotos/166.4.webp",
    "/detailphotos/166.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-635 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 42"
  ],
  "description": "The Bella Blue Hand Block Print Cotton Straight Kurta is an exquisite ethnic wear piece created with utmost precision and care. Rich blue color and beautiful floral motifs in hand block print come together to make an elegant, tasteful and timeless look perfect for any special occasion. Crafted with purely cotton material for softness and comfort, this kurta is a luxuriously stylish choice.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8687
    },
    {
      "month": "Feb",
      "revenue": 3174
    },
    {
      "month": "Mar",
      "revenue": 9617
    },
    {
      "month": "Apr",
      "revenue": 4533
    },
    {
      "month": "May",
      "revenue": 8462
    },
    {
      "month": "Jun",
      "revenue": 4682
    },
    {
      "month": "Jul",
      "revenue": 4873
    },
    {
      "month": "Aug",
      "revenue": 3632
    },
    {
      "month": "Sep",
      "revenue": 7055
    },
    {
      "month": "Oct",
      "revenue": 4275
    },
    {
      "month": "Nov",
      "revenue": 3860
    },
    {
      "month": "Dec",
      "revenue": 1170
    }
  ]
},
{
  "id": 167,
  "name": "Uzma Off White Buti Print Cotton Straight Kurta",
  "price": 1799,
  "rating": 4.6,
  "reviews": 7434,
  "answers": 83,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Off-White"
  ],
  "category": "trending",
  "model": "RP-636 Kurta)",
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
    "/detailphotos/167.1.webp",
    "/detailphotos/167.2.webp",
    "/detailphotos/167.3.webp",
    "/detailphotos/167.4.webp",
    "/detailphotos/167.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-636 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 42"
  ],
  "description": "Stay comfortable and stylish in this exclusive Uzma off-white kurta, crafted with pure cotton and featuring an exquisite buti print. Its straight fit and relaxed design will keep you looking sharp and feeling comfortable all day long.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5946
    },
    {
      "month": "Feb",
      "revenue": 6787
    },
    {
      "month": "Mar",
      "revenue": 8214
    },
    {
      "month": "Apr",
      "revenue": 9688
    },
    {
      "month": "May",
      "revenue": 2138
    },
    {
      "month": "Jun",
      "revenue": 2309
    },
    {
      "month": "Jul",
      "revenue": 4938
    },
    {
      "month": "Aug",
      "revenue": 7161
    },
    {
      "month": "Sep",
      "revenue": 3767
    },
    {
      "month": "Oct",
      "revenue": 5122
    },
    {
      "month": "Nov",
      "revenue": 2103
    },
    {
      "month": "Dec",
      "revenue": 1960
    }
  ]
},
{
  "id": 168,
  "name": "Shanza Floral Handblock Print Kalidar Kurta",
  "price": 2499,
  "rating": 4,
  "reviews": 3478,
  "answers": 83,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Red"
  ],
  "category": "trending",
  "model": "RP-721 Kurta)",
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
    "/detailphotos/168.1.webp",
    "/detailphotos/168.2.webp",
    "/detailphotos/168.3.webp",
    "/detailphotos/168.4.webp",
    "/detailphotos/168.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-721 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 42"
  ],
  "description": "Shanza offers a captivating Red Floral Handblock Print Kalidar Kurta crafted from soft cotton. Adorned with pockets on both sides for added convenience, it showcases elegant chudidaar sleeves, blending traditional charm with contemporary comfort in a vibrant ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6359
    },
    {
      "month": "Feb",
      "revenue": 8910
    },
    {
      "month": "Mar",
      "revenue": 3917
    },
    {
      "month": "Apr",
      "revenue": 1870
    },
    {
      "month": "May",
      "revenue": 9328
    },
    {
      "month": "Jun",
      "revenue": 9796
    },
    {
      "month": "Jul",
      "revenue": 6516
    },
    {
      "month": "Aug",
      "revenue": 5282
    },
    {
      "month": "Sep",
      "revenue": 1265
    },
    {
      "month": "Oct",
      "revenue": 2128
    },
    {
      "month": "Nov",
      "revenue": 5440
    },
    {
      "month": "Dec",
      "revenue": 2025
    }
  ]
},
{
  "id": 169,
  "name": "Urvashi Floral Handblock Printed A- Line Kurta",
  "price": 2399,
  "rating": 4.7,
  "reviews": 7434,
  "answers": 45,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Magenta"
  ],
  "category": "trending",
  "model": "RP-717 Kurta)",
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
    "/detailphotos/169.1.webp",
    "/detailphotos/169.2.webp",
    "/detailphotos/169.3.webp",
    "/detailphotos/169.4.webp",
    "/detailphotos/169.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-717 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 42"
  ],
  "description": "The Urvashi Floral Handblock Printed A-line Kurta emanates grace with its charming floral design. Featuring 3/4th sleeves and practical pockets on both sides, it offers a perfect blend of style and functionality. This kurta effortlessly exudes elegance, making it a versatile choice for various occasions, capturing timeless beauty with modern flair.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6958
    },
    {
      "month": "Feb",
      "revenue": 6231
    },
    {
      "month": "Mar",
      "revenue": 9288
    },
    {
      "month": "Apr",
      "revenue": 9847
    },
    {
      "month": "May",
      "revenue": 4697
    },
    {
      "month": "Jun",
      "revenue": 3075
    },
    {
      "month": "Jul",
      "revenue": 3488
    },
    {
      "month": "Aug",
      "revenue": 3007
    },
    {
      "month": "Sep",
      "revenue": 9674
    },
    {
      "month": "Oct",
      "revenue": 1622
    },
    {
      "month": "Nov",
      "revenue": 3350
    },
    {
      "month": "Dec",
      "revenue": 2078
    }
  ]
},
{
  "id": 170,
  "name": "Sayra Peach Floral Handblock Printed A-Line Kurta",
  "price": 2399,
  "rating": 4.1,
  "reviews": 4533,
  "answers": 65,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Peach"
  ],
  "category": "trending",
  "model": "RP-719 Kurta)",
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
    "/detailphotos/170.1.webp",
    "/detailphotos/170.2.webp",
    "/detailphotos/170.3.webp",
    "/detailphotos/170.4.webp",
    "/detailphotos/170.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-719 Kurta)",
    "Washing instruction-  Always use mild detergent and Dry in shade",
    "Kurta length 42"
  ],
  "description": "The Sayra Peach Floral Handblock Printed A-line Kurta is an elegant piece featuring a V-neckline and full sleeves. Crafted with intricate handblock printing, it exudes a charming appeal. With convenient pockets on both sides, this kurta seamlessly blends style and functionality, perfect for any occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9537
    },
    {
      "month": "Feb",
      "revenue": 3473
    },
    {
      "month": "Mar",
      "revenue": 8731
    },
    {
      "month": "Apr",
      "revenue": 4934
    },
    {
      "month": "May",
      "revenue": 3151
    },
    {
      "month": "Jun",
      "revenue": 5467
    },
    {
      "month": "Jul",
      "revenue": 3255
    },
    {
      "month": "Aug",
      "revenue": 3304
    },
    {
      "month": "Sep",
      "revenue": 4252
    },
    {
      "month": "Oct",
      "revenue": 1137
    },
    {
      "month": "Nov",
      "revenue": 9783
    },
    {
      "month": "Dec",
      "revenue": 1267
    }
  ]
},
{
  "id": 171,
  "name": "Paisley Kashish Block Print Kurta Pant Set",
  "price": 4099,
  "rating": 4.4,
  "reviews": 8533,
  "answers": 143,
  "inStock": true,
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
  "description": "Experience timeless elegance with our Paisley Kashish Block Print Kurta Pant Set. Crafted from premium quality fabric, this set features a stunning paisley print and intricate block detailing. The versatile kurta can be paired with the comfortable pant for a chic and sophisticated look. Elevate your wardrobe with our exclusive design.",
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
  "id": 172,
  "name": "Neelanjana A-line Kurta Pant Set",
  "price": 2899,
  "rating": 4.2,
  "reviews": 7674,
  "answers": 78,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "favorites",
  "model": "RP-770 WD)",
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
    "/detailphotos/172.1.webp",
    "/detailphotos/172.2.webp",
    "/detailphotos/172.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-770 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "Get ready to turn heads in this Neelanjana A-line Kurta Pant Set! Made with high-quality material, this set is both stylish and comfortable. With its unique design and flattering A-line silhouette, you'll feel confident and fashionable. Perfect for any occasion, this set is a must-have in your wardrobe.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2802
    },
    {
      "month": "Feb",
      "revenue": 9967
    },
    {
      "month": "Mar",
      "revenue": 2555
    },
    {
      "month": "Apr",
      "revenue": 5799
    },
    {
      "month": "May",
      "revenue": 4764
    },
    {
      "month": "Jun",
      "revenue": 5609
    },
    {
      "month": "Jul",
      "revenue": 6311
    },
    {
      "month": "Aug",
      "revenue": 5078
    },
    {
      "month": "Sep",
      "revenue": 1337
    },
    {
      "month": "Oct",
      "revenue": 6696
    },
    {
      "month": "Nov",
      "revenue": 8106
    },
    {
      "month": "Dec",
      "revenue": 4776
    }
  ]
},
{
  "id": 173,
  "name": "Indigo Dream Kurta Pant Set",
  "price": 2999,
  "rating": 4.4,
  "reviews": 5674,
  "answers": 41,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "favorites",
  "model": "RP-729 WD)",
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
    "/detailphotos/173.1.webp",
    "/detailphotos/173.2.webp",
    "/detailphotos/173.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-729 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "Get ready to dream in style with our Indigo Dream Kurta Pant Set! Made with soft, breathable fabric, this set features a beautiful indigo design that will have you feeling cool and fashionable. Perfect for any occasion, this set offers both comfort and style in one. (Dreamy, stylish, and versatile!)",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3350
    },
    {
      "month": "Feb",
      "revenue": 2065
    },
    {
      "month": "Mar",
      "revenue": 2836
    },
    {
      "month": "Apr",
      "revenue": 2994
    },
    {
      "month": "May",
      "revenue": 4819
    },
    {
      "month": "Jun",
      "revenue": 5443
    },
    {
      "month": "Jul",
      "revenue": 9850
    },
    {
      "month": "Aug",
      "revenue": 9394
    },
    {
      "month": "Sep",
      "revenue": 3032
    },
    {
      "month": "Oct",
      "revenue": 1749
    },
    {
      "month": "Nov",
      "revenue": 9789
    },
    {
      "month": "Dec",
      "revenue": 3957
    }
  ]
},
{
  "id": 174,
  "name": "Rain in Red Handblock Gher Kurta and Pant Only",
  "price": 3599,
  "rating": 4.8,
  "reviews": 3474,
  "answers": 231,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "RED"
  ],
  "category": "favorites",
  "model": "RP-451 WD)",
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
    "/detailphotos/174.1.webp",
    "/detailphotos/174.2.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-451 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "Rain in Red Handblock Gher Kurta and Pant Only",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1052
    },
    {
      "month": "Feb",
      "revenue": 7233
    },
    {
      "month": "Mar",
      "revenue": 7842
    },
    {
      "month": "Apr",
      "revenue": 2469
    },
    {
      "month": "May",
      "revenue": 2917
    },
    {
      "month": "Jun",
      "revenue": 9617
    },
    {
      "month": "Jul",
      "revenue": 5064
    },
    {
      "month": "Aug",
      "revenue": 7329
    },
    {
      "month": "Sep",
      "revenue": 7128
    },
    {
      "month": "Oct",
      "revenue": 1894
    },
    {
      "month": "Nov",
      "revenue": 1907
    },
    {
      "month": "Dec",
      "revenue": 7807
    }
  ]
},
{
  "id": 175,
  "name": "NASREEN GREEN FLORAL BLOCK PRINT EMBROIDERY KURTA AND PANT ONLY",
  "price": 4099,
  "rating": 4,
  "reviews": 9474,
  "answers": 343,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "favorites",
  "model": "RP-607 WD)",
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
    "/detailphotos/175.1.webp",
    "/detailphotos/175.2.webp",
    "/detailphotos/175.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton Kurta with Pant",
    "Fit - Relaxed (CODE :RP-607 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "NASREEN GREEN FLORAL BLOCK PRINT EMBROIDERY KURTA AND PANT ONLY",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8229
    },
    {
      "month": "Feb",
      "revenue": 3138
    },
    {
      "month": "Mar",
      "revenue": 3346
    },
    {
      "month": "Apr",
      "revenue": 8669
    },
    {
      "month": "May",
      "revenue": 4032
    },
    {
      "month": "Jun",
      "revenue": 3658
    },
    {
      "month": "Jul",
      "revenue": 1287
    },
    {
      "month": "Aug",
      "revenue": 4101
    },
    {
      "month": "Sep",
      "revenue": 6545
    },
    {
      "month": "Oct",
      "revenue": 5960
    },
    {
      "month": "Nov",
      "revenue": 2038
    },
    {
      "month": "Dec",
      "revenue": 6152
    }
  ]
},
{
  "id": 176,
  "name": "Anisa Block Printed Cotton Kalidaar Handwork Kurta Pant Set",
  "price": 3899,
  "rating": 4.5,
  "reviews": 6743,
  "answers": 232,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Sea green"
  ],
  "category": "favorites",
  "model": "RP-621 WD)",
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
    "/detailphotos/176.1.webp",
    "/detailphotos/176.2.webp",
    "/detailphotos/176.3.webp",
    "/detailphotos/176.4.webp",
    "/detailphotos/176.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-621 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "Elevate your style with our Anisa Kurta Pant Set. Crafted from luxurious cotton, this kalidaar kurta features delicate handblock printing in a stunning sea green hue. The intricate handwork detailing adds an artistic touch to this floral printed set. Experience the perfect fusion of comfort and elegance.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1304
    },
    {
      "month": "Feb",
      "revenue": 4740
    },
    {
      "month": "Mar",
      "revenue": 2610
    },
    {
      "month": "Apr",
      "revenue": 8808
    },
    {
      "month": "May",
      "revenue": 7816
    },
    {
      "month": "Jun",
      "revenue": 4870
    },
    {
      "month": "Jul",
      "revenue": 3690
    },
    {
      "month": "Aug",
      "revenue": 9539
    },
    {
      "month": "Sep",
      "revenue": 4868
    },
    {
      "month": "Oct",
      "revenue": 8875
    },
    {
      "month": "Nov",
      "revenue": 5019
    },
    {
      "month": "Dec",
      "revenue": 1344
    }
  ]
},
{
  "id": 177,
  "name": "Badrah Blue Handblock Cotton Pleated Straight Kurta Pant Set",
  "price": 3599,
  "rating": 4.7,
  "reviews": 3443,
  "answers": 34,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "favorites",
  "model": "RP-684 WD)",
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
    "/detailphotos/177.1.webp",
    "/detailphotos/177.2.webp",
    "/detailphotos/177.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-684 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "Meet the Badrah Blue Handblock Cotton Pleated Straight Kurta Pant Set! Made with soft cotton and adorned with a unique handblock print, this set is perfect for those who love a touch of playful style. The blue colour and buti print add extra character, while the pleat detailing on the kurta offers a flattering silhouette. Get ready to stand out in this fun and quirky ensemble!",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6811
    },
    {
      "month": "Feb",
      "revenue": 1077
    },
    {
      "month": "Mar",
      "revenue": 6995
    },
    {
      "month": "Apr",
      "revenue": 2997
    },
    {
      "month": "May",
      "revenue": 9314
    },
    {
      "month": "Jun",
      "revenue": 8196
    },
    {
      "month": "Jul",
      "revenue": 4217
    },
    {
      "month": "Aug",
      "revenue": 3960
    },
    {
      "month": "Sep",
      "revenue": 5545
    },
    {
      "month": "Oct",
      "revenue": 7884
    },
    {
      "month": "Nov",
      "revenue": 4572
    },
    {
      "month": "Dec",
      "revenue": 4281
    }
  ]
},
{
  "id": 178,
  "name": "Gulfi Green Handblock Cotton Straight Kurta Pant Set",
  "price": 3599,
  "rating": 4,
  "reviews": 9483,
  "answers": 233,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "favorites",
  "model": "RP-675 WD)",
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
    "/detailphotos/178.1.webp",
    "/detailphotos/178.2.webp",
    "/detailphotos/178.3.webp",
    "/detailphotos/178.4.webp",
    "/detailphotos/178.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-675 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "Effortlessly stylish, the Gulfi Green Handblock Cotton Kurta Pant Set is perfect for any casual occasion. Featuring a fun buti print and handblock print, this set is made from soft cotton for all-day comfort. Step out in style and embrace the ethnic look with this must-have set. (OOTD approved!)",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6847
    },
    {
      "month": "Feb",
      "revenue": 9006
    },
    {
      "month": "Mar",
      "revenue": 6521
    },
    {
      "month": "Apr",
      "revenue": 4933
    },
    {
      "month": "May",
      "revenue": 5946
    },
    {
      "month": "Jun",
      "revenue": 5165
    },
    {
      "month": "Jul",
      "revenue": 7810
    },
    {
      "month": "Aug",
      "revenue": 1932
    },
    {
      "month": "Sep",
      "revenue": 8655
    },
    {
      "month": "Oct",
      "revenue": 6704
    },
    {
      "month": "Nov",
      "revenue": 1227
    },
    {
      "month": "Dec",
      "revenue": 5885
    }
  ]
},
{
  "id": 179,
  "name": "Rashida Red Cotton Anarkali Kurta Pant Set",
  "price": 3699,
  "rating": 4.2,
  "reviews": 7584,
  "answers": 32,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "favorites",
  "model": "RP-689 WD)",
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
    "/detailphotos/179.1.webp",
    "/detailphotos/179.2.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-689 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "Introducing the Rashida Red Cotton Anarkali Kurta Pant Set! Made with 100% cotton fabric, this set features a stunning handblock and floral print. The flarey kurta and pant set will make you stand out in any crowd. Get ready to turn heads and embrace your unique style with this one-of-a-kind ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1488
    },
    {
      "month": "Feb",
      "revenue": 7133
    },
    {
      "month": "Mar",
      "revenue": 9456
    },
    {
      "month": "Apr",
      "revenue": 7046
    },
    {
      "month": "May",
      "revenue": 4100
    },
    {
      "month": "Jun",
      "revenue": 5704
    },
    {
      "month": "Jul",
      "revenue": 2216
    },
    {
      "month": "Aug",
      "revenue": 5557
    },
    {
      "month": "Sep",
      "revenue": 9258
    },
    {
      "month": "Oct",
      "revenue": 8211
    },
    {
      "month": "Nov",
      "revenue": 5484
    },
    {
      "month": "Dec",
      "revenue": 9901
    }
  ]
},
{
  "id": 180,
  "name": "Savri Green Floral Handblock Kurta And Pant Only",
  "price": 3599,
  "rating": 4.6,
  "reviews": 6437,
  "answers": 34,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Green"
  ],
  "category": "favorites",
  "model": "RP-608 WD)",
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
    "/detailphotos/180.1.webp",
    "/detailphotos/180.2.webp",
    "/detailphotos/180.3.webp",
    "/detailphotos/180.4.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton Kurta And Pant Only",
    "Fit - Relaxed (CODE :RP-608 WD)",
    "Washing instruction-  Quick dip wash or Dry clean",
    "Kurta length 42"
  ],
  "description": "Savri Green Floral Handblock Kurta And Pant Only",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9092
    },
    {
      "month": "Feb",
      "revenue": 1112
    },
    {
      "month": "Mar",
      "revenue": 8326
    },
    {
      "month": "Apr",
      "revenue": 7183
    },
    {
      "month": "May",
      "revenue": 1302
    },
    {
      "month": "Jun",
      "revenue": 5969
    },
    {
      "month": "Jul",
      "revenue": 5276
    },
    {
      "month": "Aug",
      "revenue": 1034
    },
    {
      "month": "Sep",
      "revenue": 1465
    },
    {
      "month": "Oct",
      "revenue": 6529
    },
    {
      "month": "Nov",
      "revenue": 2709
    },
    {
      "month": "Dec",
      "revenue": 5816
    }
  ]
},
{
  "id": 181,
  "name": "Red Applique Handwork Cotton Suit Set",
  "price": 2599,
  "rating": 4.9,
  "reviews": 5373,
  "answers": 23,
  "inStock": true,
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
  "description": "Be the center of attention at any special occasion with this stunning Red Applique Handwork Cotton Suit Set. Crafted from breathable cotton fabric in a vibrant red floral print, this festive suit set features a gathered kurta with intricate handwork embroidery, paired with an elegant cotton Dupatta. Elevate any occasion with luxury, sophistication, and style.",
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
  "id": 182,
  "name": "Kanak Floral Straight Fit Suit Set",
  "price": 2399,
  "rating": 5,
  "reviews": 7786,
  "answers": 65,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Yellow"
  ],
  "category": "top-rated",
  "model": "RP-768)",
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
    "/detailphotos/182.1.webp",
    "/detailphotos/182.2.webp",
    "/detailphotos/182.3.webp",
    "/detailphotos/182.4.webp",
    "/detailphotos/182.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton Kurta And Pant Only",
    "Fit - Relaxed (CODE :RP-768)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Get ready to turn heads with the Kanak Floral Straight Fit Suit Set. This fashion-forward set not only looks great, but is also comfortable and breathable. You'll feel confident and stylish all day long.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2986
    },
    {
      "month": "Feb",
      "revenue": 3506
    },
    {
      "month": "Mar",
      "revenue": 4935
    },
    {
      "month": "Apr",
      "revenue": 2720
    },
    {
      "month": "May",
      "revenue": 9876
    },
    {
      "month": "Jun",
      "revenue": 7500
    },
    {
      "month": "Jul",
      "revenue": 8497
    },
    {
      "month": "Aug",
      "revenue": 3698
    },
    {
      "month": "Sep",
      "revenue": 6226
    },
    {
      "month": "Oct",
      "revenue": 8486
    },
    {
      "month": "Nov",
      "revenue": 4615
    },
    {
      "month": "Dec",
      "revenue": 6590
    }
  ]
},
{
  "id": 183,
  "name": "Teal Blue Floral Print Embroidered Cotton Suit Set",
  "price": 2399,
  "rating": 4.9,
  "reviews": 4783,
  "answers": 15,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "top-rated",
  "model": "RP-593)",
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
    "/detailphotos/183.1.webp",
    "/detailphotos/183.2.webp",
    "/detailphotos/183.3.webp",
    "/detailphotos/183.4.webp",
    "/detailphotos/183.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Handblock Cotton Kurta And Pant Only",
    "Fit - Relaxed (CODE :RP-593)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "A Stunning Teal Blue Cotton Suit Set Adorned With Intricate Floral Print And Delicate Thread Embroidery Work. This Ensemble Exudes Elegance And Charm, Combining Vibrant Hues With Meticulous Detailing, Making It The Perfect Choice For Adding A Touch Of Sophistication To Any Occasion.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4927
    },
    {
      "month": "Feb",
      "revenue": 1106
    },
    {
      "month": "Mar",
      "revenue": 4078
    },
    {
      "month": "Apr",
      "revenue": 7053
    },
    {
      "month": "May",
      "revenue": 3929
    },
    {
      "month": "Jun",
      "revenue": 3680
    },
    {
      "month": "Jul",
      "revenue": 9896
    },
    {
      "month": "Aug",
      "revenue": 1508
    },
    {
      "month": "Sep",
      "revenue": 8075
    },
    {
      "month": "Oct",
      "revenue": 9883
    },
    {
      "month": "Nov",
      "revenue": 8981
    },
    {
      "month": "Dec",
      "revenue": 9027
    }
  ]
},
{
  "id": 184,
  "name": "Turquoise Saga A-Line Suit Set",
  "price": 2999,
  "rating": 4.9,
  "reviews": 3473,
  "answers": 15,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "top-rated",
  "model": "RP-765)",
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
    "/detailphotos/184.1.webp",
    "/detailphotos/184.2.webp",
    "/detailphotos/184.3.webp",
    "/detailphotos/184.4.webp",
    "/detailphotos/184.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-765)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Get ready for a stylish adventure with our Turquoise Saga A-Line Suit Set. Made with comfort and breathability in mind, this set will keep you feeling cool and looking fashionable. Perfect for any occasion, whether it's a formal event or a casual day out.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5195
    },
    {
      "month": "Feb",
      "revenue": 9342
    },
    {
      "month": "Mar",
      "revenue": 8990
    },
    {
      "month": "Apr",
      "revenue": 6664
    },
    {
      "month": "May",
      "revenue": 3461
    },
    {
      "month": "Jun",
      "revenue": 9915
    },
    {
      "month": "Jul",
      "revenue": 5041
    },
    {
      "month": "Aug",
      "revenue": 9230
    },
    {
      "month": "Sep",
      "revenue": 9898
    },
    {
      "month": "Oct",
      "revenue": 8284
    },
    {
      "month": "Nov",
      "revenue": 7532
    },
    {
      "month": "Dec",
      "revenue": 9409
    }
  ]
},
{
  "id": 185,
  "name": "Oishi orange floral cotton suit set",
  "price": 2299,
  "rating": 5,
  "reviews": 4756,
  "answers": 35,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Orange and Yellow"
  ],
  "category": "top-rated",
  "model": "RP-655)",
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
    "/detailphotos/185.1.webp",
    "/detailphotos/185.2.webp",
    "/detailphotos/185.3.webp",
    "/detailphotos/185.4.webp",
    "/detailphotos/185.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton with Cotton dupatta",
    "Fit - Relaxed (CODE :RP-655)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Oishi orange floral cotton suit set",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6742
    },
    {
      "month": "Feb",
      "revenue": 9595
    },
    {
      "month": "Mar",
      "revenue": 2416
    },
    {
      "month": "Apr",
      "revenue": 8367
    },
    {
      "month": "May",
      "revenue": 5422
    },
    {
      "month": "Jun",
      "revenue": 8251
    },
    {
      "month": "Jul",
      "revenue": 9450
    },
    {
      "month": "Aug",
      "revenue": 2514
    },
    {
      "month": "Sep",
      "revenue": 9523
    },
    {
      "month": "Oct",
      "revenue": 1195
    },
    {
      "month": "Nov",
      "revenue": 9486
    },
    {
      "month": "Dec",
      "revenue": 8006
    }
  ]
},
{
  "id": 186,
  "name": "Sapphire Floral A-line Silk Suit Set",
  "price": 5499,
  "rating": 5,
  "reviews": 4756,
  "answers": 35,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "top-rated",
  "model": "RP-783)",
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
    "/detailphotos/186.1.webp",
    "/detailphotos/186.2.webp",
    "/detailphotos/186.3.webp",
    "/detailphotos/186.4.webp",
    "/detailphotos/186.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-783)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Indulge in opulent luxury with our Sapphire Floral A-line Silk Suit Set. Crafted from the finest silk, this suit set boasts intricate floral detailing and a flattering A-line silhouette. Embrace elegance and sophistication with this premium addition to your wardrobe.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4082
    },
    {
      "month": "Feb",
      "revenue": 8751
    },
    {
      "month": "Mar",
      "revenue": 7138
    },
    {
      "month": "Apr",
      "revenue": 4084
    },
    {
      "month": "May",
      "revenue": 6131
    },
    {
      "month": "Jun",
      "revenue": 4696
    },
    {
      "month": "Jul",
      "revenue": 9332
    },
    {
      "month": "Aug",
      "revenue": 5568
    },
    {
      "month": "Sep",
      "revenue": 6180
    },
    {
      "month": "Oct",
      "revenue": 3711
    },
    {
      "month": "Nov",
      "revenue": 3727
    },
    {
      "month": "Dec",
      "revenue": 1670
    }
  ]
},
{
  "id": 187,
  "name": "Ivory Blue Floral Embroidery Cotton Suit Set",
  "price": 1840,
  "rating": 5,
  "reviews": 4874,
  "answers": 42,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue"
  ],
  "category": "top-rated",
  "model": "RP-591)",
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
    "/detailphotos/187.1.webp",
    "/detailphotos/187.2.webp",
    "/detailphotos/187.3.webp",
    "/detailphotos/187.4.webp",
    "/detailphotos/187.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-591)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Make a statement this festive season with our exquisite Ivory Blue Floral Embroidery Cotton Suit Set. This timeless ethnic piece is artfully crafted with fine threadwork ornamentation and an ethereal, floral print that will keep you looking elegant and chic. Perfect for special occasions, this kalidaar suit set is crafted from lightweight cotton fabric, making it a perfect pick for effortless yet eye-catching style.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6373
    },
    {
      "month": "Feb",
      "revenue": 1190
    },
    {
      "month": "Mar",
      "revenue": 8119
    },
    {
      "month": "Apr",
      "revenue": 2898
    },
    {
      "month": "May",
      "revenue": 3937
    },
    {
      "month": "Jun",
      "revenue": 4253
    },
    {
      "month": "Jul",
      "revenue": 4371
    },
    {
      "month": "Aug",
      "revenue": 8320
    },
    {
      "month": "Sep",
      "revenue": 6668
    },
    {
      "month": "Oct",
      "revenue": 2598
    },
    {
      "month": "Nov",
      "revenue": 8707
    },
    {
      "month": "Dec",
      "revenue": 9492
    }
  ]
},
{
  "id": 188,
  "name": "Maroon Straight Fit Floral Women's Cotton Kurta With Pant Only",
  "price": 2999,
  "rating": 4.9,
  "reviews": 7565,
  "answers": 45,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon & Red"
  ],
  "category": "top-rated",
  "model": "RP-390 WD)",
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
    "/detailphotos/188.1.webp",
    "/detailphotos/188.2.webp",
    "/detailphotos/188.3.webp",
    "/detailphotos/188.4.webp",
    "/detailphotos/188.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton with Cotton Dupatta",
    "Fit - Relaxed (CODE :RP-390 WD)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Maroon Straight Fit Floral Women's Cotton Kurta With Pant Only",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4644
    },
    {
      "month": "Feb",
      "revenue": 5628
    },
    {
      "month": "Mar",
      "revenue": 8898
    },
    {
      "month": "Apr",
      "revenue": 5445
    },
    {
      "month": "May",
      "revenue": 7030
    },
    {
      "month": "Jun",
      "revenue": 5293
    },
    {
      "month": "Jul",
      "revenue": 6250
    },
    {
      "month": "Aug",
      "revenue": 2809
    },
    {
      "month": "Sep",
      "revenue": 3737
    },
    {
      "month": "Oct",
      "revenue": 6324
    },
    {
      "month": "Nov",
      "revenue": 2420
    },
    {
      "month": "Dec",
      "revenue": 3410
    }
  ]
},
{
  "id": 189,
  "name": "White Waters Straight Fit Suit Set",
  "price": 3199,
  "rating": 5,
  "reviews": 3643,
  "answers": 23,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "White"
  ],
  "category": "top-rated",
  "model": "RP-766)",
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
    "/detailphotos/189.1.webp",
    "/detailphotos/189.2.webp",
    "/detailphotos/189.3.webp",
    "/detailphotos/189.4.webp",
    "/detailphotos/189.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-766)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "This White Waters Straight Fit Suit Set is cool, comfortable, and ready for any occasion. With its breathable material and fashionable design, this set will keep you looking and feeling your best. Take on the day with confidence and style.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2970
    },
    {
      "month": "Feb",
      "revenue": 5369
    },
    {
      "month": "Mar",
      "revenue": 2952
    },
    {
      "month": "Apr",
      "revenue": 3351
    },
    {
      "month": "May",
      "revenue": 1567
    },
    {
      "month": "Jun",
      "revenue": 8862
    },
    {
      "month": "Jul",
      "revenue": 7262
    },
    {
      "month": "Aug",
      "revenue": 7146
    },
    {
      "month": "Sep",
      "revenue": 8870
    },
    {
      "month": "Oct",
      "revenue": 9112
    },
    {
      "month": "Nov",
      "revenue": 1151
    },
    {
      "month": "Dec",
      "revenue": 1318
    }
  ]
},
{
  "id": 190,
  "name": "Summer Spectrum Embroidery Cotton Kurta Pant",
  "price": 1740,
  "rating": 4.9,
  "reviews": 8744,
  "answers": 34,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink"
  ],
  "category": "top-rated",
  "model": "RP-599 WD)",
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
    "/detailphotos/190.1.webp",
    "/detailphotos/190.2.webp",
    "/detailphotos/190.3.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-599 WD)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "This Summer Spectrum Embroidery Cotton Kurta Pant is the epitome of understated elegance. Crafted from cotton and adorned with pink floral print and thread and mirror embroidery, this suit set features a straight kurta pant  for an ethnic yet contemporary look. Bring timeless luxury to your wardrobe with this sophisticated ensemble.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1437
    },
    {
      "month": "Feb",
      "revenue": 9424
    },
    {
      "month": "Mar",
      "revenue": 3052
    },
    {
      "month": "Apr",
      "revenue": 3979
    },
    {
      "month": "May",
      "revenue": 1147
    },
    {
      "month": "Jun",
      "revenue": 6045
    },
    {
      "month": "Jul",
      "revenue": 5875
    },
    {
      "month": "Aug",
      "revenue": 8094
    },
    {
      "month": "Sep",
      "revenue": 5431
    },
    {
      "month": "Oct",
      "revenue": 1505
    },
    {
      "month": "Nov",
      "revenue": 6563
    },
    {
      "month": "Dec",
      "revenue": 7018
    }
  ]
},
{
  "id": 191,
  "name": "Deep Sapphire Lace Detailed Zari Suit Set",
  "price": 3199,
  "rating": 4.8,
  "reviews": 13744,
  "answers": 144,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Blue with Golden Flower"
  ],
  "category": "top-rated",
  "model": "RP-589)",
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
    "/detailphotos/191.1.webp",
    "/detailphotos/191.2.webp",
    "/detailphotos/191.3.webp",
    "/detailphotos/191.4.webp",
    "/detailphotos/191.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure (Cotton) with Cotton dupatta",
    "Fit - Relaxed (CODE :RP-589)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Discover the luxury of our Deep Sapphire Lace Detailed Zari Suit Set, crafted with expert care from blue cotton and adorned with delicate zari work. The striking flarey suit features a rich floral print that gives it an elegant, festive look. Perfect for special occasions, this suit set ensures you look and feel your best.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6362
    },
    {
      "month": "Feb",
      "revenue": 6181
    },
    {
      "month": "Mar",
      "revenue": 6328
    },
    {
      "month": "Apr",
      "revenue": 1236
    },
    {
      "month": "May",
      "revenue": 1258
    },
    {
      "month": "Jun",
      "revenue": 2420
    },
    {
      "month": "Jul",
      "revenue": 3549
    },
    {
      "month": "Aug",
      "revenue": 6875
    },
    {
      "month": "Sep",
      "revenue": 9347
    },
    {
      "month": "Oct",
      "revenue": 9011
    },
    {
      "month": "Nov",
      "revenue": 2141
    },
    {
      "month": "Dec",
      "revenue": 4332
    }
  ]
},
{
  "id": 192,
  "name": "Opaline Innocence Pure Cotton Straight Suit Set",
  "price": 2299,
  "rating": 5,
  "reviews": 4744,
  "answers": 43,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Off White and Grey"
  ],
  "category": "top-rated",
  "model": "RP-525)",
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
    "/detailphotos/192.1.webp",
    "/detailphotos/192.2.webp",
    "/detailphotos/192.3.webp",
    "/detailphotos/192.4.webp",
    "/detailphotos/192.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton with Cotton Dupatta",
    "Fit - Relaxed (CODE :RP-525)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Add a flair of luxury to your collection with the Opaline Innocence Pure Cotton Straight Suit Set from Jaipuri Adaah. Tailored from cotton, it features a round neck and is sleeveless. Choose finish-wise earrings with sparkly bangles for an entire outfit.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4619
    },
    {
      "month": "Feb",
      "revenue": 9773
    },
    {
      "month": "Mar",
      "revenue": 7527
    },
    {
      "month": "Apr",
      "revenue": 9820
    },
    {
      "month": "May",
      "revenue": 3463
    },
    {
      "month": "Jun",
      "revenue": 4070
    },
    {
      "month": "Jul",
      "revenue": 5593
    },
    {
      "month": "Aug",
      "revenue": 4680
    },
    {
      "month": "Sep",
      "revenue": 4089
    },
    {
      "month": "Oct",
      "revenue": 3626
    },
    {
      "month": "Nov",
      "revenue": 1581
    },
    {
      "month": "Dec",
      "revenue": 9333
    }
  ]
},
{
  "id": 193,
  "name": "Maroon Gold and Gota work Straight fit Cotton Kurta With Pant Only",
  "price": 2349,
  "rating": 4.9,
  "reviews": 8343,
  "answers": 23,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Maroon"
  ],
  "category": "top-rated",
  "model": "RP-296 WD)",
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
    "/detailphotos/193.1.webp",
    "/detailphotos/193.2.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton Kurta And Pant",
    "Fit - Relaxed (CODE :RP-296 WD)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 42"
  ],
  "description": "Maroon Gold and Gota work Straight fit Cotton Kurta With Pant Only",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8319
    },
    {
      "month": "Feb",
      "revenue": 3333
    },
    {
      "month": "Mar",
      "revenue": 9960
    },
    {
      "month": "Apr",
      "revenue": 4887
    },
    {
      "month": "May",
      "revenue": 3331
    },
    {
      "month": "Jun",
      "revenue": 5412
    },
    {
      "month": "Jul",
      "revenue": 6061
    },
    {
      "month": "Aug",
      "revenue": 2092
    },
    {
      "month": "Sep",
      "revenue": 8139
    },
    {
      "month": "Oct",
      "revenue": 4358
    },
    {
      "month": "Nov",
      "revenue": 4283
    },
    {
      "month": "Dec",
      "revenue": 2487
    }
  ]
},
{
  "id": 194,
  "name": "Treasured Soft Pure Handblock Cotton King Size Bedsheet",
  "price": 2799,
  "rating": 4.5,
  "reviews": 22,
  "answers": 2,
  "inStock": true,
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
  "description": "Treasured Soft Pure Handblock Cotton King Size Bedsheet",
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
  "id": 195,
  "name": "Pristine Priceless Pure Handblock Cotton King Size Bedsheet",
  "price": 2799,
  "rating": 4.6,
  "reviews": 45,
  "answers": 5,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink and White"
  ],
  "category": "bedsheets",
  "model": "RP-102 BS)",
  "size": [
    "KING SIZE 90X108 INCHES",
    "SUPERKING SIZE 108X108 INCHES"
  ],
  "images": [
    "/detailphotos/195.1.webp",
    "/detailphotos/195.2.webp",
    "/detailphotos/195.3.webp",
    "/detailphotos/195.4.webp",
    "/detailphotos/195.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-102 BS)",
    "Washing instruction-  A gentle machine wash cycle or hand wash in cold water using mild detergent",
    "Bed Sheet Size: Queen Size 108 x 108 Inches",
    "Pillow Cover Size: 28 x 18 Inches"
  ],
  "description": "Pristine Priceless Pure Handblock Cotton King Size Bedsheet",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6255
    },
    {
      "month": "Feb",
      "revenue": 9439
    },
    {
      "month": "Mar",
      "revenue": 2477
    },
    {
      "month": "Apr",
      "revenue": 5042
    },
    {
      "month": "May",
      "revenue": 3641
    },
    {
      "month": "Jun",
      "revenue": 3147
    },
    {
      "month": "Jul",
      "revenue": 3296
    },
    {
      "month": "Aug",
      "revenue": 9555
    },
    {
      "month": "Sep",
      "revenue": 1912
    },
    {
      "month": "Oct",
      "revenue": 9643
    },
    {
      "month": "Nov",
      "revenue": 3946
    },
    {
      "month": "Dec",
      "revenue": 1380
    }
  ]
},
{
  "id": 196,
  "name": "Fluffy Floral Pure Handblock Cotton King Size Bedsheet",
  "price": 2799,
  "rating": 4.4,
  "reviews": 34,
  "answers": 4,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink and White"
  ],
  "category": "bedsheets",
  "model": "RP-103 BS)",
  "size": [
    "KING SIZE 90X108 INCHES",
    "SUPERKING SIZE 108X108 INCHES"
  ],
  "images": [
    "/detailphotos/196.1.webp",
    "/detailphotos/196.2.webp",
    "/detailphotos/196.3.webp",
    "/detailphotos/196.4.webp",
    "/detailphotos/196.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-103 BS)",
    "Washing instruction-  A gentle machine wash cycle or hand wash in cold water using mild detergent",
    "Bed Sheet Size: Queen Size 108 x 108 Inches",
    "Pillow Cover Size: 28 x 18 Inches"
  ],
  "description": "Fluffy Floral Pure Handblock Cotton King Size Bedsheet",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4095
    },
    {
      "month": "Feb",
      "revenue": 5986
    },
    {
      "month": "Mar",
      "revenue": 7464
    },
    {
      "month": "Apr",
      "revenue": 6638
    },
    {
      "month": "May",
      "revenue": 1663
    },
    {
      "month": "Jun",
      "revenue": 4068
    },
    {
      "month": "Jul",
      "revenue": 8741
    },
    {
      "month": "Aug",
      "revenue": 7187
    },
    {
      "month": "Sep",
      "revenue": 5311
    },
    {
      "month": "Oct",
      "revenue": 2526
    },
    {
      "month": "Nov",
      "revenue": 4218
    },
    {
      "month": "Dec",
      "revenue": 2899
    }
  ]
},
{
  "id": 197,
  "name": "Ready To Rest Floral Pure Handblock King Size Bedsheet",
  "price": 2799,
  "rating": 4.5,
  "reviews": 65,
  "answers": 8,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Pink and White"
  ],
  "category": "bedsheets",
  "model": "RP-104 BS)",
  "size": [
    "KING SIZE 90X108 INCHES",
    "SUPERKING SIZE 108X108 INCHES"
  ],
  "images": [
    "/detailphotos/197.1.webp",
    "/detailphotos/197.2.webp",
    "/detailphotos/197.3.webp",
    "/detailphotos/197.4.webp",
    "/detailphotos/197.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-104 BS)",
    "Washing instruction-  A gentle machine wash cycle or hand wash in cold water using mild detergent",
    "Bed Sheet Size: Queen Size 108 x 108 Inches",
    "Pillow Cover Size: 28 x 18 Inches"
  ],
  "description": "Fluffy Floral Pure Handblock Cotton King Size Bedsheet",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6941
    },
    {
      "month": "Feb",
      "revenue": 8172
    },
    {
      "month": "Mar",
      "revenue": 6803
    },
    {
      "month": "Apr",
      "revenue": 9476
    },
    {
      "month": "May",
      "revenue": 5688
    },
    {
      "month": "Jun",
      "revenue": 3687
    },
    {
      "month": "Jul",
      "revenue": 3111
    },
    {
      "month": "Aug",
      "revenue": 8744
    },
    {
      "month": "Sep",
      "revenue": 1842
    },
    {
      "month": "Oct",
      "revenue": 8195
    },
    {
      "month": "Nov",
      "revenue": 8638
    },
    {
      "month": "Dec",
      "revenue": 5369
    }
  ]
},
{
  "id": 198,
  "name": "Lush Lavender Pure cotton Queen size bedsheet with pillow covers",
  "price": 1249,
  "rating": 4.7,
  "reviews": 24,
  "answers": 2,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "PINK"
  ],
  "category": "bedsheets",
  "model": "RP-105 BS)",
  "size": [
    "KING SIZE 90X108 INCHES",
    "SUPERKING SIZE 108X108 INCHES"
  ],
  "images": [
    "/detailphotos/198.1.webp",
    "/detailphotos/198.2.webp",
    "/detailphotos/198.3.webp",
    "/detailphotos/198.4.webp",
    "/detailphotos/198.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-105 BS)",
    "Washing instruction-  A gentle machine wash cycle or hand wash in cold water using mild detergent",
    "Bed Sheet Size: Queen Size 108 x 108 Inches",
    "Pillow Cover Size: 28 x 18 Inches"
  ],
  "description": "Lush Lavender Pure cotton Queen size bedsheet with pillow covers",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2387
    },
    {
      "month": "Feb",
      "revenue": 3708
    },
    {
      "month": "Mar",
      "revenue": 7989
    },
    {
      "month": "Apr",
      "revenue": 5616
    },
    {
      "month": "May",
      "revenue": 1512
    },
    {
      "month": "Jun",
      "revenue": 1767
    },
    {
      "month": "Jul",
      "revenue": 2557
    },
    {
      "month": "Aug",
      "revenue": 6669
    },
    {
      "month": "Sep",
      "revenue": 7718
    },
    {
      "month": "Oct",
      "revenue": 6492
    },
    {
      "month": "Nov",
      "revenue": 5845
    },
    {
      "month": "Dec",
      "revenue": 9422
    }
  ]
},
{
  "id": 199,
  "name": "Spring Palms Pure Cotton Queen Size Bedsheet",
  "price": 1249,
  "rating": 4.1,
  "reviews": 45,
  "answers": 4,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    "Dark Green"
  ],
  "category": "bedsheets",
  "model": "RP-106 BS)",
  "size": [
    "KING SIZE 90X108 INCHES",
    "SUPERKING SIZE 108X108 INCHES"
  ],
  "images": [
    "/detailphotos/199.1.webp",
    "/detailphotos/199.2.webp",
    "/detailphotos/199.3.webp",
    "/detailphotos/199.4.webp",
    "/detailphotos/199.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-106 BS)",
    "Washing instruction-  A gentle machine wash cycle or hand wash in cold water using mild detergent",
    "Bed Sheet Size: Queen Size 108 x 108 Inches",
    "Pillow Cover Size: 28 x 18 Inches"
  ],
  "description": "Spring Palms Pure Cotton Queen Size Bedsheet",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4777
    },
    {
      "month": "Feb",
      "revenue": 3651
    },
    {
      "month": "Mar",
      "revenue": 5250
    },
    {
      "month": "Apr",
      "revenue": 4930
    },
    {
      "month": "May",
      "revenue": 2366
    },
    {
      "month": "Jun",
      "revenue": 9401
    },
    {
      "month": "Jul",
      "revenue": 5579
    },
    {
      "month": "Aug",
      "revenue": 2330
    },
    {
      "month": "Sep",
      "revenue": 4002
    },
    {
      "month": "Oct",
      "revenue": 5790
    },
    {
      "month": "Nov",
      "revenue": 7601
    },
    {
      "month": "Dec",
      "revenue": 9176
    }
  ]
},
{
  "id": 200,
  "name": "Leafy Haven Cord Set",
  "price": 1899,
  "rating": 4.6,
  "reviews": 7343,
  "answers": 231,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "color": [
    ""
  ],
  "category": "lounge-wear",
  "model": "RP-737 Co-ord Set)",
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
    "/detailphotos/200.1.webp",
    "/detailphotos/200.2.webp",
    "/detailphotos/200.3.webp",
    "/detailphotos/200.4.webp",
    "/detailphotos/200.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-737 Co-ord Set)",
    "Washing instruction-  Quick dip wash or Dry clean, separate wash in cold water, dry in shadow",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Introducing the Leafy Haven Cord Set, the epitome of comfort and style. Made from breathable materials, this set is perfect for those who appreciate fashion and luxury. Surround yourself in this haven and experience a new level of comfort and elegance.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4022
    },
    {
      "month": "Feb",
      "revenue": 4310
    },
    {
      "month": "Mar",
      "revenue": 3848
    },
    {
      "month": "Apr",
      "revenue": 6722
    },
    {
      "month": "May",
      "revenue": 6169
    },
    {
      "month": "Jun",
      "revenue": 1250
    },
    {
      "month": "Jul",
      "revenue": 3121
    },
    {
      "month": "Aug",
      "revenue": 8747
    },
    {
      "month": "Sep",
      "revenue": 7547
    },
    {
      "month": "Oct",
      "revenue": 6580
    },
    {
      "month": "Nov",
      "revenue": 4278
    },
    {
      "month": "Dec",
      "revenue": 3540
    }
  ]
},
{
  "id": 201,
  "name": "Black Traditional Bandhani Embroidered Lace Georgette Saree",
  "price": 4399,
  "rating": 4.5,
  "reviews": 6250,
  "answers": 259,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Black"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/201.1.jpg",
    "/detailphotos/201.2.jpg",
    "/detailphotos/201.3.jpg",
    "/detailphotos/201.4.jpg",
    "/detailphotos/201.5.jpg",
    "/detailphotos/201.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Black Georgette",
    "traditionalWoven Design print in white over a bright Black base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Revamp your closet in this Black Traditional Embroidered Lace Georgette Bandhani Saree. It has a floral embroidered lace scallop border.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7507
    },
    {
      "month": "Feb",
      "revenue": 7922
    },
    {
      "month": "Mar",
      "revenue": 6278
    },
    {
      "month": "Apr",
      "revenue": 4060
    },
    {
      "month": "May",
      "revenue": 4570
    },
    {
      "month": "Jun",
      "revenue": 3069
    },
    {
      "month": "Jul",
      "revenue": 2569
    },
    {
      "month": "Aug",
      "revenue": 6933
    },
    {
      "month": "Sep",
      "revenue": 3890
    },
    {
      "month": "Oct",
      "revenue": 4745
    },
    {
      "month": "Nov",
      "revenue": 1586
    },
    {
      "month": "Dec",
      "revenue": 3942
    }
  ]
},
{
  "id": 202,
  "name": "Red Traditional Embroidered Bandhani Pure Georgette Saree",
  "price": 5799,
  "rating": 4.3,
  "reviews": 6000,
  "answers": 250,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/202.1.jpg",
    "/detailphotos/202.2.jpg",
    "/detailphotos/202.3.jpg",
    "/detailphotos/202.4.jpg",
    "/detailphotos/202.5.jpg",
    "/detailphotos/202.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Red Georgette",
    "traditionalWoven Design print in over a bright Red base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the festive charm of the Red Traditional Embroidered Bandhani Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6151
    },
    {
      "month": "Feb",
      "revenue": 9169
    },
    {
      "month": "Mar",
      "revenue": 8957
    },
    {
      "month": "Apr",
      "revenue": 5398
    },
    {
      "month": "May",
      "revenue": 8453
    },
    {
      "month": "Jun",
      "revenue": 3547
    },
    {
      "month": "Jul",
      "revenue": 2559
    },
    {
      "month": "Aug",
      "revenue": 3515
    },
    {
      "month": "Sep",
      "revenue": 1961
    },
    {
      "month": "Oct",
      "revenue": 1512
    },
    {
      "month": "Nov",
      "revenue": 9912
    },
    {
      "month": "Dec",
      "revenue": 4232
    }
  ]
},
{
  "id": 203,
  "name": "Traditional Sea Green Embroidered Pure Georgette Saree",
  "price": 4699,
  "rating": 4.4,
  "reviews": 6200,
  "answers": 220,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "SeaGreen"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/203.1.jpg",
    "/detailphotos/203.2.jpg",
    "/detailphotos/203.3.jpg",
    "/detailphotos/203.4.jpg",
    "/detailphotos/203.5.jpg",
    "/detailphotos/203.6.jpg",
    "/detailphotos/203.7.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Bottle Green Georgette",
    "traditional Woven Design print in white over a Bottle Green base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Add a pastel touch to your wardrobe with this Traditional Embroidered Pure Georgette Saree. It has fine floral embroidered details.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5123
    },
    {
      "month": "Feb",
      "revenue": 3763
    },
    {
      "month": "Mar",
      "revenue": 9753
    },
    {
      "month": "Apr",
      "revenue": 2700
    },
    {
      "month": "May",
      "revenue": 9286
    },
    {
      "month": "Jun",
      "revenue": 9067
    },
    {
      "month": "Jul",
      "revenue": 3001
    },
    {
      "month": "Aug",
      "revenue": 7534
    },
    {
      "month": "Sep",
      "revenue": 2583
    },
    {
      "month": "Oct",
      "revenue": 2608
    },
    {
      "month": "Nov",
      "revenue": 6902
    },
    {
      "month": "Dec",
      "revenue": 3154
    }
  ]
},
{
  "id": 204,
  "name": "Red Zari Woven Design Heavy Banarasi Saree",
  "price": 5699,
  "rating": 4.5,
  "reviews": 6300,
  "answers": 230,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/204.1.jpg",
    "/detailphotos/204.2.jpg",
    "/detailphotos/204.3.jpg",
    "/detailphotos/204.4.jpg",
    "/detailphotos/204.5.jpg",
    "/detailphotos/204.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Red Georgette",
    "traditionalWoven Design print in white over a bright Red base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Featuring a glamorous look, this Red Zari Woven Design Heavy Banarasi Saree comes with a traditional zari woven design all over and tassels on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5941
    },
    {
      "month": "Feb",
      "revenue": 3043
    },
    {
      "month": "Mar",
      "revenue": 2575
    },
    {
      "month": "Apr",
      "revenue": 5316
    },
    {
      "month": "May",
      "revenue": 2856
    },
    {
      "month": "Jun",
      "revenue": 1948
    },
    {
      "month": "Jul",
      "revenue": 5094
    },
    {
      "month": "Aug",
      "revenue": 7586
    },
    {
      "month": "Sep",
      "revenue": 8774
    },
    {
      "month": "Oct",
      "revenue": 8210
    },
    {
      "month": "Nov",
      "revenue": 1449
    },
    {
      "month": "Dec",
      "revenue": 8465
    }
  ]
},
{
  "id": 205,
  "name": "Festive Zari Woven Heavy Banarasi Lavender Saree",
  "price": 6799,
  "rating": 4.6,
  "reviews": 6400,
  "answers": 240,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Lavender"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/205.1.jpg",
    "/detailphotos/205.2.jpg",
    "/detailphotos/205.3.jpg",
    "/detailphotos/205.4.jpg",
    "/detailphotos/205.5.jpg",
    "/detailphotos/205.6.jpg",
    "/detailphotos/205.7.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Lavender Georgette",
    "traditional Woven Design print in white over a bright Lavender base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Featuring a glamorous look, this Lavender Festive Zari Woven Heavy Banarasi Saree comes with a traditional zari woven design all over and tassels on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2723
    },
    {
      "month": "Feb",
      "revenue": 3180
    },
    {
      "month": "Mar",
      "revenue": 3459
    },
    {
      "month": "Apr",
      "revenue": 9929
    },
    {
      "month": "May",
      "revenue": 8615
    },
    {
      "month": "Jun",
      "revenue": 5529
    },
    {
      "month": "Jul",
      "revenue": 1049
    },
    {
      "month": "Aug",
      "revenue": 8444
    },
    {
      "month": "Sep",
      "revenue": 8597
    },
    {
      "month": "Oct",
      "revenue": 9154
    },
    {
      "month": "Nov",
      "revenue": 5216
    },
    {
      "month": "Dec",
      "revenue": 7720
    }
  ]
},
{
  "id": 206,
  "name": "Orange Zari Woven Heavy Banarasi Saree",
  "price": 6799,
  "rating": 4.7,
  "reviews": 6500,
  "answers": 250,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Orange"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/206.1.jpg",
    "/detailphotos/206.2.jpg",
    "/detailphotos/206.3.jpg",
    "/detailphotos/206.4.jpg",
    "/detailphotos/206.5.jpg",
    "/detailphotos/206.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Orange Georgette",
    "traditional Woven Design print in white over a bright Orange base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Featuring a glamorous look, this Orange Zari Woven Heavy Banarasi Saree comes with a traditional zari woven design all over and tassels on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3257
    },
    {
      "month": "Feb",
      "revenue": 3641
    },
    {
      "month": "Mar",
      "revenue": 7508
    },
    {
      "month": "Apr",
      "revenue": 1951
    },
    {
      "month": "May",
      "revenue": 1503
    },
    {
      "month": "Jun",
      "revenue": 6405
    },
    {
      "month": "Jul",
      "revenue": 2148
    },
    {
      "month": "Aug",
      "revenue": 6127
    },
    {
      "month": "Sep",
      "revenue": 9722
    },
    {
      "month": "Oct",
      "revenue": 4133
    },
    {
      "month": "Nov",
      "revenue": 3038
    },
    {
      "month": "Dec",
      "revenue": 3485
    }
  ]
},
{
  "id": 207,
  "name": "Green Leheriya Embroidered Pure Georgette Saree",
  "price": 4699,
  "rating": 4.8,
  "reviews": 6600,
  "answers": 260,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Green"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/207.1.jpg",
    "/detailphotos/207.2.jpg",
    "/detailphotos/207.3.jpg",
    "/detailphotos/207.4.jpg",
    "/detailphotos/207.5.jpg",
    "/detailphotos/207.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Green Georgette",
    "traditional Woven Design print in white over a bright Green base",
    "Pure Pure Georgette Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Give a traditional touch to your wardrobe with this Leheriya Embroidered Pure Georgette Saree. It has embroidered lace on borders and tassels at the hems.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7712
    },
    {
      "month": "Feb",
      "revenue": 6629
    },
    {
      "month": "Mar",
      "revenue": 7949
    },
    {
      "month": "Apr",
      "revenue": 6916
    },
    {
      "month": "May",
      "revenue": 3270
    },
    {
      "month": "Jun",
      "revenue": 5709
    },
    {
      "month": "Jul",
      "revenue": 9177
    },
    {
      "month": "Aug",
      "revenue": 3039
    },
    {
      "month": "Sep",
      "revenue": 7957
    },
    {
      "month": "Oct",
      "revenue": 1567
    },
    {
      "month": "Nov",
      "revenue": 1216
    },
    {
      "month": "Dec",
      "revenue": 9108
    }
  ]
},
{
  "id": 208,
  "name": "Violet Leheriya Embroidered Pure Georgette Saree",
  "price": 4699,
  "rating": 4.1,
  "reviews": 6700,
  "answers": 270,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Violet"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/208.1.jpg",
    "/detailphotos/208.2.jpg",
    "/detailphotos/208.3.jpg",
    "/detailphotos/208.4.jpg",
    "/detailphotos/208.5.jpg",
    "/detailphotos/208.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Violet Georgette",
    "traditional Woven Design print in white over a bright Violet base",
    "Pure Pure Georgette Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Give a traditional touch to your wardrobe with this Leheriya Embroidered Pure Georgette Saree. It has embroidered lace on borders and tassels at the hems.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4100
    },
    {
      "month": "Feb",
      "revenue": 1563
    },
    {
      "month": "Mar",
      "revenue": 9303
    },
    {
      "month": "Apr",
      "revenue": 2035
    },
    {
      "month": "May",
      "revenue": 1912
    },
    {
      "month": "Jun",
      "revenue": 4520
    },
    {
      "month": "Jul",
      "revenue": 1504
    },
    {
      "month": "Aug",
      "revenue": 9532
    },
    {
      "month": "Sep",
      "revenue": 2614
    },
    {
      "month": "Oct",
      "revenue": 5857
    },
    {
      "month": "Nov",
      "revenue": 3765
    },
    {
      "month": "Dec",
      "revenue": 5084
    }
  ]
},
{
  "id": 209,
  "name": "Festive Zari Woven Design Heavy Banarasi Saree",
  "price": 5699,
  "rating": 4,
  "reviews": 6800,
  "answers": 280,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Orange"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/209.1.jpg",
    "/detailphotos/209.2.jpg",
    "/detailphotos/209.3.jpg",
    "/detailphotos/209.4.jpg",
    "/detailphotos/209.5.jpg",
    "/detailphotos/209.6.jpg",
    "/detailphotos/209.7.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Orange Georgette",
    "traditional Woven Design print in white over a bright Orange base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Featuring a glamorous look, this Orange Zari Woven Design Heavy Banarasi Saree comes with a traditional zari woven design all over and tassels on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2842
    },
    {
      "month": "Feb",
      "revenue": 5804
    },
    {
      "month": "Mar",
      "revenue": 8273
    },
    {
      "month": "Apr",
      "revenue": 1141
    },
    {
      "month": "May",
      "revenue": 6063
    },
    {
      "month": "Jun",
      "revenue": 4805
    },
    {
      "month": "Jul",
      "revenue": 9094
    },
    {
      "month": "Aug",
      "revenue": 8541
    },
    {
      "month": "Sep",
      "revenue": 1450
    },
    {
      "month": "Oct",
      "revenue": 9471
    },
    {
      "month": "Nov",
      "revenue": 8882
    },
    {
      "month": "Dec",
      "revenue": 2554
    }
  ]
},
{
  "id": 210,
  "name": "Festive Red Zari Woven Heavy Banarasi Saree",
  "price": 6799,
  "rating": 4.2,
  "reviews": 6900,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Wine"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/210.1.jpg",
    "/detailphotos/210.2.jpg",
    "/detailphotos/210.3.jpg",
    "/detailphotos/210.4.jpg",
    "/detailphotos/210.5.jpg",
    "/detailphotos/210.6.jpg",
    "/detailphotos/210.7.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Wine Georgette",
    "traditional Woven Design print in white over a bright Wine color base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Featuring a glamorous look, this Wine Festive Zari Woven Heavy Banarasi Saree comes with a traditional zari woven design all over and tassels on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9013
    },
    {
      "month": "Feb",
      "revenue": 1569
    },
    {
      "month": "Mar",
      "revenue": 9485
    },
    {
      "month": "Apr",
      "revenue": 3803
    },
    {
      "month": "May",
      "revenue": 7372
    },
    {
      "month": "Jun",
      "revenue": 9845
    },
    {
      "month": "Jul",
      "revenue": 8318
    },
    {
      "month": "Aug",
      "revenue": 6631
    },
    {
      "month": "Sep",
      "revenue": 8560
    },
    {
      "month": "Oct",
      "revenue": 9507
    },
    {
      "month": "Nov",
      "revenue": 3697
    },
    {
      "month": "Dec",
      "revenue": 6462
    }
  ]
},
{
  "id": 211,
  "name": "Sequin Embellished Georgette Party Wear Saree",
  "price": 4999,
  "rating": 4.3,
  "reviews": 7000,
  "answers": 300,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Purple"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/211.1.jpg",
    "/detailphotos/211.2.jpg",
    "/detailphotos/211.3.jpg",
    "/detailphotos/211.4.jpg",
    "/detailphotos/211.5.jpg",
    "/detailphotos/211.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Purple Georgette",
    "traditional Woven Design print in white over a bright Purple base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Flaunt traditional handcraftsmanship with this Purple Sequin Embellished Georgette Party Wear Saree. It has colorful sequin embellishments and a solid border..",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3239
    },
    {
      "month": "Feb",
      "revenue": 4331
    },
    {
      "month": "Mar",
      "revenue": 7429
    },
    {
      "month": "Apr",
      "revenue": 8672
    },
    {
      "month": "May",
      "revenue": 8256
    },
    {
      "month": "Jun",
      "revenue": 8505
    },
    {
      "month": "Jul",
      "revenue": 5750
    },
    {
      "month": "Aug",
      "revenue": 7467
    },
    {
      "month": "Sep",
      "revenue": 8232
    },
    {
      "month": "Oct",
      "revenue": 3115
    },
    {
      "month": "Nov",
      "revenue": 7101
    },
    {
      "month": "Dec",
      "revenue": 1379
    }
  ]
},
{
  "id": 212,
  "name": "Festive Maroon Zari Woven Heavy Banarasi Saree",
  "price": 6799,
  "rating": 4.4,
  "reviews": 7100,
  "answers": 310,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Maroon"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/212.1.jpg",
    "/detailphotos/212.2.jpg",
    "/detailphotos/212.3.jpg",
    "/detailphotos/212.4.jpg",
    "/detailphotos/212.5.jpg",
    "/detailphotos/212.6.jpg",
    "/detailphotos/212.7.jpg",
    "/detailphotos/212.8.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Maroon Georgette",
    "traditional Woven Design print in white over a bright Maroon base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Featuring a glamorous look, this Maroon Festive Zari Woven Heavy Banarasi Saree comes with a traditional zari woven design all over and tassels on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5818
    },
    {
      "month": "Feb",
      "revenue": 1498
    },
    {
      "month": "Mar",
      "revenue": 6305
    },
    {
      "month": "Apr",
      "revenue": 7275
    },
    {
      "month": "May",
      "revenue": 2842
    },
    {
      "month": "Jun",
      "revenue": 1071
    },
    {
      "month": "Jul",
      "revenue": 3736
    },
    {
      "month": "Aug",
      "revenue": 8266
    },
    {
      "month": "Sep",
      "revenue": 3251
    },
    {
      "month": "Oct",
      "revenue": 8929
    },
    {
      "month": "Nov",
      "revenue": 1597
    },
    {
      "month": "Dec",
      "revenue": 4545
    }
  ]
},
{
  "id": 213,
  "name": "Festive Burgundy Zari Woven Heavy Banarasi Saree",
  "price": 6799,
  "rating": 4.5,
  "reviews": 7200,
  "answers": 320,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Maroon"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/213.1.jpg",
    "/detailphotos/213.2.jpg",
    "/detailphotos/213.3.jpg",
    "/detailphotos/213.4.jpg",
    "/detailphotos/213.5.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Burgundy Georgette",
    "traditional Woven Design print in white over a bright Burgundy base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Featuring a glamorous look, this Burgundy Festive Zari Woven Heavy Banarasi Saree comes with a traditional zari woven design all over and tassels on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7388
    },
    {
      "month": "Feb",
      "revenue": 1248
    },
    {
      "month": "Mar",
      "revenue": 5042
    },
    {
      "month": "Apr",
      "revenue": 7977
    },
    {
      "month": "May",
      "revenue": 1407
    },
    {
      "month": "Jun",
      "revenue": 2127
    },
    {
      "month": "Jul",
      "revenue": 1432
    },
    {
      "month": "Aug",
      "revenue": 6247
    },
    {
      "month": "Sep",
      "revenue": 6400
    },
    {
      "month": "Oct",
      "revenue": 4331
    },
    {
      "month": "Nov",
      "revenue": 2639
    },
    {
      "month": "Dec",
      "revenue": 8120
    }
  ]
},
{
  "id": 214,
  "name": "Violet Bandhani Embroidered Pure Georgette Saree",
  "price": 4699,
  "rating": 4.6,
  "reviews": 7300,
  "answers": 330,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Violet"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/214.1.jpg",
    "/detailphotos/214.2.jpg",
    "/detailphotos/214.3.jpg",
    "/detailphotos/214.4.jpg",
    "/detailphotos/214.5.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Violet Georgette",
    "traditional Woven Design print in white over a bright Violet base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the traditional charm of Bandhani Embroidered Pure Georgette Saree. It has an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6449
    },
    {
      "month": "Feb",
      "revenue": 6111
    },
    {
      "month": "Mar",
      "revenue": 5822
    },
    {
      "month": "Apr",
      "revenue": 2722
    },
    {
      "month": "May",
      "revenue": 2554
    },
    {
      "month": "Jun",
      "revenue": 9552
    },
    {
      "month": "Jul",
      "revenue": 3004
    },
    {
      "month": "Aug",
      "revenue": 5133
    },
    {
      "month": "Sep",
      "revenue": 2732
    },
    {
      "month": "Oct",
      "revenue": 5709
    },
    {
      "month": "Nov",
      "revenue": 5387
    },
    {
      "month": "Dec",
      "revenue": 7992
    }
  ]
},
{
  "id": 215,
  "name": "Teal Bandhani Embroidered Pure Georgette Saree",
  "price": 4699,
  "rating": 4.7,
  "reviews": 7400,
  "answers": 340,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Teal"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/215.1.jpg",
    "/detailphotos/215.2.jpg",
    "/detailphotos/215.3.jpg",
    "/detailphotos/215.4.jpg",
    "/detailphotos/215.5.jpg",
    "/detailphotos/215.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Teal Georgette",
    "traditional Woven Design print in white over a bright Teal base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Embrace the traditional charm of Bandhani Embroidered Pure Georgette Saree. It has an embroidered border and heavy work on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7637
    },
    {
      "month": "Feb",
      "revenue": 5489
    },
    {
      "month": "Mar",
      "revenue": 9386
    },
    {
      "month": "Apr",
      "revenue": 7147
    },
    {
      "month": "May",
      "revenue": 3705
    },
    {
      "month": "Jun",
      "revenue": 1414
    },
    {
      "month": "Jul",
      "revenue": 7853
    },
    {
      "month": "Aug",
      "revenue": 8495
    },
    {
      "month": "Sep",
      "revenue": 8735
    },
    {
      "month": "Oct",
      "revenue": 9771
    },
    {
      "month": "Nov",
      "revenue": 1175
    },
    {
      "month": "Dec",
      "revenue": 2804
    }
  ]
},
{
  "id": 216,
  "name": "Wine Pure Georgette Leheriya Mirror Work Saree",
  "price": 4699,
  "rating": 4.8,
  "reviews": 7500,
  "answers": 350,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Wine"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/216.1.jpg",
    "/detailphotos/216.2.jpg",
    "/detailphotos/216.3.jpg",
    "/detailphotos/216.4.jpg",
    "/detailphotos/216.5.jpg",
    "/detailphotos/216.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Wine Georgette",
    "traditional Woven Design print in white over a bright Wine base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "A traditional touch to your wardrobe this Wine Pure Georgette Leheriya Mirror Work Saree features mirror work embellishment. It is made in premium georgette fabric.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2713
    },
    {
      "month": "Feb",
      "revenue": 2263
    },
    {
      "month": "Mar",
      "revenue": 8557
    },
    {
      "month": "Apr",
      "revenue": 5623
    },
    {
      "month": "May",
      "revenue": 3681
    },
    {
      "month": "Jun",
      "revenue": 5106
    },
    {
      "month": "Jul",
      "revenue": 9826
    },
    {
      "month": "Aug",
      "revenue": 8101
    },
    {
      "month": "Sep",
      "revenue": 7665
    },
    {
      "month": "Oct",
      "revenue": 8054
    },
    {
      "month": "Nov",
      "revenue": 2148
    },
    {
      "month": "Dec",
      "revenue": 8172
    }
  ]
},
{
  "id": 217,
  "name": "Festive Zari Woven Heavy Banarasi Maroon Saree",
  "price": 6799,
  "rating": 3.8,
  "reviews": 7600,
  "answers": 360,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Maroon"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/217.1.jpg",
    "/detailphotos/217.2.jpg",
    "/detailphotos/217.3.jpg",
    "/detailphotos/217.4.jpg",
    "/detailphotos/217.5.jpg",
    "/detailphotos/217.6.jpg"
  ],
  "features": [
    "Party Wear Sequin Work Maroon Georgette",
    "traditional Woven Design print in white over a bright Maroon base",
    "Pure Silk Blend Fabric",
    "For Party Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Featuring a glamorous look, this Maroon Festive Zari Woven Heavy Banarasi Saree comes with a traditional zari woven design all over and tassels on the palla.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2460
    },
    {
      "month": "Feb",
      "revenue": 2239
    },
    {
      "month": "Mar",
      "revenue": 1206
    },
    {
      "month": "Apr",
      "revenue": 7687
    },
    {
      "month": "May",
      "revenue": 7595
    },
    {
      "month": "Jun",
      "revenue": 2263
    },
    {
      "month": "Jul",
      "revenue": 3888
    },
    {
      "month": "Aug",
      "revenue": 4540
    },
    {
      "month": "Sep",
      "revenue": 1015
    },
    {
      "month": "Oct",
      "revenue": 5050
    },
    {
      "month": "Nov",
      "revenue": 9689
    },
    {
      "month": "Dec",
      "revenue": 7666
    }
  ]
},
{
  "id": 218,
  "name": "Sequinned Net Saree",
  "price": 3999,
  "rating": 3.8,
  "reviews": 5650,
  "answers": 149,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Yellow"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/218.1.jpg",
    "/detailphotos/218.2.jpg",
    "/detailphotos/218.3.jpg",
    "/detailphotos/218.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border ",
    "traditional Saree with a bright Yellow base",
    "Pure Net Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Yellow and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4977
    },
    {
      "month": "Feb",
      "revenue": 5382
    },
    {
      "month": "Mar",
      "revenue": 2983
    },
    {
      "month": "Apr",
      "revenue": 2888
    },
    {
      "month": "May",
      "revenue": 3151
    },
    {
      "month": "Jun",
      "revenue": 6925
    },
    {
      "month": "Jul",
      "revenue": 4158
    },
    {
      "month": "Aug",
      "revenue": 5605
    },
    {
      "month": "Sep",
      "revenue": 8641
    },
    {
      "month": "Oct",
      "revenue": 8353
    },
    {
      "month": "Nov",
      "revenue": 3327
    },
    {
      "month": "Dec",
      "revenue": 4073
    }
  ]
},
{
  "id": 219,
  "name": "Geometric Printed Pure Cotton Mulmul Bagru Saree",
  "price": 6999,
  "rating": 4.2,
  "reviews": 6290,
  "answers": 268,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Orange"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/219.1.jpg",
    "/detailphotos/219.2.jpg",
    "/detailphotos/219.3.jpg",
    "/detailphotos/219.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Orange  base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Orange and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4984
    },
    {
      "month": "Feb",
      "revenue": 8433
    },
    {
      "month": "Mar",
      "revenue": 6290
    },
    {
      "month": "Apr",
      "revenue": 1968
    },
    {
      "month": "May",
      "revenue": 7875
    },
    {
      "month": "Jun",
      "revenue": 5784
    },
    {
      "month": "Jul",
      "revenue": 9089
    },
    {
      "month": "Aug",
      "revenue": 6330
    },
    {
      "month": "Sep",
      "revenue": 6225
    },
    {
      "month": "Oct",
      "revenue": 9013
    },
    {
      "month": "Nov",
      "revenue": 6881
    },
    {
      "month": "Dec",
      "revenue": 1163
    }
  ]
},
{
  "id": 220,
  "name": "Ethnic Motifs Printed Pure Cotton Mulmul Bagru Saree",
  "price": 6999,
  "rating": 3.9,
  "reviews": 5720,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Pink"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/220.1.jpg",
    "/detailphotos/220.2.jpg",
    "/detailphotos/220.3.jpg",
    "/detailphotos/220.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Pink base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "White and Pink bagru saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3027
    },
    {
      "month": "Feb",
      "revenue": 8066
    },
    {
      "month": "Mar",
      "revenue": 7751
    },
    {
      "month": "Apr",
      "revenue": 4493
    },
    {
      "month": "May",
      "revenue": 5594
    },
    {
      "month": "Jun",
      "revenue": 9146
    },
    {
      "month": "Jul",
      "revenue": 2835
    },
    {
      "month": "Aug",
      "revenue": 5994
    },
    {
      "month": "Sep",
      "revenue": 6486
    },
    {
      "month": "Oct",
      "revenue": 8875
    },
    {
      "month": "Nov",
      "revenue": 7398
    },
    {
      "month": "Dec",
      "revenue": 5718
    }
  ]
},
{
  "id": 221,
  "name": "Floral Pure Cotton Bagru Saree",
  "price": 6999,
  "rating": 4.5,
  "reviews": 7490,
  "answers": 309,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "NavyBlue"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/221.1.jpg",
    "/detailphotos/221.2.jpg",
    "/detailphotos/221.3.jpg",
    "/detailphotos/221.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright NavyBlue base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "NavyBlue and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6897
    },
    {
      "month": "Feb",
      "revenue": 8400
    },
    {
      "month": "Mar",
      "revenue": 3557
    },
    {
      "month": "Apr",
      "revenue": 4674
    },
    {
      "month": "May",
      "revenue": 4832
    },
    {
      "month": "Jun",
      "revenue": 6273
    },
    {
      "month": "Jul",
      "revenue": 9233
    },
    {
      "month": "Aug",
      "revenue": 8509
    },
    {
      "month": "Sep",
      "revenue": 2581
    },
    {
      "month": "Oct",
      "revenue": 7901
    },
    {
      "month": "Nov",
      "revenue": 9827
    },
    {
      "month": "Dec",
      "revenue": 3033
    }
  ]
},
{
  "id": 222,
  "name": "Floral Printed Pure Cotton Mulmul Bagru Saree",
  "price": 6999,
  "rating": 4.3,
  "reviews": 6400,
  "answers": 180,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Orange"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/222.1.jpg",
    "/detailphotos/222.2.jpg",
    "/detailphotos/222.3.jpg",
    "/detailphotos/222.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Orange base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "White and Orange Bagru saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6884
    },
    {
      "month": "Feb",
      "revenue": 1632
    },
    {
      "month": "Mar",
      "revenue": 9444
    },
    {
      "month": "Apr",
      "revenue": 8214
    },
    {
      "month": "May",
      "revenue": 4019
    },
    {
      "month": "Jun",
      "revenue": 6566
    },
    {
      "month": "Jul",
      "revenue": 5819
    },
    {
      "month": "Aug",
      "revenue": 2221
    },
    {
      "month": "Sep",
      "revenue": 4004
    },
    {
      "month": "Oct",
      "revenue": 3202
    },
    {
      "month": "Nov",
      "revenue": 9544
    },
    {
      "month": "Dec",
      "revenue": 2999
    }
  ]
},
{
  "id": 223,
  "name": "Printed Pure Cotton Mulmul Bagru Saree",
  "price": 6999,
  "rating": 4.1,
  "reviews": 6850,
  "answers": 240,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/223.1.jpg",
    "/detailphotos/223.2.jpg",
    "/detailphotos/223.3.jpg",
    "/detailphotos/223.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Printed Saree with a bright Red base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Red and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7499
    },
    {
      "month": "Feb",
      "revenue": 2377
    },
    {
      "month": "Mar",
      "revenue": 9093
    },
    {
      "month": "Apr",
      "revenue": 6651
    },
    {
      "month": "May",
      "revenue": 9660
    },
    {
      "month": "Jun",
      "revenue": 2735
    },
    {
      "month": "Jul",
      "revenue": 5852
    },
    {
      "month": "Aug",
      "revenue": 8626
    },
    {
      "month": "Sep",
      "revenue": 1272
    },
    {
      "month": "Oct",
      "revenue": 3468
    },
    {
      "month": "Nov",
      "revenue": 8196
    },
    {
      "month": "Dec",
      "revenue": 6990
    }
  ]
},
{
  "id": 224,
  "name": "Floral Pure Cotton Block Print Saree",
  "price": 6999,
  "rating": 4.6,
  "reviews": 7800,
  "answers": 324,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Black"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/224.1.jpg",
    "/detailphotos/224.2.jpg",
    "/detailphotos/224.3.jpg",
    "/detailphotos/224.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Printed Saree with a bright Black base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Black and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4668
    },
    {
      "month": "Feb",
      "revenue": 1065
    },
    {
      "month": "Mar",
      "revenue": 2502
    },
    {
      "month": "Apr",
      "revenue": 3774
    },
    {
      "month": "May",
      "revenue": 2433
    },
    {
      "month": "Jun",
      "revenue": 8013
    },
    {
      "month": "Jul",
      "revenue": 4918
    },
    {
      "month": "Aug",
      "revenue": 2177
    },
    {
      "month": "Sep",
      "revenue": 2964
    },
    {
      "month": "Oct",
      "revenue": 3031
    },
    {
      "month": "Nov",
      "revenue": 4065
    },
    {
      "month": "Dec",
      "revenue": 1346
    }
  ]
},
{
  "id": 225,
  "name": "Floral Pure Cotton Bagru Saree",
  "price": 6999,
  "rating": 3.9,
  "reviews": 5650,
  "answers": 190,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Orange"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/225.1.jpg",
    "/detailphotos/225.2.jpg",
    "/detailphotos/225.3.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Orange base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Orange and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1400
    },
    {
      "month": "Feb",
      "revenue": 8391
    },
    {
      "month": "Mar",
      "revenue": 2188
    },
    {
      "month": "Apr",
      "revenue": 2129
    },
    {
      "month": "May",
      "revenue": 8875
    },
    {
      "month": "Jun",
      "revenue": 6665
    },
    {
      "month": "Jul",
      "revenue": 7509
    },
    {
      "month": "Aug",
      "revenue": 8795
    },
    {
      "month": "Sep",
      "revenue": 4008
    },
    {
      "month": "Oct",
      "revenue": 8340
    },
    {
      "month": "Nov",
      "revenue": 1792
    },
    {
      "month": "Dec",
      "revenue": 4771
    }
  ]
},
{
  "id": 226,
  "name": "Checked Pure Cotton Mulmul Bagru Saree",
  "price": 6999,
  "rating": 4.4,
  "reviews": 6500,
  "answers": 310,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/226.1.jpg",
    "/detailphotos/226.2.jpg",
    "/detailphotos/226.3.jpg",
    "/detailphotos/226.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Red base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Red and White Bagru saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7602
    },
    {
      "month": "Feb",
      "revenue": 3109
    },
    {
      "month": "Mar",
      "revenue": 9485
    },
    {
      "month": "Apr",
      "revenue": 8536
    },
    {
      "month": "May",
      "revenue": 5828
    },
    {
      "month": "Jun",
      "revenue": 6416
    },
    {
      "month": "Jul",
      "revenue": 4421
    },
    {
      "month": "Aug",
      "revenue": 5827
    },
    {
      "month": "Sep",
      "revenue": 6409
    },
    {
      "month": "Oct",
      "revenue": 7224
    },
    {
      "month": "Nov",
      "revenue": 5830
    },
    {
      "month": "Dec",
      "revenue": 1560
    }
  ]
},
{
  "id": 227,
  "name": "Floral Printed Pure Cotton Bagru Saree",
  "price": 6999,
  "rating": 4.2,
  "reviews": 6100,
  "answers": 225,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Green "
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/227.1.jpg",
    "/detailphotos/227.2.jpg",
    "/detailphotos/227.3.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Green base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Green and White bagru saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1623
    },
    {
      "month": "Feb",
      "revenue": 1167
    },
    {
      "month": "Mar",
      "revenue": 7839
    },
    {
      "month": "Apr",
      "revenue": 5611
    },
    {
      "month": "May",
      "revenue": 6180
    },
    {
      "month": "Jun",
      "revenue": 2197
    },
    {
      "month": "Jul",
      "revenue": 1423
    },
    {
      "month": "Aug",
      "revenue": 2470
    },
    {
      "month": "Sep",
      "revenue": 6586
    },
    {
      "month": "Oct",
      "revenue": 5045
    },
    {
      "month": "Nov",
      "revenue": 1817
    },
    {
      "month": "Dec",
      "revenue": 9897
    }
  ]
},
{
  "id": 228,
  "name": "Floral Pure Cotton Bagru Saree",
  "price": 6999,
  "rating": 4.7,
  "reviews": 7000,
  "answers": 278,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Pink"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/228.1.jpg",
    "/detailphotos/228.2.jpg",
    "/detailphotos/228.3.jpg",
    "/detailphotos/228.4.jpg",
    "/detailphotos/228.5.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Pink base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Pink and White gabru saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6204
    },
    {
      "month": "Feb",
      "revenue": 6419
    },
    {
      "month": "Mar",
      "revenue": 4428
    },
    {
      "month": "Apr",
      "revenue": 5402
    },
    {
      "month": "May",
      "revenue": 4397
    },
    {
      "month": "Jun",
      "revenue": 7578
    },
    {
      "month": "Jul",
      "revenue": 9692
    },
    {
      "month": "Aug",
      "revenue": 7281
    },
    {
      "month": "Sep",
      "revenue": 7189
    },
    {
      "month": "Oct",
      "revenue": 2758
    },
    {
      "month": "Nov",
      "revenue": 9965
    },
    {
      "month": "Dec",
      "revenue": 4632
    }
  ]
},
{
  "id": 229,
  "name": "Floral Pure Cotton Block Print Saree",
  "price": 6999,
  "rating": 3.9,
  "reviews": 5750,
  "answers": 210,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Black"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/229.1.jpg",
    "/detailphotos/229.2.jpg",
    "/detailphotos/229.3.jpg",
    "/detailphotos/229.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Black base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Black and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8589
    },
    {
      "month": "Feb",
      "revenue": 2359
    },
    {
      "month": "Mar",
      "revenue": 4866
    },
    {
      "month": "Apr",
      "revenue": 3479
    },
    {
      "month": "May",
      "revenue": 9164
    },
    {
      "month": "Jun",
      "revenue": 7289
    },
    {
      "month": "Jul",
      "revenue": 2217
    },
    {
      "month": "Aug",
      "revenue": 3646
    },
    {
      "month": "Sep",
      "revenue": 8096
    },
    {
      "month": "Oct",
      "revenue": 4508
    },
    {
      "month": "Nov",
      "revenue": 8981
    },
    {
      "month": "Dec",
      "revenue": 9585
    }
  ]
},
{
  "id": 230,
  "name": "Floral Printed Pure Cotton Mulmul Bagru Saree",
  "price": 6999,
  "rating": 4.5,
  "reviews": 6200,
  "answers": 280,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "NavyBlue"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/230.1.jpg",
    "/detailphotos/230.2.jpg",
    "/detailphotos/230.3.jpg",
    "/detailphotos/230.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright NavyBlue base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "NavyBlue and White gabru saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1358
    },
    {
      "month": "Feb",
      "revenue": 7985
    },
    {
      "month": "Mar",
      "revenue": 3078
    },
    {
      "month": "Apr",
      "revenue": 8740
    },
    {
      "month": "May",
      "revenue": 5075
    },
    {
      "month": "Jun",
      "revenue": 9258
    },
    {
      "month": "Jul",
      "revenue": 7221
    },
    {
      "month": "Aug",
      "revenue": 8416
    },
    {
      "month": "Sep",
      "revenue": 4576
    },
    {
      "month": "Oct",
      "revenue": 2082
    },
    {
      "month": "Nov",
      "revenue": 5699
    },
    {
      "month": "Dec",
      "revenue": 7133
    }
  ]
},
{
  "id": 231,
  "name": "Floral Pure Cotton Block Print Saree",
  "price": 3999,
  "rating": 4.1,
  "reviews": 5800,
  "answers": 215,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Maroon"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/231.1.jpg",
    "/detailphotos/231.2.jpg",
    "/detailphotos/231.3.jpg",
    "/detailphotos/231.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Maroon base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Maroon and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8332
    },
    {
      "month": "Feb",
      "revenue": 5461
    },
    {
      "month": "Mar",
      "revenue": 2213
    },
    {
      "month": "Apr",
      "revenue": 8904
    },
    {
      "month": "May",
      "revenue": 5510
    },
    {
      "month": "Jun",
      "revenue": 2205
    },
    {
      "month": "Jul",
      "revenue": 8529
    },
    {
      "month": "Aug",
      "revenue": 7204
    },
    {
      "month": "Sep",
      "revenue": 7711
    },
    {
      "month": "Oct",
      "revenue": 1178
    },
    {
      "month": "Nov",
      "revenue": 4059
    },
    {
      "month": "Dec",
      "revenue": 7831
    }
  ]
},
{
  "id": 232,
  "name": "Striped Pure Cotton Block Print Saree",
  "price": 3999,
  "rating": 4.4,
  "reviews": 6700,
  "answers": 230,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/232.1.jpg",
    "/detailphotos/232.2.jpg",
    "/detailphotos/232.3.jpg",
    "/detailphotos/232.4.jpg",
    "/detailphotos/232.5.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Red base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Red and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6048
    },
    {
      "month": "Feb",
      "revenue": 6990
    },
    {
      "month": "Mar",
      "revenue": 7465
    },
    {
      "month": "Apr",
      "revenue": 7608
    },
    {
      "month": "May",
      "revenue": 6506
    },
    {
      "month": "Jun",
      "revenue": 2545
    },
    {
      "month": "Jul",
      "revenue": 1355
    },
    {
      "month": "Aug",
      "revenue": 2221
    },
    {
      "month": "Sep",
      "revenue": 8210
    },
    {
      "month": "Oct",
      "revenue": 6328
    },
    {
      "month": "Nov",
      "revenue": 1144
    },
    {
      "month": "Dec",
      "revenue": 6973
    }
  ]
},
{
  "id": 233,
  "name": "Pure Cotton Block Print Saree",
  "price": 6999,
  "rating": 4.3,
  "reviews": 6600,
  "answers": 295,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/233.1.jpg",
    "/detailphotos/233.2.jpg",
    "/detailphotos/233.3.jpg",
    "/detailphotos/233.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Red base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Red and White saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9304
    },
    {
      "month": "Feb",
      "revenue": 3359
    },
    {
      "month": "Mar",
      "revenue": 9674
    },
    {
      "month": "Apr",
      "revenue": 3683
    },
    {
      "month": "May",
      "revenue": 3208
    },
    {
      "month": "Jun",
      "revenue": 2840
    },
    {
      "month": "Jul",
      "revenue": 5781
    },
    {
      "month": "Aug",
      "revenue": 7772
    },
    {
      "month": "Sep",
      "revenue": 1530
    },
    {
      "month": "Oct",
      "revenue": 8628
    },
    {
      "month": "Nov",
      "revenue": 8760
    },
    {
      "month": "Dec",
      "revenue": 2632
    }
  ]
},
{
  "id": 234,
  "name": "Tie and Dye Pure Cotton Block Print Saree",
  "price": 3999,
  "rating": 3.9,
  "reviews": 5750,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Yellow",
    "Blue"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/234.1.jpg",
    "/detailphotos/234.2.jpg",
    "/detailphotos/234.3.jpg",
    "/detailphotos/234.4.jpg",
    "/detailphotos/234.5.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Yellow and Blue base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Yellow and Blue saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3558
    },
    {
      "month": "Feb",
      "revenue": 1313
    },
    {
      "month": "Mar",
      "revenue": 7005
    },
    {
      "month": "Apr",
      "revenue": 8188
    },
    {
      "month": "May",
      "revenue": 7931
    },
    {
      "month": "Jun",
      "revenue": 1167
    },
    {
      "month": "Jul",
      "revenue": 8934
    },
    {
      "month": "Aug",
      "revenue": 7824
    },
    {
      "month": "Sep",
      "revenue": 3001
    },
    {
      "month": "Oct",
      "revenue": 2104
    },
    {
      "month": "Nov",
      "revenue": 2162
    },
    {
      "month": "Dec",
      "revenue": 7288
    }
  ]
},
{
  "id": 235,
  "name": "Floral Pure Cotton Bagru Saree",
  "price": 6999,
  "rating": 4.1,
  "reviews": 5900,
  "answers": 250,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Green"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/235.1.jpg",
    "/detailphotos/235.2.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Green base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Green and Yellow Gabru saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9589
    },
    {
      "month": "Feb",
      "revenue": 7265
    },
    {
      "month": "Mar",
      "revenue": 1282
    },
    {
      "month": "Apr",
      "revenue": 7774
    },
    {
      "month": "May",
      "revenue": 2670
    },
    {
      "month": "Jun",
      "revenue": 5651
    },
    {
      "month": "Jul",
      "revenue": 3633
    },
    {
      "month": "Aug",
      "revenue": 8696
    },
    {
      "month": "Sep",
      "revenue": 6062
    },
    {
      "month": "Oct",
      "revenue": 4163
    },
    {
      "month": "Nov",
      "revenue": 2928
    },
    {
      "month": "Dec",
      "revenue": 8195
    }
  ]
},
{
  "id": 236,
  "name": "Floral Pure Cotton Bagru Saree",
  "price": 6999,
  "rating": 4.2,
  "reviews": 6050,
  "answers": 265,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Orange"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/236.1.jpg",
    "/detailphotos/236.2.jpg",
    "/detailphotos/236.3.jpg",
    "/detailphotos/236.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright Orange base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Orange and Blue saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7166
    },
    {
      "month": "Feb",
      "revenue": 8466
    },
    {
      "month": "Mar",
      "revenue": 5455
    },
    {
      "month": "Apr",
      "revenue": 9407
    },
    {
      "month": "May",
      "revenue": 3921
    },
    {
      "month": "Jun",
      "revenue": 9432
    },
    {
      "month": "Jul",
      "revenue": 6568
    },
    {
      "month": "Aug",
      "revenue": 2106
    },
    {
      "month": "Sep",
      "revenue": 6359
    },
    {
      "month": "Oct",
      "revenue": 2482
    },
    {
      "month": "Nov",
      "revenue": 6592
    },
    {
      "month": "Dec",
      "revenue": 6891
    }
  ]
},
{
  "id": 237,
  "name": "Floral Pure Cotton Block Print Saree",
  "price": 6999,
  "rating": 4.2,
  "reviews": 6100,
  "answers": 225,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "White"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "traditional-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/237.1.jpg",
    "/detailphotos/237.2.jpg",
    "/detailphotos/237.3.jpg",
    "/detailphotos/237.4.jpg"
  ],
  "features": [
    "Solid saree with embellished border",
    "traditional Saree with a bright White base",
    "Pure Cotton Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 90 CM"
  ],
  "description": "Black and White bagru saree Solid saree with embellished border Has sequinned detail The model is wearing a blouse from our stylist's collection, the saree does not come with a blouse piece.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9884
    },
    {
      "month": "Feb",
      "revenue": 9589
    },
    {
      "month": "Mar",
      "revenue": 2206
    },
    {
      "month": "Apr",
      "revenue": 7339
    },
    {
      "month": "May",
      "revenue": 9419
    },
    {
      "month": "Jun",
      "revenue": 2738
    },
    {
      "month": "Jul",
      "revenue": 7574
    },
    {
      "month": "Aug",
      "revenue": 4106
    },
    {
      "month": "Sep",
      "revenue": 6444
    },
    {
      "month": "Oct",
      "revenue": 6147
    },
    {
      "month": "Nov",
      "revenue": 8406
    },
    {
      "month": "Dec",
      "revenue": 7890
    }
  ]
},
{
  "id": 238,
  "name": "Floral Pure Cotton Block Print Saree",
  "price": 9744,
  "rating": 4.2,
  "reviews": 6150,
  "answers": 265,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Yellow"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/238.1.jpg",
    "/detailphotos/238.2.jpg",
    "/detailphotos/238.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Yellow base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Yellow saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4816
    },
    {
      "month": "Feb",
      "revenue": 8733
    },
    {
      "month": "Mar",
      "revenue": 6708
    },
    {
      "month": "Apr",
      "revenue": 8220
    },
    {
      "month": "May",
      "revenue": 2985
    },
    {
      "month": "Jun",
      "revenue": 4077
    },
    {
      "month": "Jul",
      "revenue": 9135
    },
    {
      "month": "Aug",
      "revenue": 3889
    },
    {
      "month": "Sep",
      "revenue": 5758
    },
    {
      "month": "Oct",
      "revenue": 1464
    },
    {
      "month": "Nov",
      "revenue": 9353
    },
    {
      "month": "Dec",
      "revenue": 5476
    }
  ]
},
{
  "id": 239,
  "name": "Red & Gold-Toned Ethnic Motifs Embroidered Organza Designer Saree",
  "price": 9744,
  "rating": 4.5,
  "reviews": 6450,
  "answers": 278,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/239.1.jpg",
    "/detailphotos/239.2.jpg",
    "/detailphotos/239.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Gold-Ton Saree with a bright Red base",
    "Pure Brocade Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Red and gold-toned saree Ethnic motifs embroidered saree with woven design border border Has embroidered detail.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6547
    },
    {
      "month": "Feb",
      "revenue": 7758
    },
    {
      "month": "Mar",
      "revenue": 9939
    },
    {
      "month": "Apr",
      "revenue": 4847
    },
    {
      "month": "May",
      "revenue": 4819
    },
    {
      "month": "Jun",
      "revenue": 4991
    },
    {
      "month": "Jul",
      "revenue": 3814
    },
    {
      "month": "Aug",
      "revenue": 6588
    },
    {
      "month": "Sep",
      "revenue": 9702
    },
    {
      "month": "Oct",
      "revenue": 5728
    },
    {
      "month": "Nov",
      "revenue": 4338
    },
    {
      "month": "Dec",
      "revenue": 4648
    }
  ]
},
{
  "id": 240,
  "name": "Ethnic Motifs Embroidered Organza Designer Saree",
  "price": 9744,
  "rating": 4,
  "reviews": 6720,
  "answers": 230,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/240.1.jpg",
    "/detailphotos/240.2.jpg",
    "/detailphotos/240.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Red base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Red saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6568
    },
    {
      "month": "Feb",
      "revenue": 2238
    },
    {
      "month": "Mar",
      "revenue": 4568
    },
    {
      "month": "Apr",
      "revenue": 1110
    },
    {
      "month": "May",
      "revenue": 8664
    },
    {
      "month": "Jun",
      "revenue": 2497
    },
    {
      "month": "Jul",
      "revenue": 9879
    },
    {
      "month": "Aug",
      "revenue": 4541
    },
    {
      "month": "Sep",
      "revenue": 4162
    },
    {
      "month": "Oct",
      "revenue": 6557
    },
    {
      "month": "Nov",
      "revenue": 7922
    },
    {
      "month": "Dec",
      "revenue": 6107
    }
  ]
},
{
  "id": 241,
  "name": "Teal & Gold-Toned Embellished Designer Saree",
  "price": 3647,
  "rating": 3.9,
  "reviews": 5980,
  "answers": 301,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Teal"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/241.1.jpg",
    "/detailphotos/241.2.jpg",
    "/detailphotos/241.3.jpg",
    "/detailphotos/241.4.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Teal base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Teal saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8217
    },
    {
      "month": "Feb",
      "revenue": 8942
    },
    {
      "month": "Mar",
      "revenue": 6441
    },
    {
      "month": "Apr",
      "revenue": 1015
    },
    {
      "month": "May",
      "revenue": 1499
    },
    {
      "month": "Jun",
      "revenue": 6760
    },
    {
      "month": "Jul",
      "revenue": 8899
    },
    {
      "month": "Aug",
      "revenue": 3210
    },
    {
      "month": "Sep",
      "revenue": 4202
    },
    {
      "month": "Oct",
      "revenue": 6760
    },
    {
      "month": "Nov",
      "revenue": 2827
    },
    {
      "month": "Dec",
      "revenue": 4691
    }
  ]
},
{
  "id": 242,
  "name": "Striped Zari Silk Blend Saree",
  "price": 2694,
  "rating": 4.3,
  "reviews": 6700,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/242.1.jpg",
    "/detailphotos/242.2.jpg",
    "/detailphotos/242.3.jpg",
    "/detailphotos/242.4.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Red base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Red saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8574
    },
    {
      "month": "Feb",
      "revenue": 3193
    },
    {
      "month": "Mar",
      "revenue": 1847
    },
    {
      "month": "Apr",
      "revenue": 1165
    },
    {
      "month": "May",
      "revenue": 4241
    },
    {
      "month": "Jun",
      "revenue": 3005
    },
    {
      "month": "Jul",
      "revenue": 4504
    },
    {
      "month": "Aug",
      "revenue": 9368
    },
    {
      "month": "Sep",
      "revenue": 3336
    },
    {
      "month": "Oct",
      "revenue": 7716
    },
    {
      "month": "Nov",
      "revenue": 6738
    },
    {
      "month": "Dec",
      "revenue": 9491
    }
  ]
},
{
  "id": 243,
  "name": "Floral Beads and Stones Silk Blend Saree",
  "price": 5777,
  "rating": 4.1,
  "reviews": 6800,
  "answers": 280,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/243.1.jpg",
    "/detailphotos/243.2.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Red base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Red saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8924
    },
    {
      "month": "Feb",
      "revenue": 3958
    },
    {
      "month": "Mar",
      "revenue": 7445
    },
    {
      "month": "Apr",
      "revenue": 1462
    },
    {
      "month": "May",
      "revenue": 3210
    },
    {
      "month": "Jun",
      "revenue": 7899
    },
    {
      "month": "Jul",
      "revenue": 3652
    },
    {
      "month": "Aug",
      "revenue": 6153
    },
    {
      "month": "Sep",
      "revenue": 8792
    },
    {
      "month": "Oct",
      "revenue": 1688
    },
    {
      "month": "Nov",
      "revenue": 5006
    },
    {
      "month": "Dec",
      "revenue": 6666
    }
  ]
},
{
  "id": 244,
  "name": "Blue Embellished Silk Blend Fusion Saree",
  "price": 9744,
  "rating": 4.2,
  "reviews": 7000,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Blue"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/244.1.jpg",
    "/detailphotos/244.2.jpg",
    "/detailphotos/244.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Blue base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Blue saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6721
    },
    {
      "month": "Feb",
      "revenue": 3040
    },
    {
      "month": "Mar",
      "revenue": 2102
    },
    {
      "month": "Apr",
      "revenue": 3912
    },
    {
      "month": "May",
      "revenue": 6408
    },
    {
      "month": "Jun",
      "revenue": 3512
    },
    {
      "month": "Jul",
      "revenue": 5564
    },
    {
      "month": "Aug",
      "revenue": 7800
    },
    {
      "month": "Sep",
      "revenue": 6190
    },
    {
      "month": "Oct",
      "revenue": 9894
    },
    {
      "month": "Nov",
      "revenue": 3133
    },
    {
      "month": "Dec",
      "revenue": 3578
    }
  ]
},
{
  "id": 245,
  "name": "Floral Zari Poly Chiffon Saree",
  "price": 5250,
  "rating": 4,
  "reviews": 6800,
  "answers": 270,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Purple"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/245.1.jpg",
    "/detailphotos/245.2.jpg",
    "/detailphotos/245.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Purple base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Purple saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7822
    },
    {
      "month": "Feb",
      "revenue": 4196
    },
    {
      "month": "Mar",
      "revenue": 5146
    },
    {
      "month": "Apr",
      "revenue": 9620
    },
    {
      "month": "May",
      "revenue": 8632
    },
    {
      "month": "Jun",
      "revenue": 3412
    },
    {
      "month": "Jul",
      "revenue": 6539
    },
    {
      "month": "Aug",
      "revenue": 4354
    },
    {
      "month": "Sep",
      "revenue": 3086
    },
    {
      "month": "Oct",
      "revenue": 3490
    },
    {
      "month": "Nov",
      "revenue": 8776
    },
    {
      "month": "Dec",
      "revenue": 3514
    }
  ]
},
{
  "id": 246,
  "name": "Ethnic Motifs Gotta Patti Silk Blend Designer Saree",
  "price": 6744,
  "rating": 4.5,
  "reviews": 7200,
  "answers": 310,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Brown"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/246.1.jpg",
    "/detailphotos/246.2.jpg",
    "/detailphotos/246.3.jpg",
    "/detailphotos/246.4.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Silk Blend Saree with a bright Brown base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Brown saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1071
    },
    {
      "month": "Feb",
      "revenue": 1411
    },
    {
      "month": "Mar",
      "revenue": 9552
    },
    {
      "month": "Apr",
      "revenue": 3425
    },
    {
      "month": "May",
      "revenue": 3131
    },
    {
      "month": "Jun",
      "revenue": 7495
    },
    {
      "month": "Jul",
      "revenue": 3684
    },
    {
      "month": "Aug",
      "revenue": 3032
    },
    {
      "month": "Sep",
      "revenue": 8260
    },
    {
      "month": "Oct",
      "revenue": 4067
    },
    {
      "month": "Nov",
      "revenue": 5343
    },
    {
      "month": "Dec",
      "revenue": 9654
    }
  ]
},
{
  "id": 247,
  "name": "Ethnic Motifs Gotta Patti Silk Blend Saree",
  "price": 5777,
  "rating": 4.7,
  "reviews": 7600,
  "answers": 320,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Pink"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/247.1.jpg",
    "/detailphotos/247.2.jpg",
    "/detailphotos/247.3.jpg",
    "/detailphotos/247.4.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Pink base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Pink saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8032
    },
    {
      "month": "Feb",
      "revenue": 2435
    },
    {
      "month": "Mar",
      "revenue": 2794
    },
    {
      "month": "Apr",
      "revenue": 6259
    },
    {
      "month": "May",
      "revenue": 4128
    },
    {
      "month": "Jun",
      "revenue": 3015
    },
    {
      "month": "Jul",
      "revenue": 7274
    },
    {
      "month": "Aug",
      "revenue": 2036
    },
    {
      "month": "Sep",
      "revenue": 9688
    },
    {
      "month": "Oct",
      "revenue": 2441
    },
    {
      "month": "Nov",
      "revenue": 3114
    },
    {
      "month": "Dec",
      "revenue": 2124
    }
  ]
},
{
  "id": 248,
  "name": "Floral Zari Saree",
  "price": 3124,
  "rating": 4.4,
  "reviews": 6900,
  "answers": 305,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Green"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/248.1.jpg",
    "/detailphotos/248.2.jpg",
    "/detailphotos/248.3.jpg",
    "/detailphotos/248.4.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Green base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Green saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8604
    },
    {
      "month": "Feb",
      "revenue": 5336
    },
    {
      "month": "Mar",
      "revenue": 3515
    },
    {
      "month": "Apr",
      "revenue": 1728
    },
    {
      "month": "May",
      "revenue": 7827
    },
    {
      "month": "Jun",
      "revenue": 9012
    },
    {
      "month": "Jul",
      "revenue": 1639
    },
    {
      "month": "Aug",
      "revenue": 3889
    },
    {
      "month": "Sep",
      "revenue": 4805
    },
    {
      "month": "Oct",
      "revenue": 4105
    },
    {
      "month": "Nov",
      "revenue": 3792
    },
    {
      "month": "Dec",
      "revenue": 7242
    }
  ]
},
{
  "id": 249,
  "name": "Floral Embroidered Zari Saree",
  "price": 5250,
  "rating": 4.2,
  "reviews": 7000,
  "answers": 275,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Pink"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/249.1.jpg",
    "/detailphotos/249.2.jpg",
    "/detailphotos/249.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Pink base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Pink saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4035
    },
    {
      "month": "Feb",
      "revenue": 1819
    },
    {
      "month": "Mar",
      "revenue": 9461
    },
    {
      "month": "Apr",
      "revenue": 3868
    },
    {
      "month": "May",
      "revenue": 1941
    },
    {
      "month": "Jun",
      "revenue": 3357
    },
    {
      "month": "Jul",
      "revenue": 5769
    },
    {
      "month": "Aug",
      "revenue": 9020
    },
    {
      "month": "Sep",
      "revenue": 2828
    },
    {
      "month": "Oct",
      "revenue": 5118
    },
    {
      "month": "Nov",
      "revenue": 2633
    },
    {
      "month": "Dec",
      "revenue": 8979
    }
  ]
},
{
  "id": 250,
  "name": "Maroon Solid Saree",
  "price": 1790,
  "rating": 4.4,
  "reviews": 7200,
  "answers": 300,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Maroon"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/250.1.jpg",
    "/detailphotos/250.2.jpg",
    "/detailphotos/250.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with Plain design border",
    "Indian Saree with a bright Maroon base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Maroon saree Floral embroidered saree with Plain design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9515
    },
    {
      "month": "Feb",
      "revenue": 5561
    },
    {
      "month": "Mar",
      "revenue": 3127
    },
    {
      "month": "Apr",
      "revenue": 8213
    },
    {
      "month": "May",
      "revenue": 6907
    },
    {
      "month": "Jun",
      "revenue": 1127
    },
    {
      "month": "Jul",
      "revenue": 3998
    },
    {
      "month": "Aug",
      "revenue": 7814
    },
    {
      "month": "Sep",
      "revenue": 3075
    },
    {
      "month": "Oct",
      "revenue": 5489
    },
    {
      "month": "Nov",
      "revenue": 4994
    },
    {
      "month": "Dec",
      "revenue": 1057
    }
  ]
},
{
  "id": 251,
  "name": "Embellished Tikli Sequinned Ruffled Saree",
  "price": 9744,
  "rating": 4.1,
  "reviews": 6800,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "SeaGreen"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/251.1.jpg",
    "/detailphotos/251.2.jpg",
    "/detailphotos/251.3.jpg",
    "/detailphotos/251.4.jpg",
    "/detailphotos/251.5.jpg",
    "/detailphotos/251.6.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright SeaGreen base",
    "Pure Lycra Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "SeaGreen saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3266
    },
    {
      "month": "Feb",
      "revenue": 1211
    },
    {
      "month": "Mar",
      "revenue": 3120
    },
    {
      "month": "Apr",
      "revenue": 2284
    },
    {
      "month": "May",
      "revenue": 4166
    },
    {
      "month": "Jun",
      "revenue": 7597
    },
    {
      "month": "Jul",
      "revenue": 8795
    },
    {
      "month": "Aug",
      "revenue": 5686
    },
    {
      "month": "Sep",
      "revenue": 6568
    },
    {
      "month": "Oct",
      "revenue": 7981
    },
    {
      "month": "Nov",
      "revenue": 3961
    },
    {
      "month": "Dec",
      "revenue": 7943
    }
  ]
},
{
  "id": 252,
  "name": "Floral Embroidered Stones-Studded Organza Saree",
  "price": 5250,
  "rating": 4.2,
  "reviews": 7000,
  "answers": 275,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Yellow"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/252.1.jpg",
    "/detailphotos/252.2.jpg",
    "/detailphotos/252.3.jpg",
    "/detailphotos/252.4.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Yellow base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Yellow saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1816
    },
    {
      "month": "Feb",
      "revenue": 6509
    },
    {
      "month": "Mar",
      "revenue": 9674
    },
    {
      "month": "Apr",
      "revenue": 3636
    },
    {
      "month": "May",
      "revenue": 6745
    },
    {
      "month": "Jun",
      "revenue": 3080
    },
    {
      "month": "Jul",
      "revenue": 3620
    },
    {
      "month": "Aug",
      "revenue": 7126
    },
    {
      "month": "Sep",
      "revenue": 4440
    },
    {
      "month": "Oct",
      "revenue": 4702
    },
    {
      "month": "Nov",
      "revenue": 4966
    },
    {
      "month": "Dec",
      "revenue": 3011
    }
  ]
},
{
  "id": 253,
  "name": "Red & Gold-Toned Floral Embroidered Organza Designer Saree",
  "price": 9744,
  "rating": 4.4,
  "reviews": 7200,
  "answers": 300,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Red"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/253.1.jpg",
    "/detailphotos/253.2.jpg",
    "/detailphotos/253.3.jpg",
    "/detailphotos/253.4.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Gold-Toned Saree with a bright Red base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Red saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9710
    },
    {
      "month": "Feb",
      "revenue": 9695
    },
    {
      "month": "Mar",
      "revenue": 4041
    },
    {
      "month": "Apr",
      "revenue": 7055
    },
    {
      "month": "May",
      "revenue": 5613
    },
    {
      "month": "Jun",
      "revenue": 8673
    },
    {
      "month": "Jul",
      "revenue": 2495
    },
    {
      "month": "Aug",
      "revenue": 8216
    },
    {
      "month": "Sep",
      "revenue": 7210
    },
    {
      "month": "Oct",
      "revenue": 7768
    },
    {
      "month": "Nov",
      "revenue": 5416
    },
    {
      "month": "Dec",
      "revenue": 3902
    }
  ]
},
{
  "id": 254,
  "name": "Green & Gold-Toned Floral Embroidered Organza Designer Saree",
  "price": 9744,
  "rating": 4,
  "reviews": 6650,
  "answers": 280,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Green"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/254.1.jpg",
    "/detailphotos/254.2.jpg",
    "/detailphotos/254.3.jpg",
    "/detailphotos/254.4.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Gold-Toned Saree with a bright Green base",
    "Pure Organza Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Green saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7671
    },
    {
      "month": "Feb",
      "revenue": 6349
    },
    {
      "month": "Mar",
      "revenue": 5797
    },
    {
      "month": "Apr",
      "revenue": 5848
    },
    {
      "month": "May",
      "revenue": 2415
    },
    {
      "month": "Jun",
      "revenue": 9920
    },
    {
      "month": "Jul",
      "revenue": 3249
    },
    {
      "month": "Aug",
      "revenue": 5819
    },
    {
      "month": "Sep",
      "revenue": 5945
    },
    {
      "month": "Oct",
      "revenue": 9162
    },
    {
      "month": "Nov",
      "revenue": 6992
    },
    {
      "month": "Dec",
      "revenue": 1580
    }
  ]
},
{
  "id": 255,
  "name": "Green & Gold-Toned Floral Embroidered Organza Designer Saree",
  "price": 9744,
  "rating": 4.3,
  "reviews": 6900,
  "answers": 315,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Green"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/255.1.jpg",
    "/detailphotos/255.2.jpg",
    "/detailphotos/255.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Gold-Toned Saree with a bright Green base",
    "Pure Satin Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Green saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2832
    },
    {
      "month": "Feb",
      "revenue": 1284
    },
    {
      "month": "Mar",
      "revenue": 2728
    },
    {
      "month": "Apr",
      "revenue": 1102
    },
    {
      "month": "May",
      "revenue": 1024
    },
    {
      "month": "Jun",
      "revenue": 3214
    },
    {
      "month": "Jul",
      "revenue": 8469
    },
    {
      "month": "Aug",
      "revenue": 2340
    },
    {
      "month": "Sep",
      "revenue": 8018
    },
    {
      "month": "Oct",
      "revenue": 2381
    },
    {
      "month": "Nov",
      "revenue": 6795
    },
    {
      "month": "Dec",
      "revenue": 2812
    }
  ]
},
{
  "id": 256,
  "name": "Chiffon Georgette Printed Border Saree",
  "price": 9744,
  "rating": 4.5,
  "reviews": 7300,
  "answers": 320,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Blue"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/256.1.jpg",
    "/detailphotos/256.2.jpg",
    "/detailphotos/256.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Blue base",
    "Pure Poly Georgette Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Blue saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8612
    },
    {
      "month": "Feb",
      "revenue": 1717
    },
    {
      "month": "Mar",
      "revenue": 9411
    },
    {
      "month": "Apr",
      "revenue": 7540
    },
    {
      "month": "May",
      "revenue": 6848
    },
    {
      "month": "Jun",
      "revenue": 3987
    },
    {
      "month": "Jul",
      "revenue": 4882
    },
    {
      "month": "Aug",
      "revenue": 6957
    },
    {
      "month": "Sep",
      "revenue": 4337
    },
    {
      "month": "Oct",
      "revenue": 5530
    },
    {
      "month": "Nov",
      "revenue": 4617
    },
    {
      "month": "Dec",
      "revenue": 3073
    }
  ]
},
{
  "id": 257,
  "name": "Gotta Patti Satin Designer Saree",
  "price": 9744,
  "rating": 4.6,
  "reviews": 7400,
  "answers": 330,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Maroon"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/257.1.jpg",
    "/detailphotos/257.2.jpg",
    "/detailphotos/257.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Gold-Toned Saree with a bright Maroon base",
    "Pure Satin Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Maroon saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7273
    },
    {
      "month": "Feb",
      "revenue": 4562
    },
    {
      "month": "Mar",
      "revenue": 4024
    },
    {
      "month": "Apr",
      "revenue": 9416
    },
    {
      "month": "May",
      "revenue": 7514
    },
    {
      "month": "Jun",
      "revenue": 8784
    },
    {
      "month": "Jul",
      "revenue": 4906
    },
    {
      "month": "Aug",
      "revenue": 5980
    },
    {
      "month": "Sep",
      "revenue": 1646
    },
    {
      "month": "Oct",
      "revenue": 7357
    },
    {
      "month": "Nov",
      "revenue": 7544
    },
    {
      "month": "Dec",
      "revenue": 8239
    }
  ]
},
{
  "id": 258,
  "name": "Printed Silk Blend Saree",
  "price": 9744,
  "rating": 4.5,
  "reviews": 7050,
  "answers": 320,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Green"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "indian-sarees",
  "model": "Not specified",
  "images": [
    "/detailphotos/258.1.jpg",
    "/detailphotos/258.2.jpg",
    "/detailphotos/258.3.jpg"
  ],
  "features": [
    "Floral embroidered saree with woven design border",
    "Indian Saree with a bright Green base",
    "Pure Silk Blend Fabric",
    "For Festive Occasion",
    "Saree length 5.5 Meter",
    "Blouse length 80 CM"
  ],
  "description": "Green saree Floral embroidered saree with woven design border Has beads and stones detail",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1521
    },
    {
      "month": "Feb",
      "revenue": 4900
    },
    {
      "month": "Mar",
      "revenue": 4358
    },
    {
      "month": "Apr",
      "revenue": 1856
    },
    {
      "month": "May",
      "revenue": 1432
    },
    {
      "month": "Jun",
      "revenue": 4904
    },
    {
      "month": "Jul",
      "revenue": 4396
    },
    {
      "month": "Aug",
      "revenue": 3668
    },
    {
      "month": "Sep",
      "revenue": 4641
    },
    {
      "month": "Oct",
      "revenue": 7625
    },
    {
      "month": "Nov",
      "revenue": 4210
    },
    {
      "month": "Dec",
      "revenue": 7066
    }
  ]
},
{
  "id": 259,
  "name": "Women Green Premium Casual Shirt",
  "price": 2349,
  "rating": 4.2,
  "reviews": 6150,
  "answers": 259,
  "inStock": true,
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
  "description": "Green solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
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
  "id": 260,
  "name": "Women Premium Colourblocked Denim Casual Shirt",
  "price": 2349,
  "rating": 4.2,
  "reviews": 6150,
  "answers": 259,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Blue"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/260.1.jpg",
    "/detailphotos/260.2.jpg",
    "/detailphotos/260.3.jpg",
    "/detailphotos/260.4.jpg",
    "/detailphotos/260.5.jpg",
    "/detailphotos/260.6.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Cotton Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Blue colourblocked opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8166
    },
    {
      "month": "Feb",
      "revenue": 8870
    },
    {
      "month": "Mar",
      "revenue": 6095
    },
    {
      "month": "Apr",
      "revenue": 1877
    },
    {
      "month": "May",
      "revenue": 3989
    },
    {
      "month": "Jun",
      "revenue": 2034
    },
    {
      "month": "Jul",
      "revenue": 9613
    },
    {
      "month": "Aug",
      "revenue": 1782
    },
    {
      "month": "Sep",
      "revenue": 2720
    },
    {
      "month": "Oct",
      "revenue": 6451
    },
    {
      "month": "Nov",
      "revenue": 3113
    },
    {
      "month": "Dec",
      "revenue": 3057
    }
  ]
},
{
  "id": 261,
  "name": "Women Maroon Premium Casual Shirt",
  "price": 2349,
  "rating": 4.2,
  "reviews": 6150,
  "answers": 259,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Maroon"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/261.1.jpg",
    "/detailphotos/261.2.jpg",
    "/detailphotos/261.3.jpg",
    "/detailphotos/261.4.jpg",
    "/detailphotos/261.5.jpg",
    "/detailphotos/261.6.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Maroon  solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7070
    },
    {
      "month": "Feb",
      "revenue": 4077
    },
    {
      "month": "Mar",
      "revenue": 3656
    },
    {
      "month": "Apr",
      "revenue": 5214
    },
    {
      "month": "May",
      "revenue": 8403
    },
    {
      "month": "Jun",
      "revenue": 9343
    },
    {
      "month": "Jul",
      "revenue": 4999
    },
    {
      "month": "Aug",
      "revenue": 4364
    },
    {
      "month": "Sep",
      "revenue": 5726
    },
    {
      "month": "Oct",
      "revenue": 5947
    },
    {
      "month": "Nov",
      "revenue": 9310
    },
    {
      "month": "Dec",
      "revenue": 6908
    }
  ]
},
{
  "id": 262,
  "name": "Women Premium Colourblocked Denim Casual Shirt",
  "price": 2349,
  "rating": 4.2,
  "reviews": 6150,
  "answers": 259,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Blue"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/262.1.jpg",
    "/detailphotos/262.2.jpg",
    "/detailphotos/262.3.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Blue solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7539
    },
    {
      "month": "Feb",
      "revenue": 5788
    },
    {
      "month": "Mar",
      "revenue": 7995
    },
    {
      "month": "Apr",
      "revenue": 9771
    },
    {
      "month": "May",
      "revenue": 1374
    },
    {
      "month": "Jun",
      "revenue": 2093
    },
    {
      "month": "Jul",
      "revenue": 9881
    },
    {
      "month": "Aug",
      "revenue": 1566
    },
    {
      "month": "Sep",
      "revenue": 8524
    },
    {
      "month": "Oct",
      "revenue": 4124
    },
    {
      "month": "Nov",
      "revenue": 9526
    },
    {
      "month": "Dec",
      "revenue": 4739
    }
  ]
},
{
  "id": 263,
  "name": "Premium Floral Printed Cutaway Collar Oversized Casual Shirt",
  "price": 2349,
  "rating": 4.3,
  "reviews": 6700,
  "answers": 300,
  "inStock": true,
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
    "XXXL"
  ],
  "images": [
    "/detailphotos/263.1.jpg",
    "/detailphotos/263.2.jpg",
    "/detailphotos/263.3.jpg",
    "/detailphotos/263.4.jpg"
  ],
  "features": [
    "solid opaque Gold-tone Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Green solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6738
    },
    {
      "month": "Feb",
      "revenue": 3910
    },
    {
      "month": "Mar",
      "revenue": 3441
    },
    {
      "month": "Apr",
      "revenue": 5130
    },
    {
      "month": "May",
      "revenue": 1218
    },
    {
      "month": "Jun",
      "revenue": 7798
    },
    {
      "month": "Jul",
      "revenue": 5999
    },
    {
      "month": "Aug",
      "revenue": 4142
    },
    {
      "month": "Sep",
      "revenue": 6425
    },
    {
      "month": "Oct",
      "revenue": 7892
    },
    {
      "month": "Nov",
      "revenue": 5331
    },
    {
      "month": "Dec",
      "revenue": 7271
    }
  ]
},
{
  "id": 264,
  "name": "Premium Spread Collar Printed Relaxed Fit Cotton Casual Shirt",
  "price": 2349,
  "rating": 4.1,
  "reviews": 7150,
  "answers": 310,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Pink"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/264.1.jpg",
    "/detailphotos/264.2.jpg",
    "/detailphotos/264.3.jpg",
    "/detailphotos/264.4.jpg",
    "/detailphotos/264.5.jpg",
    "/detailphotos/264.6.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Pink solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2570
    },
    {
      "month": "Feb",
      "revenue": 7209
    },
    {
      "month": "Mar",
      "revenue": 8884
    },
    {
      "month": "Apr",
      "revenue": 8727
    },
    {
      "month": "May",
      "revenue": 3312
    },
    {
      "month": "Jun",
      "revenue": 5506
    },
    {
      "month": "Jul",
      "revenue": 2713
    },
    {
      "month": "Aug",
      "revenue": 4247
    },
    {
      "month": "Sep",
      "revenue": 1230
    },
    {
      "month": "Oct",
      "revenue": 6577
    },
    {
      "month": "Nov",
      "revenue": 2390
    },
    {
      "month": "Dec",
      "revenue": 5531
    }
  ]
},
{
  "id": 265,
  "name": "Women Premium Slim Fit Opaque Casual Shirt",
  "price": 2349,
  "rating": 4.1,
  "reviews": 6250,
  "answers": 275,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Black"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/265.1.jpg",
    "/detailphotos/265.2.jpg",
    "/detailphotos/265.3.jpg",
    "/detailphotos/265.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Black solid opaque Casual shirt ,has a spread collar, concealed button placket, na pocket, long regular sleeves, curved hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8867
    },
    {
      "month": "Feb",
      "revenue": 3434
    },
    {
      "month": "Mar",
      "revenue": 7652
    },
    {
      "month": "Apr",
      "revenue": 1083
    },
    {
      "month": "May",
      "revenue": 1676
    },
    {
      "month": "Jun",
      "revenue": 5026
    },
    {
      "month": "Jul",
      "revenue": 6765
    },
    {
      "month": "Aug",
      "revenue": 8801
    },
    {
      "month": "Sep",
      "revenue": 9054
    },
    {
      "month": "Oct",
      "revenue": 7072
    },
    {
      "month": "Nov",
      "revenue": 8023
    },
    {
      "month": "Dec",
      "revenue": 9584
    }
  ]
},
{
  "id": 266,
  "name": "Women Mustard Premium Puff Sleeves Casual Shirt",
  "price": 2349,
  "rating": 4,
  "reviews": 6400,
  "answers": 284,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Mustard"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/266.1.jpg",
    "/detailphotos/266.2.jpg",
    "/detailphotos/266.3.jpg",
    "/detailphotos/266.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Mustard solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4860
    },
    {
      "month": "Feb",
      "revenue": 1262
    },
    {
      "month": "Mar",
      "revenue": 6921
    },
    {
      "month": "Apr",
      "revenue": 3175
    },
    {
      "month": "May",
      "revenue": 2146
    },
    {
      "month": "Jun",
      "revenue": 9894
    },
    {
      "month": "Jul",
      "revenue": 2125
    },
    {
      "month": "Aug",
      "revenue": 5967
    },
    {
      "month": "Sep",
      "revenue": 1741
    },
    {
      "month": "Oct",
      "revenue": 5154
    },
    {
      "month": "Nov",
      "revenue": 5616
    },
    {
      "month": "Dec",
      "revenue": 8343
    }
  ]
},
{
  "id": 267,
  "name": "Premium Oversized Spread Collar Satin Party Shirt",
  "price": 2349,
  "rating": 3.9,
  "reviews": 6750,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Purple"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/267.1.jpg",
    "/detailphotos/267.2.jpg",
    "/detailphotos/267.3.jpg",
    "/detailphotos/267.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Purple solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9542
    },
    {
      "month": "Feb",
      "revenue": 4133
    },
    {
      "month": "Mar",
      "revenue": 3298
    },
    {
      "month": "Apr",
      "revenue": 7971
    },
    {
      "month": "May",
      "revenue": 1014
    },
    {
      "month": "Jun",
      "revenue": 9892
    },
    {
      "month": "Jul",
      "revenue": 9261
    },
    {
      "month": "Aug",
      "revenue": 8959
    },
    {
      "month": "Sep",
      "revenue": 8290
    },
    {
      "month": "Oct",
      "revenue": 3207
    },
    {
      "month": "Nov",
      "revenue": 6655
    },
    {
      "month": "Dec",
      "revenue": 7086
    }
  ]
},
{
  "id": 268,
  "name": "Premium Slim Fit Striped Casual Shirt",
  "price": 2349,
  "rating": 4.3,
  "reviews": 7000,
  "answers": 310,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Lavender"
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
    "XXXL"
  ],
  "images": [
    "/detailphotos/268.1.jpg",
    "/detailphotos/268.2.jpg",
    "/detailphotos/268.3.jpg",
    "/detailphotos/268.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Lavender vertical stripes striped opaque Casual shirt ,has a spread collar, button placket, long regular sleeves, curved hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2014
    },
    {
      "month": "Feb",
      "revenue": 4299
    },
    {
      "month": "Mar",
      "revenue": 5281
    },
    {
      "month": "Apr",
      "revenue": 1505
    },
    {
      "month": "May",
      "revenue": 7514
    },
    {
      "month": "Jun",
      "revenue": 3972
    },
    {
      "month": "Jul",
      "revenue": 1112
    },
    {
      "month": "Aug",
      "revenue": 9574
    },
    {
      "month": "Sep",
      "revenue": 9205
    },
    {
      "month": "Oct",
      "revenue": 8832
    },
    {
      "month": "Nov",
      "revenue": 8653
    },
    {
      "month": "Dec",
      "revenue": 8130
    }
  ]
},
{
  "id": 269,
  "name": "Blue & White Premium Opaque Striped Casual Shirt",
  "price": 2349,
  "rating": 4.4,
  "reviews": 7200,
  "answers": 325,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Blue",
    "White"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/269.1.jpg",
    "/detailphotos/269.2.jpg",
    "/detailphotos/269.3.jpg",
    "/detailphotos/269.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Blue & White solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9101
    },
    {
      "month": "Feb",
      "revenue": 7907
    },
    {
      "month": "Mar",
      "revenue": 8728
    },
    {
      "month": "Apr",
      "revenue": 1249
    },
    {
      "month": "May",
      "revenue": 1415
    },
    {
      "month": "Jun",
      "revenue": 8987
    },
    {
      "month": "Jul",
      "revenue": 1277
    },
    {
      "month": "Aug",
      "revenue": 5707
    },
    {
      "month": "Sep",
      "revenue": 9091
    },
    {
      "month": "Oct",
      "revenue": 9771
    },
    {
      "month": "Nov",
      "revenue": 8502
    },
    {
      "month": "Dec",
      "revenue": 8269
    }
  ]
},
{
  "id": 270,
  "name": "Women Olive Green Premium Floral Printed Casual Shirt",
  "price": 2349,
  "rating": 4,
  "reviews": 6050,
  "answers": 285,
  "inStock": true,
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
    "XL"
  ],
  "images": [
    "/detailphotos/270.1.jpg",
    "/detailphotos/270.2.jpg",
    "/detailphotos/270.3.jpg",
    "/detailphotos/270.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Green solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2013
    },
    {
      "month": "Feb",
      "revenue": 5265
    },
    {
      "month": "Mar",
      "revenue": 6828
    },
    {
      "month": "Apr",
      "revenue": 1700
    },
    {
      "month": "May",
      "revenue": 4708
    },
    {
      "month": "Jun",
      "revenue": 3297
    },
    {
      "month": "Jul",
      "revenue": 9542
    },
    {
      "month": "Aug",
      "revenue": 6979
    },
    {
      "month": "Sep",
      "revenue": 7788
    },
    {
      "month": "Oct",
      "revenue": 8897
    },
    {
      "month": "Nov",
      "revenue": 7052
    },
    {
      "month": "Dec",
      "revenue": 1588
    }
  ]
},
{
  "id": 271,
  "name": "Women Premium Floral Printed Formal Shirt",
  "price": 2349,
  "rating": 4.2,
  "reviews": 7150,
  "answers": 295,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Grey"
  ],
  "seller": "Rajvadi Poshaak Co.",
  "category": "premium",
  "model": "Not specified",
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "images": [
    "/detailphotos/271.1.jpg",
    "/detailphotos/271.2.jpg",
    "/detailphotos/271.3.jpg",
    "/detailphotos/271.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Grey solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 7954
    },
    {
      "month": "Feb",
      "revenue": 4922
    },
    {
      "month": "Mar",
      "revenue": 8982
    },
    {
      "month": "Apr",
      "revenue": 3217
    },
    {
      "month": "May",
      "revenue": 4787
    },
    {
      "month": "Jun",
      "revenue": 2854
    },
    {
      "month": "Jul",
      "revenue": 9726
    },
    {
      "month": "Aug",
      "revenue": 9915
    },
    {
      "month": "Sep",
      "revenue": 1007
    },
    {
      "month": "Oct",
      "revenue": 6419
    },
    {
      "month": "Nov",
      "revenue": 5623
    },
    {
      "month": "Dec",
      "revenue": 6486
    }
  ]
},
{
  "id": 272,
  "name": "Women Textured Premium Fit Sheer Cotton Party Shirt",
  "price": 2349,
  "rating": 3.8,
  "reviews": 7300,
  "answers": 310,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Black"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/272.1.jpg",
    "/detailphotos/272.2.jpg",
    "/detailphotos/272.3.jpg",
    "/detailphotos/272.4.jpg",
    "/detailphotos/272.5.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Black solid opaque Casual shirt ,has a spread collarbutton placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 2493
    },
    {
      "month": "Feb",
      "revenue": 6011
    },
    {
      "month": "Mar",
      "revenue": 4856
    },
    {
      "month": "Apr",
      "revenue": 8452
    },
    {
      "month": "May",
      "revenue": 8559
    },
    {
      "month": "Jun",
      "revenue": 1865
    },
    {
      "month": "Jul",
      "revenue": 3237
    },
    {
      "month": "Aug",
      "revenue": 8741
    },
    {
      "month": "Sep",
      "revenue": 1347
    },
    {
      "month": "Oct",
      "revenue": 3169
    },
    {
      "month": "Nov",
      "revenue": 9180
    },
    {
      "month": "Dec",
      "revenue": 1662
    }
  ]
},
{
  "id": 273,
  "name": "Women White Premium Cotton Casual Shirt",
  "price": 2349,
  "rating": 4.2,
  "reviews": 6650,
  "answers": 280,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "White"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/273.1.jpg",
    "/detailphotos/273.2.jpg",
    "/detailphotos/273.3.jpg",
    "/detailphotos/273.4.jpg",
    "/detailphotos/273.5.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "White solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 8364
    },
    {
      "month": "Feb",
      "revenue": 7342
    },
    {
      "month": "Mar",
      "revenue": 2150
    },
    {
      "month": "Apr",
      "revenue": 4463
    },
    {
      "month": "May",
      "revenue": 2961
    },
    {
      "month": "Jun",
      "revenue": 3228
    },
    {
      "month": "Jul",
      "revenue": 4650
    },
    {
      "month": "Aug",
      "revenue": 7917
    },
    {
      "month": "Sep",
      "revenue": 8933
    },
    {
      "month": "Oct",
      "revenue": 1199
    },
    {
      "month": "Nov",
      "revenue": 4408
    },
    {
      "month": "Dec",
      "revenue": 3410
    }
  ]
},
{
  "id": 274,
  "name": "Premium Band Collar Pleated Formal Shirt",
  "price": 2349,
  "rating": 3.9,
  "reviews": 5800,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Peach"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/274.1.jpg",
    "/detailphotos/274.2.jpg",
    "/detailphotos/274.3.jpg",
    "/detailphotos/274.4.jpg",
    "/detailphotos/274.5.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Peach solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 1208
    },
    {
      "month": "Feb",
      "revenue": 1559
    },
    {
      "month": "Mar",
      "revenue": 4284
    },
    {
      "month": "Apr",
      "revenue": 2553
    },
    {
      "month": "May",
      "revenue": 2459
    },
    {
      "month": "Jun",
      "revenue": 1589
    },
    {
      "month": "Jul",
      "revenue": 7154
    },
    {
      "month": "Aug",
      "revenue": 9940
    },
    {
      "month": "Sep",
      "revenue": 7091
    },
    {
      "month": "Oct",
      "revenue": 8047
    },
    {
      "month": "Nov",
      "revenue": 7562
    },
    {
      "month": "Dec",
      "revenue": 9410
    }
  ]
},
{
  "id": 275,
  "name": "Premium Slim Fit Cotton Formal Shirt",
  "price": 2349,
  "rating": 4.3,
  "reviews": 7100,
  "answers": 320,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "White"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/275.1.jpg",
    "/detailphotos/275.2.jpg",
    "/detailphotos/275.3.jpg",
    "/detailphotos/275.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "White solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 4262
    },
    {
      "month": "Feb",
      "revenue": 2079
    },
    {
      "month": "Mar",
      "revenue": 9071
    },
    {
      "month": "Apr",
      "revenue": 8313
    },
    {
      "month": "May",
      "revenue": 5859
    },
    {
      "month": "Jun",
      "revenue": 1138
    },
    {
      "month": "Jul",
      "revenue": 5476
    },
    {
      "month": "Aug",
      "revenue": 1014
    },
    {
      "month": "Sep",
      "revenue": 9152
    },
    {
      "month": "Oct",
      "revenue": 8184
    },
    {
      "month": "Nov",
      "revenue": 2326
    },
    {
      "month": "Dec",
      "revenue": 7471
    }
  ]
},
{
  "id": 276,
  "name": "Women Premium Oversized Spread Collar Satin Party Shirt",
  "price": 2349,
  "rating": 4.1,
  "reviews": 7000,
  "answers": 305,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Cream"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/276.1.jpg",
    "/detailphotos/276.2.jpg",
    "/detailphotos/276.3.jpg",
    "/detailphotos/276.4.jpg",
    "/detailphotos/276.5.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Cream solid opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 3274
    },
    {
      "month": "Feb",
      "revenue": 6588
    },
    {
      "month": "Mar",
      "revenue": 7834
    },
    {
      "month": "Apr",
      "revenue": 3643
    },
    {
      "month": "May",
      "revenue": 5965
    },
    {
      "month": "Jun",
      "revenue": 5350
    },
    {
      "month": "Jul",
      "revenue": 9243
    },
    {
      "month": "Aug",
      "revenue": 6218
    },
    {
      "month": "Sep",
      "revenue": 7490
    },
    {
      "month": "Oct",
      "revenue": 8546
    },
    {
      "month": "Nov",
      "revenue": 7139
    },
    {
      "month": "Dec",
      "revenue": 7882
    }
  ]
},
{
  "id": 277,
  "name": "Premium Band Collar Pleated Formal Shirt",
  "price": 2349,
  "rating": 4,
  "reviews": 6600,
  "answers": 290,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Pink"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/277.1.jpg",
    "/detailphotos/277.2.jpg",
    "/detailphotos/277.3.jpg",
    "/detailphotos/277.4.jpg",
    "/detailphotos/277.5.jpg",
    "/detailphotos/277.6.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "Band collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Pink solid opaque Casual shirt ,has a Band collar, button placket, long puff sleeves, straight hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6194
    },
    {
      "month": "Feb",
      "revenue": 1682
    },
    {
      "month": "Mar",
      "revenue": 2059
    },
    {
      "month": "Apr",
      "revenue": 5039
    },
    {
      "month": "May",
      "revenue": 9409
    },
    {
      "month": "Jun",
      "revenue": 5983
    },
    {
      "month": "Jul",
      "revenue": 1649
    },
    {
      "month": "Aug",
      "revenue": 5855
    },
    {
      "month": "Sep",
      "revenue": 7231
    },
    {
      "month": "Oct",
      "revenue": 7773
    },
    {
      "month": "Nov",
      "revenue": 4088
    },
    {
      "month": "Dec",
      "revenue": 1080
    }
  ]
},
{
  "id": 278,
  "name": "Premium Checked Textured Puff Sleeves Casual Shirt",
  "price": 2349,
  "rating": 4.2,
  "reviews": 6750,
  "answers": 310,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Pink"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/278.1.jpg",
    "/detailphotos/278.2.jpg",
    "/detailphotos/278.3.jpg",
    "/detailphotos/278.4.jpg",
    "/detailphotos/278.5.jpg"
  ],
  "features": [
    "solid Checked Texture shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Pink textured checked opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, curved hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 5065
    },
    {
      "month": "Feb",
      "revenue": 3360
    },
    {
      "month": "Mar",
      "revenue": 3313
    },
    {
      "month": "Apr",
      "revenue": 2662
    },
    {
      "month": "May",
      "revenue": 5296
    },
    {
      "month": "Jun",
      "revenue": 3647
    },
    {
      "month": "Jul",
      "revenue": 2592
    },
    {
      "month": "Aug",
      "revenue": 9521
    },
    {
      "month": "Sep",
      "revenue": 6608
    },
    {
      "month": "Oct",
      "revenue": 4910
    },
    {
      "month": "Nov",
      "revenue": 8152
    },
    {
      "month": "Dec",
      "revenue": 8477
    }
  ]
},
{
  "id": 279,
  "name": "Premium Vertical Striped Spread Collar Pure Cotton Slim Fit Formal Shirt",
  "price": 2349,
  "rating": 3.8,
  "reviews": 5950,
  "answers": 285,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Blue",
    "White"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/279.1.jpg",
    "/detailphotos/279.2.jpg",
    "/detailphotos/279.3.jpg",
    "/detailphotos/279.4.jpg",
    "/detailphotos/279.5.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Blue & white vertical striped formal shirt, has a spread collar, concealed button placket, long regular sleeves, curved hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 6379
    },
    {
      "month": "Feb",
      "revenue": 1556
    },
    {
      "month": "Mar",
      "revenue": 8238
    },
    {
      "month": "Apr",
      "revenue": 9610
    },
    {
      "month": "May",
      "revenue": 4844
    },
    {
      "month": "Jun",
      "revenue": 2049
    },
    {
      "month": "Jul",
      "revenue": 4627
    },
    {
      "month": "Aug",
      "revenue": 3565
    },
    {
      "month": "Sep",
      "revenue": 4586
    },
    {
      "month": "Oct",
      "revenue": 6896
    },
    {
      "month": "Nov",
      "revenue": 3973
    },
    {
      "month": "Dec",
      "revenue": 8966
    }
  ]
},
{
  "id": 280,
  "name": "Premium Checked Textured Puff Sleeves Casual Shirt",
  "price": 2349,
  "rating": 4,
  "reviews": 6100,
  "answers": 295,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "color": [
    "Blue"
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
    "XXL"
  ],
  "images": [
    "/detailphotos/280.1.jpg",
    "/detailphotos/280.2.jpg",
    "/detailphotos/280.3.jpg",
    "/detailphotos/280.4.jpg"
  ],
  "features": [
    "solid opaque Casual shirt",
    "spread collar",
    "Pure Polyester Material",
    "For Casual Occasion",
    "Regular Fit",
    "Machine wash"
  ],
  "description": "Blue textured checked opaque Casual shirt ,has a spread collar, button placket, long puff sleeves, curved hem.",
  "chartData": [
    {
      "month": "Jan",
      "revenue": 9646
    },
    {
      "month": "Feb",
      "revenue": 7216
    },
    {
      "month": "Mar",
      "revenue": 5124
    },
    {
      "month": "Apr",
      "revenue": 3519
    },
    {
      "month": "May",
      "revenue": 6888
    },
    {
      "month": "Jun",
      "revenue": 1813
    },
    {
      "month": "Jul",
      "revenue": 2752
    },
    {
      "month": "Aug",
      "revenue": 5181
    },
    {
      "month": "Sep",
      "revenue": 6818
    },
    {
      "month": "Oct",
      "revenue": 2032
    },
    {
      "month": "Nov",
      "revenue": 8526
    },
    {
      "month": "Dec",
      "revenue": 8536
    }
  ]
}
]