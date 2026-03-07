import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Foundation Shops—our mission to help you discover the best products and services through honest reviews and curated recommendations.',
  openGraph: {
    title: 'About Us | Foundation Shops',
    description: 'Our mission to help you discover the best products across every lifestyle.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          About Foundation Shops
        </h1>
        <div className="mt-10 space-y-6 text-lg text-neutral-600">
          <p>
            Foundation Shops is a product discovery and recommendation platform built to help you
            find the best products and services across every area of your life—from tech and
            fitness to travel, home, and wellness.
          </p>
          <p>
            We spend time researching, testing, and comparing so you don’t have to. Our reviews
            and buying guides are written to be honest and useful. When we recommend something,
            we explain why it’s worth your time and money.
          </p>
          <h2 className="text-2xl font-semibold text-neutral-900">How We Make Money</h2>
          <p>
            We may earn a commission when you make a purchase through links on our site. This
            doesn’t change the price you pay and helps us keep the lights on and continue
            producing in-depth content. Our recommendations are never paid placements—we only
            recommend products we believe are genuinely worth considering.
          </p>
          <h2 className="text-2xl font-semibold text-neutral-900">Our Promise</h2>
          <p>
            We’re committed to transparency, accuracy, and putting your interests first. If you
            have questions or suggestions, we’d love to hear from you—reach out through our{' '}
            <a href="/contact" className="font-medium text-accent hover:underline">
              contact page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
