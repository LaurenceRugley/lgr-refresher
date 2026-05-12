import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '@/hooks/useProgress';
import { ScrollIntro } from '@/components/ScrollIntro';
import { GradientRule } from '@/components/Editorial';
import { CapitalStack, ScalesAndGavel, Compass } from '@/components/Illustrations';

export function Home() {
  const { state } = useProgress();
  const totalCitationsViewed = state.citationsViewed.length;
  const totalQuizzes = Object.keys(state.quizzes).length;

  return (
    <>
      {/* HERO */}
      <header className="relative max-w-prose mx-auto px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="sans text-xs uppercase tracking-[0.35em] text-gold mb-6">
            LGR Capital Investments · Interactive Refresher
          </p>
          <h1
            className="serif text-ink leading-[0.95] mb-3"
            style={{ fontSize: 'clamp(2.5rem, 13vw, 6rem)' }}
          >
            Political
          </h1>
          <h1
            className="serif italic text-ink leading-[0.95] mb-2"
            style={{ fontSize: 'clamp(2.5rem, 13vw, 6rem)' }}
          >
            Economy
          </h1>
          <h1
            className="serif text-ink leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 13vw, 6rem)' }}
          >
            <span className="italic text-gold/80 mr-2">&amp;</span>
            American Govt.
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <Compass size={32} className="text-gold" />
            <span className="h-px w-12 bg-gold" />
          </div>
          <p className="prose-lgr text-body-lg !mb-2 max-w-[36rem]">
            A working reference for the systems and institutions that shape contemporary
            political and economic argument. Built around peer-reviewed research and the
            major doctrinal cases — with diagrams, knowledge checks, and inline citations
            you can actually click on.
          </p>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="mt-16 flex items-center gap-2 text-gold sans text-xs uppercase tracking-[0.3em]"
          >
            <span>scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </header>

      {/* SCROLLYTELLING — code as economy */}
      <ScrollIntro />

      {/* TRANSITION */}
      <section className="max-w-prose mx-auto px-6 pt-12 md:pt-16">
        <p className="dot-rule sans text-xs uppercase tracking-[0.3em] text-gold/80 text-center mb-6">
          contents
        </p>
        <h2 className="serif text-display-md md:text-display-lg text-ink text-center leading-[1.1] mb-4">
          Two parts. Built to be skimmed or read.
        </h2>
        <p className="prose-lgr text-body-lg text-center mx-auto max-w-[34rem] !mb-0">
          Political economy first — capitalism, socialism, communism, Keynes,
          and what the empirical literature actually finds. Then the American
          constitutional order, top to bottom, including the 2024 admin-law revolution.
        </p>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-wide mx-auto px-6 mt-12 md:mt-16 grid md:grid-cols-2 gap-6"
      >
        <PartCard
          number="I"
          title="Political Economy"
          subtitle="The three systems, properly defined"
          description="Capitalism, socialism, communism — their lineages, varieties, critiques, and what the modern empirical literature actually finds. Includes Keynes & macroeconomic management and the 21st-century Marxist revival."
          to="/part-one"
          sectionCount={5}
          accent="gold"
          ill={<CapitalStack size={84} className="text-ink/70" />}
        />
        <PartCard
          number="II"
          title="American Government"
          subtitle="Structure & mechanics"
          description="Articles I, II, and III in working order. Checks & balances, federalism, elections, campaign finance — and the 2024 administrative-law revolution that just rewrote 40 years of doctrine."
          to="/part-two"
          sectionCount={7}
          accent="sage"
          ill={<ScalesAndGavel size={120} className="text-ink/70" />}
        />
      </motion.section>

      <GradientRule />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-wide mx-auto px-6"
      >
        <p className="dot-rule sans text-xs uppercase tracking-[0.3em] text-gold/80 text-center mb-6">
          reference tools
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <ToolCard
            title="SCOTUS Case Browser"
            description="Filterable timeline of 18 major structural decisions, 1803–2024. Click any case for context."
            to="/scotus"
          />
          <ToolCard
            title="Glossary"
            description="Working definitions of the terms that show up most often in political and legal commentary."
            to="/glossary"
          />
        </div>
      </motion.section>

      {(totalCitationsViewed > 0 || totalQuizzes > 0) && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-prose mx-auto px-6 mt-12 callout"
        >
          <p className="!mb-0">
            <strong className="not-italic">Your progress:</strong>{' '}
            {totalCitationsViewed} citation{totalCitationsViewed === 1 ? '' : 's'} viewed,{' '}
            {totalQuizzes} quiz{totalQuizzes === 1 ? '' : 'zes'} completed.
            {state.lastVisited && (
              <>
                {' '}Pick up where you left off:{' '}
                <Link to={`/${state.lastVisited}`} className="font-medium underline decoration-gold">
                  {state.lastVisited}
                </Link>
              </>
            )}
          </p>
        </motion.section>
      )}

      <section className="max-w-prose mx-auto px-6 pb-20 text-center mt-16">
        <p className="serif italic text-display-sm text-ink/85">
          Read it like a print magazine. Pull up a citation when you want to dig deeper. — L
        </p>
      </section>
    </>
  );
}

function PartCard({
  number,
  title,
  subtitle,
  description,
  to,
  sectionCount,
  accent,
  ill,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  to: string;
  sectionCount: number;
  accent: 'gold' | 'sage';
  ill: React.ReactNode;
}) {
  const tone =
    accent === 'sage'
      ? 'from-[#F3F1EC] to-[#E4E9DD]'
      : 'from-[#FAF5EB] to-[#F0E1C3]';
  return (
    <Link to={to} className="block no-underline group">
      <article
        className={`card-lift bg-gradient-to-br ${tone} border border-gold-light/50 rounded-2xl p-7 md:p-9 h-full`}
      >
        <div className="flex items-start justify-between mb-5">
          <p className="serif italic text-gold/80 leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}>
            {number}
          </p>
          <div className="opacity-80 group-hover:opacity-100 transition-opacity">{ill}</div>
        </div>
        <p className="sans text-xs uppercase tracking-[0.25em] text-ink/70 mb-2">{subtitle}</p>
        <h3 className="serif text-display-md text-ink mb-3 leading-tight">{title}</h3>
        <p className="prose-lgr !text-body !mb-5">{description}</p>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="arrow-link sans text-sm uppercase tracking-[0.15em] text-ink font-medium">
            Read this part <span className="arrow">→</span>
          </p>
          <p className="sans text-[10px] uppercase tracking-[0.15em] text-gold whitespace-nowrap">
            {sectionCount} sections
          </p>
        </div>
      </article>
    </Link>
  );
}

function ToolCard({
  title,
  description,
  to,
}: {
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link to={to} className="block group no-underline">
      <article className="card-lift bg-white border border-gold-light/50 rounded-xl p-6 h-full">
        <h3 className="serif text-display-sm text-ink mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="prose-lgr !text-body-sm !mb-3">{description}</p>
        <p className="arrow-link sans text-xs uppercase tracking-[0.2em] text-gold">
          open <span className="arrow">→</span>
        </p>
      </article>
    </Link>
  );
}
