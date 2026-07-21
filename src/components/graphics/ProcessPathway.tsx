import { ArrowRight, Check, ClipboardCheck, MessageCircle, Route } from "lucide-react";

interface ProcessStep {
  title: string;
  description?: string;
}

interface ProcessPathwayProps {
  steps: readonly ProcessStep[];
  accent?: string;
  className?: string;
  columns?: 2 | 3 | 4;
}

const icons = [MessageCircle, ClipboardCheck, Route, Check] as const;

export function ProcessPathway({ steps, accent = "#2A7F6F", className = "", columns }: ProcessPathwayProps) {
  const columnCount = columns ?? (steps.length === 3 ? 3 : 4);
  const gridColumns = columnCount === 2 ? "md:grid-cols-2" : columnCount === 3 ? "md:grid-cols-3" : "md:grid-cols-4";
  return (
    <ol className={`relative grid gap-4 ${gridColumns} ${className}`}>
      <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dashed border-navy/15 md:block" />
      {steps.map((step, index) => {
        const Icon = icons[index % icons.length];
        return (
          <li key={step.title} className="relative rounded-3xl border border-cream-dark bg-white p-5 shadow-sm">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ backgroundColor: accent }}>
              <Icon size={25} aria-hidden="true" />
            </span>
            <div className="mt-5 flex items-start gap-2">
              <span className="font-heading text-sm font-black" style={{ color: accent }}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-heading font-extrabold text-navy">{step.title}</h3>
                {step.description ? <p className="mt-2 text-sm leading-6 text-text-secondary">{step.description}</p> : null}
              </div>
            </div>
            {index < steps.length - 1 ? <ArrowRight className="absolute -right-3 top-6 z-10 hidden rounded-full bg-cream p-1 text-navy md:block" size={24} aria-hidden="true" /> : null}
          </li>
        );
      })}
    </ol>
  );
}
