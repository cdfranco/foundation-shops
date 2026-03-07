import Image from 'next/image';
import type { Product } from '@/lib/data/products';
import ReviewStars from './ReviewStars';
import AffiliateButton from './AffiliateButton';
import BestPickBadge from './BestPickBadge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:border-neutral-300">
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {(product.isBestOverall || product.isBestPick) && (
          <div className="absolute top-3 left-3">
            <BestPickBadge variant={product.isBestOverall ? 'best-overall' : 'best-pick'} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-neutral-900 line-clamp-2">
          {product.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
          {product.description}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <ReviewStars rating={product.rating} />
          {product.reviewCount != null && (
            <span className="text-sm text-neutral-500">
              ({product.reviewCount.toLocaleString()})
            </span>
          )}
        </div>
        {product.price && (
          <p className="mt-2 text-sm font-medium text-neutral-700">{product.price}</p>
        )}
        <div className="mt-auto pt-4">
          <AffiliateButton
            href={product.affiliateUrl}
            label={product.ctaLabel ?? 'View Deal'}
            className="w-full"
          />
        </div>
      </div>
    </article>
  );
}
