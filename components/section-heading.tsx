type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignClass}`}>
      {eyebrow ? <p className="eyebrow text-xs font-semibold text-gold/80">{eyebrow}</p> : null}
      <h2 className="heading-font text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
