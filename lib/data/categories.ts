export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const categories: Category[] = [
  {
    slug: 'business-services',
    name: 'Business Services',
    description:
      'Tools, software, and services to grow your business. From CRM to marketing automation.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    imageAlt: 'Business and office',
  },
  {
    slug: 'diy',
    name: 'DIY',
    description: 'Projects, tools, and ideas for makers and home improvement enthusiasts.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
    imageAlt: 'DIY tools',
  },
  {
    slug: 'fashion',
    name: 'Fashion',
    description: 'Style guides, wardrobe essentials, and the latest fashion trends.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop',
    imageAlt: 'Fashion and style',
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    description: 'Banking, investing, and money management tools to secure your future.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    imageAlt: 'Finance and money',
  },
  {
    slug: 'fitness',
    name: 'Fitness',
    description: 'Equipment, supplements, and gear for your fitness journey.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    imageAlt: 'Fitness and gym',
  },
  {
    slug: 'food',
    name: 'Food',
    description: 'Kitchen gadgets, ingredients, and food subscriptions worth trying.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    imageAlt: 'Food and cooking',
  },
  {
    slug: 'health-wellness',
    name: 'Health & Wellness',
    description: 'Vitamins, wellness products, and self-care essentials.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop',
    imageAlt: 'Health and wellness',
  },
  {
    slug: 'home-decor',
    name: 'Home Decor',
    description: 'Furniture, decor, and organization to make your space feel like home.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    imageAlt: 'Home decor',
  },
  {
    slug: 'skincare',
    name: 'Skincare',
    description: 'Cleansers, serums, and routines for healthy, glowing skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    imageAlt: 'Skincare products',
  },
  {
    slug: 'tech',
    name: 'Tech',
    description: 'Gadgets, electronics, and software we actually recommend.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    imageAlt: 'Technology',
  },
  {
    slug: 'travel',
    name: 'Travel',
    description: 'Luggage, gear, and travel essentials for every trip.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    imageAlt: 'Travel',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
