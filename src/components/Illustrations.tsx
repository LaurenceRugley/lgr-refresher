/* eslint-disable react/no-unknown-property */
// Developer / operator / legal illustration set.
// Line art, transparent background, currentColor stroke, gold accent fills.

import { type SVGProps } from 'react';

const GOLD = '#B89968';
const TERRACOTTA = '#C68E6E';
const SAGE = '#8AA08A';

type IllProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 200): IllProps => ({
  width: size,
  height: size,
  viewBox: '0 0 200 200',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

// 1. Laptop — anchor for "you ship a product" (capitalism)
export function Laptop({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="20" y1="170" x2="180" y2="170" />
      {/* Screen */}
      <rect x="40" y="55" width="120" height="80" rx="3" fill={GOLD} fillOpacity="0.08" />
      <rect x="40" y="55" width="120" height="80" rx="3" />
      {/* Code lines */}
      <line x1="52" y1="72" x2="100" y2="72" strokeOpacity="0.4" />
      <line x1="58" y1="82" x2="120" y2="82" strokeOpacity="0.4" />
      <line x1="58" y1="92" x2="92" y2="92" strokeOpacity="0.4" />
      <line x1="52" y1="102" x2="138" y2="102" strokeOpacity="0.4" />
      <line x1="58" y1="112" x2="110" y2="112" strokeOpacity="0.4" />
      {/* Caret */}
      <line x1="112" y1="112" x2="112" y2="120" stroke={GOLD} strokeWidth="2" />
      {/* Base */}
      <path d="M30 140 L170 140 L160 155 L40 155 Z" fill={GOLD} fillOpacity="0.18" />
      <line x1="85" y1="148" x2="115" y2="148" strokeOpacity="0.5" />
      {/* Spark — first commit / launch */}
      <path d="M170 45 L170 55 M165 50 L175 50" stroke={GOLD} />
    </svg>
  );
}

// 2. Code branches — git / fork pattern as "varieties of capitalism / open source"
export function CodeBranches({ size = 220, ...rest }: IllProps) {
  return (
    <svg {...base(size)} viewBox="0 0 280 200" {...rest}>
      <line x1="20" y1="170" x2="260" y2="170" />
      {/* Three branch lines */}
      <path d="M50 150 L50 50" />
      <path d="M50 90 Q100 90 100 60 L100 30" stroke={TERRACOTTA} />
      <path d="M50 110 Q150 110 150 70 L150 40" stroke={SAGE} />
      {/* Nodes */}
      <circle cx="50" cy="150" r="6" fill={GOLD} fillOpacity="0.6" stroke={GOLD} />
      <circle cx="50" cy="110" r="6" fill={SAGE} fillOpacity="0.6" stroke={SAGE} />
      <circle cx="50" cy="90" r="6" fill={TERRACOTTA} fillOpacity="0.6" stroke={TERRACOTTA} />
      <circle cx="50" cy="50" r="6" fill={GOLD} fillOpacity="0.6" stroke={GOLD} />
      <circle cx="100" cy="30" r="6" fill={TERRACOTTA} fillOpacity="0.6" stroke={TERRACOTTA} />
      <circle cx="150" cy="40" r="6" fill={SAGE} fillOpacity="0.6" stroke={SAGE} />
      {/* Branch labels */}
      <text x="60" y="50" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="11" fill={GOLD} stroke="none">main</text>
      <text x="110" y="30" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="11" fill={TERRACOTTA} stroke="none">fork</text>
      <text x="160" y="40" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="11" fill={SAGE} stroke="none">open-source</text>
      {/* Time arrow */}
      <path d="M30 180 L260 180" stroke={GOLD} strokeOpacity="0.4" strokeDasharray="2 3" />
      <text x="250" y="190" fontFamily="Inter, sans-serif" fontSize="8" fill={GOLD} stroke="none" textAnchor="end">time →</text>
    </svg>
  );
}

// 3. Capitol — formal government anchor (kept for political-economy gravitas)
export function Capitol({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="20" y1="170" x2="180" y2="170" />
      <path d="M40 170 L40 160 L160 160 L160 170" />
      <path d="M55 160 L55 150 L145 150 L145 160" />
      {[65, 85, 105, 125].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="150" x2={x} y2="100" />
          <rect x={x - 4} y="98" width="8" height="3" fill={GOLD} fillOpacity="0.3" stroke="none" />
          <rect x={x - 4} y="148" width="8" height="3" fill={GOLD} fillOpacity="0.3" stroke="none" />
        </g>
      ))}
      <path d="M55 100 L100 70 L145 100 Z" fill={GOLD} fillOpacity="0.15" />
      <path d="M85 70 Q100 40 115 70" />
      <ellipse cx="100" cy="40" rx="3" ry="6" fill={GOLD} stroke={GOLD} />
      <line x1="100" y1="34" x2="100" y2="28" stroke={GOLD} />
      <path d="M97 32 L100 28 L103 32" fill={GOLD} stroke="none" />
    </svg>
  );
}

// 4. Scales of justice / gavel — court, judicial review
export function ScalesAndGavel({ size = 220, ...rest }: IllProps) {
  return (
    <svg {...base(size)} viewBox="0 0 280 200" {...rest}>
      <line x1="20" y1="170" x2="260" y2="170" />
      {/* Pillar */}
      <path d="M140 170 L140 70" strokeWidth="2" />
      <rect x="125" y="170" width="30" height="4" fill={GOLD} fillOpacity="0.3" stroke="none" />
      {/* Beam */}
      <line x1="90" y1="70" x2="190" y2="70" strokeWidth="2" />
      <circle cx="140" cy="70" r="4" fill={GOLD} stroke={GOLD} />
      {/* Left pan */}
      <line x1="90" y1="70" x2="90" y2="100" strokeOpacity="0.5" />
      <path d="M68 100 Q90 115 112 100" fill={GOLD} fillOpacity="0.18" />
      <path d="M68 100 Q90 115 112 100" />
      {/* Right pan */}
      <line x1="190" y1="70" x2="190" y2="100" strokeOpacity="0.5" />
      <path d="M168 100 Q190 115 212 100" fill={GOLD} fillOpacity="0.18" />
      <path d="M168 100 Q190 115 212 100" />
      {/* Stars on pans */}
      <path d="M88 88 L92 88 M90 86 L90 90" stroke={GOLD} />
      <path d="M188 88 L192 88 M190 86 L190 90" stroke={GOLD} />
      {/* Crown */}
      <path d="M132 70 L140 56 L148 70" fill={GOLD} fillOpacity="0.25" stroke={GOLD} />
    </svg>
  );
}

// 5. Document / legal brief
export function LegalDoc({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="30" y1="170" x2="170" y2="170" />
      <path d="M65 50 L120 50 L140 70 L140 165 L65 165 Z" fill={GOLD} fillOpacity="0.1" />
      <path d="M120 50 L120 70 L140 70" />
      {/* Lines */}
      {[85, 95, 105, 115, 125, 135, 145].map((y) => (
        <line key={y} x1="75" y1={y} x2={y === 85 ? 110 : 130} y2={y} strokeOpacity="0.45" />
      ))}
      {/* Seal */}
      <circle cx="115" cy="150" r="9" fill={TERRACOTTA} fillOpacity="0.25" stroke={TERRACOTTA} />
      <text x="115" y="153" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="8" fill={TERRACOTTA} stroke="none" textAnchor="middle">L</text>
    </svg>
  );
}

// 6. Chord / waveform — music industry / band economics
export function Chord({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="20" y1="170" x2="180" y2="170" />
      {/* Staff lines */}
      {[80, 95, 110, 125, 140].map((y) => (
        <line key={y} x1="35" y1={y} x2="165" y2={y} strokeOpacity="0.35" />
      ))}
      {/* Notes */}
      <ellipse cx="65" cy="125" rx="8" ry="6" transform="rotate(-15 65 125)" fill={GOLD} fillOpacity="0.6" stroke={GOLD} />
      <line x1="73" y1="125" x2="73" y2="80" strokeWidth="1.5" />
      <ellipse cx="105" cy="110" rx="8" ry="6" transform="rotate(-15 105 110)" fill={TERRACOTTA} fillOpacity="0.55" stroke={TERRACOTTA} />
      <line x1="113" y1="110" x2="113" y2="70" strokeWidth="1.5" />
      <ellipse cx="145" cy="95" rx="8" ry="6" transform="rotate(-15 145 95)" fill={SAGE} fillOpacity="0.55" stroke={SAGE} />
      <line x1="153" y1="95" x2="153" y2="60" strokeWidth="1.5" />
      {/* Beam */}
      <path d="M73 80 L153 60" strokeWidth="3" />
      {/* Clef */}
      <path d="M40 90 Q33 95 33 105 Q33 120 40 125 Q47 130 47 120 Q47 115 40 113 Q35 110 35 105 Q35 100 40 100" fill="none" stroke={GOLD} strokeWidth="1.5" />
      <circle cx="40" cy="135" r="2" fill={GOLD} stroke="none" />
    </svg>
  );
}

// 7. Three blocks / branches (kept simple — used for branch overview)
export function ThreeBlocks({ size = 240, ...rest }: IllProps) {
  return (
    <svg {...base(size)} viewBox="0 0 280 200" {...rest}>
      <line x1="20" y1="170" x2="260" y2="170" />
      <g>
        <rect x="48" y="80" width="44" height="90" fill={GOLD} fillOpacity="0.1" />
        <line x1="48" y1="80" x2="48" y2="170" />
        <line x1="92" y1="80" x2="92" y2="170" />
        <line x1="48" y1="80" x2="92" y2="80" />
        <text x="70" y="155" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fontStyle="italic" fill={GOLD} stroke="none">law</text>
      </g>
      <g>
        <rect x="118" y="60" width="44" height="110" fill={TERRACOTTA} fillOpacity="0.12" />
        <line x1="118" y1="60" x2="118" y2="170" />
        <line x1="162" y1="60" x2="162" y2="170" />
        <line x1="118" y1="60" x2="162" y2="60" />
        <text x="140" y="155" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fontStyle="italic" fill={TERRACOTTA} stroke="none">exec</text>
      </g>
      <g>
        <rect x="188" y="90" width="44" height="80" fill={SAGE} fillOpacity="0.12" />
        <line x1="188" y1="90" x2="188" y2="170" />
        <line x1="232" y1="90" x2="232" y2="170" />
        <line x1="188" y1="90" x2="232" y2="90" />
        <text x="210" y="155" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fontStyle="italic" fill={SAGE} stroke="none">judge</text>
      </g>
      <path d="M92 50 Q140 30 188 50" strokeDasharray="2 3" />
      <path d="M85 50 L92 50 L88 55" />
      <path d="M195 50 L188 50 L192 55" />
    </svg>
  );
}

// 8. Stack of coins (capital accumulation)
export function CapitalStack({ size = 180, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="40" y1="170" x2="160" y2="170" />
      {[155, 140, 125, 110, 95].map((y, i) => (
        <ellipse key={y} cx="100" cy={y} rx="35" ry="8" fill={GOLD} fillOpacity={0.18 + i * 0.05} stroke={GOLD} />
      ))}
      <ellipse cx="100" cy="80" rx="35" ry="8" fill={GOLD} fillOpacity="0.5" stroke={GOLD} />
      <path d="M95 80 L95 70 L105 70 L105 80" stroke={GOLD} />
      <line x1="98" y1="74" x2="102" y2="74" stroke={GOLD} />
      {/* Sparkle */}
      <path d="M150 55 L150 65 M145 60 L155 60" stroke={GOLD} />
    </svg>
  );
}

// 9. Network nodes (commons / open-source / shared ownership)
export function Network({ size = 220, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      {/* Connections */}
      <line x1="60" y1="60" x2="140" y2="80" strokeOpacity="0.5" />
      <line x1="60" y1="60" x2="100" y2="130" strokeOpacity="0.5" />
      <line x1="140" y1="80" x2="100" y2="130" strokeOpacity="0.5" />
      <line x1="140" y1="80" x2="160" y2="140" strokeOpacity="0.5" />
      <line x1="100" y1="130" x2="160" y2="140" strokeOpacity="0.5" />
      <line x1="60" y1="60" x2="40" y2="110" strokeOpacity="0.5" />
      <line x1="40" y1="110" x2="100" y2="130" strokeOpacity="0.5" />
      {/* Nodes */}
      <circle cx="60" cy="60" r="10" fill={GOLD} fillOpacity="0.4" stroke={GOLD} />
      <circle cx="140" cy="80" r="10" fill={SAGE} fillOpacity="0.4" stroke={SAGE} />
      <circle cx="100" cy="130" r="10" fill={TERRACOTTA} fillOpacity="0.4" stroke={TERRACOTTA} />
      <circle cx="160" cy="140" r="8" fill={GOLD} fillOpacity="0.4" stroke={GOLD} />
      <circle cx="40" cy="110" r="8" fill={SAGE} fillOpacity="0.4" stroke={SAGE} />
    </svg>
  );
}

// 10. Padlock / state control (centralized power)
export function Padlock({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="30" y1="170" x2="170" y2="170" />
      <rect x="65" y="100" width="70" height="55" rx="4" fill={GOLD} fillOpacity="0.15" />
      <path d="M80 100 L80 75 Q80 55 100 55 Q120 55 120 75 L120 100" strokeWidth="2" />
      <circle cx="100" cy="125" r="6" fill={GOLD} stroke={GOLD} />
      <line x1="100" y1="125" x2="100" y2="142" strokeWidth="2" />
    </svg>
  );
}

// 11. Open book — Marx / foundational texts / case law
export function OpenBook({ size = 200, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <line x1="30" y1="170" x2="170" y2="170" />
      <path d="M40 70 Q100 60 100 80 Q100 60 160 70 L160 150 Q100 140 100 160 Q100 140 40 150 Z" fill={GOLD} fillOpacity="0.12" />
      <path d="M100 80 L100 160" />
      {[95, 105, 115, 125, 135].map((y, i) => (
        <g key={y}>
          <line x1="50" y1={y} x2={90 - i * 3} y2={y} strokeOpacity="0.5" />
          <line x1={110 + i * 3} y1={y} x2="150" y2={y} strokeOpacity="0.5" />
        </g>
      ))}
      <path d="M130 60 L140 60 L140 95 L135 88 L130 95 Z" fill={TERRACOTTA} fillOpacity="0.5" stroke={TERRACOTTA} />
    </svg>
  );
}

// 12. Compass — methodological orientation / "where you are"
export function Compass({ size = 180, ...rest }: IllProps) {
  return (
    <svg {...base(size)} {...rest}>
      <circle cx="100" cy="100" r="58" fill={GOLD} fillOpacity="0.08" />
      <circle cx="100" cy="100" r="58" />
      <circle cx="100" cy="100" r="48" strokeOpacity="0.4" />
      {/* N S E W marks */}
      <line x1="100" y1="42" x2="100" y2="48" strokeWidth="2" />
      <line x1="100" y1="152" x2="100" y2="158" strokeOpacity="0.5" />
      <line x1="158" y1="100" x2="152" y2="100" strokeOpacity="0.5" />
      <line x1="48" y1="100" x2="42" y2="100" strokeOpacity="0.5" />
      {/* Needle */}
      <path d="M100 100 L107 70 L100 60 L93 70 Z" fill={TERRACOTTA} stroke={TERRACOTTA} />
      <path d="M100 100 L93 130 L100 140 L107 130 Z" fill={GOLD} fillOpacity="0.5" stroke={GOLD} />
      <circle cx="100" cy="100" r="3" fill={GOLD} stroke={GOLD} />
    </svg>
  );
}
