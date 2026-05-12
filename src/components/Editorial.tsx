import { motion, useScroll, useSpring } from 'framer-motion';
import { type ReactNode } from 'react';

// Editorial kit — drop caps, chapters, pull quotes, codas, rails.

export function DropCap({ children }: { children: string }) {
  const text = String(children);
  const first = text.charAt(0);
  const rest = text.slice(1);
  return (
    <div className="prose-lgr !text-body mb-5">
      <span
        aria-hidden="true"
        className="serif text-[5.5rem] sm:text-[6.5rem] float-left leading-[0.78] mr-3 mt-1 text-gold italic"
      >
        {first}
      </span>
      <span className="sr-only">{first}</span>
      {rest}
      <div className="clear-both" />
    </div>
  );
}

export function Chapter({ n, title }: { n: string; title?: string }) {
  return (
    <div className="my-24 text-center">
      <p
        className="serif italic text-gold leading-none mb-3"
        style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
      >
        {n}
      </p>
      <hr className="border-0 h-px bg-gold-light/70 w-24 mx-auto mb-4" />
      {title && (
        <p className="sans text-xs uppercase tracking-[0.3em] text-ink/60">
          {title}
        </p>
      )}
    </div>
  );
}

export function Pull({
  attribution,
  children,
}: {
  attribution?: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-12 md:my-16 md:-mx-12 lg:-mx-20 px-4">
      <div className="border-l-2 border-gold pl-6 md:pl-10">
        <div
          className="serif italic text-ink leading-[1.2]"
          style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.5rem)' }}
        >
          {children}
        </div>
        {attribution && (
          <figcaption className="sans text-xs uppercase tracking-[0.25em] text-gold/80 mt-4">
            — {attribution}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

export function Coda({ children }: { children?: ReactNode }) {
  return (
    <div className="my-16 text-center">
      <div className="serif italic text-ink/85 text-body-lg mx-auto max-w-[28rem] mb-4 leading-relaxed">
        {children}
      </div>
      <div className="flex items-center justify-center gap-3 text-gold">
        <span className="h-px w-10 bg-gold-light" />
        <span className="serif italic text-base">— L</span>
        <span className="h-px w-10 bg-gold-light" />
      </div>
    </div>
  );
}

// Top-of-page reading progress rail
export function ReadingRail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-50 origin-left pointer-events-none"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export function GradientRule({ tone = 'gold' }: { tone?: 'gold' | 'terracotta' | 'sage' }) {
  const gradient =
    tone === 'terracotta'
      ? 'from-transparent via-[#C68E6E]/60 to-transparent'
      : tone === 'sage'
        ? 'from-transparent via-[#8AA08A]/60 to-transparent'
        : 'from-transparent via-gold/60 to-transparent';
  return (
    <div className="my-16 md:my-20 flex items-center gap-4 max-w-prose mx-auto">
      <div className={`flex-1 h-px bg-gradient-to-r ${gradient}`} />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/70" />
      <div className={`flex-1 h-px bg-gradient-to-r ${gradient}`} />
    </div>
  );
}

// Marginalia / sidebar — a small callout for "Read this through your domain"
// notes (legaltech, dev, music industry). Lives at the right margin on wide,
// inline-block on narrow.
export function Margin({
  label = 'For the operator',
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 md:my-10 md:-mr-32 md:float-right md:w-56 md:ml-6 md:clear-right border-l-2 border-gold-light pl-4">
      <p className="sans text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
        {label}
      </p>
      <div className="prose-lgr !text-body-sm !mb-0 italic text-ink/80">{children}</div>
    </aside>
  );
}
