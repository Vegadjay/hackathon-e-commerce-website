const FASHION_COLLECTIONS = [
  'clothing',
  'fashion',
  'apparel',
  'outfit',
  'style'
];

const CATEGORY_TERMS = {
  Men: ['menswear', 'mens-fashion', 'mens-clothing'],
  Women: ['womenswear', 'womens-fashion', 'womens-clothing'],
};

export function getProductImage(category: 'Men' | 'Women', index: number): string {
  const categoryTerms = CATEGORY_TERMS[category];
  const randomTerm = categoryTerms[index % categoryTerms.length];
  const randomFashionTerm = FASHION_COLLECTIONS[index % FASHION_COLLECTIONS.length];
  
  return `https://source.unsplash.com/800x1000/?${randomTerm},${randomFashionTerm}&sig=${index}`;
}