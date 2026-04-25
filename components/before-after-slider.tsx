"use client";

import { useState } from 'react';

type BeforeAfterSliderProps = {
  label: string;
  before: string;
  after: string;
};

export function BeforeAfterSlider({ label, before, after }: BeforeAfterSliderProps) {
  const [value, setValue] = useState(55);

  return (
    <figure className="card-surface overflow-hidden rounded-[1.75rem]">
      <div className="relative aspect-[4/3]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(60,60,60,0.95),rgba(15,15,15,0.95))]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,215,0,0.3),rgba(255,140,0,0.22)),radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%)]"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(0,0,0,0.08),rgba(0,0,0,0.55))]" />
        <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
          Before
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-ink">
          After
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="heading-font text-xl font-semibold text-white">{label}</p>
          <p className="mt-1 text-sm text-white/75">{before} <span className="text-gold">•</span> {after}</p>
        </div>
        <div
          className="absolute inset-y-0 w-[3px] bg-gold shadow-[0_0_24px_rgba(255,215,0,0.7)]"
          style={{ left: `${value}%`, transform: 'translateX(-1.5px)' }}
        />
      </div>
      <div className="border-t border-white/10 bg-black/20 px-5 py-4">
        <label className="flex items-center gap-4 text-sm text-white/75">
          Drag to compare
          <input
            aria-label={`Adjust before and after comparison for ${label}`}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/12 accent-gold"
            max={100}
            min={0}
            type="range"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
        </label>
      </div>
    </figure>
  );
}
