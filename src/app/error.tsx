"use client";

import { GraphicScene } from "@/components/graphics/GraphicScene";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main-content" className="bg-cream">
      <div className="mx-auto grid min-h-[70vh] max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        <GraphicScene variant="not-found" mode="hero" />
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-purple">Something went wrong</p>
          <h1 className="mt-4 font-heading text-5xl font-black tracking-[-0.05em] text-navy">This page could not load.</h1>
          <p className="mt-5 leading-8 text-text-secondary">Your information has not been submitted by this error screen. Try loading the page again or return to the main navigation.</p>
          <button type="button" onClick={reset} className="interactive-button mt-8 rounded-full bg-orange px-6 py-3 font-extrabold text-navy">Try again</button>
        </div>
      </div>
    </main>
  );
}
