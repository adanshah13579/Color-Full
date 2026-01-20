'use client';

import { ThemeProvider } from '../contexts/ThemeContext';
import Header from './Header';
import Footer from './Footer';

export default function ClientWrapper({ children }) {
  return (
    <ThemeProvider>
      <Header />
      <main className="flex-grow min-h-screen bg-white dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}

