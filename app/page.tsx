import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';
import { blogPosts } from '@/lib/data/blog';
import Link from 'next/link';

export default function HomePage() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />
      <CategoryGrid />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                From the Blog
              </h2>
              <p className="mt-2 text-lg text-neutral-600">
                Latest reviews, guides, and roundups from our team.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-accent hover:underline"
            >
              View all posts →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
