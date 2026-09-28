import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { profile } from "@/data/profile";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";
import { defaultTitle } from "@/lib/metadata";

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
        <Header />
        <main id="main">{children}</main>
         <Footer />
      </ThemeProvider>
    </body>
  </html>
  );
}