import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '@/components/mdxComponents';
import PartOneContent from '@/content/part-one-capitalism.mdx';

export function PartOne() {
  return (
    <main className="max-w-prose mx-auto px-6 py-12">
      <MDXProvider components={mdxComponents}>
        <PartOneContent />
      </MDXProvider>
    </main>
  );
}
