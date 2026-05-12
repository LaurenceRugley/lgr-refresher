import { ScotusTimeline } from '@/components/ScotusTimeline';

export function ScotusPage() {
  return (
    <main className="max-w-wide mx-auto px-6 py-12">
      <p className="sans text-sm uppercase tracking-widest text-gold mb-2">Reference Tool</p>
      <h1 className="serif text-display-xl text-ink mb-3">SCOTUS Case Browser</h1>
      <p className="prose-lgr text-body-lg mb-8 max-w-prose">
        Major structural Supreme Court decisions from <em>Marbury</em> to the 2024
        administrative-law quartet. Filter by topic, click any case for the longer
        summary, and see overrules / overruled-by relationships.
      </p>
      <ScotusTimeline />
    </main>
  );
}
