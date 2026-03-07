interface ReviewStarsProps {
  rating: number;
  max?: number;
}

export default function ReviewStars({ rating, max = 5 }: ReviewStarsProps) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = max - full - half;

  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`Rating: ${rating} out of ${max}`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`full-${i}`} filled />
      ))}
      {half === 1 && <Star half />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`empty-${i}`} />
      ))}
    </div>
  );
}

function Star({ filled, half }: { filled?: boolean; half?: boolean }) {
  if (half) {
    return (
      <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#e5e7eb" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    );
  }
  return (
    <svg
      className={`h-5 w-5 ${filled ? 'text-amber-400' : 'text-neutral-300'}`}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}
