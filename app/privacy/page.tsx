import { SectionHeading } from '@/components/section-heading';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" description="Placeholder privacy policy for the demo site. Replace with a final policy before launch." />
      <div className="mt-10 card-surface rounded-[1.75rem] p-8 text-white/72 leading-8">
        <p>Southfork Sealcoat may collect contact details, quote form responses, payment records, and employee report data for business operations.</p>
        <p className="mt-4">Any production deployment should include a final privacy notice aligned to the actual tools used for forms, payments, and analytics.</p>
      </div>
    </div>
  );
}
