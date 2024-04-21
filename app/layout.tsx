import './globals.css';
import type { Metadata } from 'next';
import MainHeader from '@/components/main-header/main-header';

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Fake meals recipes by our community!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
