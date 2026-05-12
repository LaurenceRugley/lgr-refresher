import type { ComponentProps, ReactNode } from 'react';
import { Cite } from './CitationSystem';

// Default mapping for raw HTML elements in MDX → styled React elements.
export const mdxComponents = {
  h1: (props: ComponentProps<'h1'>) => (
    <h1
      className="serif text-display-lg text-ink mt-12 mb-4 h-rule-under"
      {...props}
    />
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="serif text-display-md text-ink mt-10 mb-4" {...props} />
  ),
  h3: (props: ComponentProps<'h3'>) => (
    <h3 className="serif italic text-display-sm text-ink mt-8 mb-3" {...props} />
  ),
  h4: (props: ComponentProps<'h4'>) => (
    <h4 className="sans font-semibold text-body-lg text-ink mt-6 mb-2" {...props} />
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className="prose-lgr mb-5" {...props} />
  ),
  strong: (props: ComponentProps<'strong'>) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  em: (props: ComponentProps<'em'>) => <em className="italic" {...props} />,
  ul: (props: ComponentProps<'ul'>) => (
    <ul className="prose-lgr mb-5 ml-6 list-none space-y-2" {...props} />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol className="prose-lgr mb-5 ml-6 list-decimal space-y-2 marker:text-gold marker:font-bold" {...props} />
  ),
  li: ({ children, ...rest }: ComponentProps<'li'>) => (
    <li className="prose-lgr relative pl-1" {...rest}>
      <span className="absolute -left-5 text-gold font-bold">•</span>
      {children}
    </li>
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className="callout" {...props} />
  ),
  a: (props: ComponentProps<'a'>) => (
    <a className="prose-lgr-link" target={props.href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...props} />
  ),
  hr: () => (
    <hr className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
  ),

  // Custom components
  Cite,
  Callout,
  PullQuote,
};

export function Callout({ children }: { children: ReactNode }) {
  return <div className="callout">{children}</div>;
}

export function PullQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <figure className="my-10 text-center">
      <blockquote className="serif text-display-md italic text-ink leading-tight">
        “{children}”
      </blockquote>
      {attribution && (
        <figcaption className="sans text-body-sm uppercase tracking-wider text-gold mt-3">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
