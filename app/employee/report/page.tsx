import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';

export default function EmployeeReportPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Operations" title="Job report submission" description="Capture job details, notes, and photos after each visit." />
      <form className="mt-10 card-surface rounded-[1.75rem] p-8">
        <div className="grid gap-5 md:grid-cols-2">
          {['Date', 'Employee name', 'Customer name', 'Job address', 'Hours worked'].map((label) => (
            <label key={label} className="grid gap-2 text-sm text-white/75">
              {label}
              <input className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40" type={label === 'Date' ? 'date' : label === 'Hours worked' ? 'number' : 'text'} />
            </label>
          ))}
          <label className="grid gap-2 text-sm text-white/75 md:col-span-2">
            Services performed
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-4 sm:grid-cols-2">
              {['Sealcoating', 'Crack filling', 'Line striping', 'Patching'].map((service) => (
                <label key={service} className="flex items-center gap-2 text-white/72">
                  <input type="checkbox" />
                  {service}
                </label>
              ))}
            </div>
          </label>
          <label className="grid gap-2 text-sm text-white/75 md:col-span-2">
            Materials used
            <textarea className="min-h-24 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40" />
          </label>
          <label className="grid gap-2 text-sm text-white/75 md:col-span-2">
            Notes
            <textarea className="min-h-28 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40" />
          </label>
          <label className="grid gap-2 text-sm text-white/75 md:col-span-2">
            Photo upload
            <div className="rounded-2xl border border-dashed border-white/15 bg-black/20 px-4 py-8 text-center text-white/55">
              Drag-and-drop upload placeholder for before, during, and after photos.
            </div>
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="submit">Submit Job Report</Button>
          <Button href="/employee/admin-reports" variant="secondary">
            View admin reports
          </Button>
        </div>
      </form>
    </div>
  );
}
