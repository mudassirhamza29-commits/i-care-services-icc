"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollLevel, setScrollLevel] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const updateScrollLevel = () => {
      const nextLevel = window.scrollY > 96 ? 2 : window.scrollY > 16 ? 1 : 0;
      setScrollLevel(nextLevel);
    };

    updateScrollLevel();
    window.addEventListener("scroll", updateScrollLevel, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollLevel);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const headerStyle =
    scrollLevel === 2
      ? "border-cream-dark/80 bg-white shadow-[var(--shadow-soft)]"
      : scrollLevel === 1
        ? "border-white/60 bg-white/85 backdrop-blur-xl"
        : "border-transparent bg-cream/90 backdrop-blur-sm";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${headerStyle}`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
          aria-label="I-Care Services ICC home"
        >
          <Image
            src="/brand/i-care-logo.jpeg"
            alt=""
            width={247}
            height={127}
            priority
            className="h-12 w-auto shrink-0 rounded-xl object-contain sm:h-14"
          />
          <span className="max-w-40 font-heading text-base font-extrabold leading-tight text-navy sm:max-w-none sm:text-lg">
            I-Care Services ICC
          </span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="group/services relative flex h-20 items-center"
              >
                <Link
                  href={link.href}
                  aria-haspopup="menu"
                  className={`nav-link flex items-center gap-1 py-2 text-sm font-semibold ${
                    isActive(link.href)
                      ? "text-purple after:scale-x-100"
                      : "text-text-secondary hover:text-navy"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover/services:rotate-180"
                  />
                </Link>
                <div
                  role="menu"
                  className="pointer-events-none invisible absolute left-1/2 top-[calc(100%-4px)] w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-cream-dark bg-white p-2 opacity-0 shadow-[var(--shadow-hover)] transition-all duration-200 group-focus-within/services:pointer-events-auto group-focus-within/services:visible group-focus-within/services:translate-y-0 group-focus-within/services:opacity-100 group-hover/services:pointer-events-auto group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100"
                >
                  {link.children.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      role="menuitem"
                      className="block rounded-xl px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-cream hover:text-purple focus-visible:bg-cream focus-visible:text-purple focus-visible:outline-none"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link py-2 text-sm font-semibold ${
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
          <Link
            href="/for-professionals"
            className="interactive-button rounded-full border-2 border-navy px-4 py-2.5 text-sm font-bold text-navy hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            Refer a Client
          </Link>
          <Link
            href="/get-support"
            className="interactive-button rounded-full bg-orange px-5 py-3 text-sm font-bold text-navy shadow-sm hover:bg-coral hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            Get Support
          </Link>
        </div>

        <button
          type="button"
          className="interactive-button flex h-11 w-11 items-center justify-center rounded-full border border-cream-dark bg-white text-navy shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple xl:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
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
                  {link.children && (
                    <div className="grid gap-1 pb-4 sm:grid-cols-2">
                      {link.children.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="rounded-xl px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-cream hover:text-purple focus-visible:bg-cream focus-visible:text-purple focus-visible:outline-2 focus-visible:outline-purple"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="grid gap-3 pt-6 sm:grid-cols-2">
                <Link
                  href="/for-professionals"
                  className="interactive-button rounded-full border-2 border-navy px-5 py-3 text-center text-sm font-bold text-navy"
                >
                  Refer a Client
                </Link>
                <Link
                  href="/get-support"
                  className="interactive-button rounded-full bg-orange px-5 py-3 text-center text-sm font-bold text-navy"
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
