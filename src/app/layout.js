// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

// Load fonts with CSS variable support
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Henry's Portfolio",
  description: "Showcasing projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">{children}</main>
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
