import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type ReactNode,
} from 'react';
import { LoaderCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline-light'
  | 'cta'
  | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface SharedButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
}

type NativeButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    to?: never;
    href?: never;
  };

type RouterLinkProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className' | 'href'> & {
    to: string;
    href?: never;
  };

type AnchorButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> & {
    href: string;
    to?: never;
  };

export type ButtonProps =
  | NativeButtonProps
  | RouterLinkProps
  | AnchorButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-white hover:bg-navy-light dark:bg-gold dark:text-navy-dark dark:hover:bg-gold-light',
  secondary:
    'border-2 border-navy text-navy hover:bg-navy hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-navy-dark',
  'outline-light':
    'border-2 border-white text-white hover:bg-white hover:text-navy',
  cta: 'bg-white text-navy hover:bg-offwhite',
  ghost:
    'text-navy hover:bg-navy/10 dark:text-white dark:hover:bg-white/10',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 py-2 text-sm',
  md: 'min-h-11 px-6 py-2.5 text-base',
  lg: 'min-h-12 px-8 py-3 text-base md:text-lg',
};

function isExternalHref(href: string): boolean {
  return /^(?:https?:|tel:|mailto:)/i.test(href);
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    className,
    ...props
  },
  ref,
) {
  const styles = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  );
  const content = loading ? (
    <>
      <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
      <span>Please wait...</span>
    </>
  ) : (
    children
  );

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props;
    const external = isExternalHref(href);

    return (
      <a
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        href={href}
        className={styles}
        target={external ? '_blank' : anchorProps.target}
        rel={external ? 'noopener noreferrer' : anchorProps.rel}
        aria-disabled={loading || undefined}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  if ('to' in props && props.to) {
    const { to, ...linkProps } = props;

    return (
      <Link
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        to={to}
        className={styles}
        aria-disabled={loading || undefined}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const buttonProps = props as Omit<
    NativeButtonProps,
    keyof SharedButtonProps
  >;

  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={buttonProps.type ?? 'button'}
      className={styles}
      disabled={loading || buttonProps.disabled}
      {...buttonProps}
    >
      {content}
    </button>
  );
});
