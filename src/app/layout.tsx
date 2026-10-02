import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { profile } from "@/data/profile";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";
import { defaultTitle } from "@/lib/metadata";
import Link from "next/link";

const mainFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFont.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Link
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-semibold focus:text-on-brand"
          >
            Skip to content
          </Link>

          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}