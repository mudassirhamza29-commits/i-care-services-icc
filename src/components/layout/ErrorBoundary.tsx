import { Component, type ReactNode } from 'react';
import { HeartCrack } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(): void {
    // Production logging can be connected here without exposing error details.
  }

  public render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <main className="flex min-h-screen items-center justify-center bg-offwhite px-4 dark:bg-navy-dark">
        <section className="w-full max-w-xl rounded-3xl bg-navy p-8 text-center text-white shadow-2xl md:p-12">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy">
            <HeartCrack className="h-8 w-8" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-3xl md:text-4xl">Something went wrong</h1>
          <p className="mt-4 text-white/80">
            We&apos;re sorry, this page could not be displayed. Please reload
            the page or return home.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="min-h-11 rounded-full bg-gold px-6 py-2.5 font-semibold text-navy transition-colors hover:bg-gold-light"
              onClick={() => window.location.reload()}
            >
              Reload
            </button>
            <a
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-6 py-2.5 font-semibold text-white transition-colors hover:bg-white hover:text-navy"
            >
              Go to Home
            </a>
          </div>
        </section>
      </main>
    );
  }
}
