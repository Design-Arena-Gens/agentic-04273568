import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'What is Civics? | Civic Compass',
  description: 'Learn what civics is, why it matters, and how civic engagement shapes democratic societies.',
  metadataBase: new URL('https://agentic-04273568.vercel.app'),
  openGraph: {
    title: 'What is Civics? | Civic Compass',
    description: 'A comprehensive primer on civics, public participation, and democratic life.',
    url: 'https://agentic-04273568.vercel.app',
    siteName: 'Civic Compass',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What is Civics? | Civic Compass',
    description: 'Understand civic life, civic engagement, and how citizens power democracy.',
    creator: '@civic_compass'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
