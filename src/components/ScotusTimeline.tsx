import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scotusCases, topicLabels, type ScotusCase } from '@/data/scotusCases';

const allTopics = Object.keys(topicLabels) as Array<keyof typeof topicLabels>;

export function ScotusTimeline() {
  const [activeTopics, setActiveTopics] = useState<Set<string>>(new Set(allTopics));
  const [selectedCase, setSelectedCase] = useState<ScotusCase | null>(null);

  const toggleTopic = (topic: string) => {
    setActiveTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topic)) next.delete(topic);
      else next.add(topic);
      return next;
    });
  };

  const setAllTopics = (on: boolean) => {
    setActiveTopics(on ? new Set(allTopics) : new Set());
  };

  const visibleCases = useMemo(
    () => scotusCases.filter((c) => activeTopics.has(c.topic)),
    [activeTopics],
  );

  // Layout: spread along x-axis by year, alternating above/below for readability
  const minYear = 1800;
  const maxYear = 2030;
  const xFor = (year: number) => ((year - minYear) / (maxYear - minYear)) * 100;

  return (
    <div className="diagram-frame !p-0 overflow-hidden">
      {/* Filter bar */}
      <div className="bg-limestone-dark border-b border-gold-light/40 p-4">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <h4 className="serif text-display-sm text-ink m-0">
            Major SCOTUS Cases, 1803–2024
          </h4>
          <div className="flex gap-2">
            <button onClick={() => setAllTopics(true)} className="btn-ghost !py-1 !px-3 !text-xs">
              All
            </button>
            <button onClick={() => setAllTopics(false)} className="btn-ghost !py-1 !px-3 !text-xs">
              None
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {allTopics.map((topic) => {
            const active = activeTopics.has(topic);
            const { label, color } = topicLabels[topic];
            return (
              <button
                key={topic}
                onClick={() => toggleTopic(topic)}
                className="text-xs font-medium px-3 py-1.5 rounded-full transition-all"
                style={{
                  background: active ? color : 'transparent',
                  color: active ? '#FAF7F2' : '#2A2218',
                  border: `1.5px solid ${color}`,
                  opacity: active ? 1 : 0.55,
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative px-6 py-12" style={{ minHeight: 360 }}>
        {/* Axis */}
        <div className="absolute left-6 right-6 top-1/2 h-[2px] bg-ink" style={{ transform: 'translateY(-1px)' }} />

        {/* Decade marks */}
        {[1800, 1850, 1900, 1950, 2000].map((decade) => (
          <div
            key={decade}
            className="absolute top-1/2 text-xs text-ink/40 font-medium"
            style={{
              left: `calc(${xFor(decade)}% + 1.5rem)`,
              transform: 'translate(-50%, 0.75rem)',
            }}
          >
            {decade}
          </div>
        ))}

        {/* Cases */}
        <AnimatePresence>
          {visibleCases.map((c, i) => {
            const x = xFor(c.year);
            const above = i % 2 === 0;
            const offset = (i % 4) * (above ? -32 : 32);
            const { color } = topicLabels[c.topic];
            return (
              <motion.button
                key={c.id}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25, delay: i * 0.02 }}
                onClick={() => setSelectedCase(c)}
                className="absolute group"
                style={{
                  left: `calc(${x}% + 1.5rem)`,
                  top: above ? `calc(50% - 80px + ${offset}px)` : `calc(50% + 80px + ${offset}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                aria-label={`${c.name}, ${c.year}`}
              >
                {/* Tick line connecting to axis */}
                <div
                  className="absolute left-1/2 w-[1.5px] bg-gold-light group-hover:bg-gold transition-colors"
                  style={{
                    height: Math.abs(above ? 80 + offset : 80 + offset),
                    top: above ? '100%' : 'auto',
                    bottom: above ? 'auto' : '100%',
                    transform: 'translateX(-50%)',
                  }}
                />
                {/* Dot */}
                <div
                  className="w-3 h-3 rounded-full border-2 border-ink relative z-10 group-hover:scale-150 transition-transform"
                  style={{ background: color }}
                />
                {/* Label */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 ${above ? 'bottom-full mb-2' : 'top-full mt-2'} whitespace-nowrap`}
                >
                  <div className="text-[11px] font-bold text-ink leading-tight">{c.year}</div>
                  <div className="text-[11px] text-ink/80 leading-tight">{c.shortName}</div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Case detail modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-3 right-3 text-2xl leading-none text-ink/60 hover:text-ink"
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded"
                  style={{
                    background: topicLabels[selectedCase.topic].color,
                    color: '#FAF7F2',
                  }}
                >
                  {topicLabels[selectedCase.topic].label}
                </span>
                <span className="text-xs text-ink/60">{selectedCase.year}</span>
              </div>
              <h3 className="serif text-display-sm text-ink mb-1">{selectedCase.name}</h3>
              <p className="text-body-sm text-gold font-medium mb-4 italic">
                {selectedCase.significance}
              </p>
              <p className="text-body text-ink/85">{selectedCase.longSummary}</p>
              {(selectedCase.overrules || selectedCase.overruledBy) && (
                <div className="mt-4 pt-4 border-t border-gold-light/40 text-body-sm space-y-1">
                  {selectedCase.overrules && (
                    <p>
                      <span className="text-ink/60">Overruled: </span>
                      <span className="font-medium">
                        {scotusCases.find((c) => c.id === selectedCase.overrules)?.name}
                      </span>
                    </p>
                  )}
                  {selectedCase.overruledBy && (
                    <p>
                      <span className="text-ink/60">Later overruled by: </span>
                      <span className="font-medium">
                        {scotusCases.find((c) => c.id === selectedCase.overruledBy)?.name}
                      </span>
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
