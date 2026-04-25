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

const SITE_URL = "https://themeandcolor.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Theme & Color — Advanced Color Tools for Modern Designers',
    template: '%s | Theme & Color',
  },
  description: 'Professional color tools for designers and developers. Generate accessible palettes, check WCAG contrast, and document color systems.',
  keywords:
    "theme and color, themeandcolor, color palette, color scheme, color picker, contrast checker, palette generator, design tools, theme generator, WCAG contrast",
  authors: [{ name: "Theme & Color", url: SITE_URL }],
  creator: "Theme & Color",
  publisher: "Theme & Color",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: 'Theme & Color',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Theme & Color — Color Tools for Designers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@themeandcolor',
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // When you get Google Search Console verification code, add: google: "your-code"
    // When you add AdSense, add: other: { "google-site-verification": "..." } if provided
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Theme & Color",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Theme & Color",
      description: "Advanced color tools for designers: palette generator, contrast checker, and color design articles.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
