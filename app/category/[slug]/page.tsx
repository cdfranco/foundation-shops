import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/data/categories';
import { getProductsByCategory, getComparisonDataForProducts } from '@/lib/data/products';
import { getBlogPostsByCategory } from '@/lib/data/blog';
import ProductCard from '@/components/ProductCard';
import BlogCard from '@/components/BlogCard';
import ProductComparisonTable from '@/components/ProductComparisonTable';
import Newsletter from '@/components/Newsletter';
import { categories } from '@/lib/data/categories';

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: 'Category' };
  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | Foundation Shops`,
      description: category.description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);
  const posts = getBlogPostsByCategory(slug);
  const topThree = products.slice(0, 3);
  const moreProducts = products.length > 3 ? products.slice(3) : [];
  const comparisonData = getComparisonDataForProducts(products);

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="relative h-64 overflow-hidden bg-neutral-900 sm:h-80">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {category.name}
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-neutral-200">
            {category.description}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {products.length > 0 && (
          <>
            {/* Top 3 product section */}
            {topThree.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-neutral-900">
                  Top 3 Picks in {category.name}
                </h2>
                <p className="mt-1 text-neutral-600">
                  Our top recommendations in {category.name.toLowerCase()}.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {topThree.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}

            {/* Product comparison table */}
            {comparisonData && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-neutral-900">Compare These Picks</h2>
                <p className="mt-1 text-neutral-600">
                  See how our top picks stack up side by side.
                </p>
                <div className="mt-8">
                  <ProductComparisonTable
                    headers={comparisonData.headers}
                    rows={comparisonData.rows}
                    productLinks={comparisonData.productLinks}
                  />
                </div>
              </section>
            )}

            {/* More products (after top 3) */}
            {moreProducts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-neutral-900">More in {category.name}</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {moreProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {posts.length > 0 && (
          <section className={products.length > 0 ? 'mt-16' : ''}>
            <h2 className="text-2xl font-bold text-neutral-900">Latest Articles</h2>
            <p className="mt-1 text-neutral-600">
              Guides and reviews in {category.name.toLowerCase()}.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {products.length === 0 && posts.length === 0 && (
          <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center">
            <p className="text-neutral-600">
              More recommendations and articles in this category are coming soon. Check back later or{' '}
              <Link href="/" className="font-medium text-accent hover:underline">
                browse other categories
              </Link>
              .
            </p>
          </div>
        )}

        {/* Email capture lead magnet */}
        <div className="mt-16">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
