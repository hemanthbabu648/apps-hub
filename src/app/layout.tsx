import { Lusitana } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Apps | Hemanth Babu S',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={lusitana.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
