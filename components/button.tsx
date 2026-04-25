import Link from 'next/link';

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
};

export function Button({ href, children, variant = 'primary', className = '', type = 'button' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-transparent';

  const styles: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-gold text-ink shadow-[0_14px_40px_rgba(255,215,0,0.22)] hover:-translate-y-0.5 hover:bg-[#ffe24d]',
    secondary: 'border border-white/15 bg-white/8 text-white hover:border-white/25 hover:bg-white/12',
    ghost: 'text-white/85 hover:text-white hover:bg-white/8'
  };

  if (href) {
    return (
      <Link className={`${base} ${styles[variant]} ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} type={type}>
      {children}
    </button>
  );
}
