export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  include: string[];
  benefits: string[];
};

export type City = {
  slug: string;
  name: string;
  intro: string;
  localNote: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  body: string[];
};

export const navLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Areas', href: '/areas' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Quote', href: '/quote' },
  { label: 'Pay', href: '/pay' }
];

export const services: Service[] = [
  {
    slug: 'sealcoating',
    title: 'Premium Driveway Sealcoating',
    shortTitle: 'Sealcoating',
    description:
      'Thorough cleaning, careful prep, and hand-squeegeed sealer for a thicker, more uniform finish that protects asphalt through Idaho freeze-thaw cycles.',
    include: ['Power washing and surface cleaning', 'Oil spot priming and crack detailing', 'Two-coat hand-squeegeed application'],
    benefits: ['Improves curb appeal immediately', 'Slows oxidation and surface wear', 'Built for residential driveways in harsh weather']
  },
  {
    slug: 'crack-filling',
    title: 'Crack Filling',
    shortTitle: 'Crack Filling',
    description:
      'We clean and fill cracks before sealing to stop water intrusion, extend pavement life, and create a smooth foundation for the topcoat.',
    include: ['Hot or cold crack repair where appropriate', 'Cleaning loose debris and vegetation', 'Prep before sealing for a uniform finish'],
    benefits: ['Prevents water damage', 'Reduces freeze-thaw expansion', 'Improves long-term sealcoat performance']
  },
  {
    slug: 'line-striping',
    title: 'Line Striping',
    shortTitle: 'Line Striping',
    description:
      'Crisp, professional lines for private drives, small lots, and organized parking areas that look sharp and guide traffic cleanly.',
    include: ['Layout planning', 'Premium reflective striping', 'Touch-up and edge cleanup'],
    benefits: ['Sharp, professional appearance', 'Improves traffic flow', 'Complements fresh sealcoat work']
  },
  {
    slug: 'patching',
    title: 'Patching & Prep',
    shortTitle: 'Patching',
    description:
      'Spot repairs, shallow patching, and prep work are handled before sealing so the driveway is level, bonded, and ready for a durable finish.',
    include: ['Surface patching before sealcoat', 'Oil spot treatment', 'Edge and transition prep'],
    benefits: ['Creates smoother results', 'Supports better adhesion', 'Helps avoid premature failure']
  }
];

export const cities: City[] = [
  {
    slug: 'rigby',
    name: 'Rigby',
    intro: 'Southfork Sealcoat serves Rigby homeowners who want a driveway that looks sharp and holds up through seasonal weather swings.',
    localNote: 'Rigby driveway sealing works best when prep is treated as seriously as the topcoat.'
  },
  {
    slug: 'rexburg',
    name: 'Rexburg',
    intro: 'We help Rexburg residents protect their asphalt investment with premium sealcoating and reliable prep work.',
    localNote: 'Rexburg driveway maintenance benefits from protection against oxidation and surface cracking.'
  },
  {
    slug: 'idaho-falls',
    name: 'Idaho Falls',
    intro: 'Idaho Falls properties see heavy use and changing weather, making durable sealcoating a practical upgrade.',
    localNote: 'Asphalt repair in Idaho Falls should pair repair, cleaning, and sealing in a single workflow.'
  },
  {
    slug: 'ammon',
    name: 'Ammon',
    intro: 'For Ammon homeowners, we deliver a premium finish that focuses on longevity, curb appeal, and careful application.',
    localNote: 'Ammon sealcoating is most effective when applied to a properly cleaned and repaired surface.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-sealcoating-matters-in-idahos-climate',
    title: 'Why Sealcoating Matters in Idaho’s Climate',
    excerpt: 'Freeze-thaw cycles are hard on asphalt. Here is why a strong sealcoat matters more than most homeowners realize.',
    readTime: '5 min read',
    category: 'Education',
    body: [
      'Idaho weather is tough on asphalt. Temperature swings, UV exposure, and moisture all work together to weaken pavement over time.',
      'A properly applied sealcoat adds a protective layer that slows oxidation, shields the surface, and keeps your driveway looking better for longer.',
      'At Southfork Sealcoat, we focus on preparation first because a premium finish starts with a clean, repaired surface.'
    ]
  },
  {
    slug: 'top-5-ways-to-extend-your-driveways-life',
    title: 'Top 5 Ways to Extend Your Driveway’s Life',
    excerpt: 'A few simple habits can save thousands in future repairs. Start with preventative maintenance, not emergency fixes.',
    readTime: '4 min read',
    category: 'Maintenance',
    body: [
      'Keep water moving away from the driveway, clean spills quickly, and avoid letting cracks sit open through winter.',
      'Sealcoating on a sensible schedule helps keep the surface from drying out and breaking down too early.',
      'If the surface already has damage, patch and fill it before you seal so the finish has the best possible foundation.'
    ]
  },
  {
    slug: 'diy-vs-professional-sealcoating',
    title: 'DIY vs. Professional Sealcoating: What You Should Know',
    excerpt: 'DIY sealers can help in some situations, but the difference in prep, materials, and application is easy to see.',
    readTime: '6 min read',
    category: 'Comparison',
    body: [
      'Professional work usually starts with cleaning, repair, and attention to surface conditions that most homeowner kits do not cover.',
      'Hand-applied methods often create a thicker, more controlled finish than a rushed spray-only approach.',
      'If you want the driveway to look polished and last, the extra care is usually worth it.'
    ]
  }
];

export const testimonials = [
  'Southfork Sealcoat transformed our driveway. The attention to detail was obvious from the first call through the final finish.',
  'Professional, respectful, and thorough. The hand-applied finish looks much better than our last sealcoat.',
  'The prep work made the difference. Our cracks were cleaned and filled before sealing, and the result is excellent.',
  'Joel communicated clearly, showed up on time, and delivered quality work that stood out immediately.',
  'If you want a driveway that looks finished instead of sprayed, this is the company to call.'
];
