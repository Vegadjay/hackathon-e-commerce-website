export interface Products {
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
  category: string;
  model: string;
  images: string[];
  features: string[];
  description: string;
}

export const products: Products[] = [{
  "id": 1,
  "name": "Indigo Dream Suit Set",
  "price": 3199.0,
  "rating": 5.0,
  "reviews": 10000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Indigo Apparel Co.",
  "category": "Cotton Suit Sets",
  "model": "JA-729)",
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
  "description": "A captivating ensemble embodying elegance and grace. This three-piece set features 3/4 sleeves, exquisite neckline work, and a beautiful lotus motif print throughout. Completing the look is a stunning dupatta adorned with playful tassels. Embrace the allure of the 'Indigo Dream' and let your style shine with its timeless charm."
},
{
  "id": 2,
  "name": "Mogra Gher Mul Cotton Suit Set",
  "price": 2899.0,
  "rating": 5.5,
  "reviews": 11000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "9 To 12 Working days",
  "seller": "Indigo Apparel Co.",
  "category": "latest arrival",
  "model": "Fit - Relaxed (Code JA-792)",
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
  "description": "Indulge in the luxury of the Mogra Gher Mul Cotton Suit Set. This premium set is made from high-quality cotton for a luxurious feel and features intricate Mogra Gher weaving. Elevate your style with this elegant and exclusive suit set."
},
{
  "id": 3,
  "name": "Tarin Green Floral Print Embroidered Suit Set",
  "price": 3199.0,
  "rating": 4.5,
  "reviews": 9000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Cotton Suit Sets",
  "model": "Fit - Relaxed (Code JA-704)",
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
  "description": "A Verdant Green Cotton Kalidar Kurta Adorned With Intricate Floral Prints And Delicate Thread Work On The Neckline. This Charming Ensemble Combines Comfort With Elegance, Making It Ideal For Both Casual Outings And Festive Occasions.."
},
{
  "id": 4,
  "name": "Izza Blue Floral Handblock Print Suit Set",
  "price": 4899.0,
  "rating": 3.5,
  "reviews": 7000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Original Handblock Suit Set",
  "model": "Fit - Relaxed (Code JA-701)",
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
  "description": "A Stunning Alia Cut Suit Set Featuring A Full-Sleeve Kurta Adorned With Handblock Floral Print In Vibrant Blue Cotton Fabric. The V-Neck Adds Elegance, Complemented By A Kota Doriya Dupatta. Perfect Fusion Of Tradition And Modernity, Exuding Charm And Grace."
},
{
  "id": 5,
  "name": "Bhargavi with Chanderi Dupttta Suit Set",
  "price": 4299.0,
  "rating": 2.6,
  "reviews": 5200,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Original Handblock Suit Set",
  "model": "Fit - Relaxed (Code JA-478)",
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
  "description": "Combine simplicity and style effortlessly with Bhargavi Chanderi dupatta Suit Set from Jaipuri Adaah. Made with pure hand-block cotton, it features a round neck with a small V and has 3/4 sleeves. Tag with a pair of classy studs and nude wedges to flaunt your walk."
},
{
  "id": 6,
  "name": "Ryza Megenta Floral Flarey Suit Set",
  "price": 4899.0,
  "rating": 6.0,
  "reviews": 12000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Original Handblock Suit Set",
  "model": "Fit - Relaxed (Code JA-718)",
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
  "description": "Ryza presents a mesmerizing Magenta Floral Flarey Suit Set with delicate handwork on the neckline border, light gathers on the front, and a graceful Kota Dori Dupatta. Featuring 3/4th sleeves and straight buti print pants, it exudes elegance and charm effortlessly"
},
{
  "id": 7,
  "name": "Paisley Kashish Block Print Suit Set",
  "price": 4799.0,
  "rating": 4.5,
  "reviews": 9000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Kurta Sets",
  "model": "Fit - Relaxed (Code JA-SKU-769)",
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
  "description": "Elevate your style with our Paisley Kashish Block Print Suit Set. This unique set features a beautiful Jahota Block print design on a comfortable cotton material, perfect for any occasion. The kotadoriya dupatta adds a touch of elegance to complete the look. Upgrade your wardrobe with this must-have ensemble"
},
{
  "id": 8,
  "name": "Gaeti Green Embroidery Handblock Chanderi Kurta Pant Set",
  "price": 4999.0,
  "rating": 4.0,
  "reviews": 8000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Kurta Sets",
  "model": "Fit - Relaxed (Code JA-657 WD)",
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
  "description": "Make a statement with the Gaeti Green embroidery Handblock Chanderi Kurta Pant Set. Crafted from chanderi fabric, this set features a beautiful handblock print with floral details and intricate thread work on the neck. Stand out in this vibrant green color and embrace your unique style"
},
{
  "id": 9,
  "name": "Royal Affairs Handblock Kurta and Pant Only",
  "price": 3399.0,
  "rating": 4.2,
  "reviews": 8500,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Indigo Apparel Co.",
  "category": "Kurta Sets",
  "model": "Fit - Relaxed (Code JA-453 WD)",
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
  "description": ""
},
{
  "id": 10,
  "name": "Patina Handblock Short Kurta",
  "price": 1499.0,
  "rating": 4.3,
  "reviews": 8600,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Shorts Kurtas",
  "model": "Fit - Relaxed (Code JA_607_SKP)",
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
  "description": "Introducing our Buti print kurta, featuring a playful green color and unique block print design. Made with comfortable cotton fabric, this short kurta is perfect for adding a touch of quirkiness to any outfit. Get ready to stand out in style"
},
{
  "id": 11,
  "name": "Peach Floral Buti Print Cotton Short Kurta",
  "price": 1499.0,
  "rating": 3.8,
  "reviews": 7500,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Indigo Apparel Co.",
  "category": "Shorts Kurtas",
  "model": "Not specified",
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
  "description": "A Delightful Pink Short Kurta Crafted From Soft Fabric And Adorned With Intricate Buti Print, Accentuated By A Chic Flat Collar. This Stylish Ensemble Effortlessly Blends Comfort And Sophistication, Perfect For Adding A Touch Of Charm To Any Casual Or Semi-Formal Occasion"
},
{
  "id": 12,
  "name": "FLORAL FANTASY SHORT KURTA",
  "price": 1099.0,
  "rating": 1.0,
  "reviews": 2000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Indigo Apparel Co.",
  "category": "Shorts Kurtas",
  "model": "Not specified",
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
  "description": "NOTE: READY GARMENT MEASUREMENTS WOULD BE 2 INCHES BIGGER IN BUST AND 4 INCHES BIGGER IN KURTA WAIST"
},
{
  "id": 13,
  "name": "Mogra Gher Mul Cotton Suit Set",
  "price": 2899.0,
  "rating": 4.0,
  "reviews": 8000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "9 To 12 Working days",
  "seller": "Indigo Apparel Co.",
  "category": "Anarkali Suits",
  "model": "Fit - Relaxed (Code JA-792)",
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
  "description": "Indulge in the luxury of the Mogra Gher Mul Cotton Suit Set. This premium set is made from high-quality cotton for a luxurious feel and features intricate Mogra Gher weaving. Elevate your style with this elegant and exclusive suit set"
},
{
  "id": 14,
  "name": "Najia Green Floral Handblock Print Suit Set",
  "price": 4899.0,
  "rating": 1.0,
  "reviews": 2000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Anarkali Suits",
  "model": "Not specified",
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
  "description": "NOTE: READY GARMENT MEASUREMENTS WOULD BE 2 INCHES BIGGER IN BUST AND 4 INCHES BIGGER IN KURTA WAIST"
},
{
  "id": 15,
  "name": "Mehreen Maroon Anarkali Cotton Suit Set",
  "price": 3449.0,
  "rating": 4.0,
  "reviews": 8000,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Anarkali Suits",
  "model": "Fit - Relaxed (Code JA-687)",
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
  "description": "Flaunt your unique style with our maroon floral jaal gathered kurta and buti pant set! Made from soft and breathable cotton fabric, this set is not only comfortable, but also eye-catching. Perfect for any occasion, it's a must-have for your wardrobe"
},
{
  "id": 16,
  "name": "Bageecha Chanderi Silk Suit with Handwork Detailing",
  "price": 6199.0,
  "rating": 3.8,
  "reviews": 7500,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Premium Chanderi Suit-Sets",
  "model": "Fit - Relaxed (Code JA-819)",
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
  "description": "Elevate your style with our Bageecha Chanderi Silk Suit. Crafted from luxurious silk, this suit features intricate handwork detailing that adds a touch of elegance to any occasion. Perfect for the sophisticated and exclusive woman who appreciates art and fine craftsmanship. Indulge in a truly exquisite experience with this premium suit"
},
{
  "id": 17,
  "name": "Parnia Peach Embroidery Handblock Chanderi Suit Set",
  "price": 5899.0,
  "rating": 3.9,
  "reviews": 7800,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Premium Chanderi Suit-Sets",
  "model": "Fit - Relaxed (Code JA-649)",
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
  "description": "Fabric -  Pure Chanderi Kurta with lining & Chanderi Silk Dupatta & Cotton Pant"
},
{
  "id": 18,
  "name": "Iris Blue Floral Chanderi Straight Fit Suit Set",
  "price": 5499.0,
  "rating": 3.8,
  "reviews": 7600,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Premium Chanderi Suit-Sets",
  "model": "Not specified",
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
  "description": "Dressed in our Iris Blue Floral Straight Fit Suit Set, your style will bloom like a garden. The chanderi kurta and cotton pant offer a luxurious experience, while the dupatta adds a touch of elegance. Embrace sophistication and elevate your wardrobe with this exclusive set"
},
{
  "id": 19,
  "name": "Naadia Block Printed Cotton Kalidaar Handwork Suit Set",
  "price": 4899.0,
  "rating": 4.2,
  "reviews": 8300,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Premium Handwork Suit Sets",
  "model": "Fit - Relaxed (Code JA-622)",
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
  "description": "This Naadia Block Printed Cotton Kalidaar Handwork Suit Set is the epitome of ethnic elegance. Boasting a captivating green floral block print with delicate handwork detail on the kurta, this anarkali suit set is crafted from pure cotton for a luxurious feel, with a traditional chanderi silk dupatta for a hint of opulence. A timeless classic for all special occasions"
},
{
  "id": 20,
  "name": "Yami Yellow Embroidered Anarkali Suit Set",
  "price": 5499.0,
  "rating": 2.2,
  "reviews": 4500,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Premium Handwork Suit Sets",
  "model": "Fit - Relaxed (Code JA-615)",
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
  "description": "This exquisite Yami yellow floral chinon anarkali suit set features a vivid yellow floral print atop a luxurious handwork of ethnic embroidery. The anarkali-style set is a beautiful blend of classic elegance and contemporary flare, perfect for making the desired statement in any setting. Crafted with indulgence in mind, this set is sure to make you feel as glamorous as it looks"
},
{
  "id": 21,
  "name": "Paakiza Purple Cotton Straight Handwork Suit Set",
  "price": 5399.0,
  "rating": 4.5,
  "reviews": 8900,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Indigo Apparel Co.",
  "category": "Premium Handwork Suit Sets",
  "model": "Fit - Relaxed (Code JA-627)",
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
  "description": "Look effortless and charming in this elegant Paakiza Purple Cotton Straight Handwork Suit Set. The pure cotton fabric is comfortable and the mirror work and handwork make it perfect for special occasions. The soothing purple color and a fashionable straight fit adds a stylish touch, perfect for party wear"
},
{
  "id": 22,
  "name": "Lavanya Habutai Silk Suit Set",
  "price": 5999.00,
  "rating": 4.2,
  "reviews": 5000,
  "answers": 154,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-817)",
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
  "description": "TOP PREMIUM PURE BEMBERG HABUTAI SILK SOLID COLOR WITH EMBROIDERY, ORGANZA JACQUARD SLEEVES & JARI LACE."

},
{
  "id": 23,
  "name": "Kusum Suit Set in Silk with Handwork",
  "price": 5999.00,
  "rating": 4.0,
  "reviews": 5760,
  "answers": 206,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-816)",
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
  "description": "TOP- PREMIUM BEMBERG SILK JACQUARD WITH EMBROIDERY & HAND WORK AND JARI LACE FOR DAMAN."
},
{
  "id": 24,
  "name": "Tyohar Jacquard Silk Handwork Suit Set with Organza Dupatta",
  "price": 5999.00,
  "rating": 4.3,
  "reviews": 12000,
  "answers": 398,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-806)",
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
  "description": "TOP- PREMIUM PURE SILK JACQUARD SOLID COLOR WITH EMBROIDERY AND HAND WORK, JARI LACE FOR DAMAN."
},
{
  "id": 25,
  "name": "Riyaaz Silk Suit Set with Jacquard Crush Dupatta",
  "price": 5499.00,
  "rating": 4.6,
  "reviews": 7041,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-798)",
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
  "description": "Elevate your style with the Riyaaz Silk Suit Set. Made from luxurious silk and adorned with a beautiful Jacquard Crush Dupatta, this set will bring sophistication to any occasion. Perfectly crafted for the modern woman, it exudes elegance and exclusivity. Transform your wardrobe with this premium piece."
},
{
  "id": 26,
  "name": "Sanjari Muslin Silk Suit Set with Organza Dupatta",
  "price": 5499.00,
  "rating": 4.4,
  "reviews": 9496,
  "answers": 276,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-812)",
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
  "description": "Indulge in luxury with our Sanjari Muslin Silk Suit Set, featuring a delicate organza dupatta. Made with the finest silk, this set exudes sophistication and elegance. Elevate your style and make a statement with this exclusive piece. Perfect for any occasion, it's a must-have for your wardrobe."
},
{
  "id": 27,
  "name": "Naari Zari Silk Suit Set with Patchwork & Embroidery",
  "price": 6499.00,
  "rating": 4.9,
  "reviews": 4303,
  "answers": 122,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-813)",
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
  "description": "Experience luxury and elegance with our Naari Zari Silk Suit Set, featuring exquisite patchwork and intricate embroidery. Made from premium materials, this set exudes sophistication and exclusivity. Elevate your wardrobe with this tasteful fusion of art and fashion."
},
{
  "id": 28,
  "name": "Sakhi Silk Suit Set with Embroidered Floral Detailing",
  "price": 5999.00,
  "rating": 4.5,
  "reviews": 7403,
  "answers": 156,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-804)",
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
  "description": "TOP- PREMIUM BEMBERG SILK SOLID COLOR WITH EMBROIDERY & EMBROIDERY LACE FOR DAMAN AND SLEEVES."
},
{
  "id": 29,
  "name": "Kalyani Silk Satin Embroidered Suit Set with Organza Dupatta",
  "price": 5999.00,
  "rating": 5,
  "reviews": 200,
  "answers": 34,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-794)",
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
  "description": "Indulge in luxury with our Kalyani Silk Satin Embroidered Suit Set, complete with a stunning Organza Dupatta. The intricate embroidery adds a touch of elegance, while the soft silk satin fabric drapes beautifully for a flattering fit. Elevate your style with this sophisticated and exclusive suit set."
},
{
  "id": 30,
  "name": "Ruby Floral A-line Silk Suit set",
  "price": 5499.00,
  "rating": 4.2,
  "reviews": 10200,
  "answers": 304,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-782)",
  "images": [
    "/detailphotos/30.1.webp",
    "/detailphotos/30.2.webp",
    "/detailphotos/30.3.webp",
    "/detailphotos/30.4.webp",
    "/detailphotos/30.5.webp"
  ],
  "features": [
    "Dispatch Time : 5 To 6 Working days",
    "Fabric - Pure Cotton",
    "Fit - Relaxed (CODE :RP-782)",
    "Washing instruction-  Dry clean only",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Indulge in the luxury and sophistication of our Ruby Floral A-line Silk Suit set. Made from premium silk, the set features a stunning ruby floral design that exudes elegance and exclusivity. Elevate your style with this tasteful and timeless piece."
},
{
  "id": 31,
  "name": "Ruby Floral A-line Silk Suit set",
  "price": 5699.00,
  "rating": 4.6,
  "reviews": 7450,
  "answers": 127,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-777)",
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
  "description": "Indulge in luxury with our Vrinda Chanderi Silk Straight Fit Suit Set. Made from the finest Chanderi silk, this suit set exudes elegance and sophistication. The straight fit adds a flattering touch, making you stand out in any occasion. Elevate your style with our premium suit set."
},
{
  "id": 32,
  "name": "Gerua Chanderi Silk Suit with Handwork Detailing",
  "price": 5999.00,
  "rating": 4.5,
  "reviews": 7230,
  "answers": 97,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "latest-collection",
  "model": "RP-814)",
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
  "description": "Indulge in luxury with our Gerua Chanderi Silk Suit, featuring exquisite handwork detailing. Crafted from the finest silk, this suit boasts a timeless elegance that will elevate any occasion. Experience the refined sophistication of this piece and make a statement wherever you go."
},
{
  "id": 33,
  "name": "Jade Oasis Coord Set with Floral Embroidered Detailing",
  "price": 3299.00,
  "rating": 4.9,
  "reviews": 12030,
  "answers": 345,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-787)",
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
    "Washing instruction-  Separate wash only (Might bleed color) Preferably Dry clean.",
    "Kurta length 46",
    "Pant length 38"
  ],
  "description": "Unleash your adventurous spirit with our Jade Oasis Coord Set. This set features exquisite floral embroidered detailing, adding a touch of elegance to your daring look. Take on any challenge in style and stand out from the crowd with this bold ensemble."
},
{
  "id": 34,
  "name": "Moonlight silk Embroidered Coord Set",
  "price": 3299.00,
  "rating": 4.8,
  "reviews": 10676,
  "answers": 237,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-781)",
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
  "description": "Indulge in luxury with our Moonlight silk Embroidered Coord Set. Made with the finest silk and intricate embroidery, this set exudes elegance and beauty. Perfect for special occasions or adding a touch of sophistication to your everyday look. Elevate your style with this beautiful Coord Set."
},
{
  "id": 35,
  "name": "Sun & Moon Pink Embroidered Coord Set",
  "price": 2899.00,
  "rating": 4.1,
  "reviews": 9676,
  "answers": 130,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-780)",
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
  "description": "Indulge in the luxurious elegance of our Sun & Moon Pink Embroidered Coord Set. This sophisticated set features intricate embroidery and a delicate pink hue, evoking the beauty and mystery of the sun and moon. Perfect for those seeking high-end fashion with a touch of the ethereal."
},
{
  "id": 36,
  "name": "Ink Blue Handblock Co- Ord Set",
  "price": 3699.00,
  "rating": 4.3,
  "reviews": 8776,
  "answers": 245,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-555)",
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
  "description": "Elevate your fashion game with our Ink Blue Handblock Co-Ord Set. Made with breathable materials, this comfortable and fashionable set is perfect for any occasion. Step out in style and make a statement with this unique and trendy set. Co-ordinate your look effortlessly!"
},
{
  "id": 37,
  "name": "Desi Bloom Handblock Cotton Floral coord set",
  "price": 3699.00,
  "rating": 4.6,
  "reviews": 4276,
  "answers": 85,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-607)",
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
  "description": "Get ready to bloom in our Desi Bloom Handblock Cotton Floral coord set! Made with comfortable and breathable cotton, this set is perfect for any occasion. The handblock print adds a fashionable touch, making you stand out in style. (Don't forget to stop and smell the flowers, too!)"
},
{
  "id": 38,
  "name": "Abstract Waves Black Cord Set",
  "price": 1999.00,
  "rating": 4.1,
  "reviews": 10376,
  "answers": 293,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-733)",
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
  "description": "Indulge in luxury with our exquisite Abstract Waves Black Cord Set. This beautiful and comfortable set features abstract wave designs that will add an elegant touch to any outfit. Embrace sophistication and comfort with this exclusive cord set."
},
{
  "id": 39,
  "name": "Sage Green Handblock Co-Ord Set",
  "price": 3299.00,
  "rating": 4.7,
  "reviews": 6376,
  "answers": 113,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-575)",
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
  "description": "Discover the Sage Green Handblock Co-Ord Set and its exquisitely crafted floral pattern, skillfully handblock-printed on the finest cotton fabric. This luxe two-piece set is a refined choice for women, beautifully draped in a subtle yet charismatic green hue. Indulge in the exclusivity of this impressive creation."
},
{
  "id": 40,
  "name": "Sunrise Splash White Cord Set",
  "price": 1999.00,
  "rating": 4.4,
  "reviews": 9376,
  "answers": 243,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-740)",
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
  "description": "Get ready to make a splash with the Sunrise Splash White Cord Set! This comfortable and breathable set will keep you feeling stylish and cool all day long. Bring some fun and fashion to your wardrobe with this must-have set."
},
{
  "id": 41,
  "name": "Rosheen Red Floral Cord set",
  "price": 3699.00,
  "rating": 4.3,
  "reviews": 12376,
  "answers": 346,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-746)",
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
  "description": "Get ready to stand out in style with the Rosheen Red Floral Cord set! This set is not only comfortable and breathable, but also incredibly fashionable. With its bold and vibrant floral pattern, this set is perfect for making a statement and staying comfortable all day long. Don't miss out on this must-have fashion piece!"
},
{
  "id": 42,
  "name": "Yellow Safari Cord Set",
  "price": 1999.00,
  "rating": 4.1,
  "reviews": 13446,
  "answers": 346,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-736)",
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
  "description": "Don't just blend in with the crowd, stand out with our Yellow Safari Cord Set! Comfortable, breathable, and oh-so-fashionable, this set will help you make a statement wherever you go. Perfect for those who want to add a touch of fun and playfulness to their wardrobe."
},
{
  "id": 43,
  "name": "Yellow Safari Cord Set",
  "price": 3299.00,
  "rating": 4.5,
  "reviews": 6446,
  "answers": 196,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-598)",
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
  "description": "Achieve dreamy style with our exquisite Dreamy Floral Hand-block Co-Ord Set. Expertly crafted from luxuriant peach cotton cord and adorned with a delicate floral print in a hand block style, this set exudes a timeless sophistication that promises to elevate any ensemble."
},
{
  "id": 44,
  "name": "Green Goddess Coord Set in Silk with Floral Motifs",
  "price": 2999.00,
  "rating": 4.1,
  "reviews": 12046,
  "answers": 245,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-800)",
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
  "description": "Indulge in luxury with our Green Goddess Coord Set. Made with premium silk and adorned with stunning floral motifs, this set exudes elegance and sophistication. Feel like a goddess in this tasteful and exclusive ensemble, perfect for any special occasion."
},
{
  "id": 45,
  "name": "Midnight Jungle Cord Set",
  "price": 1899.00,
  "rating": 4.7,
  "reviews": 7046,
  "answers": 245,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-734)",
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
  "description": "Experience the luxurious comfort of our Midnight Jungle Cord Set. Made with breathable materials, this fashionable set will keep you feeling cool and stylish all day long. Embrace the elegance and exclusivity of this set, perfect for any occasion."
},
{
  "id": 46,
  "name": "Maharani Pink Handblock Cotton Floral Coord Set",
  "price": 3699.00,
  "rating": 4.5,
  "reviews": 8746,
  "answers": 268,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-612)",
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
  "description": "Get ready to feel like royalty in our Maharani Pink Handblock Cotton Floral Coord Set! Featuring a comfortable and breathable design, this set is a must-have for any fashionable individual. Say goodbye to boring outfits and hello to a regally stylish look!"
},
{
  "id": 47,
  "name": "Sunset Leopard Print Cord set",
  "price": 1899.00,
  "rating": 4.1,
  "reviews": 13646,
  "answers": 123,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-738)",
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
  "description": "Indulge in ultimate comfort and style with our Sunset Leopard Print Cord set. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 48,
  "name": "Sky Blue Semi Formal Handblock Kaftan",
  "price": 2199.00,
  "rating": 4.3,
  "reviews": 5646,
  "answers": 183,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-479-KFL-(KF))",
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
  "description": "Indulge in ultimate comfort and style with our Sky Blue Semi Formal Handblock Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 49,
  "name": "Royal Red Handblock Kaftan",
  "price": 2199.00,
  "rating": 4.7,
  "reviews": 4646,
  "answers": 103,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-451-KFL-(KF))",
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
  "description": "Indulge in ultimate comfort and style with our Royal Red Handblock Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 50,
  "name": "Bouncy Beige Floral Handblock Mul Cotton Kaftan",
  "price": 2199.00,
  "rating": 4.1,
  "reviews": 9846,
  "answers": 163,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-204-K)",
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
  "description": "Indulge in ultimate comfort and style with our Bouncy Beige Floral Handblock Mul Cotton Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 51,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 3.9,
  "reviews": 7700,
  "answers": 244,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Traditional tie-dye pattern in vibrant yellow and red tones Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 52,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 3.5,
  "reviews": 7600,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Modern geometric print in white over a bright yellow base Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 53,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3599.0,
  "rating": 4,
  "reviews": 8100,
  "answers": 294,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton traditional geometric print in white over a bright orange base Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 54,
  "name": "Blue Party Wear Sequin Work Georgette Saree",
  "price": 5399.0,
  "rating": 4.1,
  "reviews": 7900,
  "answers": 274,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "A sparkling star, this Party Wear Sequin Work Blue Georgette Saree has a golden sequin work border and sequin embellishments."
},
{
  "id": 55,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 3.6,
  "reviews": 6600,
  "answers": 184,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton traditional pattern print in red over a bright white base Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 56,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 3.8,
  "reviews": 7800,
  "answers": 259,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton traditional flower pattern print in white over a bright blue base Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 57,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 3.8,
  "reviews": 7100,
  "answers": 174,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton traditional geometric print in black and blue over a bright white base Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 58,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 3.6,
  "reviews": 6600,
  "answers": 184,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton flower print in red over a bright pink base Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 59,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.0,
  "reviews": 7900,
  "answers": 284,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton traditional colorful geometric print over a bright NavyBlue base Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 60,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.0,
  "reviews": 7800,
  "answers": 264,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton traditional pattern print in white over a Orange base Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 61,
  "name": "Yellow Festive Bandhani Embroidered Pure Georgette Saree",
  "price": 6799.0,
  "rating": 4,
  "reviews": 7700,
  "answers": 244,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the yellow And Red Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla."
},
{
  "id": 62,
  "name": "Multicolour Traditional Embroidered Bandhani Pure Georgette Saree",
  "price": 5799.0,
  "rating": 3.9,
  "reviews": 6700,
  "answers": 164,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the Multicolour  Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla."
},
{
  "id": 63,
  "name": "Yellow Traditional Embroidered Bandhani Pure Georgette Saree",
  "price": 5599.0,
  "rating": 3.8,
  "reviews": 5700,
  "answers": 156,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the yellow And Red Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla."
},
{
  "id": 64,
  "name": "Heavy Bandhani Embroidered Pure Georgette Pink Saree",
  "price": 5799.0,
  "rating": 4.2,
  "reviews": 8700,
  "answers": 264,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the Heavy Bandhani Embroidered Pure Georgette Saree. It has bandhani print and a heavy embroidered border."
},
{
  "id": 65,
  "name": "Mustard Traditional Bandhani Embroidered Pure Georgette Saree",
  "price": 6399.0,
  "rating": 3.9,
  "reviews": 6800,
  "answers": 184,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the Traditional Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla."
},
{
  "id": 66,
  "name": "Embroidered Georgette Blue Saree with Unstitched Blouse",
  "price": 4599.0,
  "rating": 3.9,
  "reviews": 7400,
  "answers": 204,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embellished with beautiful patterns, this Embroidered Saree has a royal look. It has ethnic motifs, a heavy border and tassels at the end. this saree comes with an unstitched blouse piece."
},
{
  "id": 67,
  "name": "Red Traditional Bandhani Embroidered Pure Georgette Saree",
  "price": 5199.0,
  "rating": 4,
  "reviews": 6500,
  "answers": 198,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the yellow And orange Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla."
},
{
  "id": 68,
  "name": "Red Heavy Bandhani Embroidered Pure Georgette Saree",
  "price": 5999.0,
  "rating": 4.1,
  "reviews": 8200,
  "answers": 264,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the red Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla."
},
{
  "id": 69,
  "name": "Red Festive Embroidered Bandhani Pure Georgette Saree",
  "price": 5799.0,
  "rating": 4.0,
  "reviews": 6410,
  "answers": 209,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the red Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla."
},
{
  "id": 70,
  "name": "Yellow Heavy Bandhani Embroidered Pure Georgette Saree",
  "price": 6799.0,
  "rating": 3.9,
  "reviews": 6415,
  "answers": 199,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "Embrace the festive charm of the yellow Festive Bandhani Embroidered Pure Georgette Saree. It has bandhani prints, an embroidered border and heavy work on the palla."
},
{
  "id": 71,
  "name": "Party Wear Embroidered Pure Georgette White Saree",
  "price": 5799.0,
  "rating": 4.0,
  "reviews": 7510,
  "answers": 254,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "A glamorous charm to your wardrobe with this Party Wear Embroidered Pure Georgette White Saree. It has beautiful floral thread embroidered details."
},
{
  "id": 72,
  "name": "Party Wear Embroidered Pure Georgette Black Saree",
  "price": 5799.0,
  "rating": 4.1,
  "reviews": 7980,
  "answers": 234,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "A glamorous charm to your wardrobe with this Party Wear Embroidered Pure Georgette Black Saree. It has beautiful floral thread embroidered details."
},
{
  "id": 73,
  "name": "Party Wear Embroidered Net Red Saree",
  "price": 7299.0,
  "rating": 4.2,
  "reviews": 7980,
  "answers": 244,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Premium co.",
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
  "description": "A glamorous charm to your wardrobe with this Party Wear Embroidered Net Red Saree. It has beautiful floral thread embroidered details."
},
{
  "id": 74,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.2,
  "reviews": 6700,
  "answers": 254,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 75,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.1,
  "reviews": 6700,
  "answers": 254,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 76,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.3,
  "reviews": 6600,
  "answers": 294,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 77,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 3.9,
  "reviews": 5810,
  "answers": 189,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 78,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.3,
  "reviews": 5960,
  "answers": 264,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 79,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.6,
  "reviews": 8460,
  "answers": 304,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 80,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.2,
  "reviews": 6860,
  "answers": 249,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 81,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.3,
  "reviews": 6560,
  "answers": 249,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 82,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.6,
  "reviews": 5960,
  "answers": 169,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 83,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.2,
  "reviews": 5930,
  "answers": 190,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 84,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.3,
  "reviews": 6450,
  "answers": 269,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 85,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.5,
  "reviews": 5490,
  "answers": 169,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 86,
  "name": "Mulmul Cotton Printed Saree",
  "price": 3499.0,
  "rating": 4.2,
  "reviews": 5560,
  "answers": 149,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "Not specified",
  "seller": "Rajvadi Poshaak Co.",
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
  "description": "Embrace simplicity with this Mulmul Cotton Tie and Dye Printed Saree. It has Tie and Dye prints on Pure Cotton fabric."
},
{
  "id": 101,
  "name": "A Distinctively Fragile beige Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499.00,
  "rating": 4.4,
  "reviews": 10846,
  "answers": 243,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-204)",
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
  "description": "Indulge in ultimate comfort and style with our A Distinctively Fragile beige Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 102,
  "name": "The Reminiscing Red Blossom Hand-block Printed Cotton Kaftan",
  "price": 2199.00,
  "rating": 4.9,
  "reviews": 4869,
  "answers": 189,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-269-K)",
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
  "description": "Indulge in ultimate comfort and style with our The Reminiscing Red Blossom Hand-block Printed Cotton Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 103,
  "name": "Serene Blue floral Handblock Kaftan Night Suit",
  "price": 2479.00,
  "rating": 5,
  "reviews": 3269,
  "answers": 59,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-272)",
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
  "description": "Indulge in ultimate comfort and style with our Serene Blue floral Handblock Kaftan Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 104,
  "name": "Maroon & White Handblock Slip-On Kaftan",
  "price": 2199.00,
  "rating": 4.4,
  "reviews": 5769,
  "answers": 343,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-267-KFL-(KF))",
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
  "description": "Indulge in ultimate comfort and style with our Maroon & White Handblock Slip-On Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 105,
  "name": "A Playful Green Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499.00,
  "rating": 4.8,
  "reviews": 6469,
  "answers": 103,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-215 KFS)",
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
  "description": "Indulge in ultimate comfort and style with our A Playful Green Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 106,
  "name": "Flickering Flames Of Yellow Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499.00,
  "rating": 4.5,
  "reviews": 12069,
  "answers": 145,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-251)",
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
  "description": "Indulge in ultimate comfort and style with our Flickering Flames Of Yellow Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 107,
  "name": "An Exquisitely Attractive Pink Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499.00,
  "rating": 4.1,
  "reviews": 13900,
  "answers": 345,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-238)",
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
  "description": "Indulge in ultimate comfort and style with our An Exquisitely Attractive Pink Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 108,
  "name": "A Tender Tincture Of Green Handblock Printed Cotton Kaftan Tunic In Contrast With Red Pants (Set of 2)",
  "price": 2499.00,
  "rating": 4,
  "reviews": 8987,
  "answers": 235,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-276)",
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
  "description": "Indulge in ultimate comfort and style with our A Tender Tincture Of Green Handblock Printed Cotton Kaftan Tunic In Contrast With Red Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 109,
  "name": "Mesmerizing Blue Handblock Printed Cotton Kaftan",
  "price": 1959.00,
  "rating": 4.8,
  "reviews": 6887,
  "answers": 105,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-275-K)",
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
  "description": "Indulge in ultimate comfort and style with our Mesmerizing Blue Handblock Printed Cotton Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 110,
  "name": "A Natural Tint Of Green Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499.00,
  "rating": 4.5,
  "reviews": 6237,
  "answers": 247,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-179)",
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
  "description": "Indulge in ultimate comfort and style with our Natural Tint Of Green Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 111,
  "name": "An Intrinsic Yellow Blossom Handblock Printed Cotton Kaftan Tunic With Pants (Set of 2)",
  "price": 2499.00,
  "rating": 4.1,
  "reviews": 12887,
  "answers": 167,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-281)",
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
  "description": "Indulge in ultimate comfort and style with our Intrinsic Yellow Blossom Handblock Printed Cotton Kaftan Tunic With Pants. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 112,
  "name": "The Soothing Mystical Hued Handblock Printed Cotton Kaftan",
  "price": 1959.00,
  "rating": 4.1,
  "reviews": 12887,
  "answers": 167,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-215-K)",
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
  "description": "Indulge in ultimate comfort and style with our Soothing Mystical Hued Handblock Printed Cotton Kaftan. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 113,
  "name": "An Absolute Chic Handblock Cotton Night Suit",
  "price": 2199.00,
  "rating": 4.5,
  "reviews": 2387,
  "answers": 23,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-215-K)",
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
  "description": "Indulge in ultimate comfort and style with our Absolute Chic Handblock Cotton Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 114,
  "name": "A Fit For A Queen Handblock Cotton Night Suit",
  "price": 2199.00,
  "rating": 4.2,
  "reviews": 6387,
  "answers": 213,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-215-K)",
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
  "description": "Indulge in ultimate comfort and style with our Fit For A Queen Handblock Cotton Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 115,
  "name": "A Tender Green Tone Handblock Cotton Night Suit",
  "price": 2199.00,
  "rating": 4.9,
  "reviews": 4387,
  "answers": 104,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-276 NSC)",
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
  "description": "Indulge in ultimate comfort and style with our Tender Green Tone Handblock Cotton Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 116,
  "name": "An Eloquent Beige Handblock Cotton Night Suit",
  "price": 2199.00,
  "rating": 5,
  "reviews": 3046,
  "answers": 78,
  "inStock": true,
  "delivery": "Rs. 100",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-276 NSC)",
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
  "description": "Indulge in ultimate comfort and style with our Eloquent Beige Handblock Cotton Night Suit. Made with luxurious materials, this set is not only fashionable but also incredibly comfortable and breathable. Elevate your wardrobe with this exclusive and tasteful piece, perfect for any occasion."
},
{
  "id": 117,
  "name": "An Eloquent Beige Handblock Cotton Night Suit",
  "price": 4049.00,
  "rating": 4.5,
  "reviews": 8765,
  "answers": 134,
  "inStock": true,
  "delivery": "FREE delivery",
  "deliveryDate": "5 To 6 Working days",
  "seller": "Rajwadi Poshaak Co.",
  "category": "lounge-wear",
  "model": "RP-555 WD)",
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
  "description": "Indulge in luxury with our Blue Sapphire Gher Handblock Kurta and Pant set. Crafted with precision and elegance, this exclusive set features a stunning blue sapphire color and intricate handblock design. Elevate your style and make a statement with this tasteful and sophisticated ensemble."
}
]