import Link from 'next/link';
import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { cities } from '@/lib/site-data';

export default function AreasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Local SEO"
        title="Service areas across Southeast Idaho"
        description="We focus on the places where our process and product matter most: neighborhoods with driveways that need real protection, not just a cosmetic spray."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cities.map((city) => (
          <article key={city.slug} className="card-surface rounded-[1.75rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">{city.name}</p>
            <h2 className="mt-3 heading-font text-2xl font-bold text-white">{city.name} Sealcoating</h2>
            <p className="mt-3 text-sm leading-7 text-white/72">{city.intro}</p>
            <Link className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-[#ffe24d]" href={`/areas/${city.slug}`}>
              View local page
            </Link>
          </article>
        ))}
      </div>

      <section className="mt-16 card-surface rounded-[2rem] p-8">
        <SectionHeading
          eyebrow="Local authority"
          title="We tailor the message and the work to the city"
          description="Each local page explains why sealcoating matters in that area and keeps the lead flow focused on homeowners looking for driveway protection."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/quote">Request a quote</Button>
          <Button href="/services" variant="secondary">
            View services
          </Button>
        </div>
      </section>
    </div>
  );
}
