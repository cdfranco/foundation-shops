import { blogPosts } from '@/lib/data/blog';
import BlogSearch from '@/components/BlogSearch';
import Newsletter from '@/components/Newsletter';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Product reviews, buying guides, top 10 lists, and tutorials across lifestyle, tech, fitness, travel, and more.',
  openGraph: {
    title: 'Blog | Foundation Shops',
    description: 'Product reviews, buying guides, and lifestyle recommendations.',
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Honest reviews, buying guides, top 10 lists, and tutorials to help you choose the best products and services.
          </p>
        </header>

        <Suspense fallback={<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">Loading…</div>}>
          <BlogSearch posts={sorted} />
        </Suspense>

        <div className="mt-16">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
