"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";

import { CONTACT_INFO } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
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
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple"
          aria-label="I-Care Services ICC home"
        >
          <Image
            src="/brand/i-care-logo.png"
            alt=""
            width={673}
            height={673}
            priority
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
          />
          <span className="font-heading text-base font-extrabold leading-tight text-navy sm:text-lg">
            I-Care Services ICC
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
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
          ))}
        </div>

        <a
          href="tel:+442080400433"
          className="interactive-button hidden items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-navy shadow-sm hover:bg-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple lg:inline-flex"
        >
          <PhoneCall size={17} aria-hidden="true" />
          Call Us
        </a>

        <button
          type="button"
          className="interactive-button flex h-11 w-11 items-center justify-center rounded-full border border-cream-dark bg-white text-navy shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple lg:hidden"
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
            className="overflow-y-auto border-t border-cream-dark bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b border-cream-dark/70 py-4 font-heading text-lg font-bold ${
                    isActive(link.href) ? "text-purple" : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+442080400433"
                className="interactive-button mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-3 text-center text-sm font-extrabold text-navy"
              >
                <PhoneCall size={17} aria-hidden="true" />
                Call {CONTACT_INFO.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
