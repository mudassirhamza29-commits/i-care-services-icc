const FALLBACK_SITE_URL = "https://i-care-services-icc.vercel.app";

function normaliseSiteUrl(value: string | undefined) {
  if (!value) return FALLBACK_SITE_URL;
  const withProtocol = value.startsWith("http") ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    return url.origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE_URL = normaliseSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL,
);
