import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';

const values = ['Integrity', 'Quality', 'Durability', 'Customer satisfaction', 'Local focus'];

const processSteps = [
  ['Clean', 'Power wash, clear debris, and remove surface contaminants.'],
  ['Prep', 'Fill cracks, prime oil spots, and repair trouble areas first.'],
  ['Seal', 'Apply premium sealer by hand for a thicker, controlled coat.'],
  ['Cure', 'Allow proper drying time so the finish can perform as intended.']
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="About" title="Quality, craftsmanship, and community" description="Southfork Sealcoat is built around one idea: a better process makes a better driveway. That principle drives every job." />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <article className="card-surface rounded-[1.75rem] p-8">
          <h2 className="heading-font text-3xl font-bold text-white">Meet Joel and the Southfork vision</h2>
          <p className="mt-4 leading-7 text-white/72">
            Joel built Southfork Sealcoat around careful prep, reliable communication, and a premium finish that homeowners can see immediately. The goal is simple: deliver work that feels personal, professional, and worth recommending.
          </p>
          <h3 className="mt-8 heading-font text-xl font-semibold text-white">Our values</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {values.map((value) => (
              <span key={value} className="rounded-full border border-gold/20 bg-gold/8 px-4 py-2 text-sm font-semibold text-white/82">
                {value}
              </span>
            ))}
          </div>
        </article>

        <aside className="card-surface rounded-[1.75rem] p-8">
          <p className="eyebrow text-xs font-semibold text-gold/80">Experience</p>
          <p className="mt-3 heading-font text-4xl font-bold text-white">40+ jobs</p>
          <p className="mt-3 text-white/72">Completed across Southeast Idaho with a focus on residential quality and longevity.</p>
        </aside>
      </div>

      <section className="mt-16 card-surface rounded-[2rem] p-8">
        <SectionHeading eyebrow="Process" title="Our meticulous 4-step process" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map(([step, description]) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold/70">Step</p>
              <h3 className="mt-3 heading-font text-xl font-semibold text-white">{step}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="card-surface rounded-[2rem] px-6 py-14 md:px-12">
          <h2 className="heading-font text-4xl font-bold text-white">Ready to experience the Southfork difference?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/72">
            If you want a driveway finish that is built for Idaho weather and handled with care, start with a free estimate.
          </p>
          <div className="mt-8">
            <Button href="/quote">Request Your Free Estimate</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
