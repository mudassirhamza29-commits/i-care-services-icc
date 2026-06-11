import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`interactive-card rounded-[var(--radius-md)] bg-white p-6 ${className}`}
      {...props}
    />
  );
}
