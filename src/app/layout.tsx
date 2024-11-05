import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';
import OnchainProviders from '../components/OnchainProviders';
import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Chainable Guru',
  description: 'Cross-Chain DeFi Platform',
  openGraph: {
    title: 'Chainable Guru',
    description: 'Cross-Chain DeFi Platform',
    images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>
          {children}
        </OnchainProviders>
      </body>
    </html>
  );
}
