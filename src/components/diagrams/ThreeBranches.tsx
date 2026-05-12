import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Branch = {
  id: 'legislative' | 'executive' | 'judicial';
  name: string;
  tagline: string;
  body: string;
  powers: string[];
  long: string;
};

const branches: Branch[] = [
  {
    id: 'legislative',
    name: 'Legislative',
    tagline: 'Makes the laws',
    body: 'Congress (House + Senate)',
    powers: ['Lawmaking', 'Taxation & spending', 'Declare war', 'Senate confirmation', 'Oversight', 'Impeachment'],
    long: 'Article I. Bicameral by the Connecticut Compromise — 435 House members apportioned by population (2-year terms), 100 senators (two per state, 6-year staggered terms). Enumerated powers in §8 include commerce, taxation, spending, raising armies, and currency; the Necessary and Proper Clause is the elastic constitutional hook for most modern federal authority since McCulloch (1819).',
  },
  {
    id: 'executive',
    name: 'Executive',
    tagline: 'Enforces the laws',
    body: 'President + Cabinet + Federal Agencies',
    powers: ['Commander-in-Chief', 'Veto', 'Appointment', 'Treaty-making', 'Pardon', 'Take Care Clause'],
    long: 'Article II. The Vesting Clause — "The executive Power shall be vested in a President of the United States" — is the central battleground of modern unitary-executive theory. The administrative presidency runs ~4 million employees across 15 cabinet departments and dozens of independent agencies. Informal powers (executive orders, signing statements, agenda-setting, prosecutorial discretion) have expanded enormously since 1945.',
  },
  {
    id: 'judicial',
    name: 'Judicial',
    tagline: 'Interprets the laws',
    body: 'Supreme Court + Federal Courts',
    powers: ['Judicial review', 'Statutory interpretation', 'Life tenure', 'Final appellate authority'],
    long: 'Article III. Nine Justices on the Supreme Court — but the number is set by statute, not the Constitution. Judicial review (the power to invalidate laws and executive actions) is itself not in the constitutional text; Marshall claimed it in Marbury v. Madison (1803). State courts handle the overwhelming majority of all U.S. litigation in their own parallel hierarchy.',
  },
];

export function ThreeBranches() {
  const [open, setOpen] = useState<Branch | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="diagram-frame">
      <h4 className="serif text-display-sm text-ink m-0 mb-1 text-center">
        The Three Branches of the U.S. Government
      </h4>
      <p className="sans text-xs uppercase tracking-widest text-gold text-center mb-6">
        Hover any branch · click for the full job description
      </p>

      <div className="grid sm:grid-cols-3 gap-3">
        {branches.map((b) => {
          const active = hover === b.id;
          return (
            <button
              key={b.id}
              onClick={() => setOpen(b)}
              onMouseEnter={() => setHover(b.id)}
              onMouseLeave={() => setHover(null)}
              className="text-left bg-white border-2 border-gold/70 rounded p-4 transition-all hover:border-gold hover:shadow-md hover:-translate-y-0.5"
              aria-label={`${b.name} branch — open detail`}
            >
              <p className="sans text-xs uppercase tracking-widest text-ink font-bold mb-1">
                {b.name}
              </p>
              <hr className="border-0 h-px bg-gold w-12 my-2" />
              <p className="serif italic text-body text-ink/80 mb-3">{b.tagline}</p>
              <p className="prose-lgr !text-body-sm !mb-0">{b.body}</p>
              <AnimatePresence>
                {active && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 pt-3 border-t border-gold-light/50 sans text-xs text-ink/70 space-y-1 overflow-hidden"
                  >
                    {b.powers.map((p) => (
                      <li key={p}>· {p}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      <p className="serif italic text-body-sm text-ink/60 text-center mt-6 mb-0">
        Each branch can check the others — that's the design.
      </p>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute top-3 right-3 text-2xl leading-none text-ink/60 hover:text-ink"
                aria-label="Close"
              >
                ×
              </button>
              <p className="sans text-xs uppercase tracking-widest text-gold mb-1">
                {open.name} Branch
              </p>
              <h3 className="serif text-display-sm text-ink mb-3">{open.body}</h3>
              <p className="text-body text-ink/85 mb-4">{open.long}</p>
              <div>
                <p className="sans text-xs uppercase tracking-widest text-gold mb-2">Powers</p>
                <ul className="prose-lgr !text-body-sm">
                  {open.powers.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
