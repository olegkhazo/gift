export interface Product {
  id: string
  name: string
  price: number
  description: string
  variants: ProductVariant[]
}

export interface ProductVariant {
  id: string
  name: string
  price: number
}

export const products: Product[] = [
  {
    id: 'the-good-shit',
    name: 'The Good Shit',
    price: 16.99,
    description: 'Premium quality manure that will make a lasting impression.',
    variants: [
      { id: 'small', name: 'Small Package', price: 16.99 },
      { id: 'medium', name: 'Medium Package', price: 24.99 },
      { id: 'large', name: 'Large Package', price: 34.99 },
    ],
  },
  {
    id: 'horse-power',
    name: 'Horse Power',
    price: 15.99,
    description: 'Straight from the stable, this one packs a punch!',
    variants: [
      { id: 'small', name: 'Small Package', price: 15.99 },
      { id: 'medium', name: 'Medium Package', price: 22.99 },
      { id: 'large', name: 'Large Package', price: 32.99 },
    ],
  },
  {
    id: 'the-golden-poo',
    name: 'The Golden Poo',
    price: 15.99,
    description: 'A golden opportunity for a memorable gift experience.',
    variants: [
      { id: 'small', name: 'Small Package', price: 15.99 },
      { id: 'medium', name: 'Medium Package', price: 22.99 },
      { id: 'large', name: 'Large Package', price: 32.99 },
    ],
  },
  {
    id: 'double-dung',
    name: 'Double Dung',
    price: 24.99,
    description: 'Double the fun, double the surprise!',
    variants: [
      { id: 'small', name: 'Small Package', price: 24.99 },
      { id: 'medium', name: 'Medium Package', price: 34.99 },
      { id: 'large', name: 'Large Package', price: 49.99 },
    ],
  },
]
