import { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '@/components/mdxComponents';
import { useProgress } from '@/hooks/useProgress';
import { Chapter, Coda, GradientRule } from '@/components/Editorial';
import { SwipeCards } from '@/components/SwipeCards';
import { Capitol, ScalesAndGavel, LegalDoc, Padlock } from '@/components/Illustrations';
import Preface from '@/content/preface.mdx';
import Article1 from '@/content/part-two-article-1.mdx';
import Article2 from '@/content/part-two-article-2.mdx';
import Article3 from '@/content/part-two-article-3.mdx';
import AdminLaw from '@/content/part-two-admin-law.mdx';
import ChecksBalances from '@/content/part-two-checks-balances.mdx';
import Federalism from '@/content/part-two-federalism.mdx';
import Elections from '@/content/part-two-elections.mdx';

export function PrefacePage() {
  return (
    <main className="max-w-prose mx-auto px-6 py-12">
      <MDXProvider components={mdxComponents}>
        <article className="prose-lgr">
          <Preface />
        </article>
      </MDXProvider>
    </main>
  );
}

export function PartTwo() {
  const { markSectionRead } = useProgress();
  useEffect(() => {
    markSectionRead('part-two', 0);
  }, [markSectionRead]);

  return (
    <main className="max-w-prose mx-auto px-6 py-12">
      <MDXProvider components={mdxComponents}>
        <article className="prose-lgr">
          <Article1 />
          <GradientRule />
          <Chapter n="II" title="The President" />
          <div className="my-6 flex justify-center text-ink/75">
            <Capitol size={140} />
          </div>
          <Article2 />
          <GradientRule tone="terracotta" />
          <Chapter n="III" title="The Courts" />
          <div className="my-6 flex justify-center text-ink/75">
            <ScalesAndGavel size={200} />
          </div>
          <Article3 />
          <GradientRule tone="sage" />
          <Chapter n="IV" title="Admin Law · 2024" />
          <div className="my-6 flex justify-center text-ink/75">
            <Padlock size={130} />
          </div>
          <AdminLaw />
          <GradientRule />
          <Chapter n="V" title="The Machine" />
          <ChecksBalances />
          <GradientRule tone="terracotta" />
          <Chapter n="VI" title="Federalism" />
          <Federalism />
          <GradientRule tone="sage" />
          <Chapter n="VII" title="Elections & Money" />
          <div className="my-6 flex justify-center text-ink/75">
            <LegalDoc size={140} />
          </div>
          <Elections />
        </article>
      </MDXProvider>

      <GradientRule />

      <SwipeCards
        title="The structural picture — at a glance"
        cards={[
          {
            label: 'art. I',
            title: 'Congress',
            body: 'Makes the laws. House (435, by population, 2-yr) + Senate (100, two per state, 6-yr). Power of the purse. Filibuster is a rule, not a constitutional requirement.',
            emoji: '🏛',
            tone: 'gold',
          },
          {
            label: 'art. II',
            title: 'The President',
            body: 'Enforces the laws. Vesting Clause + Take Care Clause. Administrative presidency — ~4M employees across 15 cabinet depts + dozens of independent agencies.',
            emoji: '🏢',
            tone: 'terracotta',
          },
          {
            label: 'art. III',
            title: 'The Courts',
            body: 'Decides what the laws mean. Nine Justices (by statute, not Constitution). Judicial review claimed by Marshall in Marbury (1803). Life tenure during good behavior.',
            emoji: '⚖️',
            tone: 'sage',
          },
          {
            label: '2024',
            title: 'The admin-law revolution',
            body: 'Loper Bright overrules Chevron. Corner Post resets the APA clock on injury. Jarkesy requires juries for SEC penalties. Trump v US gives presidents broad immunity. The most consequential structural shift since the New Deal.',
            emoji: '⚖',
            tone: 'ink',
          },
          {
            label: 'machine',
            title: 'Checks & balances',
            body: 'Bidirectional power flows. Congress impeaches & purses; the President vetoes; the Court reviews. Madison\'s point: ambition counterbalances ambition. The system is intentionally inefficient.',
            emoji: '⚙️',
            tone: 'cream',
          },
          {
            label: 'federalism',
            title: 'Federal vs state',
            body: 'Tenth Amendment reserves powers to states. Federal expansion via Commerce Clause + Spending Clause + Civil War Amendments. Recent trim: Lopez (1995), NFIB v Sebelius (2012), Dobbs (2022).',
            emoji: '🇺🇸',
            tone: 'gold',
          },
          {
            label: 'elections',
            title: 'The informal constitution',
            body: 'Two-party system is a consequence of single-member plurality (Duverger). Electoral College is disproportional and tilts toward large competitive states. Campaign finance shaped by Buckley → Citizens United → McCutcheon.',
            emoji: '🗳',
            tone: 'terracotta',
          },
        ]}
      />

      <Coda>
        That's the structural picture. The case browser below pulls the doctrinal moments that built it, from Marbury forward.
      </Coda>
    </main>
  );
}
