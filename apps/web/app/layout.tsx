import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXA Agent Console",
  description:
    "Full-stack AI agent workspace for Next.js + Drizzle + Neon with Mastra orchestration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gradient-to-br from-[#0b1224] via-[#0d182f] to-[#0b1224] text-foreground antialiased">
        <QueryProvider>
          <div className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(88,131,255,0.14),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(148,163,255,0.12),transparent_20%)]">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
