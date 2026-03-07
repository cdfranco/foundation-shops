'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Placeholder: replace with your newsletter API
    await new Promise((r) => setTimeout(r, 800));
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="border-t border-neutral-200 bg-neutral-900 py-16 text-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Get the best deals and recommendations
        </h2>
        <p className="mt-3 text-neutral-300">
          Join our newsletter for weekly roundups, exclusive guides, and early access to new reviews.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="min-w-0 flex-1 rounded-xl border border-neutral-600 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-sm text-green-400">Thanks for subscribing! Check your inbox.</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
