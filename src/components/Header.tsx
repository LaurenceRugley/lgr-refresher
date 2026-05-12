import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/part-one', label: 'Part I — Political Economy' },
  { to: '/part-two', label: 'Part II — American Government' },
  { to: '/scotus', label: 'SCOTUS Browser' },
  { to: '/glossary', label: 'Glossary' },
];

export function Header() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 bg-limestone/85 backdrop-blur border-b border-gold-light/40">
      <div className="max-w-wide mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-baseline gap-3 no-underline">
          <span className="serif text-2xl font-bold text-ink leading-none">LGR</span>
          <span className="sans text-xs uppercase tracking-widest text-gold">
            Refresher
          </span>
        </Link>
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
      </div>
    </header>
  );
}
