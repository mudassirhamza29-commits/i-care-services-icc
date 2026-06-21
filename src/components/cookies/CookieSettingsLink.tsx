"use client";

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("icare:open-cookie-settings"))
      }
      className="text-xs font-semibold text-white/60 transition-colors hover:text-orange focus-visible:text-orange focus-visible:outline-none"
    >
      Cookie settings
    </button>
  );
}
