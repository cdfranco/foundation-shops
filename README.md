# Foundation Shops

A modern, SEO-optimized affiliate marketing website built with Next.js 14, React, and Tailwind CSS. The site promotes and reviews products across multiple lifestyle niches with a clean, conversion-focused design.

## Features

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** for styling with custom design tokens
- **Responsive, mobile-first** layout
- **SEO**: metadata, OpenGraph, JSON-LD (Article), sitemap, robots.txt
- **Blog**: listing, individual posts, category tagging, related posts, search
- **Category pages** for 11 niches with featured products and latest articles
- **Affiliate components**: disclosure banner, product cards, “Best Pick” badges, review stars, comparison table, CTAs (e.g. “View Deal”, “Check Price on Amazon”)
- **Newsletter** signup and **contact** form (placeholder endpoints)
- **Sticky navbar**, footer with category links, social sharing

## Niches (Categories)

Business Services, DIY, Fashion, Financial Services, Fitness, Food, Health & Wellness, Home Decor, Skincare, Tech, Travel

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, metadata, Navbar, Footer, AffiliateDisclosure
│   ├── page.tsx            # Homepage (Hero, CategoryGrid, featured blog, Newsletter)
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── blog/
│   │   ├── page.tsx        # Blog listing + search
│   │   └── [slug]/page.tsx # Blog post with related posts, share, schema
│   ├── category/[slug]/    # Dynamic category pages
│   ├── about/
│   └── contact/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── CategoryGrid.tsx
│   ├── CategoryCard.tsx
│   ├── ProductCard.tsx
│   ├── BlogCard.tsx
│   ├── BlogSearch.tsx
│   ├── ReviewStars.tsx
│   ├── ReviewBox.tsx
│   ├── AffiliateButton.tsx
│   ├── AffiliateDisclosure.tsx
│   ├── BestPickBadge.tsx
│   ├── ProductComparisonTable.tsx
│   ├── Newsletter.tsx
│   └── SocialShare.tsx
└── lib/data/
    ├── categories.ts
    ├── products.ts
    └── blog.ts
```

## Customization

- **Affiliate links**: Replace `#affiliate-placeholder` in `lib/data/products.ts` (and anywhere else) with your real affiliate URLs.
- **Newsletter**: Connect the form in `components/Newsletter.tsx` to your email service (e.g. Mailchimp, ConvertKit).
- **Contact form**: Connect `app/contact/page.tsx` to your backend or a service like Formspree.
- **Images**: Category and product images use Unsplash URLs; replace with your own or a CMS.
- **Blog content**: Edit or add posts in `lib/data/blog.ts`, or plug in a headless CMS (e.g. Sanity, Contentful) and keep the same component structure.

## Environment

Optional:

- `NEXT_PUBLIC_SITE_URL` – Used for sitemap, robots, and social share URLs (default: `https://foundationshops.com`).

## License

Private / All rights reserved.
