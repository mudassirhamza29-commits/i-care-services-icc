"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { CONTACT_INFO, NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const closeOutsideServices = (event: PointerEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOutsideServices);
    return () => document.removeEventListener("pointerdown", closeOutsideServices);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-all duration-300 ${
        hasScrolled
          ? "border-cream-dark shadow-[var(--shadow-soft)]"
          : "border-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
          aria-label="I-Care Services CIC home"
        >
          <Image
            src="/brand/i-care-logo.png"
            alt=""
            width={673}
            height={673}
            sizes="48px"
            priority
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
          />
          <span className="max-w-36 font-heading text-base font-extrabold leading-tight text-navy sm:max-w-none sm:text-lg">
            {CONTACT_INFO.tradingName}
          </span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.href}
                ref={servicesMenuRef}
                className="relative flex h-20 items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsServicesOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isServicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setIsServicesOpen(true)}
                  className={`flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-extrabold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple ${
                    isActive(link.href) || isServicesOpen
                      ? "bg-purple/10 text-purple"
                      : "text-text-secondary hover:bg-cream hover:text-navy"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id="services-menu"
                  role="menu"
                  aria-label="How We Help"
                  className={`absolute left-1/2 top-[calc(100%-5px)] w-[42rem] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-cream-dark bg-white p-3 shadow-[var(--shadow-hover)] transition-all duration-200 ${
                    isServicesOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible translate-y-2 opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between gap-6 rounded-[1.25rem] bg-navy px-5 py-4 text-white">
                    <div>
                      <p className="font-heading text-xl font-semibold">
                        How can we help today?
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/70">
                        Choose an area, or view every support option.
                      </p>
                    </div>
                    <Link
                      href="/services"
                      role="menuitem"
                      className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-orange px-4 py-2 text-sm font-extrabold text-navy transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                    >
                      View all support
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {link.children.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        role="menuitem"
                        className="group flex min-h-14 items-center justify-between gap-3 rounded-xl bg-cream/55 px-4 py-3 text-sm font-bold text-navy transition-colors hover:bg-purple/10 hover:text-purple focus-visible:bg-purple/10 focus-visible:text-purple focus-visible:outline-2 focus-visible:outline-purple"
                      >
                        {service.title}
                        <ArrowRight
                          size={15}
                          className="shrink-0 text-purple transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-2 text-sm font-bold ${
                  isActive(link.href)
                    ? "text-purple after:scale-x-100"
                    : "text-text-secondary hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <span className="max-w-36 text-xs font-semibold leading-5 text-text-secondary">
            Not an emergency service
          </span>
          <Link
            href="/for-professionals"
            className="interactive-button rounded-full border-2 border-purple px-4 py-2.5 text-sm font-extrabold text-purple hover:bg-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            Refer a Client
          </Link>
          <Link
            href="/get-support"
            className="interactive-button rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-navy shadow-sm hover:bg-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            Get Support
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <Link
            href="/get-support"
            className="interactive-button rounded-full bg-orange px-4 py-2.5 text-sm font-extrabold text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            Get Support
          </Link>
          <button
            type="button"
            className="interactive-button flex h-11 w-11 items-center justify-center rounded-full border border-cream-dark bg-white text-navy shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, height: 0 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="overflow-y-auto border-t border-cream-dark bg-white xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="border-b border-cream-dark/70">
                  <Link
                    href={link.href}
                    className={`flex min-h-12 items-center py-3 font-heading text-base font-bold ${
                      isActive(link.href) ? "text-purple" : "text-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children ? (
                    <div className="grid gap-1 pb-4 sm:grid-cols-2">
                      {link.children.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="rounded-xl px-3 py-2.5 text-sm font-semibold text-text-secondary hover:bg-cream-dark hover:text-purple focus-visible:bg-cream-dark focus-visible:text-purple focus-visible:outline-2 focus-visible:outline-purple"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <div className="grid gap-3 pt-6 sm:grid-cols-2">
                <Link
                  href="/for-professionals"
                  className="interactive-button rounded-full border-2 border-purple px-5 py-3 text-center text-sm font-extrabold text-purple"
                >
                  Refer a Client
                </Link>
                <Link
                  href="/get-support"
                  className="interactive-button rounded-full bg-orange px-5 py-3 text-center text-sm font-extrabold text-navy"
                >
                  Get Support
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
