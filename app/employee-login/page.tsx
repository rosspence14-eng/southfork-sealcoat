import { Button } from '@/components/button';
import { SectionHeading } from '@/components/section-heading';

export default function EmployeeLoginPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Employees" title="Employee login" description="A secure entry point for job reporting and future admin tools." />
      <form className="mt-10 card-surface rounded-[1.75rem] p-8">
        <div className="grid gap-5 md:grid-cols-2">
          {['Username / email', 'Password'].map((label) => (
            <label key={label} className="grid gap-2 text-sm text-white/75">
              {label}
              <input className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-gold/40" type={label === 'Password' ? 'password' : 'text'} />
            </label>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button type="submit">Login</Button>
          <Button href="/employee/report" variant="secondary">
            Go to report form
          </Button>
        </div>
        <p className="mt-4 text-sm text-white/55">Forgot password flow can be added when authentication is connected.</p>
      </form>
    </div>
  );
}
