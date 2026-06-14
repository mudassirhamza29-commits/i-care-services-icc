import { cn } from '../../lib/utils';

interface WaveDividerProps {
  fill?: string;
  secondaryFill?: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({
  fill = 'currentColor',
  secondaryFill,
  flip = false,
  className,
}: WaveDividerProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      className={cn(
        'block h-16 w-full md:h-24',
        flip && 'rotate-180',
        className,
      )}
      aria-hidden="true"
    >
      <path
        d="M0 70 80 60c80-10 240-30 400-11s320 77 480 75 320-64 400-94l80-30v150H0Z"
        fill={secondaryFill ?? fill}
        opacity={secondaryFill ? 0.35 : 1}
      />
      <path
        d="m0 96 96-14c96-14 288-42 480-20s384 94 576 76c96-9 192-39 240-54l48-14v80H0Z"
        fill={fill}
      />
    </svg>
  );
}
