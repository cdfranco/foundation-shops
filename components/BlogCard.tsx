import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/lib/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-neutral-300">
      <Link href={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          <span>{date}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
          <span>·</span>
          <Link
            href={`/category/${post.categorySlug}`}
            className="font-medium text-accent hover:underline"
          >
            {post.category}
          </Link>
        </div>
        <h2 className="mt-2 text-lg font-semibold text-neutral-900 line-clamp-2 group-hover:text-accent">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:underline"
        >
          Read more
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
