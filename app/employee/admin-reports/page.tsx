import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';

const reports = [
  ['Rigby', 'Smith Residence', 'Sealcoating, crack filling', '8.5'],
  ['Rexburg', 'Anderson Drive', 'Sealcoating', '6.0'],
  ['Idaho Falls', 'Pinecrest HOA', 'Patch repair, striping', '9.25']
];

export default function AdminReportsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Admin" title="Job reports overview" description="Owner-only reporting view for filtering, reviewing, and exporting work history." />
      <div className="mt-10 card-surface rounded-[1.75rem] p-8">
        <div className="grid gap-3 md:grid-cols-4 text-sm text-white/55 uppercase tracking-[0.18em]">
          <span>City</span>
          <span>Customer</span>
          <span>Services</span>
          <span>Hours</span>
        </div>
        <div className="mt-4 grid gap-3">
          {reports.map(([city, customer, services, hours]) => (
            <div key={`${city}-${customer}`} className="grid gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 md:grid-cols-4">
              <span>{city}</span>
              <span>{customer}</span>
              <span className="text-white/72">{services}</span>
              <span>{hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/employee/report">Open report form</Button>
          <Button href="/quote" variant="secondary">
            Export CSV / Excel placeholder
          </Button>
        </div>
      </div>
    </div>
  );
}
