import type { CSSProperties } from "react";
import {
  Accessibility,
  Armchair,
  BookOpen,
  Briefcase,
  Calculator,
  CalendarDays,
  CheckSquare,
  ClipboardCheck,
  Compass,
  Cookie,
  Database,
  DoorOpen,
  Droplets,
  FileCheck,
  FileHeart,
  FileText,
  Folder,
  FolderSearch,
  HeartPulse,
  House,
  KeyRound,
  Landmark,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Network,
  Newspaper,
  Paintbrush,
  Palette,
  Phone,
  Route,
  Send,
  Shapes,
  ShieldCheck,
  Signpost,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { GRAPHIC_CONFIG, type GraphicIconName } from "@/lib/graphics";
import type { GraphicVariant } from "@/types";

const iconMap: Record<GraphicIconName, LucideIcon> = {
  Accessibility,
  Armchair,
  BookOpen,
  Briefcase,
  Calculator,
  CalendarDays,
  CheckSquare,
  ClipboardCheck,
  Compass,
  Cookie,
  Database,
  DoorOpen,
  Droplets,
  FileCheck,
  FileHeart,
  FileText,
  Folder,
  FolderSearch,
  HeartPulse,
  House,
  KeyRound,
  Landmark,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Network,
  Newspaper,
  Paintbrush,
  Palette,
  Phone,
  Route,
  Send,
  Shapes,
  ShieldCheck,
  Signpost,
  Wrench,
};

interface GraphicSceneProps {
  variant: GraphicVariant;
  mode?: "hero" | "card" | "spot";
  className?: string;
  alt?: string;
}

interface IconTileProps {
  icon: GraphicIconName;
  className: string;
  filled?: boolean;
}

function IconTile({ icon, className, filled = false }: IconTileProps) {
  const Icon = iconMap[icon];
  return (
    <span
      className={`absolute z-10 flex items-center justify-center rounded-[1.4rem] border shadow-[0_12px_30px_rgba(26,26,46,0.14)] ${
        filled
          ? "border-transparent bg-[var(--graphic-accent)] text-navy"
          : "border-white/70 bg-white/90 text-[var(--graphic-accent)]"
      } ${className}`}
    >
      <Icon className="h-[48%] w-[48%]" strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

function PathwayScene({ icons, compact }: { icons: readonly GraphicIconName[]; compact: boolean }) {
  return (
    <>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" fill="none" focusable="false">
        <path d="M70 390C178 382 185 148 318 180C437 209 430 389 565 335C642 304 646 203 730 125" stroke="var(--graphic-secondary)" strokeWidth="20" strokeLinecap="round" opacity=".18" />
        <path d="M70 390C178 382 185 148 318 180C437 209 430 389 565 335C642 304 646 203 730 125" stroke="var(--graphic-accent)" strokeWidth="5" strokeLinecap="round" strokeDasharray="12 15" />
      </svg>
      <IconTile icon={icons[0]} filled className={compact ? "left-[8%] top-[50%] h-20 w-20" : "left-[7%] top-[56%] h-24 w-24"} />
      <IconTile icon={icons[1]} className="left-[34%] top-[22%] h-20 w-20" />
      <IconTile icon={icons[2]} className="right-[27%] top-[57%] h-20 w-20" />
      <IconTile icon={icons[3]} filled className={compact ? "right-[7%] top-[16%] h-20 w-20" : "right-[8%] top-[12%] h-28 w-28"} />
      {!compact && <span className="absolute left-[47%] top-[12%] h-8 w-8 rounded-full border-8 border-[var(--graphic-secondary)]/30" />}
    </>
  );
}

function CollageScene({ icons, compact }: { icons: readonly GraphicIconName[]; compact: boolean }) {
  return (
    <>
      <div className="absolute left-[10%] top-[14%] h-[62%] w-[42%] -rotate-6 rounded-[1.75rem] border border-navy/8 bg-white/85 shadow-xl" />
      <div className="absolute right-[12%] top-[22%] h-[58%] w-[40%] rotate-6 rounded-[1.75rem] border border-navy/8 bg-[var(--graphic-accent)]/20 shadow-xl" />
      <div className="absolute left-[31%] top-[8%] h-[70%] w-[38%] rounded-[1.75rem] bg-white shadow-2xl">
        <span className="absolute left-[14%] top-[18%] h-2 w-[68%] rounded-full bg-navy/15" />
        <span className="absolute left-[14%] top-[30%] h-2 w-[52%] rounded-full bg-navy/10" />
        <span className="absolute left-[14%] top-[42%] h-2 w-[62%] rounded-full bg-navy/10" />
        <span className="absolute bottom-[13%] left-[14%] h-[23%] w-[72%] rounded-2xl bg-[var(--graphic-secondary)]/15" />
      </div>
      <IconTile icon={icons[0]} filled className="left-[6%] bottom-[9%] h-20 w-20" />
      <IconTile icon={icons[1]} className="right-[8%] top-[10%] h-20 w-20" />
      {!compact && <IconTile icon={icons[2]} className="right-[18%] bottom-[5%] h-16 w-16" />}
      <IconTile icon={icons[3]} className="left-[41%] top-[20%] h-20 w-20" />
    </>
  );
}

function CutawayScene({ icons, compact }: { icons: readonly GraphicIconName[]; compact: boolean }) {
  return (
    <>
      <div className="absolute inset-x-[12%] bottom-[10%] h-[62%] overflow-hidden rounded-t-[5rem] rounded-b-[2rem] border-[5px] border-white/80 bg-white/70 shadow-2xl">
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-1 bg-navy/8 p-1">
          {icons.map((icon, index) => {
            const Icon = iconMap[icon];
            return <span key={icon} className={`flex items-center justify-center ${index === 3 ? "bg-[var(--graphic-accent)]/25" : "bg-white/85"}`}><Icon className="h-10 w-10 text-[var(--graphic-accent)]" strokeWidth={1.7} /></span>;
          })}
        </div>
      </div>
      <div className="absolute left-[8%] top-[18%] h-5 w-[84%] -rotate-6 rounded-full bg-[var(--graphic-secondary)]/30" />
      {!compact && <span className="absolute right-[7%] top-[8%] h-16 w-16 rounded-full border-[10px] border-[var(--graphic-accent)]/25" />}
    </>
  );
}

function OrbitScene({ icons, compact }: { icons: readonly GraphicIconName[]; compact: boolean }) {
  const MainIcon = iconMap[icons[0]];
  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-dashed border-[var(--graphic-secondary)]/50" />
      <div className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--graphic-accent)] text-navy shadow-2xl">
        <MainIcon className="h-1/2 w-1/2" strokeWidth={1.7} />
      </div>
      <IconTile icon={icons[1]} className="left-[8%] top-[18%] h-20 w-20 rounded-full" />
      <IconTile icon={icons[2]} className="right-[8%] top-[20%] h-20 w-20 rounded-full" />
      <IconTile icon={icons[3]} filled className="bottom-[5%] left-[39%] h-20 w-20 rounded-full" />
      {!compact && <span className="absolute bottom-[13%] left-[15%] h-8 w-8 rounded-full bg-[var(--graphic-secondary)]/35" />}
    </>
  );
}

function CalmScene({ icons, compact }: { icons: readonly GraphicIconName[]; compact: boolean }) {
  const DoorIcon = iconMap[icons[0]];
  const ChairIcon = iconMap[icons[1]];
  return (
    <>
      <div className="absolute bottom-[8%] left-[19%] h-[72%] w-[43%] rounded-t-[8rem] bg-navy shadow-2xl">
        <div className="absolute bottom-0 left-[20%] h-[82%] w-[60%] rounded-t-[5rem] bg-gradient-to-t from-[var(--graphic-accent)] to-white/85" />
        <DoorIcon className="absolute bottom-[13%] left-[34%] h-[34%] w-[34%] text-navy/80" strokeWidth={1.4} />
      </div>
      <div className="absolute bottom-[13%] right-[13%] flex h-[27%] w-[27%] items-center justify-center rounded-[3rem] bg-white/85 shadow-xl">
        <ChairIcon className="h-1/2 w-1/2 text-[var(--graphic-secondary)]" strokeWidth={1.6} />
      </div>
      <span className="absolute right-[15%] top-[14%] h-24 w-24 rounded-full border-[18px] border-[var(--graphic-accent)]/20" />
      {!compact && <span className="absolute right-[35%] top-[23%] h-10 w-10 rounded-full bg-[var(--graphic-secondary)]/25" />}
    </>
  );
}

function ModulesScene({ icons }: { icons: readonly GraphicIconName[] }) {
  return (
    <div className="absolute inset-[10%] grid grid-cols-2 grid-rows-2 gap-3 rounded-[2.5rem] bg-white/45 p-4 shadow-xl">
      {icons.map((icon, index) => {
        const Icon = iconMap[icon];
        return <div key={icon} className={`relative flex items-center justify-center rounded-[2rem] border border-white/70 shadow-lg ${index === 0 ? "col-span-2 bg-[var(--graphic-accent)]/25" : index === 3 ? "bg-[var(--graphic-secondary)]/25" : "bg-white/85"}`}><Icon className="h-12 w-12 text-navy" strokeWidth={1.6} /><span className="absolute -right-2 top-1/2 h-3 w-3 rounded-full bg-[var(--graphic-accent)]" /></div>;
      })}
    </div>
  );
}

function PrivacyScene({ icons, compact }: { icons: readonly GraphicIconName[]; compact: boolean }) {
  const MainIcon = iconMap[icons[0]];
  return (
    <>
      <div className="absolute left-1/2 top-1/2 flex h-[54%] w-[42%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[46%_46%_54%_54%/32%_32%_68%_68%] bg-[var(--graphic-accent)] shadow-2xl">
        <MainIcon className="h-1/2 w-1/2 text-white" strokeWidth={1.5} />
      </div>
      <IconTile icon={icons[1]} className="left-[8%] top-[15%] h-20 w-20" />
      <IconTile icon={icons[2]} className="right-[7%] top-[18%] h-20 w-20" />
      <IconTile icon={icons[3]} filled className="bottom-[7%] right-[17%] h-16 w-16 rounded-full" />
      {!compact && <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500"><path d="M130 160C210 92 282 112 334 177M472 180C536 112 627 100 694 160" fill="none" stroke="var(--graphic-secondary)" strokeWidth="5" strokeDasharray="10 13" /></svg>}
    </>
  );
}

function CanvasScene({ icons, compact }: { icons: readonly GraphicIconName[]; compact: boolean }) {
  return (
    <>
      <div className="absolute left-[9%] top-[12%] h-[70%] w-[52%] -rotate-3 rounded-[42%_58%_45%_55%] bg-white shadow-2xl" />
      <div className="absolute right-[8%] top-[17%] h-[54%] w-[45%] rotate-6 rounded-[55%_45%_62%_38%] bg-[var(--graphic-accent)]/35 shadow-xl" />
      <span className="absolute left-[20%] top-[23%] h-20 w-32 rounded-[60%_40%_55%_45%] bg-[var(--graphic-secondary)]/35" />
      <span className="absolute bottom-[22%] left-[30%] h-14 w-44 -rotate-12 rounded-full bg-[var(--graphic-accent)]/55" />
      <IconTile icon={icons[0]} filled className="left-[12%] bottom-[8%] h-20 w-20" />
      <IconTile icon={icons[1]} className="right-[10%] top-[10%] h-20 w-20" />
      <IconTile icon={icons[2]} className="right-[16%] bottom-[8%] h-16 w-16" />
      {!compact && <IconTile icon={icons[3]} className="left-[43%] top-[15%] h-16 w-16" />}
    </>
  );
}

function BranchScene({ icons, compact }: { icons: readonly GraphicIconName[]; compact: boolean }) {
  return (
    <>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" fill="none"><path d="M400 430V275M400 275L195 145M400 275L620 125M400 275L660 345" stroke="var(--graphic-secondary)" strokeWidth="18" strokeLinecap="round" opacity=".22"/><path d="M400 430V275M400 275L195 145M400 275L620 125M400 275L660 345" stroke="var(--graphic-accent)" strokeWidth="4" strokeDasharray="10 14"/></svg>
      <IconTile icon={icons[0]} filled className="bottom-[5%] left-[43%] h-20 w-20 rounded-full" />
      <IconTile icon={icons[1]} className="left-[13%] top-[16%] h-20 w-20" />
      <IconTile icon={icons[2]} className="right-[15%] top-[12%] h-20 w-20" />
      <IconTile icon={icons[3]} className="bottom-[17%] right-[8%] h-20 w-20" />
      {!compact && <span className="absolute left-[46%] top-[45%] h-10 w-10 rounded-full border-[9px] border-[var(--graphic-secondary)]/30" />}
    </>
  );
}

function AtlasScene() {
  const atlasIcons: GraphicIconName[] = ["HeartPulse", "Landmark", "House", "BookOpen", "ShieldCheck", "MessageCircle", "LockKeyhole", "Palette", "Compass"];
  return (
    <>
      <div className="absolute inset-[8%] grid grid-cols-3 gap-3 rounded-[2.5rem] border border-white/70 bg-white/55 p-4 shadow-2xl">
        {atlasIcons.map((icon, index) => {
          const Icon = iconMap[icon];
          return <span key={index} className={`flex items-center justify-center rounded-2xl border border-white/80 ${index === 4 ? "bg-[var(--graphic-accent)] text-navy" : index % 2 ? "bg-[var(--graphic-secondary)]/18 text-[var(--graphic-secondary)]" : "bg-white/90 text-[var(--graphic-accent)]"}`}><Icon className="h-8 w-8" strokeWidth={1.6} /></span>;
        })}
      </div>
    </>
  );
}

function HubScene() {
  const hubIcons: GraphicIconName[] = ["HeartPulse", "Landmark", "House", "BookOpen", "ShieldCheck", "MessageCircle", "LockKeyhole", "Palette", "Compass"];
  const points = [[50,6],[75,14],[87,40],[80,68],[58,82],[31,80],[11,63],[8,31],[27,12]];
  return (
    <>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" fill="none">
        {points.map(([x,y], index) => <path key={index} d={`M400 250 L${x * 8} ${y * 5}`} stroke="var(--graphic-secondary)" strokeWidth="4" strokeDasharray="9 13" opacity=".65" />)}
      </svg>
      <span className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[38%_62%_52%_48%] bg-navy text-white shadow-2xl">
        <Network className="h-14 w-14" strokeWidth={1.6} />
      </span>
      {hubIcons.map((icon, index) => {
        const Icon = iconMap[icon];
        const [x,y] = points[index];
        return <span key={icon} className="absolute z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/80 bg-white/90 text-[var(--graphic-accent)] shadow-lg" style={{left:`${x}%`,top:`${y}%`}}><Icon className="h-7 w-7" strokeWidth={1.7}/></span>;
      })}
    </>
  );
}

function BridgeScene({ icons }: { icons: readonly GraphicIconName[] }) {
  return (
    <>
      <div className="absolute left-[8%] top-[20%] h-[58%] w-[27%] rounded-[3rem] bg-white/85 shadow-xl" />
      <div className="absolute right-[8%] top-[20%] h-[58%] w-[27%] rounded-[3rem] bg-[var(--graphic-accent)]/25 shadow-xl" />
      <div className="absolute left-[31%] top-[43%] h-[14%] w-[38%] rounded-full bg-[var(--graphic-secondary)]/30"><span className="absolute inset-x-[8%] top-1/2 border-t-4 border-dashed border-[var(--graphic-accent)]" /></div>
      <IconTile icon={icons[0]} filled className="right-[13%] top-[32%] h-20 w-20" />
      <IconTile icon={icons[1]} className="left-[13%] top-[31%] h-20 w-20" />
      <IconTile icon={icons[2]} className="left-[39%] top-[16%] h-16 w-16" />
      <IconTile icon={icons[3]} className="bottom-[8%] left-[45%] h-16 w-16 rounded-full" />
    </>
  );
}

function LibraryScene({ icons }: { icons: readonly GraphicIconName[] }) {
  return (
    <>
      {[0, 1, 2].map((index) => { const Icon = iconMap[icons[index]]; return <div key={index} className="absolute top-[18%] h-[62%] w-[25%] rounded-[1.5rem] border border-white/80 bg-white/90 p-4 shadow-xl" style={{ left: `${10 + index * 27}%`, transform: `rotate(${index === 0 ? -5 : index === 2 ? 5 : 0}deg)` }}><Icon className="h-10 w-10 text-[var(--graphic-accent)]" strokeWidth={1.6}/><span className="mt-8 block h-2 w-full rounded-full bg-navy/12"/><span className="mt-3 block h-2 w-2/3 rounded-full bg-navy/8"/></div>; })}
      <IconTile icon={icons[3]} filled className="bottom-[7%] right-[7%] h-20 w-20 rounded-full" />
    </>
  );
}

function SignalsScene({ icons }: { icons: readonly GraphicIconName[] }) {
  return (
    <>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500"><path d="M400 248C300 130 170 140 100 210M400 248C510 115 660 130 720 210M400 248C290 365 190 380 105 340M400 248C515 365 635 370 720 330" fill="none" stroke="var(--graphic-accent)" strokeWidth="5" strokeDasharray="11 14"/></svg>
      <IconTile icon={icons[0]} filled className="left-[41%] top-[35%] h-24 w-24 rounded-full" />
      <IconTile icon={icons[1]} className="left-[7%] top-[20%] h-20 w-20" />
      <IconTile icon={icons[2]} className="right-[7%] top-[20%] h-20 w-20" />
      <IconTile icon={icons[3]} className="bottom-[9%] right-[15%] h-20 w-20" />
    </>
  );
}

function RootsScene({ icons }: { icons: readonly GraphicIconName[] }) {
  return (
    <>
      <div className="absolute left-1/2 top-[13%] h-24 w-24 -translate-x-1/2 rounded-[40%_60%_48%_52%] bg-[var(--graphic-accent)] shadow-xl" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500"><path d="M400 130V270M400 270C260 275 180 320 115 420M400 270C535 280 620 330 690 420M400 270C365 340 330 390 285 450M400 270C450 345 485 400 530 450" fill="none" stroke="var(--graphic-secondary)" strokeWidth="14" strokeLinecap="round" opacity=".3"/></svg>
      <IconTile icon={icons[0]} filled className="left-[44%] top-[12%] h-20 w-20 rounded-full" />
      <IconTile icon={icons[1]} className="bottom-[7%] left-[9%] h-16 w-16" />
      <IconTile icon={icons[2]} className="bottom-[4%] right-[9%] h-16 w-16" />
      <IconTile icon={icons[3]} className="bottom-[2%] left-[36%] h-16 w-16" />
    </>
  );
}

function BulletinScene({ icons }: { icons: readonly GraphicIconName[] }) {
  return (
    <>
      <div className="absolute inset-[9%] rounded-[2.5rem] bg-[#E7D7BD] p-5 shadow-2xl">
        <div className="grid h-full grid-cols-2 gap-4">
          {icons.map((icon, index) => { const Icon = iconMap[icon]; return <div key={icon} className={`relative rounded-xl bg-white p-4 shadow-md ${index === 0 ? "col-span-2" : ""}`}><Icon className="h-8 w-8 text-[var(--graphic-accent)]"/><span className="mt-4 block h-2 w-2/3 rounded bg-navy/10"/><span className="mt-2 block h-2 w-1/2 rounded bg-navy/8"/></div>; })}
        </div>
      </div>
    </>
  );
}

function PolicyScene({ icons }: { icons: readonly GraphicIconName[] }) {
  const MainIcon = iconMap[icons[0]];
  return (
    <>
      <div className="absolute left-[20%] top-[13%] h-[72%] w-[52%] rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-2xl">
        <MainIcon className="h-16 w-16 text-[var(--graphic-accent)]" strokeWidth={1.5} />
        <span className="mt-8 block h-3 w-4/5 rounded-full bg-navy/12" /><span className="mt-4 block h-3 w-3/5 rounded-full bg-navy/8" /><span className="mt-4 block h-3 w-2/3 rounded-full bg-navy/8" />
      </div>
      <IconTile icon={icons[1]} filled className="right-[11%] top-[17%] h-20 w-20" />
      <IconTile icon={icons[2]} className="bottom-[8%] right-[8%] h-16 w-16 rounded-full" />
      <IconTile icon={icons[3]} className="bottom-[4%] left-[8%] h-16 w-16" />
    </>
  );
}

function WrongTurnScene({ icons }: { icons: readonly GraphicIconName[] }) {
  return (
    <>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500"><path d="M80 380C250 390 230 110 410 145C520 167 470 360 690 305" fill="none" stroke="var(--graphic-secondary)" strokeWidth="22" strokeLinecap="round" opacity=".2"/><path d="M80 380C250 390 230 110 410 145C520 167 470 360 690 305" fill="none" stroke="var(--graphic-accent)" strokeWidth="5" strokeDasharray="12 15"/><path d="M410 145L520 70" stroke="var(--graphic-accent)" strokeWidth="5" strokeDasharray="12 15"/></svg>
      <IconTile icon={icons[0]} filled className="left-[7%] bottom-[9%] h-20 w-20" />
      <IconTile icon={icons[1]} className="left-[47%] top-[5%] h-20 w-20" />
      <IconTile icon={icons[2]} className="right-[8%] bottom-[15%] h-20 w-20" />
      <span className="absolute left-[47%] top-[40%] flex h-16 w-16 items-center justify-center rounded-full bg-coral text-3xl font-black text-white shadow-xl">×</span>
    </>
  );
}

export function GraphicScene({ variant, mode = "hero", className = "", alt }: GraphicSceneProps) {
  const config = GRAPHIC_CONFIG[variant];
  const compact = mode !== "hero";
  const style = {
    "--graphic-accent": config.accent,
    "--graphic-secondary": config.secondary,
    backgroundImage: `radial-gradient(circle at 16% 18%, ${config.accent}30 0 1px, transparent 2px), linear-gradient(145deg, ${config.accent}18, rgba(255,255,255,.92) 44%, ${config.secondary}20)`,
  } as CSSProperties;

  let scene;
  switch (config.layout) {
    case "pathway": scene = <PathwayScene icons={config.icons} compact={compact} />; break;
    case "hub": scene = <HubScene />; break;
    case "collage": scene = <CollageScene icons={config.icons} compact={compact} />; break;
    case "cutaway": scene = <CutawayScene icons={config.icons} compact={compact} />; break;
    case "orbit": scene = <OrbitScene icons={config.icons} compact={compact} />; break;
    case "calm": scene = <CalmScene icons={config.icons} compact={compact} />; break;
    case "modules": scene = <ModulesScene icons={config.icons} />; break;
    case "privacy": scene = <PrivacyScene icons={config.icons} compact={compact} />; break;
    case "canvas": scene = <CanvasScene icons={config.icons} compact={compact} />; break;
    case "branch": scene = <BranchScene icons={config.icons} compact={compact} />; break;
    case "atlas": scene = <AtlasScene />; break;
    case "bridge": scene = <BridgeScene icons={config.icons} />; break;
    case "library": scene = <LibraryScene icons={config.icons} />; break;
    case "signals": scene = <SignalsScene icons={config.icons} />; break;
    case "roots": scene = <RootsScene icons={config.icons} />; break;
    case "bulletin": scene = <BulletinScene icons={config.icons} />; break;
    case "wrong-turn": scene = <WrongTurnScene icons={config.icons} />; break;
    default: scene = <PolicyScene icons={config.icons} />;
  }

  return (
    <div
      className={`graphic-scene relative isolate w-full overflow-hidden rounded-[2rem] border border-white/70 shadow-[var(--shadow-soft)] ${mode === "hero" ? "aspect-[8/5]" : mode === "card" ? "aspect-[4/3]" : "aspect-square"} ${className}`}
      style={style}
      role={alt ? "img" : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
    >
      <span className="absolute -left-[8%] -top-[12%] h-[38%] w-[38%] rounded-[40%_60%_54%_46%] bg-[var(--graphic-accent)]/12" />
      <span className="absolute -bottom-[12%] -right-[6%] h-[40%] w-[40%] rounded-[62%_38%_45%_55%] bg-[var(--graphic-secondary)]/14" />
      {scene}
    </div>
  );
}
