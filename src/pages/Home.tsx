import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProgress } from '@/hooks/useProgress';

export function Home() {
  const { state } = useProgress();
  const totalCitationsViewed = state.citationsViewed.length;
  const totalQuizzes = Object.keys(state.quizzes).length;

  return (
    <main className="max-w-prose mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="sans text-sm uppercase tracking-widest text-gold mb-4">
          LGR Capital Investments · Interactive Refresher
        </p>
        <h1 className="serif text-display-xl text-ink leading-none mb-2">
          Political Economy
        </h1>
        <h1 className="serif italic text-display-xl text-ink leading-none mb-8">
          & American Government
        </h1>
        <hr className="border-0 h-[2px] bg-gold w-32 mb-8" />
        <p className="prose-lgr text-body-lg">
          A working reference for the systems and institutions that shape contemporary
          political and economic argument. Built around peer-reviewed research and
          the major doctrinal cases — with diagrams, knowledge checks, and inline
          citations you can actually click on.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-16"
      >
        <h2 className="serif text-display-md text-ink mb-6">Contents</h2>
        <div className="space-y-4">
          <PartCard
            number="I"
            title="Political Economy"
            subtitle="The three systems, properly defined"
            description="Capitalism, socialism, communism — their lineages, varieties, critiques, and what the modern empirical literature actually finds. Includes Keynes & macroeconomic management and the 21st-century Marxist revival."
            to="/part-one"
            sectionCount={5}
          />
          <PartCard
            number="II"
            title="American Government"
            subtitle="Structure & mechanics"
            description="Articles I, II, and III in working order. Checks & balances, federalism, elections, campaign finance — and the 2024 administrative-law revolution that just rewrote 40 years of doctrine."
            to="/part-two"
            sectionCount={7}
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="serif text-display-md text-ink mb-6">Tools</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <ToolCard
            title="SCOTUS Case Browser"
            description="Filterable timeline of major structural decisions, 1803–2024. Click any case for context."
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
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 callout"
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
    </main>
  );
}

function PartCard({
  number,
  title,
  subtitle,
  description,
  to,
  sectionCount,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  to: string;
  sectionCount: number;
}) {
  return (
    <Link
      to={to}
      className="block group p-6 bg-white border border-gold-light/50 rounded-lg hover:border-gold transition-all hover:shadow-md no-underline"
    >
      <div className="flex items-start gap-5">
        <div className="serif text-display-lg text-gold leading-none italic">{number}</div>
        <div className="flex-1">
          <h3 className="serif text-display-sm text-ink mb-1 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="sans text-body-sm italic text-ink/70 mb-3">{subtitle}</p>
          <p className="prose-lgr !text-body !mb-2">{description}</p>
          <p className="sans text-xs uppercase tracking-wider text-gold mt-3">
            {sectionCount} sections →
          </p>
        </div>
      </div>
    </Link>
  );
}

function ToolCard({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <Link
      to={to}
      className="block group p-5 bg-white border border-gold-light/50 rounded-lg hover:border-gold transition-all no-underline"
    >
      <h3 className="serif text-display-sm text-ink mb-2 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="prose-lgr !text-body-sm !mb-0">{description}</p>
    </Link>
  );
}
