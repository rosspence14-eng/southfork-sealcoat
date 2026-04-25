import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="eyebrow text-xs font-semibold text-gold/80">404</p>
      <h1 className="mt-4 heading-font text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-4 text-white/70">The page you requested does not exist in this build.</p>
      <Link className="mt-8 inline-flex rounded-full bg-gold px-5 py-3 font-semibold text-ink" href="/">
        Return home
      </Link>
    </div>
  );
}
