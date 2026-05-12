import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '@/components/mdxComponents';
import Preface from '@/content/preface.mdx';

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
  return (
    <main className="max-w-prose mx-auto px-6 py-16">
      <p className="sans text-sm uppercase tracking-widest text-gold mb-2">Part II</p>
      <h1 className="serif text-display-xl text-ink mb-6">American Government</h1>
      <div className="callout">
        <p className="!mb-0">
          <strong className="not-italic">Coming soon.</strong> Articles I, II, III; checks
          and balances; federalism; elections; and the 2024 administrative-law
          revolution. Content will be migrated from the V2 .docx.
        </p>
      </div>
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
