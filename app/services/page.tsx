import Link from 'next/link';
import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { services } from '@/lib/site-data';

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Our Premium Sealcoating Services"
        description="A premium finish comes from a thoughtful process: clean, prep, seal, and protect. Each service page below explains how we handle that work for Southeast Idaho homes."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="card-surface rounded-[1.75rem] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">{service.shortTitle}</p>
            <h2 className="mt-3 heading-font text-3xl font-bold text-white">{service.title}</h2>
            <p className="mt-4 leading-7 text-white/72">{service.description}</p>
            <div className="mt-5 grid gap-2 text-sm text-white/70">
              {service.include.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-gold/70">
              {service.benefits.map((benefit) => (
                <span key={benefit} className="rounded-full border border-gold/20 bg-gold/8 px-3 py-2">
                  {benefit}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button href={`/services/${service.slug}`}>View Service</Button>
              <Button href="/quote" variant="secondary">
                Get Estimate
              </Button>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 card-surface rounded-[2rem] p-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Common questions about our services"
          description="We keep the answer simple: the more care that goes into prep and application, the better the final result."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ['How often should I sealcoat?', 'Typically every 2 to 3 years, depending on use and exposure.'],
            ['Does sealcoating fix cracks?', 'It protects and improves the surface, but cracks should be cleaned and filled first.'],
            ['Why hand-squeegee?', 'It creates a thicker, more controlled finish than spray-only application.']
          ].map(([question, answer]) => (
            <details key={question} className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
              <summary className="cursor-pointer list-none heading-font text-lg font-semibold text-white">{question}</summary>
              <p className="mt-3 leading-7 text-white/70">{answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/blog">Read the FAQ hub</Button>
        </div>
      </section>
    </div>
  );
}
