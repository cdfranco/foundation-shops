import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  getBlogPostBySlug,
  getRelatedPosts,
  blogPosts,
} from '@/lib/data/blog';
import SocialShare from '@/components/SocialShare';
import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Post' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Foundation Shops`,
      description: post.excerpt,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="mt-8 text-2xl font-bold text-neutral-900">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={key++} className="mt-6 text-xl font-semibold text-neutral-900">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith('- **') && line.includes('** –')) {
      const match = line.match(/- \*\*(.+?)\*\* – (.+)/);
      if (match) {
        elements.push(
          <li key={key++} className="ml-4 list-disc">
            <strong>{match[1]}</strong> – {match[2]}
          </li>
        );
      } else {
        elements.push(<li key={key++} className="ml-4 list-disc">{line.slice(2)}</li>);
      }
    } else if (line.startsWith('|') && line.includes('|')) {
      const rows: string[][] = [];
      let j = i;
      while (lines[j]?.startsWith('|')) {
        rows.push(lines[j].split('|').filter(Boolean).map((c) => c.trim()));
        j++;
      }
      i = j - 1;
      const [header, ...body] = rows;
      if (header && body.length > 0) {
        elements.push(
          <div key={key++} className="my-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200 rounded-lg border border-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  {header.map((cell, c) => (
                    <th
                      key={c}
                      className="px-4 py-2 text-left text-sm font-semibold text-neutral-700"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {body.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="px-4 py-2 text-sm text-neutral-600"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    } else if (line.startsWith('1. **')) {
      const match = line.match(/^\d+\. \*\*(.+?)\*\* – (.+)/) || line.match(/^\d+\. (.+)/);
      if (match) {
        elements.push(
          <li key={key++} className="ml-4 list-decimal">
            {match[2] ? <><strong>{match[1]}</strong> – {match[2]}</> : match[1]}
          </li>
        );
      } else {
        elements.push(<li key={key++} className="ml-4 list-decimal">{line.replace(/^\d+\.\s*/, '')}</li>);
      }
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />);
    } else if (line.trim()) {
      elements.push(
        <p key={key++} className="text-neutral-600 leading-relaxed">
          {line}
        </p>
      );
    }
  }

  return <div className="prose-custom">{elements}</div>;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://foundationshops.com';
  const postUrl = `${baseUrl}/blog/${slug}`;

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <header>
          <Link
            href={`/category/${post.categorySlug}`}
            className="text-sm font-medium text-accent hover:underline"
          >
            {post.category}
          </Link>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <time dateTime={post.publishedAt}>{publishedDate}</time>
            <span>{post.readTime} min read</span>
            <span>By {post.author}</span>
          </div>
          <div className="mt-6">
            <SocialShare url={postUrl} title={post.title} />
          </div>
        </header>

        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="mt-10">
          <MarkdownContent content={post.content} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-neutral-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-neutral-900">Related Posts</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Email capture lead magnet */}
      <Newsletter />
    </div>
  );
}
