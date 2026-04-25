import { notFound } from 'next/navigation';
import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { services } from '@/lib/site-data';

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Service detail" title={service.title} description={service.description} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="card-surface rounded-[1.75rem] p-8">
          <h2 className="heading-font text-2xl font-bold text-white">What’s included</h2>
          <div className="mt-5 grid gap-3">
            {service.include.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white/75">
                {item}
              </div>
            ))}
          </div>
          <h3 className="mt-8 heading-font text-xl font-semibold text-white">Why it matters</h3>
          <div className="mt-4 grid gap-3 text-white/70">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl bg-white/6 px-4 py-3">
                {benefit}
              </div>
            ))}
          </div>
        </article>

        <aside className="card-surface rounded-[1.75rem] p-8">
          <p className="eyebrow text-xs font-semibold text-gold/80">Best next step</p>
          <h2 className="mt-3 heading-font text-2xl font-bold text-white">Get an estimate for this service</h2>
          <p className="mt-4 leading-7 text-white/72">
            We can bundle prep, repair, and sealing into one visit so the driveway looks consistent and the process stays simple.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/quote">Request a quote</Button>
            <Button href="/services" variant="secondary">
              Back to services
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
