import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/part-one', label: 'Part I — Political Economy' },
  { to: '/part-two', label: 'Part II — American Government' },
  { to: '/scotus', label: 'SCOTUS Browser' },
  { to: '/glossary', label: 'Glossary' },
];

const THEME_KEY = 'lgr-refresher:theme';

function getInitialTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // localStorage disabled — no-op
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header className="sticky top-0 z-40 bg-limestone/85 backdrop-blur border-b border-gold-light/40">
      <div className="max-w-wide mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-3 no-underline">
          <span className="serif text-2xl font-bold text-ink leading-none">LGR</span>
          <span className="sans text-xs uppercase tracking-widest text-gold">
            Refresher
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`sans text-sm transition-colors ${
                    active
                      ? 'text-ink font-medium'
                      : 'text-ink/60 hover:text-ink'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-9 h-9 grid place-items-center rounded-full border border-gold-light/60 hover:border-gold text-ink/70 hover:text-ink transition-colors"
          >
            {theme === 'dark' ? (
              // Sun icon
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              // Moon icon
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
