'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    // Placeholder: replace with your form API (e.g. Formspree, custom endpoint)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Have a question, suggestion, or partnership idea? We’d love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft sm:p-8"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 block w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 block w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="mt-2 block w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 block w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover disabled:opacity-50 sm:w-auto"
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
