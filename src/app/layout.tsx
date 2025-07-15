import { Lusitana } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import clsx from 'clsx';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: {
    default: "Hemanth Babu S | Apps Hub",
    template: "%s | Hemanth Babu S | Apps Hub",
  },
  description: "A centralized showcase of my applications — with clean design, categorized layout, and instant access to live demos and source code.",
  keywords: ["web development", "Next.js", "React", "JavaScript", "TypeScript", "portfolio", "apps hub", "Hemanth Babu S"],
  authors: [{ name: "Hemanth Babu S" }],
  creator: "Hemanth Babu S",
  publisher: "Hemanth Babu S",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.apps.hemanthbabu648.com/"),
  openGraph: {
    title: "Hemanth Babu S | Apps Hub",
    description: "A centralized showcase of my applications — with clean design, categorized layout, and instant access to live demos and source code.",
    url: "/",
    siteName: "Hemanth Babu S | Apps Hub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Hemanth Babu S | Apps Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanth Babu S | Apps Hub",
    description: "A centralized showcase of my applications — with clean design, categorized layout, and instant access to live demos and source code.",
    images: ["/logo.svg"],
    creator: "@hemanthbabu648",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.svg" },
    ],
    apple: [
      { url: "/logo.svg" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
      <body className={clsx(lusitana.className, 'bg-slate-200')}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
