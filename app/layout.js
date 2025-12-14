import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ColorTool - Design Perfect Color Schemes Instantly",
  description: "Explore color palettes, customize objects with colors, and discover the latest color trends. Create perfect color schemes instantly.",
  keywords: "color palette, color scheme, color picker, color customizer, design tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-white">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider />
        <Header />
        <main className="flex-grow bg-white dark:bg-gray-900">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
