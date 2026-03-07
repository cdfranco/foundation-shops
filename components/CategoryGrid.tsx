import { categories } from '@/lib/data/categories';
import CategoryCard from './CategoryCard';

export default function CategoryGrid() {
  return (
    <section id="categories" className="bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-neutral-600">
            Browse our curated picks across lifestyle, tech, wellness, and more.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
