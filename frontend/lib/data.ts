import { getProductImage } from './images';

type Category = 'Men' | 'Women' | 'Unisex';
type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  sizes: string[];
  colors: string[];
};

const STYLES = ['Classic', 'Modern', 'Vintage', 'Urban', 'Elegant', 'Casual', 'Premium', 'Designer'];
const TYPES = {
  Men: ['Suit', 'Blazer', 'Polo', 'Chinos', 'Oxford Shirt', 'Sweater', 'Jeans', 'T-Shirt'],
  Women: ['Dress', 'Blouse', 'Skirt', 'Jumpsuit', 'Cardigan', 'Top', 'Jeans', 'Blazer'],
  Unisex: ['Hoodie', 'T-Shirt', 'Sweatshirt', 'Jacket', 'Denim', 'Tank Top', 'Sweater', 'Coat']
};

function generateDescription(style: string, type: string, category: Category): string {
  return `${style} ${type} perfect for any occasion. Made with premium materials for ultimate comfort and style. This ${category === 'Unisex' ? 'versatile' : category.toLowerCase()}'s piece features excellent craftsmanship and attention to detail.`;
}

export const products: Product[] = Array.from({ length: 200 }, (_, index) => {
  const category = ['Men', 'Women', 'Unisex'][Math.floor(Math.random() * 3)] as Category;
  const style = STYLES[Math.floor(Math.random() * STYLES.length)];
  const type = TYPES[category][Math.floor(Math.random() * TYPES[category].length)];
  
  return {
    id: index + 1,
    name: `${style} ${type}`,
    price: Math.floor(Math.random() * 150) + 20,
    description: generateDescription(style, type, category),
    image: getProductImage(category, index),
    category,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue', 'Red', 'Green'].slice(
      0,
      Math.floor(Math.random() * 3) + 2
    ),
  };
});

export const categories = ['All', 'Men', 'Women', 'Unisex'] as const;