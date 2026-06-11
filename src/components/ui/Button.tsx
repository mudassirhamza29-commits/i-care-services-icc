import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface SharedProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | LinkButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary: "bg-orange text-navy hover:bg-coral hover:text-white",
  secondary: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const styles = `interactive-button inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as LinkButtonProps;
    return (
      <Link href={href} className={styles} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
