import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Laptop, CodeBranches, Network, Capitol } from './Illustrations';

// Scrollytelling: four-beat reveal that walks the reader from "you ship a
// product" through capitalism / open-source / commons / state, then hands off
// to the long-form reading.
export function ScrollIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.25 });

  const op0 = useTransform(p, [0.0, 0.1, 0.18, 0.22], [1, 1, 1, 0]);
  const op1 = useTransform(p, [0.18, 0.22, 0.40, 0.44], [0, 1, 1, 0]);
  const op2 = useTransform(p, [0.40, 0.44, 0.62, 0.66], [0, 1, 1, 0]);
  const op3 = useTransform(p, [0.62, 0.66, 0.9, 1], [0, 1, 1, 1]);

  const y0 = useTransform(p, [0, 0.2], [0, -20]);
  const y1 = useTransform(p, [0.2, 0.42], [20, -20]);
  const y2 = useTransform(p, [0.42, 0.64], [20, -20]);
  const y3 = useTransform(p, [0.64, 1], [20, 0]);

  const beats = [
    {
      kicker: 'Start with the picture you already know',
      h: 'You ship a product.',
      p: 'You wrote the code, you own the repo, you set the price. Customers pay you, you pay your stack, what\'s left after costs is yours to reinvest. <em>Capital accumulation</em> — the engine of the system most of the world runs on — is just this loop, scaled up.',
    },
    {
      kicker: 'Now imagine',
      h: 'You open-source the code.',
      p: 'No more single owner — the project is held in common. Reputation replaces price in places, but maintainers still need to eat, so foundations, sponsorships, and dual-licensing emerge. This is the <em>commons / market socialism</em> argument: the same loop, but ownership is collective and incentives have to be re-engineered.',
    },
    {
      kicker: 'Now imagine',
      h: 'One company runs the platform.',
      p: 'Everyone else builds inside their walls — App Stores, AWS, the operating system itself. The platform owner makes the rules, collects the rents, can change the terms unilaterally. This is <em>platform capitalism</em> from one angle, the <em>monopolist / state-managed</em> form from another. Choose your framing.',
    },
    {
      kicker: 'Now zoom out',
      h: 'The political-economy debate is the same debate.',
      p: 'Who owns the means of production. Who decides what gets made. Who gets the surplus. The U.S. government is the same conversation with a centuries-deep doctrinal stack on top. The rest of this site walks both — the economics and the structure — at the level of detail a thinking operator actually needs.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: '460vh' }}
    >
      <div className="sticky top-[68px] h-[calc(100vh-68px)] overflow-hidden flex items-center">
        <div className="max-w-wide mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Illustration column */}
          <div className="relative h-[34vh] md:h-[70vh] flex items-center justify-center text-ink/85 order-2 md:order-1">
            <motion.div style={{ opacity: op0, y: y0 }} className="absolute inset-0 flex items-center justify-center">
              <Laptop size={320} />
            </motion.div>
            <motion.div style={{ opacity: op1, y: y1 }} className="absolute inset-0 flex items-center justify-center">
              <CodeBranches size={360} />
            </motion.div>
            <motion.div style={{ opacity: op2, y: y2 }} className="absolute inset-0 flex items-center justify-center">
              <Network size={320} />
            </motion.div>
            <motion.div style={{ opacity: op3, y: y3 }} className="absolute inset-0 flex items-center justify-center">
              <Capitol size={320} />
            </motion.div>
          </div>

          {/* Prose column */}
          <div className="relative h-[34vh] md:h-[70vh] flex items-center order-1 md:order-2">
            {beats.map((b, i) => {
              const op = [op0, op1, op2, op3][i];
              return (
                <motion.div
                  key={i}
                  style={{ opacity: op }}
                  className="absolute inset-0 flex flex-col justify-center pr-2"
                >
                  <p className="sans text-xs uppercase tracking-[0.3em] text-gold mb-2">
                    {b.kicker}
                  </p>
                  <h2 className="serif text-display-md md:text-display-lg text-ink leading-[1.05] mb-4 mt-0">
                    {b.h}
                  </h2>
                  <p
                    className="prose-lgr !text-body-lg !mb-0"
                    dangerouslySetInnerHTML={{ __html: b.p }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
