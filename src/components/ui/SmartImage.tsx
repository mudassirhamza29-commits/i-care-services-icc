import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface SmartImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    'src' | 'alt' | 'width' | 'height' | 'loading'
  > {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  onError,
  ...props
}: SmartImageProps): JSX.Element {
  const [hasError, setHasError] = useState(false);
  const aspectRatio = `${width} / ${height}`;

  if (hasError) {
    return (
      <div
        className={cn(
          'relative overflow-hidden bg-navy',
          className,
        )}
        style={{ aspectRatio }}
        role="img"
        aria-label={alt}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-full w-full"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="smart-image-fallback" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#122a52" />
              <stop offset="55%" stopColor="#2a4f8f" />
              <stop offset="100%" stopColor="#c9932a" />
            </linearGradient>
            <pattern
              id="smart-image-dots"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="2" fill="#ffffff" opacity="0.16" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smart-image-fallback)" />
          <rect width="100%" height="100%" fill="url(#smart-image-dots)" />
          <circle
            cx="82%"
            cy="18%"
            r="25%"
            fill="#e0b050"
            opacity="0.16"
          />
        </svg>
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={className}
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
      {...props}
    />
  );
}
