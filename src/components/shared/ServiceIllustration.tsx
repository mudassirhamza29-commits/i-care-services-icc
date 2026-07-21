import type { ReactNode } from "react";

import type { ServiceSlug } from "@/types";

interface ServiceIllustrationProps {
  slug: ServiceSlug;
  title: string;
  accentColor: string;
  className?: string;
  decorative?: boolean;
}

function Artwork({ slug, accentColor }: Pick<ServiceIllustrationProps, "slug" | "accentColor">) {
  const common = {
    fill: "none",
    stroke: "#1A1A2E",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 10,
  };

  const artwork: Record<ServiceSlug, ReactNode> = {
    "health-social-care": (
      <>
        <rect x="218" y="58" width="204" height="246" rx="30" fill="white" stroke={accentColor} strokeWidth="8" />
        <rect x="273" y="40" width="94" height="44" rx="18" fill={accentColor} />
        <path d="M273 145h94M273 190h70M273 235h88" {...common} strokeWidth="8" />
        <path d="M319 126c-24-29-69 7 0 52 69-45 24-81 0-52Z" fill={`${accentColor}33`} stroke={accentColor} strokeLinejoin="round" strokeWidth="8" />
        <circle cx="128" cy="120" r="30" fill="white" stroke={accentColor} strokeWidth="8" />
        <circle cx="512" cy="242" r="30" fill="white" stroke={accentColor} strokeWidth="8" />
        <path d="M158 120h45M422 242h60" stroke={accentColor} strokeDasharray="12 12" strokeLinecap="round" strokeWidth="8" />
      </>
    ),
    "welfare-support": (
      <>
        <path d="M172 72h194l62 62v162H172Z" fill="white" stroke={accentColor} strokeLinejoin="round" strokeWidth="8" />
        <path d="M366 72v62h62" fill={`${accentColor}25`} stroke={accentColor} strokeLinejoin="round" strokeWidth="8" />
        <path d="M218 160h110M218 202h82M218 244h72" {...common} strokeWidth="8" />
        <rect x="382" y="170" width="112" height="126" rx="22" fill="#1A1A2E" />
        <rect x="402" y="190" width="72" height="26" rx="8" fill={accentColor} />
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <circle key={index} cx={410 + (index % 3) * 32} cy={240 + Math.floor(index / 3) * 32} r="8" fill="white" />
        ))}
        <path d="m104 203 22 22 42-52" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" />
      </>
    ),
    "housing-support": (
      <>
        <path d="m156 170 164-116 164 116" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="18" />
        <path d="M190 154v144h260V154" fill="white" stroke="#1A1A2E" strokeLinejoin="round" strokeWidth="10" />
        <rect x="286" y="210" width="68" height="88" rx="8" fill={`${accentColor}35`} stroke={accentColor} strokeWidth="8" />
        <rect x="216" y="188" width="48" height="46" rx="7" fill="#EAF7F4" stroke="#1A1A2E" strokeWidth="7" />
        <circle cx="447" cy="98" r="28" fill="white" stroke="#1A1A2E" strokeWidth="9" />
        <path d="M466 118l54 54m-18-18 21-21m-38 4 19-19" {...common} strokeWidth="9" />
      </>
    ),
    "general-health": (
      <>
        <rect x="126" y="76" width="388" height="214" rx="34" fill="white" stroke={accentColor} strokeWidth="8" />
        <path d="M166 190h76l28-58 42 112 37-82 28 28h96" fill="none" stroke="#1A1A2E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="11" />
        <circle cx="194" cy="124" r="19" fill={`${accentColor}35`} />
        <circle cx="452" cy="124" r="19" fill={`${accentColor}35`} />
        <path d="M256 316h128M320 290v26" {...common} strokeWidth="9" />
        <path d="M100 122h-42M79 101v42" stroke={accentColor} strokeLinecap="round" strokeWidth="12" />
      </>
    ),
    "mental-health": (
      <>
        <circle cx="268" cy="178" r="118" fill="white" stroke={accentColor} strokeWidth="8" />
        <circle cx="268" cy="178" r="78" fill={`${accentColor}20`} stroke={accentColor} strokeDasharray="10 12" strokeWidth="7" />
        <path d="M268 130c-54 25-54 75 0 101 54-26 54-76 0-101Z" fill={accentColor} opacity="0.75" />
        <path d="M268 130v101M236 157c20 6 44 6 64 0M236 203c20-6 44-6 64 0" fill="none" stroke="white" strokeLinecap="round" strokeWidth="7" />
        <path d="M438 96v174M438 120h104l-24 30 24 30H438M438 208h-92l22 27-22 27h92" fill="white" stroke="#1A1A2E" strokeLinejoin="round" strokeWidth="9" />
        <circle cx="438" cy="286" r="13" fill={accentColor} />
      </>
    ),
    "family-support": (
      <>
        <path d="m156 164 164-110 164 110" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="18" />
        <path d="M190 148v150h260V148" fill="white" stroke="#1A1A2E" strokeLinejoin="round" strokeWidth="10" />
        <circle cx="260" cy="213" r="28" fill={`${accentColor}30`} stroke={accentColor} strokeWidth="7" />
        <circle cx="380" cy="213" r="28" fill={`${accentColor}30`} stroke={accentColor} strokeWidth="7" />
        <circle cx="320" cy="255" r="24" fill="#EAF7F4" stroke="#1A1A2E" strokeWidth="7" />
        <path d="M286 220h68M276 239l28 12M364 239l-28 12" fill="none" stroke="#1A1A2E" strokeLinecap="round" strokeWidth="7" />
        <path d="M116 258h52M142 232v52" stroke={accentColor} strokeLinecap="round" strokeWidth="11" />
      </>
    ),
    "sexual-health": (
      <>
        <path d="M320 52c54 32 108 37 150 37v78c0 86-54 139-150 165-96-26-150-79-150-165V89c42 0 96-5 150-37Z" fill="white" stroke={accentColor} strokeLinejoin="round" strokeWidth="9" />
        <circle cx="320" cy="174" r="48" fill={`${accentColor}28`} />
        <path d="M320 156v4M320 188v42" stroke="#1A1A2E" strokeLinecap="round" strokeWidth="12" />
        <circle cx="320" cy="136" r="8" fill="#1A1A2E" />
        <rect x="78" y="112" width="108" height="74" rx="20" fill="#1A1A2E" />
        <path d="M105 139h54M105 160h34" stroke="white" strokeLinecap="round" strokeWidth="7" />
        <path d="M470 236h88l-18 22 18 22h-88" fill={accentColor} stroke="#1A1A2E" strokeLinejoin="round" strokeWidth="7" />
      </>
    ),
    "art-therapy": (
      <>
        <rect x="196" y="62" width="252" height="248" rx="26" fill="white" stroke="#1A1A2E" strokeWidth="9" transform="rotate(-4 322 186)" />
        <path d="M240 226c45-93 108-101 164-32" fill="none" stroke={accentColor} strokeLinecap="round" strokeWidth="18" />
        <circle cx="270" cy="158" r="20" fill={accentColor} opacity="0.55" />
        <circle cx="337" cy="133" r="25" fill="#2A7F6F" opacity="0.55" />
        <circle cx="387" cy="173" r="17" fill="#1A1A2E" opacity="0.75" />
        <path d="m124 278 40-148 28 8-40 148Z" fill={accentColor} stroke="#1A1A2E" strokeLinejoin="round" strokeWidth="7" />
        <path d="m164 130 15-34 13 42" fill="#1A1A2E" />
        <path d="M486 94c42 16 56 59 28 84-24 22-60 9-59-22 0-25 25-29 44-20" fill="none" stroke={accentColor} strokeLinecap="round" strokeWidth="10" />
      </>
    ),
    "additional-support": (
      <>
        <circle cx="320" cy="180" r="70" fill="#1A1A2E" />
        <path d="M320 150v60M290 180h60" stroke="white" strokeLinecap="round" strokeWidth="13" />
        {[
          [140, 92],
          [500, 92],
          [126, 270],
          [514, 270],
        ].map(([cx, cy], index) => (
          <g key={index}>
            <path d={`M${index % 2 === 0 ? cx + 36 : cx - 36} ${cy} L${index % 2 === 0 ? 255 : 385} ${index < 2 ? 145 : 215}`} stroke={accentColor} strokeDasharray="10 10" strokeLinecap="round" strokeWidth="8" />
            <circle cx={cx} cy={cy} r="42" fill="white" stroke={accentColor} strokeWidth="8" />
            <circle cx={cx} cy={cy} r="13" fill={index % 2 ? "#1A1A2E" : accentColor} />
          </g>
        ))}
      </>
    ),
  };

  return artwork[slug];
}

export function ServiceIllustration({
  slug,
  title,
  accentColor,
  className = "",
  decorative = false,
}: ServiceIllustrationProps) {
  const label = `${title} support illustration`;

  return (
    <svg
      viewBox="0 0 640 360"
      width="640"
      height="360"
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="640" height="360" rx="32" fill="#F7F5F1" />
      <circle cx="72" cy="44" r="112" fill={accentColor} opacity="0.1" />
      <circle cx="588" cy="334" r="144" fill={accentColor} opacity="0.12" />
      <path d="M24 316C142 272 196 342 308 306s188-10 308-70" fill="none" stroke={accentColor} strokeDasharray="10 14" strokeLinecap="round" strokeWidth="5" opacity="0.25" />
      <Artwork slug={slug} accentColor={accentColor} />
    </svg>
  );
}
