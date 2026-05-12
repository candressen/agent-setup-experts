import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Booking Confirmed | Agent Setup Experts',
  description: 'Thanks for booking a call with Agent Setup Experts.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-lg mx-auto">
        <div className="text-5xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">You&apos;re booked!</h1>
        <p className="text-lg text-white/70 mb-8">
          Thanks! We will be in touch soon. Check your email for confirmation.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
