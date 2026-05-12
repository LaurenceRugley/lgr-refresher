import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '@/components/mdxComponents';
import Capitalism from '@/content/part-one-capitalism.mdx';
import Keynes from '@/content/part-one-keynes.mdx';
import Socialism from '@/content/part-one-socialism.mdx';
import Communism from '@/content/part-one-communism.mdx';
import { ScotusTimeline } from '@/components/ScotusTimeline';
import { useProgress } from '@/hooks/useProgress';
import { useEffect } from 'react';

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
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <Keynes />
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <Socialism />
          <hr className="my-12 border-0 h-px bg-gold-light/60" />
          <Communism />
        </article>
      </MDXProvider>
      <section className="mt-16">
        <ScotusTimeline />
      </section>
    </main>
  );
}
