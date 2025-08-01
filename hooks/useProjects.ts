// hooks/useProjects.ts

export type Project = {
  id: number;
  title: string;
  description: string;
  details: string;
  tech: string[];
  link?: string;
  liveLink?: string;
  githubLink?: string;
  pdfLink?: string;        // ← only for management
  type: 'technical' | 'management';
  cardImage: string;
  
};

export const useProjects = (): Project[] => [
  // ─────────────── TECHNICAL PROJECTS ───────────────
  {
    id: 1,
    title: 'RemoteReady',
    description:
      'Platform to compare remote-first companies with dashboards for managers, employees, and HR.',
    details:
      'RemoteReady helps organizations make data-driven decisions about hybrid & remote work policies. Built in Next.js & Prisma, it features role-based dashboards, task boards, and engagement analytics. I architected the core functionality and designed scalable database models to support enterprise use cases.',
    tech: ['Next.js', 'Prisma', 'Tailwind'],
    
    type: 'technical',
    cardImage: '/remoteReady.jpg',
    
  },
  {
    id: 2,
    title: 'Climate Dashboard',
    description:
      'Interactive emissions tracker for JHU’s Scope 1, 2, 3 data—starting with business travel.',
    details:
      'Climate Dashboard is an interactive web application built for Johns Hopkins University to transform static emissions reports into an engaging data exploration tool. At its core, it empowers administrators, researchers, and students to drill down into Scope 1, 2, and 3 greenhouse-gas emissions—filtering by year, campus unit, and emission source—to reveal trends and insights that static PDFs simply can’t convey. Under the hood, the dashboard leverages Next.js for server-side rendering and Incremental Static Regeneration, ensuring lightning-fast page loads even as new data arrives. Tailwind CSS powers a clean, responsive UI, while custom D3.js components render animated line charts, stacked bars, and interactive radial diagrams. A Leaflet map overlay highlights key campus buildings, coloring them by emissions intensity and offering tooltip-driven detail on hover. This project was shaped by close collaboration with GovEx, the JHU Sustainability Leadership Council, and campus facilities managers. Through three iterative workshops, stakeholder feedback guided feature prioritization—adding multi-year comparisons, per-capita views, and color-blind-friendly palettes. Integration with the university’s OAuth system provided secure single-sign-on, streamlining access for internal users. Since launch, the dashboard has been adopted by the Office of Sustainability and two academic departments, cutting decision-making time by nearly 40%. Its modular visualization components are now reused in an internal “Building Energy Monitor,” and planned enhancements include real-time sensor feeds and a public portal for alumni and community engagement.',
    tech: ['D3.js', 'JavaScript', 'Next.js'],
    liveLink: 'https://bit.ly/jhutravel',
    githubLink: 'https://github.com/teerthSatwara/climateDashboard',
    type: 'technical',
    cardImage: '/climateDashboard.jpg',
    
  },
  {
    id: 3,
    title: 'VitalAid',
    description:
      'AI nurse assistant (CalHacks) leveraging Flex AI & Google Gemini to streamline patient interactions.',
    details:
      'Built at CalHacks 11.0 to reduce administrative burden on nursing staff. Integrated Flex AI + Gemini for real-time patient Q&A and scheduling. Recognized by Google & Meta judges for its practical healthcare impact.',
    tech: ['Flex AI', 'Gemini', 'React'],
    liveLink: 'https://devpost.com/software/vitalade#updates',
    githubLink: 'https://github.com/teerthSatwara/calHacks11',
    type: 'technical',
    cardImage: '/VitalAde.jpg',
    
  },

  // ─────────────── MANAGEMENT PROJECTS ───────────────
  {
    id: 4,
    title: 'UrbanEvac – NATO Stretcher',
    description:
      'Modular, power-assisted stretcher concept for urban combat evacuation.',
    details:
      'Researched NATO operational requirements and designed a foldable, motorized stretcher to allow single-soldier operation in narrow, debris-filled environments. Balanced durability with portability, iterated on prototypes with military advisors.',
    tech: ['Product Strategy', 'Prototyping', 'Defense Design'],
    pdfLink: '/urbanEvac.pdf',
    type: 'management',
    cardImage: '/nato.jpg',
    
  },
  {
    id: 5,
    title: 'INL Gas Sensor Market Strategy',
    description:
      'Market analysis & entry strategy for Idaho National Lab’s gas-sensing technology.',
    details:
      'Led primary research across 12+ industries, benchmarked eight competing devices, and created a TRL-based roadmap. Delivered a funding and go-to-market plan aligning INL’s technical IP with commercial opportunities.',
    tech: ['Market Research', 'Competitive Analysis', 'Consulting'],
    pdfLink: '/INL.pdf',
    type: 'management',
    cardImage: '/inl.jpg',
    
  },
  {
    id: 6,
    title: 'Concannon Business Consultancy',
    description:
      'Advised Concannon on product positioning and go-to-market strategy.',
    details:
      'Analyzed client industries and competitive landscapes, then formulated actionable recommendations to refine product-market fit and optimize sales channels. Delivered a strategic playbook for growth.',
    tech: ['Consulting', 'Market Strategy', 'Business Analysis'],
    pdfLink: '/capstone.pdf',
    type: 'management',
    cardImage: '/sl.jpg',
    
  },
  {
    id: 7,
    title: 'Patient Belongings – JHU Hospital',
    description:
      'Digital system design to track & manage patient belongings across departments.',
    details:
      'Collaborated with Johns Hopkins Hospital staff to map existing workflows and pain points. Designed a QR-based tracking system and mobile interface to reduce lost items and improve patient satisfaction.',
    tech: ['UX Research', 'Product Strategy', 'Healthcare Ops'],
    pdfLink: '/hp.pdf',
    type: 'management',
    cardImage: '/jhh.jpg',
    
  },
  {
    id: 8,
    title: 'Starbucks World Cup – Blue Ocean Strategy',
    description:
      'Concept for an annual “Coffee World Cup” to create new market space for Starbucks.',
    details:
      'Proposed a global barista competition and collaboration event to reposition Starbucks in the coffee culture arena. Defined competition categories, sponsorship models, and small-shop partnership pipelines to drive brand growth.',
    tech: ['Strategy', 'Brand Innovation', 'Market Analysis'],
    pdfLink: '/starbucks.pdf',
    type: 'management',
    cardImage: '/sb.jpg',
    
  },
];
