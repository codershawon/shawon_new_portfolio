import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { profile } from "@/data/profile";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Footer } from "@/components/layout/Footer";

const mainFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Full-stack web developer in Chattogram, Bangladesh. I build healthcare systems, SaaS tools and Shopify apps with React, Next.js, TypeScript, Node.js and Prisma.",
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