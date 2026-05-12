import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Flow = {
  id: string;
  from: 'Congress' | 'President' | 'Court';
  to: 'Congress' | 'President' | 'Court';
  label: string;
  examples: string[];
};

const flows: Flow[] = [
  {
    id: 'congress-over-president',
    from: 'Congress',
    to: 'President',
    label: 'Impeach · Override veto · Power of purse',
    examples: [
      'Articles of impeachment require House majority; conviction needs 2/3 Senate',
      'Veto override needs 2/3 in both chambers',
      'No federal money flows without an appropriation',
      'Senate confirms all principal officers',
    ],
  },
  {
    id: 'president-over-congress',
    from: 'President',
    to: 'Congress',
    label: 'Veto · Agenda-setting',
    examples: [
      'Veto returns a bill with objections; pocket veto if Congress adjourns',
      'State of the Union sets the policy frame',
      'Executive agreements bypass treaty ratification',
    ],
  },
  {
    id: 'court-over-congress',
    from: 'Court',
    to: 'Congress',
    label: 'Judicial review',
    examples: [
      'Marbury (1803) — courts can strike down acts of Congress',
      'Statutory interpretation (now without Chevron deference)',
    ],
  },
  {
    id: 'congress-over-court',
    from: 'Congress',
    to: 'Court',
    label: 'Confirm justices · Impeach · Jurisdiction',
    examples: [
      'Senate confirmation of all Article III judges',
      'Impeachment of judges (rarely successful)',
      'Article III §2 jurisdiction-stripping is a real if rarely-used tool',
    ],
  },
  {
    id: 'court-over-president',
    from: 'Court',
    to: 'President',
    label: 'Judicial review',
    examples: [
      'Youngstown (1952) — limits on executive power',
      'Court can rule executive actions unconstitutional',
      'But: Trump v. United States (2024) narrowed presidential criminal exposure for official acts',
    ],
  },
  {
    id: 'president-over-court',
    from: 'President',
    to: 'Court',
    label: 'Appoints justices',
    examples: [
      'Lifetime appointment shapes the Court for a generation',
      'The 2017–2020 appointment window reshaped the Court for the 2024 quartet',
    ],
  },
];

const positions = {
  Congress: { x: '50%', y: '12%' },
  President: { x: '18%', y: '78%' },
  Court: { x: '82%', y: '78%' },
};

export function ChecksBalances() {
  const [open, setOpen] = useState<Flow | null>(null);

  return (
    <div className="diagram-frame !p-6">
      <h4 className="serif text-display-sm text-ink m-0 mb-1 text-center">
        Checks &amp; Balances — Power Flows
      </h4>
      <p className="sans text-xs uppercase tracking-widest text-gold text-center mb-4">
        Click any check for examples
      </p>

      <div className="relative w-full" style={{ aspectRatio: '16 / 11' }}>
        {/* Branch boxes */}
        {(Object.keys(positions) as Array<keyof typeof positions>).map((branch) => (
          <div
            key={branch}
            className="absolute bg-white border-2 border-gold rounded px-5 py-3 shadow-sm"
            style={{
              left: positions[branch].x,
              top: positions[branch].y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <p className="sans text-sm uppercase tracking-widest text-ink font-bold m-0">
              {branch}
            </p>
          </div>
        ))}

        {/* Flow buttons positioned between boxes */}
        <div className="absolute inset-0 grid grid-cols-2 gap-2 pointer-events-none">
          {/* nothing — we render buttons absolutely below */}
        </div>

        {flows.map((f) => {
          const fromPos = positions[f.from];
          const toPos = positions[f.to];
          const midX =
            (parseFloat(fromPos.x) + parseFloat(toPos.x)) / 2;
          const midY =
            (parseFloat(fromPos.y) + parseFloat(toPos.y)) / 2;
          // Nudge two-way flow labels apart
          const isHoriz = f.from !== 'Congress' && f.to !== 'Congress';
          const nudgeY = isHoriz ? (f.from === 'President' ? -6 : 6) : 0;
          const nudgeX = !isHoriz && f.from === 'Congress' ? (f.to === 'President' ? -3 : 3) : 0;
          return (
            <motion.button
              key={f.id}
              onClick={() => setOpen(f)}
              whileHover={{ scale: 1.05 }}
              className="absolute text-[11px] sm:text-xs bg-limestone-dark hover:bg-gold-light/40 border border-gold-light rounded px-2 py-1 max-w-[140px] text-center leading-tight transition-colors"
              style={{
                left: `calc(${midX + nudgeX}% )`,
                top: `calc(${midY + nudgeY}% )`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="block text-ink/80">{f.label}</span>
            </motion.button>
          );
        })}
      </div>

      <p className="serif italic text-body-sm text-ink/60 text-center mt-2 mb-0">
        Ambition counterbalances ambition — Madison's design.
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
                {open.from} → {open.to}
              </p>
              <h3 className="serif text-display-sm text-ink mb-3">{open.label}</h3>
              <ul className="prose-lgr !text-body-sm">
                {open.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
