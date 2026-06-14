export function SkipLink(): JSX.Element {
  return (
    <a
      href="#main"
      className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-gold px-5 py-3 font-semibold text-navy-dark shadow-lg transition-transform focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
