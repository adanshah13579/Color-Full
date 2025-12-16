'use client';

import ThemeProvider from './ThemeProvider';
import Header from './Header';
import Footer from './Footer';

export default function ClientWrapper({ children }) {
  return (
    <>
      <ThemeProvider />
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </>
  );
}

