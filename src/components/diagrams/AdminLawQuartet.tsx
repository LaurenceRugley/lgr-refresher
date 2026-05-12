import { motion } from 'framer-motion';

type Case = {
  id: string;
  shortName: string;
  fullName: string;
  date: string;
  holding: string;
  effect: string;
  scholar: string;
  scholarTake: string;
  color: string;
};

const cases: Case[] = [
  {
    id: 'loper-bright',
    shortName: 'Loper Bright',
    fullName: 'Loper Bright Enterprises v. Raimondo',
    date: 'June 28, 2024',
    holding:
      'Overruled Chevron deference. The APA requires courts to exercise independent judgment about what statutes mean rather than deferring to reasonable agency interpretations of ambiguous statutes.',
    effect:
      'Forty years of administrative law unsettled. Agencies retain only the weaker Skidmore form of deference. About 18,000 prior Chevron citations are stranded as persuasive but no longer binding under that framework.',
    scholar: 'Cass Sunstein, "Our Marbury"',
    scholarTake:
      'Treats Loper Bright as part of administrative law\'s "Grand Narrative" of judicial reassertion — a long-running line of cases where courts pull authority back from agencies — while warning that the practical consequences depend on implementation and whether Congress responds.',
    color: '#7E343A',
  },
  {
    id: 'corner-post',
    shortName: 'Corner Post',
    fullName: 'Corner Post v. Federal Reserve',
    date: 'July 1, 2024',
    holding:
      'The default six-year APA limitations clock runs from when a plaintiff is injured by a rule, not from when the agency issued it.',
    effect:
      'Old rules — including ones thought long-settled — become newly challengeable by newly affected parties. Justice Jackson dissented, warning of a "tsunami of lawsuits" combined with Loper Bright.',
    scholar: 'Adrian Vermeule, "The Old Regime and the Loper Bright Revolution"',
    scholarTake:
      'Adopts the language of revolution but argues the Court is revealing a deeper constitutional settlement rather than inventing one. Anti-deference rulings still leave agencies room to claim delegated policymaking authority.',
    color: '#3E5C76',
  },
  {
    id: 'jarkesy',
    shortName: 'Jarkesy',
    fullName: 'SEC v. Jarkesy',
    date: 'June 27, 2024',
    holding:
      'The Seventh Amendment requires jury trials when the SEC seeks civil penalties for securities fraud — rather than allowing the agency to adjudicate such cases internally through administrative law judges.',
    effect:
      'Sharply limits in-house agency adjudication. Casts doubt on similar enforcement mechanisms across the regulatory state — FERC, NLRB, OSHA, EEOC, and others.',
    scholar: 'Gillian Metzger, "The Court\'s Distrust of the Administrative State"',
    scholarTake:
      'Characterizes the quartet as a coherent project of anti-administrativism: distrust of expert agencies that strengthens presidential power while weakening regulatory institutions. The New Deal bargain — delegated expert policymaking under judicial restraint — is being replaced.',
    color: '#7A6238',
  },
  {
    id: 'trump-immunity',
    shortName: 'Trump v. United States',
    fullName: 'Trump v. United States',
    date: 'July 1, 2024',
    holding:
      'Former presidents have absolute immunity from criminal prosecution for acts within their core constitutional authority, presumptive immunity for other official acts, and no immunity for unofficial acts.',
    effect:
      'Doesn\'t address administrative law directly. But by reading executive power expansively, it strengthens the modern presidency and reinforces the Court\'s willingness to recenter constitutional gravity around the White House.',
    scholar: 'Anuj Desai, "Loper Bright as Jurisprudence"',
    scholarTake:
      'Argues the 2024 quartet is best understood as an "expressive act" signaling skepticism toward the administrative state rather than a single knockout blow — though it may still increase invalidations and reshape agency behavior in the medium term.',
    color: '#2A2218',
  },
];

export function AdminLawQuartet() {
  return (
    <div className="diagram-frame !p-0 overflow-hidden">
      <div className="bg-limestone-dark border-b border-gold-light/40 p-4">
        <h4 className="serif text-display-sm text-ink m-0">
          The Four Cases That Reshaped Administrative Law
        </h4>
        <p className="sans text-xs uppercase tracking-widest text-gold/80 mt-1">
          June 27 – July 1, 2024 · five days
        </p>
      </div>

      <div className="divide-y divide-gold-light/40">
        {cases.map((c, i) => (
          <motion.article
            key={c.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="p-6 grid sm:grid-cols-[10rem,1fr] gap-4 sm:gap-6"
          >
            <div className="border-l-4 pl-4 sm:border-l-[6px] sm:pl-5" style={{ borderColor: c.color }}>
              <p className="sans text-xs uppercase tracking-widest text-gold mb-1">{c.date}</p>
              <p className="serif italic text-display-sm text-ink leading-tight">{c.shortName}</p>
              <p className="sans text-xs text-ink/60 mt-1">{c.fullName}</p>
            </div>
            <div>
              <p className="sans text-xs uppercase tracking-widest text-ink/70 font-bold mb-1">
                Holding
              </p>
              <p className="prose-lgr !text-body !mb-3">{c.holding}</p>
              <p className="sans text-xs uppercase tracking-widest text-ink/70 font-bold mb-1">
                Effect
              </p>
              <p className="prose-lgr !text-body-sm !mb-4">{c.effect}</p>
              <div className="bg-limestone-dark/60 border-l-2 border-gold p-3 rounded-r">
                <p className="sans text-xs uppercase tracking-widest text-gold/80 mb-1">
                  Scholarly response
                </p>
                <p className="serif italic text-body-sm text-ink/80 mb-1">{c.scholar}</p>
                <p className="prose-lgr !text-body-sm !mb-0">{c.scholarTake}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
