"use client";

import { useMemo, useState } from 'react';
import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';

function estimateRange(value: string) {
  const lower = value.toLowerCase();
  const numeric = lower.match(/\d+/)?.[0];
  if (numeric) {
    const size = Number(numeric);
    if (size <= 300) return '$250 - $375';
    if (size <= 500) return '$375 - $525';
    if (size <= 800) return '$525 - $750';
    return '$750 - $1,050';
  }

  if (lower.includes('2-car') || lower.includes('two')) return '$325 - $475';
  if (lower.includes('3-car') || lower.includes('three')) return '$450 - $650';
  if (lower.includes('4-car')) return '$600 - $850';
  return '';
}

export default function QuotePage() {
  const [drivewaySize, setDrivewaySize] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => estimateRange(drivewaySize), [drivewaySize]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Quote request"
        title="Get your free sealcoating estimate"
        description="Share a few details and we will use them to prepare a detailed, no-obligation quote."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          className="card-surface rounded-[1.75rem] p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {['Full name', 'Email address', 'Phone number', 'Street address', 'ZIP code'].map((label) => (
              <label key={label} className="grid gap-2 text-sm text-white/75 md:col-span-1">
                {label}
                <input className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40" placeholder={label} type="text" />
              </label>
            ))}
            <label className="grid gap-2 text-sm text-white/75 md:col-span-1">
              City
              <select className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none focus:border-gold/40">
                <option>Rigby</option>
                <option>Rexburg</option>
                <option>Idaho Falls</option>
                <option>Ammon</option>
                <option>Other</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-white/75 md:col-span-1">
              Approximate driveway size
              <input
                className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40"
                placeholder="2-car, 3-car, or sq ft"
                type="text"
                value={drivewaySize}
                onChange={(event) => setDrivewaySize(event.target.value)}
              />
            </label>
            <label className="grid gap-2 text-sm text-white/75 md:col-span-2">
              Notes / special requests
              <textarea className="min-h-32 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40" placeholder="Tell us about cracks, patching, access, or timing." />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/72">
            {['Phone', 'Email', 'Text message'].map((method) => (
              <label key={method} className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2">
                <input type="radio" name="contact" />
                {method}
              </label>
            ))}
          </div>

          <label className="mt-5 flex items-start gap-3 text-sm text-white/72">
            <input className="mt-1" type="checkbox" required />
            I agree to receive communications from Southfork Sealcoat.
          </label>

          {estimate ? (
            <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/10 px-4 py-4 text-sm text-white/80">
              Preliminary estimate only: {estimate}. Final quote requires a site visit.
            </div>
          ) : null}

          {submitted ? (
            <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-4 text-sm text-white/80">
              Your request has been captured for this demo build. Connect a backend or form service to send it to Southfork Sealcoat.
            </div>
          ) : null}

          <div className="mt-6">
            <Button type="submit">Get My Free Estimate</Button>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="card-surface rounded-[1.75rem] p-8">
            <p className="eyebrow text-xs font-semibold text-gold/80">Trust</p>
            <h2 className="mt-3 heading-font text-2xl font-bold text-white">Why homeowners reach out</h2>
            <div className="mt-5 grid gap-3 text-sm text-white/72">
              {['Licensed and insured', 'Local Southeast Idaho service', 'Clear estimates and communication'].map((item) => (
                <div key={item} className="rounded-2xl bg-black/20 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface rounded-[1.75rem] p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-white/50">Optional estimate calculator</p>
            <p className="mt-3 leading-7 text-white/72">
              If you include a rough size, we can provide a preliminary range. Final pricing depends on condition, repairs, and access.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
