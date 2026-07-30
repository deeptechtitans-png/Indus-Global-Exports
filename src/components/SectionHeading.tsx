interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: Props) {
  return (
    <div className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      <span className={light ? 'chip-light' : 'chip'}>{eyebrow}</span>
      <h2
        className={`mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-navy-300' : 'text-navy-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
