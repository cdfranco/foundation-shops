import ReviewStars from './ReviewStars';

interface ReviewBoxProps {
  title: string;
  rating: number;
  summary: string;
  pros?: string[];
  cons?: string[];
  verdict?: string;
  children?: React.ReactNode;
}

export default function ReviewBox({
  title,
  rating,
  summary,
  pros,
  cons,
  verdict,
  children,
}: ReviewBoxProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
        <div className="flex items-center gap-2">
          <ReviewStars rating={rating} />
          <span className="text-sm font-medium text-neutral-600">{rating}/5</span>
        </div>
      </div>
      <p className="mt-4 text-neutral-600">{summary}</p>

      {pros && pros.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-green-700">Pros</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-600">
            {pros.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {cons && cons.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-700">Cons</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-600">
            {cons.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {verdict && (
        <div className="mt-6 rounded-xl bg-accent-light p-4">
          <h3 className="text-sm font-semibold text-accent-hover">Our Verdict</h3>
          <p className="mt-2 text-neutral-800">{verdict}</p>
        </div>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
