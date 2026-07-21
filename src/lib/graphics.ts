import type { GraphicVariant } from "@/types";

export type GraphicLayout =
  | "pathway"
  | "hub"
  | "collage"
  | "cutaway"
  | "orbit"
  | "calm"
  | "modules"
  | "privacy"
  | "canvas"
  | "branch"
  | "atlas"
  | "bridge"
  | "library"
  | "signals"
  | "roots"
  | "bulletin"
  | "policy"
  | "wrong-turn";

export type GraphicIconName =
  | "Accessibility"
  | "Armchair"
  | "BookOpen"
  | "Briefcase"
  | "Calculator"
  | "CalendarDays"
  | "CheckSquare"
  | "ClipboardCheck"
  | "Compass"
  | "Cookie"
  | "Database"
  | "DoorOpen"
  | "Droplets"
  | "FileCheck"
  | "FileHeart"
  | "FileText"
  | "Folder"
  | "FolderSearch"
  | "HeartPulse"
  | "House"
  | "KeyRound"
  | "Landmark"
  | "LockKeyhole"
  | "Mail"
  | "MapPin"
  | "MessageCircle"
  | "Moon"
  | "Network"
  | "Newspaper"
  | "Paintbrush"
  | "Palette"
  | "Phone"
  | "Route"
  | "Send"
  | "Shapes"
  | "ShieldCheck"
  | "Signpost"
  | "Wrench";

interface GraphicConfig {
  accent: string;
  secondary: string;
  layout: GraphicLayout;
  icons: readonly [GraphicIconName, GraphicIconName, GraphicIconName, GraphicIconName];
}

export const GRAPHIC_ACCENTS = {
  teal: "#2A7F6F",
  orange: "#F4A261",
  coral: "#E27661",
  sky: "#5F8FB4",
  lavender: "#8C7AB8",
  green: "#4F7A65",
  amber: "#C98235",
  plum: "#7B4F6B",
  slateBlue: "#577590",
} as const;

export const GRAPHIC_CONFIG: Record<GraphicVariant, GraphicConfig> = {
  home: { accent: GRAPHIC_ACCENTS.orange, secondary: GRAPHIC_ACCENTS.teal, layout: "hub", icons: ["Network", "House", "HeartPulse", "Palette"] },
  community: { accent: GRAPHIC_ACCENTS.teal, secondary: GRAPHIC_ACCENTS.orange, layout: "roots", icons: ["FileHeart", "Route", "ShieldCheck", "House"] },
  services: { accent: GRAPHIC_ACCENTS.orange, secondary: GRAPHIC_ACCENTS.teal, layout: "atlas", icons: ["Network", "House", "HeartPulse", "Compass"] },
  "get-support": { accent: GRAPHIC_ACCENTS.orange, secondary: GRAPHIC_ACCENTS.teal, layout: "pathway", icons: ["MessageCircle", "ClipboardCheck", "Route", "ShieldCheck"] },
  professional: { accent: GRAPHIC_ACCENTS.teal, secondary: GRAPHIC_ACCENTS.sky, layout: "bridge", icons: ["Send", "ClipboardCheck", "Briefcase", "ShieldCheck"] },
  resources: { accent: GRAPHIC_ACCENTS.sky, secondary: GRAPHIC_ACCENTS.amber, layout: "library", icons: ["FolderSearch", "BookOpen", "FileText", "Compass"] },
  contact: { accent: GRAPHIC_ACCENTS.orange, secondary: GRAPHIC_ACCENTS.teal, layout: "signals", icons: ["MessageCircle", "Mail", "Phone", "MapPin"] },
  about: { accent: GRAPHIC_ACCENTS.teal, secondary: GRAPHIC_ACCENTS.coral, layout: "roots", icons: ["Network", "House", "FileHeart", "Route"] },
  team: { accent: GRAPHIC_ACCENTS.sky, secondary: GRAPHIC_ACCENTS.teal, layout: "branch", icons: ["Network", "ClipboardCheck", "House", "HeartPulse"] },
  news: { accent: GRAPHIC_ACCENTS.amber, secondary: GRAPHIC_ACCENTS.sky, layout: "bulletin", icons: ["Newspaper", "CalendarDays", "FileCheck", "ClipboardCheck"] },
  "health-social-care": { accent: GRAPHIC_ACCENTS.teal, secondary: GRAPHIC_ACCENTS.sky, layout: "pathway", icons: ["House", "HeartPulse", "CalendarDays", "MessageCircle"] },
  "welfare-support": { accent: GRAPHIC_ACCENTS.amber, secondary: GRAPHIC_ACCENTS.coral, layout: "collage", icons: ["FileText", "CheckSquare", "Calculator", "Folder"] },
  "housing-support": { accent: GRAPHIC_ACCENTS.green, secondary: GRAPHIC_ACCENTS.coral, layout: "cutaway", icons: ["House", "KeyRound", "Wrench", "DoorOpen"] },
  "general-health": { accent: GRAPHIC_ACCENTS.sky, secondary: GRAPHIC_ACCENTS.teal, layout: "orbit", icons: ["HeartPulse", "CalendarDays", "Droplets", "BookOpen"] },
  "mental-health": { accent: GRAPHIC_ACCENTS.lavender, secondary: GRAPHIC_ACCENTS.teal, layout: "calm", icons: ["DoorOpen", "Armchair", "ShieldCheck", "Signpost"] },
  "family-support": { accent: GRAPHIC_ACCENTS.coral, secondary: GRAPHIC_ACCENTS.teal, layout: "modules", icons: ["House", "CalendarDays", "MessageCircle", "ShieldCheck"] },
  "sexual-health": { accent: GRAPHIC_ACCENTS.plum, secondary: GRAPHIC_ACCENTS.teal, layout: "privacy", icons: ["ShieldCheck", "LockKeyhole", "MessageCircle", "MapPin"] },
  "art-therapy": { accent: GRAPHIC_ACCENTS.coral, secondary: GRAPHIC_ACCENTS.sky, layout: "canvas", icons: ["Palette", "Paintbrush", "Shapes", "FileHeart"] },
  "additional-support": { accent: GRAPHIC_ACCENTS.slateBlue, secondary: GRAPHIC_ACCENTS.orange, layout: "branch", icons: ["Compass", "Network", "Route", "Signpost"] },
  privacy: { accent: GRAPHIC_ACCENTS.teal, secondary: GRAPHIC_ACCENTS.sky, layout: "policy", icons: ["LockKeyhole", "Folder", "ShieldCheck", "Route"] },
  cookies: { accent: GRAPHIC_ACCENTS.amber, secondary: GRAPHIC_ACCENTS.teal, layout: "policy", icons: ["Cookie", "CheckSquare", "Database", "ShieldCheck"] },
  accessibility: { accent: GRAPHIC_ACCENTS.sky, secondary: GRAPHIC_ACCENTS.orange, layout: "policy", icons: ["Accessibility", "CheckSquare", "Moon", "ShieldCheck"] },
  safeguarding: { accent: GRAPHIC_ACCENTS.coral, secondary: GRAPHIC_ACCENTS.teal, layout: "policy", icons: ["ShieldCheck", "Signpost", "Phone", "FileCheck"] },
  complaints: { accent: GRAPHIC_ACCENTS.orange, secondary: GRAPHIC_ACCENTS.sky, layout: "policy", icons: ["MessageCircle", "FileText", "Route", "CheckSquare"] },
  terms: { accent: GRAPHIC_ACCENTS.slateBlue, secondary: GRAPHIC_ACCENTS.orange, layout: "policy", icons: ["FileText", "Signpost", "CheckSquare", "Route"] },
  "data-protection": { accent: GRAPHIC_ACCENTS.plum, secondary: GRAPHIC_ACCENTS.teal, layout: "policy", icons: ["Database", "LockKeyhole", "ShieldCheck", "Route"] },
  "not-found": { accent: GRAPHIC_ACCENTS.orange, secondary: GRAPHIC_ACCENTS.sky, layout: "wrong-turn", icons: ["Route", "Signpost", "House", "Compass"] },
};

export function graphicAccent(variant: GraphicVariant) {
  return GRAPHIC_CONFIG[variant].accent;
}
