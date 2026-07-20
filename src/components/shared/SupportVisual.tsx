import {
  ClipboardCheck,
  FileHeart,
  FolderSearch,
  HeartPulse,
  House,
  Mail,
  Palette,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type SupportVisualVariant =
  | "community"
  | "health"
  | "housing"
  | "wellbeing"
  | "resources"
  | "contact"
  | "team";

const visualIcons: Record<
  SupportVisualVariant,
  readonly [LucideIcon, LucideIcon, LucideIcon]
> = {
  community: [ShieldCheck, ClipboardCheck, FileHeart],
  health: [HeartPulse, ClipboardCheck, ShieldCheck],
  housing: [House, ClipboardCheck, ShieldCheck],
  wellbeing: [Palette, FileHeart, ShieldCheck],
  resources: [FolderSearch, ClipboardCheck, FileHeart],
  contact: [Mail, ClipboardCheck, ShieldCheck],
  team: [FileHeart, ClipboardCheck, ShieldCheck],
};

interface SupportVisualProps {
  variant?: SupportVisualVariant;
  accentColor?: string;
  className?: string;
}

export function SupportVisual({
  variant = "community",
  accentColor = "#F4A261",
  className = "",
}: SupportVisualProps) {
  const [PrimaryIcon, SecondaryIcon, TertiaryIcon] = visualIcons[variant];

  return (
    <div
      aria-hidden="true"
      className={`relative aspect-square w-full max-w-[22rem] ${className}`}
    >
      <div className="absolute inset-[12%] rounded-[36%_64%_52%_48%/46%_40%_60%_54%] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-sm" />
      <div
        className="absolute left-[30%] top-[25%] flex h-[40%] w-[40%] items-center justify-center rounded-[2rem] text-navy shadow-xl"
        style={{ backgroundColor: accentColor }}
      >
        <PrimaryIcon className="h-1/2 w-1/2" strokeWidth={1.8} />
      </div>
      <div className="absolute left-[4%] top-[18%] flex h-[22%] w-[22%] items-center justify-center rounded-2xl border border-white/15 bg-white/12 text-white backdrop-blur-md">
        <SecondaryIcon className="h-1/2 w-1/2" strokeWidth={1.8} />
      </div>
      <div className="absolute bottom-[10%] right-[5%] flex h-[24%] w-[24%] items-center justify-center rounded-full border border-white/15 bg-purple text-white shadow-lg">
        <TertiaryIcon className="h-1/2 w-1/2" strokeWidth={1.8} />
      </div>
      <span className="absolute right-[3%] top-[7%] h-[18%] w-[18%] rounded-full border-[0.8rem] border-white/15" />
      <span
        className="absolute bottom-[9%] left-[14%] h-[16%] w-[28%] rounded-full opacity-70"
        style={{ backgroundColor: accentColor }}
      />
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        focusable="false"
      >
        <path
          d="M24 31 C36 18, 58 17, 76 27 M68 59 C58 75, 36 78, 24 65"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
