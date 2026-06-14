import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';

export default function NotFound(): JSX.Element {
  return (
    <>
      <SEO title="Page Not Found" />
      <main className="flex min-h-[70vh] items-center justify-center bg-offwhite px-4 text-center dark:bg-navy-dark">
        <div className="max-w-2xl">
          <p className="font-heading text-8xl font-bold text-gold">404</p>
          <h1 className="mt-4 text-4xl text-navy dark:text-white">Page Not Found</h1>
          <p className="mt-5 text-gray-600 dark:text-gray-300">The page may have moved, or the address may be incorrect. You can return home or continue to support information.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Button to="/">Back Home</Button><Button to="/services" variant="secondary">Services</Button><Button to="/contact" variant="ghost">Contact</Button></div>
        </div>
      </main>
    </>
  );
}
