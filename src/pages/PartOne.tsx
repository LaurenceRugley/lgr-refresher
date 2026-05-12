import { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '@/components/mdxComponents';
import Capitalism from '@/content/part-one-capitalism.mdx';
import Keynes from '@/content/part-one-keynes.mdx';
import Socialism from '@/content/part-one-socialism.mdx';
import Communism from '@/content/part-one-communism.mdx';
import { ScotusTimeline } from '@/components/ScotusTimeline';
import { useProgress } from '@/hooks/useProgress';
import { Chapter, Coda, GradientRule } from '@/components/Editorial';
import { SwipeCards } from '@/components/SwipeCards';
import { CapitalStack, Network, Padlock, OpenBook } from '@/components/Illustrations';

export function PartOne() {
  const { markSectionRead } = useProgress();
  useEffect(() => {
    markSectionRead('part-one', 0);
  }, [markSectionRead]);

  return (
    <main className="max-w-prose mx-auto px-6 py-12">
      <MDXProvider components={mdxComponents}>
        <article className="prose-lgr">
          <Capitalism />
          <GradientRule />
          <Chapter n="II" title="Keynes & Macro" />
          <div className="my-6 flex justify-center text-ink/75">
            <CapitalStack size={140} />
          </div>
          <Keynes />
          <GradientRule tone="terracotta" />
          <Chapter n="III" title="Socialism" />
          <div className="my-6 flex justify-center text-ink/75">
            <Network size={170} />
          </div>
          <Socialism />
          <GradientRule tone="sage" />
          <Chapter n="IV" title="Communism" />
          <div className="my-6 flex justify-center text-ink/75">
            <OpenBook size={150} />
          </div>
          <Communism />
        </article>
      </MDXProvider>

      <GradientRule />

      <SwipeCards
        title="The three systems — at a glance"
        cards={[
          {
            label: '01',
            title: 'Capitalism',
            body: 'Private ownership of the means of production. Markets sort prices and wages. Capital accumulation is the engine. Most of the world, with wide institutional variation (LME vs CME, growth-model variants).',
            emoji: '💼',
            tone: 'gold',
          },
          {
            label: '02 · varieties',
            title: 'Soft socialism',
            body: 'Regulated capitalism + welfare state + strong unions. Nordic social democracy. High taxes, high services, free markets underneath. Not state ownership of the commanding heights.',
            emoji: '🌿',
            tone: 'sage',
          },
          {
            label: '02 · hard',
            title: 'State socialism',
            body: 'Social ownership of the means of production. Range from Yugoslav self-management to Soviet-style central planning. The calculation debate (Mises/Hayek vs Lange/Lerner; revived by big-data and AI).',
            emoji: '🏛',
            tone: 'terracotta',
          },
          {
            label: '03 · theory',
            title: 'Communism, the end-state',
            body: 'Stateless, classless, post-scarcity. The state has "withered away." A moral horizon, not a governance system. No society has claimed to have reached it.',
            emoji: '📖',
            tone: 'cream',
          },
          {
            label: '03 · practice',
            title: 'Communism, the regimes',
            body: 'Marxist-Leninist one-party states: USSR, PRC under Mao, Vietnam, Cuba, North Korea. Vanguard party, central planning, suppression of civil society. Tens of millions of deaths documented; debate over how intrinsic vs. how totalitarian-form.',
            emoji: '🚩',
            tone: 'ink',
          },
        ]}
      />

      <section className="mt-16">
        <ScotusTimeline />
      </section>

      <Coda>
        Three answers to a single cluster of questions about ownership, coordination, and surplus.
        Now — how the U.S. constitutional order actually works, in Part II.
      </Coda>
    </main>
  );
}
