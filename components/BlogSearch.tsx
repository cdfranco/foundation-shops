'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { BlogPost } from '@/lib/data/blog';
import BlogCard from './BlogCard';

interface BlogSearchProps {
  posts: BlogPost[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);

  const filtered = useMemo(() => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase().trim();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [posts, query]);

  return (
    <>
      <div className="mb-8">
        <label htmlFor="blog-search" className="sr-only">
          Search blog posts
        </label>
        <input
          id="blog-search"
          type="search"
          placeholder="Search posts by title, category, or tag…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 sm:max-w-md"
        />
      </div>
      {filtered.length === 0 ? (
        <p className="text-neutral-600">No posts match your search.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
