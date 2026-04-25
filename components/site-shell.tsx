"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/site-data';
import { Button } from '@/components/button';

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  return (
    <div className="site-grid min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),transparent_26%),linear-gradient(180deg,#121212,#0d0d0d)] text-white">
      <header className="sticky top-0 z-40 border-b border-white/8 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white/95 p-1 shadow-glow ring-1 ring-gold/20">
              <Image
                alt="Southfork Sealcoat logo"
                className="h-full w-full object-contain"
                height={96}
                priority
                src="/brand/logo.png"
                width={96}
              />
            </div>
            <div>
              <p className="heading-font text-base font-bold tracking-wide text-white">Southfork Sealcoat</p>
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-white/55">Premium Idaho asphalt care</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 xl:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  className={`rounded-full px-4 py-2 text-sm transition ${active ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/8 hover:text-white'}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex" href="/quote">
              Request a Free Estimate
            </Button>
            <Button className="xl:hidden" href="/quote" variant="secondary">
              Quote
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/8 bg-black/55">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/95 p-1 ring-1 ring-gold/20">
                <Image alt="Southfork Sealcoat logo" className="h-full w-full object-contain" height={80} src="/brand/logo.png" width={80} />
              </div>
              <p className="heading-font text-2xl font-bold">Southfork Sealcoat</p>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/70">
              Premium residential sealcoating, crack filling, patching, and striping for Southeast Idaho homeowners who want durable results and a polished finish.
            </p>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold/80">Quick Links</p>
            <div className="grid gap-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <Link key={link.href} className="transition hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold/80">Contact</p>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <a className="transition hover:text-white" href="tel:+12087577360">
                  208-757-7360
                </a>
              </p>
              <p>88 N 4300 E Rigby, ID 83442</p>
              <p>
                <a className="transition hover:text-white" href="mailto:Southforksealcoat@gmail.com">
                  Southforksealcoat@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
