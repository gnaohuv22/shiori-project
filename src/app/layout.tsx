import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiori 祉栞 | Introduce blog",
  description: "Nơi chia sẻ đủ thứ từ game, esports đến công nghệ và giải trí",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased lucky-bg overflow-x-hidden min-h-screen flex flex-col cursor-none`}>
        <CustomCursor />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
