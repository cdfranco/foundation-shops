export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  categorySlug: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  relatedSlugs?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-wireless-headphones-2024',
    title: 'Best Wireless Headphones of 2024: Our Top Picks',
    excerpt:
      'We tested dozens of wireless headphones. Here are the ones that deliver the best sound, comfort, and battery life.',
    content: `
## Introduction

Choosing the right wireless headphones can be overwhelming. We've spent months testing the top models to help you decide.

## Our Top Picks

1. **Premium Wireless Headphones** – Best overall for most people. Great noise cancellation and 30-hour battery.
2. **Budget Pick** – Solid sound and comfort under $100.
3. **For Runners** – Secure fit and sweat resistance.

## What to Look For

- **Battery life** – Aim for at least 20 hours.
- **Noise cancellation** – Essential for travel and focus.
- **Comfort** – Try them if you can; fit varies.

## Conclusion

Invest in a pair that matches your use case. Our top pick works for most people, but runners and budget shoppers have great options too.
    `.trim(),
    featuredImage:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=500&fit=crop',
    featuredImageAlt: 'Wireless headphones',
    category: 'Tech',
    categorySlug: 'tech',
    author: 'Foundation Shops',
    publishedAt: '2024-03-01',
    readTime: 5,
    tags: ['headphones', 'tech', 'reviews', 'audio'],
    relatedSlugs: ['best-fitness-trackers-2024', 'top-travel-gear'],
  },
  {
    slug: 'best-fitness-trackers-2024',
    title: 'Best Fitness Trackers of 2024: Compare Top Models',
    excerpt:
      'From basic step counters to advanced sports watches, we compare the best fitness trackers for every goal.',
    content: `
## Introduction

Fitness trackers have evolved from simple step counters to full health companions. Here’s how the top models stack up.

## Comparison Table

| Model    | Battery | GPS | Price  |
|----------|---------|-----|--------|
| Premium  | 7 days | Yes | $199  |
| Mid-range| 5 days | Yes | $129  |
| Budget   | 14 days| No  | $49   |

## Our Verdict

For most people, the mid-range option offers the best balance of features and price. Serious athletes may want the premium model.
    `.trim(),
    featuredImage:
      'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&h=500&fit=crop',
    featuredImageAlt: 'Fitness tracker',
    category: 'Fitness',
    categorySlug: 'fitness',
    author: 'Foundation Shops',
    publishedAt: '2024-02-28',
    readTime: 6,
    tags: ['fitness', 'wearables', 'reviews'],
    relatedSlugs: ['best-wireless-headphones-2024', 'top-travel-gear'],
  },
  {
    slug: 'top-travel-gear',
    title: 'Top 10 Travel Gear Essentials You Need in 2024',
    excerpt:
      'Packing smarter, not harder. These 10 items will make every trip smoother and more comfortable.',
    content: `
## Introduction

After hundreds of trips, we've narrowed down the gear that actually earns a place in your bag.

## The List

1. **Quality Carry-On** – Lightweight, durable, with a charging port.
2. **Packing Cubes** – Game-changer for organization.
3. **Noise-Canceling Headphones** – For flights and hotels.
4. **Universal Adapter** – One device, every country.
5. **Reusable Water Bottle** – Collapsible saves space.
6. **Quick-Dry Towel** – For beach and gym.
7. **Portable Charger** – 20,000 mAh minimum.
8. **Travel Pillow** – Ergonomic design matters.
9. **RFID Wallet** – Security and simplicity.
10. **First-Aid Kit** – Compact, comprehensive.

## Conclusion

Start with the carry-on and packing cubes; they'll change how you travel. Add the rest based on your style.
    `.trim(),
    featuredImage:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop',
    featuredImageAlt: 'Travel gear',
    category: 'Travel',
    categorySlug: 'travel',
    author: 'Foundation Shops',
    publishedAt: '2024-02-25',
    readTime: 7,
    tags: ['travel', 'gear', 'packing', 'essentials'],
    relatedSlugs: ['best-wireless-headphones-2024', 'best-fitness-trackers-2024'],
  },
  {
    slug: 'skincare-routine-beginners',
    title: 'Skincare Routine for Beginners: A Simple Guide',
    excerpt:
      'Cleanser, serum, moisturizer, SPF. Learn the basics of a simple, effective skincare routine.',
    content: `
## The Basics

A simple routine has four steps: cleanse, treat, moisturize, protect.

1. **Cleanser** – Use morning and night. Choose based on your skin type.
2. **Serum** – Vitamin C in the morning, retinol at night (once you're ready).
3. **Moisturizer** – Lock in hydration.
4. **SPF** – Every morning, no exceptions.

## Product Recommendations

We've tested dozens of products. Our favorites are linked in the product cards below.
    `.trim(),
    featuredImage:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop',
    featuredImageAlt: 'Skincare products',
    category: 'Skincare',
    categorySlug: 'skincare',
    author: 'Foundation Shops',
    publishedAt: '2024-02-20',
    readTime: 4,
    tags: ['skincare', 'beginners', 'routine'],
    relatedSlugs: ['best-wireless-headphones-2024'],
  },
  {
    slug: 'home-office-setup-guide',
    title: 'Home Office Setup Guide: Desk, Chair, and Accessories',
    excerpt:
      'Create a productive and comfortable home office with our curated picks for desk, chair, and essentials.',
    content: `
## Desk

Choose a desk with enough surface area and cable management. Standing desk options are great if you want to move.

## Chair

Ergonomics matter. Look for lumbar support, adjustable arms, and breathable material. Our top pick is linked below.

## Accessories

- Monitor arm to free up space
- Good lighting (desk lamp or ring light)
- Webcam if you're on video calls often
    `.trim(),
    featuredImage:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop',
    featuredImageAlt: 'Home office',
    category: 'Business Services',
    categorySlug: 'business-services',
    author: 'Foundation Shops',
    publishedAt: '2024-02-15',
    readTime: 5,
    tags: ['home office', 'productivity', 'ergonomics'],
  },
  {
    slug: 'essential-diy-tools-beginners-guide',
    title: 'Essential DIY Tools for Beginners: What to Buy First',
    excerpt:
      'Starting your first DIY project? Here are the tools worth buying first—and what you can skip until you need it.',
    content: `
## Introduction

You don't need a full workshop to start doing it yourself. A few core tools will cover most repairs and small projects. Here's what we recommend buying first.

## Must-Have Starter Kit

1. **Cordless Drill/Driver** – The most versatile power tool. Look for a kit with two batteries so one can charge while you use the other. Our top pick is linked in the DIY category.
2. **Screwdriver Set** – Phillips and flat-head in a few sizes. A quality set lasts years.
3. **Hammer** – A 16-ounce claw hammer handles most tasks.
4. **Measuring Tape** – 25 feet is enough for most home projects.
5. **Level** – A small spirit level keeps shelves and pictures straight.
6. **Utility Knife** – For cutting cardboard, drywall, and opening packages.

## Nice to Have (Add as You Go)

- **Pliers** – Needle-nose and slip-joint cover most uses.
- **Adjustable Wrench** – For plumbing and furniture assembly.
- **Safety Gear** – Glasses and hearing protection when you use power tools.

## Comparison at a Glance

| Tool           | Budget option | Best value |
|----------------|---------------|------------|
| Cordless drill | Basic 12V     | 20V with 2 batteries |
| Screwdrivers  | 6-piece set   | 15-piece with storage |
| Hammer         | Claw, 16 oz   | Same + rubber mallet later |

## Bottom Line

Start with a drill, screwdrivers, hammer, tape measure, level, and utility knife. Add the rest when a project demands it. Check our DIY category for our top tool recommendations and current deals.
    `.trim(),
    featuredImage:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop',
    featuredImageAlt: 'Cordless drill and DIY tools',
    category: 'DIY',
    categorySlug: 'diy',
    author: 'Foundation Shops',
    publishedAt: '2024-03-10',
    readTime: 5,
    tags: ['diy', 'tools', 'beginners', 'home improvement'],
    relatedSlugs: ['home-office-setup-guide', 'top-travel-gear'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const slugs = post.relatedSlugs || [];
  return slugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => p != null)
    .slice(0, limit);
}
