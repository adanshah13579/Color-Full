import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Theme & Color - Advanced Color Tools for Modern Designers",
  description:
    "Theme & Color helps you design professional, accessible color palettes. Explore generators, contrast checking tools, and in-depth articles on color trends and best practices.",
  keywords:
    "theme and color, themeandcolor, color palette, color scheme, color picker, contrast checker, palette generator, design tools, theme generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  
                  // FORCE REMOVE DARK CLASS FIRST - This is critical
                  root.classList.remove('dark');
                  
                  // Get theme from localStorage
                  let savedTheme = localStorage.getItem('theme');
                  
                  // Default to 'light' if nothing saved or invalid value
                  if (!savedTheme || savedTheme !== 'dark') {
                    savedTheme = 'light';
                    localStorage.setItem('theme', 'light');
                  }
                  
                  // Apply theme
                  if (savedTheme === 'dark') {
                    root.classList.add('dark');
                  } else {
                    root.classList.remove('dark');
                  }
                  
                  // Set body styles immediately when body is available
                  function setBodyStyles() {
                    const body = document.body;
                    if (body) {
                      if (savedTheme === 'dark') {
                        body.style.setProperty('background-color', '#0a0a0a', 'important');
                      } else {
                        body.style.setProperty('background-color', '#ffffff', 'important');
                      }
                    }
                  }
                  
                  // Try to set body styles immediately
                  setBodyStyles();
                  
                  // Also set when DOM is ready
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', setBodyStyles);
                  } else {
                    setBodyStyles();
                  }
                } catch (e) {
                  // Fallback: force light theme
                  document.documentElement.classList.remove('dark');
                  if (document.body) {
                    document.body.style.setProperty('background-color', '#ffffff', 'important');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
