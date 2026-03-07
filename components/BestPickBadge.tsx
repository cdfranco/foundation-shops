interface BestPickBadgeProps {
  /** "Best Overall" for #1 pick, "Best Pick" for other highlights */
  variant?: 'best-overall' | 'best-pick';
}

export default function BestPickBadge({ variant = 'best-pick' }: BestPickBadgeProps) {
  const label = variant === 'best-overall' ? 'Best Overall' : 'Best Pick';
  const isOverall = variant === 'best-overall';

  return (
    <span
      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold text-white shadow ${
        isOverall ? 'bg-emerald-600' : 'bg-amber-500'
      }`}
    >
      {label}
    </span>
  );
}
