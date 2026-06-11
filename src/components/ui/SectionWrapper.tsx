import type { HTMLAttributes } from "react";

export function SectionWrapper({
  className = "",
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={`mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}
      {...props}
    />
  );
}
