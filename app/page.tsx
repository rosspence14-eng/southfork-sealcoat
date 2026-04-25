import Link from 'next/link';
import { BeforeAfterSlider } from '@/components/before-after-slider';
import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';
import { services, testimonials } from '@/lib/site-data';

const highlights = [
  {
    title: 'Meticulous Preparation',
    text: 'Power washing, crack cleaning, and patch work come first. The finish is only as good as the surface underneath it.'
  },
  {
    title: 'Hand-Applied Durability',
    text: 'Our hand-squeegeed application lays down a thicker, more controlled coat than a spray-only approach.'
  },
  {
    title: 'Built for Idaho Weather',
    text: 'We focus on freeze-thaw resistance, UV protection, and long-term curb appeal for Southeast Idaho homes.'
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-road-glow" />
        <div className="absolute inset-0 bg-hero-grid opacity-[0.08]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Southeast Idaho's Premium Sealcoating
            </div>
            <div className="space-y-5">
              <h1 className="heading-font max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-6xl">
                Protect Your Investment with a Finish That Outlasts the Seasons.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
                Southfork Sealcoat delivers premium driveway sealcoating, crack filling, and prep work for homeowners in Rigby, Rexburg, Idaho Falls, and Ammon.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/quote">Request a Free Estimate</Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {['Hand-squeegeed finish', 'Local Idaho expertise', 'Residential focus'].map((item) => (
                <div key={item} className="card-surface rounded-2xl px-4 py-4 text-sm text-white/78">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface rounded-[2rem] p-6 shadow-glow">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-black/30 p-5">
                <p className="eyebrow text-xs text-gold/70">Service Area</p>
                <p className="mt-3 heading-font text-3xl font-bold">4 Cities</p>
                <p className="mt-2 text-sm text-white/65">Focused coverage across Southeast Idaho.</p>
              </div>
              <div className="rounded-[1.5rem] bg-black/30 p-5">
                <p className="eyebrow text-xs text-gold/70">Jobs Completed</p>
                <p className="mt-3 heading-font text-3xl font-bold">40+</p>
                <p className="mt-2 text-sm text-white/65">Residential projects across the region.</p>
              </div>
            </div>
            <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,215,0,0.1))] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-white/55">What we promise</p>
              <p className="mt-3 heading-font text-2xl font-bold">Careful prep. Sharp results. Straightforward communication.</p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                The work starts with the driveway, not the product. That is how we get a finish that looks better and lasts longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The difference"
          title="Why Southfork Sealcoat stands apart"
          description="Most sealcoating companies talk about the finish. We start with the prep, because durability begins long before the sealer goes down."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card-surface rounded-[1.75rem] p-7">
              <div className="mb-4 h-14 w-14 rounded-2xl bg-gold/14 text-gold ring-1 ring-gold/25 flex items-center justify-center">
                <span className="heading-font text-xl font-bold">0{highlights.indexOf(item) + 1}</span>
              </div>
              <h3 className="heading-font text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Before and after"
            title="See the transformation in the finish"
            description="A strong driveway should look as good as it performs. Use the slider below to compare the effect of proper prep and hand-applied sealer."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <BeforeAfterSlider label="Rigby residential driveway" before="Faded surface and visible wear" after="Dark, uniform, and protected finish" />
            <BeforeAfterSlider label="Rexburg family home" before="Cracked and dry asphalt" after="Restored curb appeal" />
            <BeforeAfterSlider label="Idaho Falls driveway" before="Patchy top layer" after="Even hand-squeegeed coat" />
          </div>
          <p className="mt-6 text-sm tracking-wide text-white/55">40+ jobs completed across Southeast Idaho</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Designed around the driveway, not just the sealcoat"
          description="Every service supports the same goal: a cleaner, stronger, longer-lasting asphalt surface for your home."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.slug} className="card-surface rounded-[1.75rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold/80">{service.shortTitle}</p>
              <h3 className="mt-3 heading-font text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{service.description}</p>
              <Link className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-[#ffe24d]" href={`/services/${service.slug}`}>
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="What our neighbors say" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <blockquote key={testimonial} className="card-surface rounded-[1.75rem] p-7 text-white/78">
                <p className="text-lg leading-8">“{testimonial}”</p>
                <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold/70">Local homeowner</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="card-surface rounded-[2rem] px-6 py-16 md:px-12">
          <p className="eyebrow text-xs font-semibold text-gold/80">Ready to start</p>
          <h2 className="mt-4 heading-font text-4xl font-bold tracking-tight text-white md:text-5xl">Ready for a driveway that lasts?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/72">
            Get a free, no-obligation estimate from Southeast Idaho's trusted sealcoating professionals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/quote">Request Your Free Estimate Today</Button>
            <Button href="/about" variant="secondary">
              Meet Joel
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
