import { ShieldAlert } from "lucide-react";

import { CRISIS_NOTICE, CRISIS_RESOURCES } from "@/lib/constants";

interface CrisisNoticeProps {
  compact?: boolean;
  className?: string;
}

export function CrisisNotice({ compact = false, className = "" }: CrisisNoticeProps) {
  return (
    <aside
      aria-label="Emergency and crisis guidance"
      className={`rounded-3xl border border-coral/30 bg-coral/10 p-5 text-left text-navy ${className}`}
    >
      <div className="flex gap-3">
        <ShieldAlert className="mt-1 shrink-0 text-coral" size={compact ? 22 : 28} aria-hidden="true" />
        <div>
          <p className="font-heading text-lg font-extrabold text-navy">
            Not an emergency service
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 text-text-secondary">
            {CRISIS_NOTICE}
          </p>
          {!compact ? (
            <ul className="mt-4 space-y-2 text-sm leading-6 text-text-secondary">
              {CRISIS_RESOURCES.map((resource) => (
                <li key={resource}>{resource}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
