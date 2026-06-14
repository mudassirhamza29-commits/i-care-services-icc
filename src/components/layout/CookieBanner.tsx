import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

type CookieChoice = 'all' | 'essential';

const STORAGE_KEY = 'i-care-cookie-choice';

export function CookieBanner(): JSX.Element | null {
  const [visible, setVisible] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.localStorage.getItem(STORAGE_KEY) === null,
  );

  const saveChoice = (choice: CookieChoice): void => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside
      className="fixed inset-x-4 bottom-4 z-[65] mx-auto max-w-5xl rounded-2xl border border-slate bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-navy-dark md:flex md:items-center md:gap-6"
      aria-label="Cookie preferences"
    >
      <p className="flex-1 text-sm text-gray-700 dark:text-gray-200">
        We use essential cookies to make our website work. We&apos;d also like
        to set optional analytics cookies to help us improve it.{' '}
        <Link
          to="/privacy-policy"
          className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-2 dark:text-gold"
        >
          Read our cookie policy
        </Link>
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row md:mt-0">
        <Button size="sm" onClick={() => saveChoice('all')}>
          Accept All
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => saveChoice('essential')}
        >
          Essential Only
        </Button>
      </div>
    </aside>
  );
}
