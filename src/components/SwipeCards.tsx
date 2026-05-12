import { useRef, useState, useEffect, type ReactNode } from 'react';
import { motion } from 'framer-motion';

export type SwipeCard = {
  label: string;
  title: string;
  body: string;
  emoji?: string;
  tone?: 'cream' | 'gold' | 'terracotta' | 'sage' | 'ink';
};

const toneBg: Record<NonNullable<SwipeCard['tone']>, string> = {
  cream: 'from-[#FAF7F2] to-[#EFE9DE]',
  gold: 'from-[#F5E9C8] to-[#D4BC93]',
  terracotta: 'from-[#F0DCD0] to-[#E1B59B]',
  sage: 'from-[#E0E6DA] to-[#B9C8AF]',
  ink: 'from-[#3A3024] to-[#2A2218]',
};
const toneText: Record<NonNullable<SwipeCard['tone']>, string> = {
  cream: 'text-ink',
  gold: 'text-ink',
  terracotta: 'text-ink',
  sage: 'text-ink',
  ink: 'text-limestone',
};

export function SwipeCards({
  title,
  cards,
  children,
}: {
  title?: string;
  cards: SwipeCard[];
  children?: ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth;
        const i = Math.round(el.scrollLeft / (w * 0.85));
        setActive(Math.min(Math.max(i, 0), cards.length - 1));
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [cards.length]);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <section className="my-14 md:my-20 md:-mx-10 lg:-mx-20">
      {(title || children) && (
        <div className="px-6 mb-5 max-w-prose mx-auto">
          {title && (
            <p className="sans text-xs uppercase tracking-[0.3em] text-gold mb-1">
              swipe →
            </p>
          )}
          {title && (
            <h3 className="serif text-display-sm md:text-display-md text-ink mt-0 mb-2">
              {title}
            </h3>
          )}
          {children}
        </div>
      )}
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
      >
        <style>{`
          .swipe-scroll::-webkit-scrollbar { display: none; }
        `}</style>
        {cards.map((c, i) => {
          const tone = c.tone ?? 'cream';
          return (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`flex-none snap-center bg-gradient-to-br ${toneBg[tone]} ${toneText[tone]} rounded-2xl p-7 shadow-[0_8px_30px_-12px_rgba(42,34,24,0.18)] border border-gold-light/40`}
              style={{
                width: 'min(85vw, 22rem)',
                aspectRatio: '5 / 6',
              }}
            >
              <div className="flex flex-col h-full">
                {c.emoji && (
                  <div className="text-4xl leading-none mb-3">{c.emoji}</div>
                )}
                <p className="sans text-xs uppercase tracking-[0.25em] opacity-70 mb-2">
                  {c.label}
                </p>
                <h4 className="serif text-2xl md:text-3xl leading-tight mb-3 mt-0">
                  {c.title}
                </h4>
                <p className="sans text-sm leading-relaxed opacity-90 m-0">
                  {c.body}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
      <div className="flex justify-center gap-1.5 mt-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Card ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              active === i ? 'bg-gold w-8' : 'bg-gold-light/60 w-1.5'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
