import { notFound } from 'next/navigation';
import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { cities, services } from '@/lib/site-data';

type CityPageProps = {
  params: { city: string };
};

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export default function CityPage({ params }: CityPageProps) {
  const city = cities.find((item) => item.slug === params.city);
  if (!city) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Service area" title={`${city.name} Sealcoating Experts`} description={city.intro} />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="card-surface rounded-[1.75rem] p-8">
          <h2 className="heading-font text-2xl font-bold text-white">Why {city.name} homeowners trust Southfork Sealcoat</h2>
          <p className="mt-4 leading-7 text-white/72">
            We build trust through clean communication, careful preparation, and a finish that looks intentional instead of rushed. {city.localNote}
          </p>
          <h3 className="mt-8 heading-font text-xl font-semibold text-white">Services in {city.name}</h3>
          <div className="mt-4 grid gap-3">
            {services.map((service) => (
              <div key={service.slug} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white/76">
                {service.title}
              </div>
            ))}
          </div>
        </article>

        <aside className="card-surface rounded-[1.75rem] p-8">
          <p className="eyebrow text-xs font-semibold text-gold/80">Local SEO note</p>
          <h2 className="mt-3 heading-font text-2xl font-bold text-white">{city.name} driveway sealing done right</h2>
          <p className="mt-4 leading-7 text-white/72">
            Temperature swings, surface wear, and water intrusion all push asphalt to fail earlier than it should. Our process is built to stop that cycle.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/quote">Request your {city.name} estimate</Button>
            <Button href="/areas" variant="secondary">
              Back to areas
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
