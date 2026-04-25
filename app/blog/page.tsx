import Link from 'next/link';
import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { blogPosts } from '@/lib/site-data';

const faqs = [
  ['How often should I sealcoat my driveway?', 'Most driveways benefit from sealing every 2 to 3 years, depending on wear and weather exposure.'],
  ['Does sealcoating prevent cracks?', 'Sealcoating helps protect the surface, but cracks should be filled before sealing for the best result.'],
  ['What is the best time of year to sealcoat?', 'Dry, mild weather is best because it gives the product the right conditions to cure properly.'],
  ['What kind of sealer do you use?', 'We focus on premium materials and a careful application process for a stronger finish.']
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog / FAQ"
        title="Your guide to driveway care in Southeast Idaho"
        description="Short, practical articles and direct answers to the most common questions about sealcoating and asphalt maintenance."
      />

      <section className="mt-10">
        <h2 className="heading-font text-2xl font-bold text-white">Latest articles</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card-surface rounded-[1.75rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">{post.category}</p>
              <h3 className="mt-3 heading-font text-2xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/45">
                <span>{post.readTime}</span>
                <Link className="text-gold hover:text-[#ffe24d]" href={`/blog/${post.slug}`}>
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 card-surface rounded-[2rem] p-8">
        <h2 className="heading-font text-3xl font-bold text-white">Frequently asked questions</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
              <summary className="cursor-pointer list-none heading-font text-lg font-semibold text-white">{question}</summary>
              <p className="mt-3 leading-7 text-white/70">{answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/quote">Contact us for expert advice</Button>
        </div>
      </section>
    </div>
  );
}
