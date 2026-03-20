// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import ChatBubble from "./components/chatBubble";
import { ThemeProvider } from "./contexts/ThemeContext";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: 'swap', 
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: 'swap',
  preload: false, 
});

export const metadata = {
  title: "Henry's Portfolio",
  description: "Showcasing projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark' || (!savedTheme && true)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased" style={{fontFamily: 'Poppins, sans-serif'}}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow max-w-6xl mx-auto px-4 py-8 w-full">{children}</main>
            <ScrollToTop />
            <ChatBubble />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
