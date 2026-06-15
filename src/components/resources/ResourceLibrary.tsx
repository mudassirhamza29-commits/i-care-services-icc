"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";

type Category = "All Resources" | "Health" | "Housing" | "Mental Health" | "Welfare";
interface Resource { title: string; type: string; category: Exclude<Category, "All Resources">; description: string; }

const resources: Resource[] = [
  { title: "How to Register With a GP", type: "Guide", category: "Health", description: "The documents, choices and steps involved in joining a GP practice." },
  { title: "Understanding Your NHS Rights", type: "Information Sheet", category: "Health", description: "A clear overview of access, consent, choice and complaints." },
  { title: "Managing Long-Term Health Conditions", type: "Guide", category: "Health", description: "Practical ways to prepare for appointments and manage ongoing care." },
  { title: "Understanding Your Rights as a Tenant", type: "Guide", category: "Housing", description: "Key protections relating to repairs, deposits and your tenancy." },
  { title: "What to Do If You're Facing Eviction", type: "Information Sheet", category: "Housing", description: "Immediate actions to take when you receive an eviction notice." },
  { title: "How to Apply for Council Housing", type: "Step-by-Step Guide", category: "Housing", description: "How housing registers, priority bands and evidence usually work." },
  { title: "Understanding Anxiety: A Beginner's Guide", type: "Guide", category: "Mental Health", description: "Common signs of anxiety and practical routes to support." },
  { title: "Finding the Right Therapy for You", type: "Information Sheet", category: "Mental Health", description: "An introduction to therapy types and questions worth asking." },
  { title: "Supporting a Loved One With Mental Health Challenges", type: "Guide", category: "Mental Health", description: "Supportive communication, boundaries and crisis awareness." },
  { title: "Benefits You May Be Entitled To", type: "Information Sheet", category: "Welfare", description: "An accessible starting point for common UK benefits." },
  { title: "How to Appeal a Benefits Decision", type: "Step-by-Step Guide", category: "Welfare", description: "From mandatory reconsideration through to tribunal preparation." },
  { title: "Managing Debt: Your Options Explained", type: "Guide", category: "Welfare", description: "Priority debts, repayment options and free advice routes." },
];
const categories: Category[] = ["All Resources", "Health", "Housing", "Mental Health", "Welfare"];
const colors: Record<Resource["category"], string> = { Health: "bg-orange/15 text-coral", Housing: "bg-coral/10 text-coral", "Mental Health": "bg-purple/10 text-purple", Welfare: "bg-navy/10 text-navy" };

export function ResourceLibrary() {
  const [active, setActive] = useState<Category>("All Resources");
  const visible = active === "All Resources" ? resources : resources.filter((item) => item.category === active);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Resource categories">{categories.map((category)=><button key={category} role="tab" aria-selected={active === category} onClick={()=>setActive(category)} className={`relative px-4 py-3 text-sm font-bold ${active === category ? "text-navy after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-orange" : "text-text-secondary"}`}>{category}</button>)}</div>
      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((resource)=><motion.article layout key={resource.title} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} className="interactive-card flex flex-col rounded-3xl border border-cream-dark bg-white p-6">
            <div className="flex flex-wrap gap-2"><span className={`rounded-full px-3 py-1 text-xs font-bold ${colors[resource.category]}`}>{resource.category}</span><span className="rounded-full bg-cream-dark px-3 py-1 text-xs font-bold text-text-secondary">{resource.type}</span></div>
            <h3 className="mt-5 font-heading text-xl font-extrabold text-navy">{resource.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-text-secondary">{resource.description}</p>
            <a href="/downloads/community-resource-guide.pdf" download className="interactive-button mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-navy px-4 py-2 text-sm font-bold text-navy"><Download size={16} />Download</a>
          </motion.article>)}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
