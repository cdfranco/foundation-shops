import Link from 'next/link';

interface AffiliateButtonProps {
  href: string;
  label: string;
  className?: string;
  external?: boolean;
}

export default function AffiliateButton({
  href,
  label,
  className = '',
  external = true,
}: AffiliateButtonProps) {
  const baseClass =
    'inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`${baseClass} ${className}`}
      >
        {label}
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClass} ${className}`}>
      {label}
    </Link>
  );
}
