import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { glossary } from '@/data/glossary';

export function GlossaryPage() {
  const [query, setQuery] = useState('');

  const sorted = useMemo(
    () =>
      [...glossary].sort((a, b) =>
        a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }),
      ),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sorted;
    return sorted.filter((entry) => {
      const hay = [
        entry.term,
        entry.definition,
        ...(entry.aliases ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [sorted, query]);

  return (
    <main className="max-w-prose mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="sans text-sm uppercase tracking-widest text-gold mb-2">Reference</p>
        <h1 className="serif text-display-xl text-ink leading-none mb-2">Glossary</h1>
        <hr className="border-0 h-[2px] bg-gold w-32 my-6" />
        <p className="prose-lgr text-body-lg !mb-8">
          Working definitions of the terms that show up most often in political and legal
          commentary. Use the search to jump straight to what you need.
        </p>
      </motion.div>

      <div className="sticky top-[68px] z-20 bg-limestone/95 backdrop-blur py-3 mb-6 border-b border-gold-light/40">
        <label className="block">
          <span className="sr-only">Search glossary</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the glossary…"
            className="w-full px-4 py-2 border border-gold-light/60 rounded sans text-body bg-white text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold"
          />
        </label>
        <p className="sans text-xs uppercase tracking-widest text-gold/70 mt-2">
          {filtered.length} term{filtered.length === 1 ? '' : 's'}
          {query && <> · matching "{query}"</>}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="prose-lgr italic text-ink/70">
          No terms match that search. Try a partial word or an alias.
        </p>
      ) : (
        <dl className="space-y-6">
          {filtered.map((entry) => (
            <motion.div
              key={entry.term}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="border-l-2 border-gold-light pl-4"
            >
              <dt className="serif text-display-sm text-ink mb-1">{entry.term}</dt>
              {entry.aliases && entry.aliases.length > 0 && (
                <p className="sans text-xs uppercase tracking-widest text-gold/70 mb-1">
                  also: {entry.aliases.join(', ')}
                </p>
              )}
              <dd className="prose-lgr !text-body !mb-1">{entry.definition}</dd>
              {entry.sectionId && (
                <p className="sans text-xs uppercase tracking-widest text-gold mt-2">
                  <Link to={`/${entry.sectionId}`} className="hover:underline">
                    Discussed in {entry.sectionId === 'part-one' ? 'Part I' : 'Part II'} →
                  </Link>
                </p>
              )}
            </motion.div>
          ))}
        </dl>
      )}
    </main>
  );
}
