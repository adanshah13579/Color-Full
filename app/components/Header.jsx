'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const toolsSubLinks = [
  { href: '/tools', label: 'All tools' },
  { href: '/tools/palette-generator', label: 'Palette generator' },
  { href: '/tools/contrast-checker', label: 'Contrast checker' },
  { href: '/tools/color-mixer', label: 'Color Mixer' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm"
      style={theme === 'light' ? { backgroundColor: '#ffffff' } : {}}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              {/* Color circles logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-blue-500 absolute -top-1 -left-1 shadow-md"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500 absolute top-0 right-0 shadow-md"></div>
                <div className="w-6 h-6 rounded-full bg-pink-500 absolute -bottom-1 -right-1 shadow-md"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-400 absolute bottom-0 left-0 shadow-md"></div>
              </div>
              {/* Overlay circle for depth */}
              <div className="absolute inset-0 rounded-full bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Theme & Color
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              style={theme === 'light' ? { color: '#111827' } : {}}
            >
              Home
            </Link>
            <div className="relative group">
              <Link
                href="/tools"
                className="inline-flex items-center gap-1 text-gray-900 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-medium"
                style={theme === 'light' ? { color: '#111827' } : {}}
                aria-haspopup="menu"
              >
                Tools
                <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div
                className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-150 z-50 min-w-[14rem]"
                role="menu"
              >
                <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg py-1">
                  {toolsSubLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-700 dark:hover:text-purple-300"
                      role="menuitem"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link 
              href="/blog" 
              className="text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              style={theme === 'light' ? { color: '#111827' } : {}}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              style={theme === 'light' ? { color: '#111827' } : {}}
            >
              Contact
            </Link>
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleTheme();
              }}
              className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Current: ${theme} theme - Click to switch`}
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen((o) => !o)}
                className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-700 dark:hover:to-pink-700 transition-all duration-200 shadow-md"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-menu"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4 px-2 space-y-1 bg-white dark:bg-gray-900"
          >
            <Link
              href="/"
              className="block px-3 py-2 rounded-lg text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Tools</p>
            {toolsSubLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block pl-6 pr-3 py-2 rounded-lg text-gray-800 dark:text-gray-200 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/blog"
              className="block px-3 py-2 rounded-lg text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-lg text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
