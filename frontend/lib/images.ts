// Fashion-related Unsplash collections
const FASHION_COLLECTIONS = [
  'clothing',
  'fashion',
  'apparel',
  'outfit',
  'style'
];

// Categories with their specific search terms
const CATEGORY_TERMS = {
  Men: ['menswear', 'mens-fashion', 'mens-clothing'],
  Women: ['womenswear', 'womens-fashion', 'womens-clothing'],
  Unisex: ['unisex-fashion', 'streetwear', 'casual-wear']
};

export function getProductImage(category: 'Men' | 'Women' | 'Unisex', index: number): string {
  const categoryTerms = CATEGORY_TERMS[category];
  const randomTerm = categoryTerms[index % categoryTerms.length];
  const randomFashionTerm = FASHION_COLLECTIONS[index % FASHION_COLLECTIONS.length];
  
  // Using multiple terms for more relevant images
  return `https://source.unsplash.com/800x1000/?${randomTerm},${randomFashionTerm}&sig=${index}`;
}