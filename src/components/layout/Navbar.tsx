import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { NAV_LINKS } from '../../lib/constants';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Navbar(): JSX.Element {
  const { pathname } = useLocation();
  const { resolvedTheme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const mobileMenuId = useId();
  const servicesMenuId = useId();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    const menu = mobileMenuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    cn(
      'relative py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-gold hover:after:scale-x-100',
      isActive
        ? 'text-gold after:scale-x-100'
        : 'text-navy-dark dark:text-white',
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/95 shadow-md backdrop-blur dark:bg-navy/95'
          : 'bg-white/90 backdrop-blur-sm dark:bg-navy/90',
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link to="/" aria-label="I-Care Services home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onFocus={() => setIsServicesOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsServicesOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  className={cn(
                    'flex items-center gap-1 py-2 text-sm font-semibold transition-colors hover:text-gold',
                    pathname.startsWith('/services')
                      ? 'text-gold'
                      : 'text-navy-dark dark:text-white',
                  )}
                  aria-expanded={isServicesOpen}
                  aria-controls={servicesMenuId}
                  onClick={() => setIsServicesOpen((open) => !open)}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform',
                      isServicesOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={servicesMenuId}
                  className={cn(
                    'absolute left-1/2 top-full w-[38rem] -translate-x-1/2 pt-3',
                    isServicesOpen ? 'block' : 'hidden',
                  )}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate bg-white p-3 shadow-xl dark:border-white/10 dark:bg-navy-dark">
                    <NavLink
                      to="/services"
                      className="col-span-2 rounded-xl px-4 py-3 font-semibold text-navy hover:bg-slate dark:text-white dark:hover:bg-white/10"
                    >
                      View all services
                    </NavLink>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className={({ isActive }) =>
                          cn(
                            'rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-slate hover:text-navy dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-white',
                            isActive && 'bg-slate text-navy dark:bg-white/10 dark:text-gold',
                          )
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-slate dark:text-white dark:hover:bg-white/10"
            onClick={toggleTheme}
            aria-label={
              resolvedTheme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <Button to="/contact" size="sm">
            Get Support
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-slate dark:text-white dark:hover:bg-white/10 lg:hidden"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMobileOpen}
          aria-controls={mobileMenuId}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      <div
        id={mobileMenuId}
        ref={mobileMenuRef}
        className={cn(
          'fixed inset-0 z-[70] min-h-screen overflow-y-auto bg-white px-5 py-5 dark:bg-navy-dark lg:hidden',
          isMobileOpen ? 'block' : 'hidden',
        )}
        aria-hidden={!isMobileOpen}
      >
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="I-Care Services home">
            <Logo />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-slate dark:text-white dark:hover:bg-white/10"
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <div key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'block rounded-xl px-4 py-3 text-lg font-semibold text-navy hover:bg-slate dark:text-white dark:hover:bg-white/10',
                    isActive && 'bg-slate text-gold dark:bg-white/10',
                  )
                }
              >
                {link.label}
              </NavLink>
              {link.children && (
                <div className="ml-4 grid border-l-2 border-gold/40 pl-3">
                  {link.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className="rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-slate hover:text-navy dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3">
          <Button to="/contact" className="w-full">
            Get Support
          </Button>
          <button
            type="button"
            className="flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-navy px-5 font-semibold text-navy dark:border-white dark:text-white"
            onClick={toggleTheme}
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
            {resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </div>
    </header>
  );
}
