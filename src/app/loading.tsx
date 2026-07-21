export default function Loading() {
  return (
    <main id="main-content" className="min-h-[60vh] bg-cream" aria-busy="true" aria-label="Loading page">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="h-4 w-36 animate-pulse rounded-full bg-purple/20" />
        <div className="mt-6 h-14 max-w-xl animate-pulse rounded-2xl bg-navy/10" />
        <div className="mt-4 h-5 max-w-2xl animate-pulse rounded-full bg-navy/8" />
        <div className="mt-3 h-5 max-w-lg animate-pulse rounded-full bg-navy/8" />
      </div>
    </main>
  );
}
