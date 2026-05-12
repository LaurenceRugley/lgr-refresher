import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Citation } from '@/data/citations';
import { citations } from '@/data/citations';

type CitationContextType = {
  openCitation: (id: string) => void;
  closeCitation: () => void;
  current: Citation | null;
};

const CitationContext = createContext<CitationContextType | null>(null);

export function CitationProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Citation | null>(null);

  const openCitation = useCallback((id: string) => {
    const c = citations[id];
    if (c) setCurrent(c);
    else console.warn(`Citation not found: ${id}`);
  }, []);

  const closeCitation = useCallback(() => setCurrent(null), []);

  return (
    <CitationContext.Provider value={{ openCitation, closeCitation, current }}>
      {children}
      {current && <CitationModal citation={current} onClose={closeCitation} />}
    </CitationContext.Provider>
  );
}

export function useCitation() {
  const ctx = useContext(CitationContext);
  if (!ctx) throw new Error('useCitation must be used within CitationProvider');
  return ctx;
}

// --- Modal ---
function CitationModal({ citation, onClose }: { citation: Citation; onClose: () => void }) {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="citation-title"
    >
      <div
        className="modal-content animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl leading-none text-ink/60 hover:text-ink"
          aria-label="Close"
        >
          ×
        </button>
        <div className="text-body-sm uppercase tracking-wider text-gold font-medium mb-2">
          Citation
        </div>
        <h3 id="citation-title" className="serif text-display-sm text-ink mb-1">
          {citation.title}
        </h3>
        <p className="text-body-sm text-ink/70 mb-4">
          <span className="font-medium">{citation.authors}</span> ({citation.year}) ·{' '}
          <em>{citation.venue}</em>
        </p>
        {citation.abstract && (
          <div className="callout !my-3 !ml-0">
            <p className="!mb-0 !text-body-sm">{citation.abstract}</p>
          </div>
        )}
        {citation.doi && (
          <div className="mt-4 pt-4 border-t border-gold-light/40">
            <a
              href={`https://doi.org/${citation.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-ink hover:text-gold underline decoration-gold underline-offset-2"
            >
              doi.org/{citation.doi} ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Inline citation chip component ---
export function Cite({ id, label }: { id: string; label?: string }) {
  const { openCitation } = useCitation();
  const c = citations[id];
  if (!c) return <span className="text-red-500">[?{id}]</span>;
  const displayLabel = label || `${c.authors.split(/[,&]/)[0].trim()} ${c.year}`;
  return (
    <button
      className="cite-chip"
      onClick={() => openCitation(id)}
      aria-label={`Citation: ${c.authors} ${c.year}`}
      type="button"
    >
      {displayLabel}
    </button>
  );
}
