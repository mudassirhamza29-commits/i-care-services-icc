import { cn } from '../../lib/utils';

interface LogoProps {
  variant?: 'navy' | 'white';
  className?: string;
  showText?: boolean;
}

export function Logo({
  variant = 'navy',
  className,
  showText = true,
}: LogoProps): JSX.Element {
  const primary = variant === 'white' ? '#ffffff' : '#1a3a6b';
  const accent = variant === 'white' ? '#e0b050' : '#c9932a';

  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <svg
        viewBox="0 0 64 58"
        className="h-11 w-12 shrink-0"
        role="img"
        aria-label="I-Care Services heart logo"
      >
        <path
          d="M32 54C26 48.4 7 35.6 7 19.6 7 10.9 13.3 5 21.1 5c4.6 0 8.7 2.2 10.9 5.7C34.2 7.2 38.3 5 42.9 5 50.7 5 57 10.9 57 19.6 57 35.6 38 48.4 32 54Z"
          fill="none"
          stroke={primary}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="25" r="8" fill={accent} />
        <path
          d="M28 25h8M32 21v8"
          stroke={variant === 'white' ? '#122a52' : '#ffffff'}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <span
          className={cn(
            'font-heading text-xl font-bold leading-none',
            variant === 'white' ? 'text-white' : 'text-navy dark:text-white',
          )}
        >
          I-Care
          <span className="mt-1 block font-body text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
            Services ICC
          </span>
        </span>
      )}
    </span>
  );
}
