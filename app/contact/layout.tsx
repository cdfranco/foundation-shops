import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Foundation Shops—questions, suggestions, or partnership inquiries.',
  openGraph: {
    title: 'Contact | Foundation Shops',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
