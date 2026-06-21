"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const CONSENT_COOKIE = "icare_cookie_consent";
const CONSENT_VERSION = "2026-06-21";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

type OptionalCategory = "preferences" | "analytics" | "marketing";

interface CookieConsentState {
  version: string;
  timestamp: string;
  categories: {
    necessary: true;
    preferences: boolean;
    analytics: boolean;
    marketing: boolean;
  };
}

const optionalCategories: Array<{
  id: OptionalCategory;
  label: string;
  description: string;
}> = [
  {
    id: "preferences",
    label: "Preferences",
    description:
      "Reserved for remembering optional site choices. No preference cookies are currently set.",
  },
  {
    id: "analytics",
    label: "Analytics",
    description:
      "Would help understand website usage if an analytics provider is added. Analytics cookies are not currently used.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Would support advertising or remarketing if ever added. Marketing cookies are not currently used.",
  },
];

const defaultOptional = {
  preferences: false,
  analytics: false,
  marketing: false,
};

function createConsent(
  categories: Record<OptionalCategory, boolean>,
): CookieConsentState {
  return {
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    categories: {
      necessary: true,
      ...categories,
    },
  };
}

function readConsentCookie() {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${CONSENT_COOKIE}=`));

  if (!cookie) return null;

  try {
    return JSON.parse(
      decodeURIComponent(cookie.slice(CONSENT_COOKIE.length + 1)),
    ) as CookieConsentState;
  } catch {
    return null;
  }
}

function writeConsentCookie(consent: CookieConsentState) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    JSON.stringify(consent),
  )}; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
}

export function CookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [choices, setChoices] =
    useState<Record<OptionalCategory, boolean>>(defaultOptional);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const existing = readConsentCookie();
    if (existing?.version === CONSENT_VERSION) {
      setChoices({
        preferences: existing.categories.preferences,
        analytics: existing.categories.analytics,
        marketing: existing.categories.marketing,
      });
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }

    setIsReady(true);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      const existing = readConsentCookie();
      if (existing) {
        setChoices({
          preferences: existing.categories.preferences,
          analytics: existing.categories.analytics,
          marketing: existing.categories.marketing,
        });
      }
      setShowSettings(true);
      setShowBanner(false);
    };

    window.addEventListener("icare:open-cookie-settings", openSettings);
    return () =>
      window.removeEventListener("icare:open-cookie-settings", openSettings);
  }, []);

  useEffect(() => {
    if (!showSettings) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = dialogRef.current?.querySelector<HTMLElement>(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
    );
    focusable?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSettings();
      if (event.key !== "Tab" || !dialogRef.current) return;

      const elements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [showSettings]);

  const saveConsent = (nextChoices: Record<OptionalCategory, boolean>) => {
    const consent = createConsent(nextChoices);
    writeConsentCookie(consent);
    setChoices(nextChoices);
    setShowBanner(false);
    setShowSettings(false);
    lastFocusedRef.current?.focus();
  };

  const closeSettings = () => {
    setShowSettings(false);
    lastFocusedRef.current?.focus();
  };

  if (!isReady) return null;

  return (
    <>
      {showBanner ? (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-5xl rounded-3xl border border-navy/10 bg-white p-5 shadow-[var(--shadow-hover)] sm:p-6"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-heading text-xl font-extrabold text-navy">
                Cookie preferences
              </h2>
              <p className="mt-2 text-sm leading-7 text-text-secondary">
                We use necessary cookies to remember your cookie choice and keep
                the website working. Optional preference, analytics and
                marketing cookies are off by default and are not currently used.
              </p>
              <Link
                href="/cookies"
                className="mt-2 inline-block text-sm font-bold text-purple underline"
              >
                Read the Cookie Policy
              </Link>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                type="button"
                onClick={() =>
                  saveConsent({
                    preferences: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="interactive-button rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-navy"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => saveConsent(defaultOptional)}
                className="interactive-button rounded-full border-2 border-purple px-5 py-3 text-sm font-extrabold text-purple"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() => {
                  lastFocusedRef.current =
                    document.activeElement as HTMLElement | null;
                  setShowSettings(true);
                }}
                className="interactive-button rounded-full border-2 border-navy px-5 py-3 text-sm font-extrabold text-navy"
              >
                Manage preferences
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {showSettings ? (
        <div
          className="fixed inset-0 z-[100] flex items-end bg-navy/55 p-4 backdrop-blur-sm sm:items-center sm:justify-center"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeSettings();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-[var(--shadow-hover)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="cookie-settings-title"
                  className="font-heading text-2xl font-extrabold text-navy"
                >
                  Cookie settings
                </h2>
                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  Necessary cookies are always on. Optional categories are off
                  until you choose to allow them.
                </p>
              </div>
              <button
                type="button"
                onClick={closeSettings}
                className="interactive-button rounded-full p-2 text-navy hover:bg-cream-dark focus-visible:outline-2 focus-visible:outline-purple"
                aria-label="Close cookie settings"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-cream-dark bg-cream p-4">
                <p className="font-bold text-navy">Strictly necessary</p>
                <p className="mt-1 text-sm leading-6 text-text-secondary">
                  Always active. Includes the consent cookie used to remember
                  your choices.
                </p>
              </div>
              {optionalCategories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-cream-dark p-4"
                >
                  <span>
                    <span className="block font-bold text-navy">
                      {category.label}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-text-secondary">
                      {category.description}
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    checked={choices[category.id]}
                    onChange={(event) =>
                      setChoices((current) => ({
                        ...current,
                        [category.id]: event.target.checked,
                      }))
                    }
                    className="mt-1 h-5 w-5 accent-purple"
                    aria-label={`${category.label} cookies`}
                  />
                </label>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => saveConsent(choices)}
                className="interactive-button rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-navy"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={() => saveConsent(defaultOptional)}
                className="interactive-button rounded-full border-2 border-purple px-5 py-3 text-sm font-extrabold text-purple"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() =>
                  saveConsent({
                    preferences: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="interactive-button rounded-full border-2 border-navy px-5 py-3 text-sm font-extrabold text-navy"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
