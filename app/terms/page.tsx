import { SectionHeading } from '@/components/section-heading';

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Legal" title="Terms of Service" description="Placeholder terms for the demo site. Replace with final business terms before launch." />
      <div className="mt-10 card-surface rounded-[1.75rem] p-8 text-white/72 leading-8">
        <p>This website is provided for informational and lead-generation purposes. Quotes remain subject to site conditions and final review.</p>
        <p className="mt-4">Online payment and employee tools should be connected to secured production services before live use.</p>
      </div>
    </div>
  );
}
