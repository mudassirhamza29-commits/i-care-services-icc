import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-cream" id="main-content">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">
          Page not found
        </p>
        <h1 className="mt-4 font-heading text-5xl font-black tracking-[-0.05em] text-navy">
          We could not find that page.
        </h1>
        <p className="mt-5 leading-8 text-text-secondary">
          The page may have moved, or the link may be out of date. You can go
          back home or contact us if you need help finding information.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="interactive-button rounded-full bg-orange px-6 py-3 font-extrabold text-navy"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="interactive-button rounded-full border-2 border-purple px-6 py-3 font-extrabold text-purple"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
