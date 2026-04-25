import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'Southfork Sealcoat',
  description: 'Premium residential sealcoating for Rigby, Rexburg, Idaho Falls, and Ammon.',
  metadataBase: new URL('https://southforksealcoat.local'),
  icons: {
    icon: '/brand/logo.png',
    shortcut: '/brand/logo.png',
    apple: '/brand/logo.png'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
