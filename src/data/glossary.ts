// Working glossary — terms used in this document or commonly encountered
// in political and legal commentary.

export type GlossaryEntry = {
  term: string;
  definition: string;
  // Where the term is discussed in depth, for cross-linking.
  sectionId?: string;
  // Optional aliases for search.
  aliases?: string[];
};

export const glossary: GlossaryEntry[] = [
  {
    term: 'Administrative Procedure Act (APA)',
    aliases: ['APA'],
    definition:
      '1946 federal statute governing how agencies make rules and how those rules are reviewed by courts.',
    sectionId: 'part-two',
  },
  {
    term: 'Bicameralism',
    definition:
      'Two-chamber legislature. Required at the federal level (House + Senate) and in all states except Nebraska.',
    sectionId: 'part-two',
  },
  {
    term: 'Cloture',
    definition:
      'Senate procedure to end debate and force a vote. Requires 60 votes for most legislation, ending a filibuster.',
    sectionId: 'part-two',
  },
  {
    term: 'Commerce Clause',
    definition:
      'Article I, §8 power to regulate interstate commerce. The constitutional hook for most federal economic regulation.',
    sectionId: 'part-two',
  },
  {
    term: 'Dormant Commerce Clause',
    definition:
      'Doctrine inferring that the Commerce Clause implicitly bars states from discriminating against interstate commerce.',
    sectionId: 'part-two',
  },
  {
    term: 'Enumerated powers',
    definition:
      'Powers explicitly granted to the federal government in the Constitution (mostly Article I, §8).',
    sectionId: 'part-two',
  },
  {
    term: 'Executive privilege',
    definition:
      'Asserted presidential right to withhold information from Congress and courts. Not in the Constitution; established by precedent.',
    sectionId: 'part-two',
  },
  {
    term: 'Federalism',
    definition:
      'Constitutional division of power between national and state governments.',
    sectionId: 'part-two',
  },
  {
    term: 'Filibuster',
    definition:
      'Senate tactic of unlimited debate to delay or block a vote. Ended only by cloture (60 votes).',
    sectionId: 'part-two',
  },
  {
    term: 'Judicial review',
    definition:
      'Court power to invalidate laws or executive actions inconsistent with the Constitution. Established in Marbury (1803).',
    sectionId: 'part-two',
  },
  {
    term: 'Living constitutionalism',
    definition:
      "Interpretive approach that the Constitution's meaning evolves with changing societal values and conditions.",
    sectionId: 'part-two',
  },
  {
    term: 'Necessary and Proper Clause',
    aliases: ['Elastic Clause'],
    definition:
      'Article I, §8 grant of authority to make laws "necessary and proper" for executing enumerated powers. The "elastic clause."',
    sectionId: 'part-two',
  },
  {
    term: 'Originalism',
    definition:
      "Interpretive approach that the Constitution's meaning is fixed at the time of ratification — either by original public meaning or original intent.",
    sectionId: 'part-two',
  },
  {
    term: 'Police powers',
    definition:
      "States' broad authority to legislate for public health, safety, welfare, and morals. Not enumerated in the federal Constitution.",
    sectionId: 'part-two',
  },
  {
    term: 'Reconciliation',
    definition:
      'Senate budget process allowing certain fiscal bills to pass with a simple majority, bypassing the filibuster.',
    sectionId: 'part-two',
  },
  {
    term: 'Separation of powers',
    definition:
      'Constitutional division of authority among legislative, executive, and judicial branches.',
    sectionId: 'part-two',
  },
  {
    term: 'Signing statement',
    definition:
      'Written presidential statement issued when signing a bill, often interpreting or asserting non-enforcement of specific provisions.',
    sectionId: 'part-two',
  },
  {
    term: 'Stare decisis',
    definition:
      'Doctrine of following precedent. Strong but not absolute — Brown (1954), Dobbs (2022), and Loper Bright (2024) all explicitly overruled prior decisions.',
    sectionId: 'part-two',
  },
  {
    term: 'Take Care Clause',
    definition:
      'Article II requirement that the President "take care that the laws be faithfully executed."',
    sectionId: 'part-two',
  },
  {
    term: 'Textualism',
    definition:
      'Interpretive approach focused on the ordinary meaning of statutory or constitutional text. Closely related to but distinct from originalism.',
    sectionId: 'part-two',
  },
  {
    term: 'Unitary executive theory',
    definition:
      'Constitutional theory that all executive-branch authority is vested in the President personally and that independent agencies are constitutionally questionable.',
    sectionId: 'part-two',
  },
  {
    term: 'Vesting Clause',
    definition:
      'Article II, §1: "The executive Power shall be vested in a President of the United States of America." Disputed scope.',
    sectionId: 'part-two',
  },
  // Political-economy terms
  {
    term: 'Chevron deference',
    definition:
      'The doctrine (1984–2024) requiring courts to defer to reasonable agency interpretations of ambiguous statutes. Overruled by Loper Bright (2024).',
    sectionId: 'part-two',
  },
  {
    term: 'Skidmore deference',
    definition:
      "The weaker form of agency deference that survived Loper Bright: courts may respect an agency's interpretation to the extent it has the power to persuade.",
    sectionId: 'part-two',
  },
  {
    term: 'Modern Monetary Theory (MMT)',
    aliases: ['MMT'],
    definition:
      'A heterodox framework arguing that sovereign currency issuers do not face a financing constraint like households. The binding limit on government spending is real capacity and inflation, not "running out of money."',
    sectionId: 'part-one',
  },
  {
    term: 'Varieties of Capitalism (VoC)',
    aliases: ['VoC'],
    definition:
      "Hall and Soskice's framework distinguishing Liberal Market Economies (US, UK) from Coordinated Market Economies (Germany, Japan). Both are fully capitalist; they coordinate differently. Substantially complicated since 2001 by state-capitalism and growth-model research.",
    sectionId: 'part-one',
  },
  {
    term: 'Socialist calculation debate',
    definition:
      "The Mises/Hayek vs. Lange/Lerner argument over whether rational economic calculation is possible without market prices for capital goods. Revived in the 2010s by debates over what big data and AI do to Hayek's knowledge problem.",
    sectionId: 'part-one',
  },
];
