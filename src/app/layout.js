// src/app/layout.js

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ChatBubble from "./components/chatBubble";
import { ThemeProvider } from "./contexts/ThemeContext";

export const metadata = {
  title: "Hein Thuya Win — Full Stack Developer",
  description: "Portfolio of Hein Thuya Win (Henry), a Full Stack Developer and ICT undergraduate based in Thailand. Specializing in React, Next.js, TypeScript, and AI-powered applications.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "AI", "Portfolio", "Thailand", "Hein Thuya Win", "Henry"],
  authors: [{ name: "Hein Thuya Win" }],
  openGraph: {
    type: "website",
    title: "Hein Thuya Win — Full Stack Developer",
    description: "Portfolio of Hein Thuya Win (Henry), a Full Stack Developer and ICT undergraduate based in Thailand. Specializing in React, Next.js, TypeScript, and AI-powered applications.",
    siteName: "Henry's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hein Thuya Win — Full Stack Developer",
    description: "Portfolio of Hein Thuya Win (Henry), a Full Stack Developer and ICT undergraduate based in Thailand. Specializing in React, Next.js, TypeScript, and AI-powered applications.",
  },
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
                if (savedTheme === 'dark' || !savedTheme) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow max-w-6xl mx-auto px-4 pt-24 pb-8 w-full">{children}</main>
            <ChatBubble />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
