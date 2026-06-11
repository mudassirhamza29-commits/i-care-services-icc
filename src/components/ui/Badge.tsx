import type { HTMLAttributes } from "react";

export function Badge({
  className = "",
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex rounded-full bg-purple/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple ${className}`}
      {...props}
    />
  );
}
