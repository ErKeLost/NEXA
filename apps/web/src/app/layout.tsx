import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXA - Next + Intelligence + Action',
  description: 'AI Coding Ecosystem Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
