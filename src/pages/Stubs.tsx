import { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '@/components/mdxComponents';
import { useProgress } from '@/hooks/useProgress';
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
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <Article2 />
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <Article3 />
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <AdminLaw />
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <ChecksBalances />
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <Federalism />
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <Elections />
        </article>
      </MDXProvider>
    </main>
  );
}

export function Glossary() {
  return (
    <main className="max-w-prose mx-auto px-6 py-16">
      <h1 className="serif text-display-xl text-ink mb-6">Glossary</h1>
      <div className="callout">
        <p className="!mb-0">
          <strong className="not-italic">Coming soon.</strong> 22-term working
          glossary, searchable, with cross-links to where each term is used.
        </p>
      </div>
    </main>
  );
}
