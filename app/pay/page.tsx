import { SectionHeading } from '@/components/section-heading';
import { StripePaymentForm } from '@/components/stripe-payment-form';

export default function PayPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Payments"
        title="Secure online payment"
        description="A simple payment page for customers paying invoices online. Stripe or Square can be plugged in later without changing the page structure."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <StripePaymentForm />

        <aside className="space-y-6">
          <div className="card-surface rounded-[1.75rem] p-8">
            <p className="eyebrow text-xs font-semibold text-gold/80">Security</p>
            <h2 className="mt-3 heading-font text-2xl font-bold text-white">Built for confidence</h2>
            <div className="mt-5 grid gap-3 text-sm text-white/72">
              {['SSL protected', 'PCI compliant payment processing', 'Receipt sent by email after payment'].map((item) => (
                <div key={item} className="rounded-2xl bg-black/20 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface rounded-[1.75rem] p-8 text-white/72">
            <p className="leading-7">This page is ready for a payment gateway integration. Connect Stripe Elements or Square Web Payments to activate real card capture.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
