import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/lib/data/categories';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-neutral-100 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.imageAlt}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-white drop-shadow-sm sm:text-2xl">
          {category.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-neutral-200 sm:line-clamp-none">
          {category.description}
        </p>
        <span className="mt-3 inline-flex items-center text-sm font-medium text-white/90 transition group-hover:text-accent-light">
          Explore
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
