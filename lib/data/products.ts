export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  price?: string;
  rating: number;
  reviewCount?: number;
  affiliateUrl: string;
  categorySlug: string;
  isBestPick?: boolean;
  /** Top pick in category; shows "Best Overall" badge */
  isBestOverall?: boolean;
  /** Optional CTA label, e.g. "Check Price on Amazon" */
  ctaLabel?: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'Noise-canceling over-ear headphones with 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    imageAlt: 'Wireless headphones',
    price: '$249',
    rating: 4.8,
    reviewCount: 1247,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'tech',
    isBestPick: true,
    isBestOverall: true,
    ctaLabel: 'Check Price on Amazon',
  },
  {
    id: '2',
    title: 'Organic Vitamin C Serum',
    description: 'Brightening serum with 20% vitamin C for radiant skin.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=300&fit=crop',
    imageAlt: 'Vitamin C serum',
    price: '$34',
    rating: 4.6,
    reviewCount: 892,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'skincare',
    isBestPick: true,
    isBestOverall: true,
  },
  {
    id: '3',
    title: 'Yoga Mat Premium',
    description: 'Eco-friendly non-slip mat with alignment lines.',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
    imageAlt: 'Yoga mat',
    price: '$45',
    rating: 4.7,
    reviewCount: 2103,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'fitness',
  },
  {
    id: '4',
    title: 'Smart Fitness Tracker',
    description: 'Track steps, heart rate, sleep, and 20+ workout modes.',
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400&h=300&fit=crop',
    imageAlt: 'Fitness tracker',
    price: '$129',
    rating: 4.5,
    reviewCount: 3421,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'fitness',
    isBestPick: true,
    isBestOverall: true,
  },
  {
    id: '5',
    title: 'Minimalist Carry-On Luggage',
    description: 'Lightweight hardshell with USB charging port.',
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3d131b6?w=400&h=300&fit=crop',
    imageAlt: 'Carry-on luggage',
    price: '$189',
    rating: 4.9,
    reviewCount: 567,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'travel',
  },
  {
    id: '6',
    title: 'Ceramic Coffee Maker',
    description: 'Programmable drip coffee maker with thermal carafe.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    imageAlt: 'Coffee maker',
    price: '$79',
    rating: 4.4,
    reviewCount: 1892,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'food',
  },
  {
    id: '7',
    title: 'Ergonomic Office Chair',
    description: 'Lumbar support, adjustable arms, breathable mesh.',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop',
    imageAlt: 'Office chair',
    price: '$299',
    rating: 4.7,
    reviewCount: 456,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'business-services',
  },
  {
    id: '8',
    title: 'Cordless Drill Kit',
    description: '20V drill driver with 2 batteries and carrying case.',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop',
    imageAlt: 'Cordless drill',
    price: '$149',
    rating: 4.8,
    reviewCount: 2104,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'diy',
    isBestPick: true,
    isBestOverall: true,
  },
  {
    id: '9',
    title: 'Classic Leather Handbag',
    description: 'Handcrafted full-grain leather, timeless design.',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop',
    imageAlt: 'Leather handbag',
    price: '$198',
    rating: 4.6,
    reviewCount: 334,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'fashion',
  },
  {
    id: '10',
    title: 'Noise Machine for Sleep',
    description: 'White noise, nature sounds, and gentle alarm.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop',
    imageAlt: 'Sleep sound machine',
    price: '$49',
    rating: 4.5,
    reviewCount: 5678,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'health-wellness',
  },
  {
    id: '11',
    title: 'Modern Table Lamp',
    description: 'LED dimmable lamp with USB port, multiple finishes.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop',
    imageAlt: 'Table lamp',
    price: '$65',
    rating: 4.4,
    reviewCount: 892,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'home-decor',
  },
  {
    id: '12',
    title: 'High-Yield Savings Account',
    description: 'Competitive APY, no fees, FDIC insured.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    imageAlt: 'Savings',
    price: 'N/A',
    rating: 4.7,
    affiliateUrl: '#affiliate-placeholder',
    categorySlug: 'financial-services',
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Build comparison table data from a list of products (for ProductComparisonTable) */
export function getComparisonDataForProducts(
  productsList: Product[]
): { headers: string[]; rows: { feature: string; values: (string | number)[] }[]; productLinks: string[] } | null {
  if (productsList.length < 2) return null;
  const headers = productsList.map((p) => p.title);
  const productLinks = productsList.map((p) => p.affiliateUrl);
  const rows = [
    { feature: 'Price', values: productsList.map((p) => p.price ?? '—') },
    { feature: 'Rating', values: productsList.map((p) => p.rating) },
    {
      feature: 'Reviews',
      values: productsList.map((p) => (p.reviewCount != null ? p.reviewCount.toLocaleString() : '—')),
    },
  ];
  return { headers, rows, productLinks };
}
