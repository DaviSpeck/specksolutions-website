import type { Metadata } from "next";

import { Analytics } from "@/components/analytics";
import { ThemeScript } from "@/components/theme-script";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: "/new-favicon.png?v=2", type: "image/png", sizes: "257x253" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" }
    ],
    apple: "/new-favicon.png?v=2",
    shortcut: "/new-favicon.png?v=2"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[color:var(--background)] text-[color:var(--foreground)] antialiased">
        <ThemeScript />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
