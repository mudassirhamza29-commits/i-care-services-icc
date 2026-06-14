import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export function FaqAccordion({
  items,
  allowMultiple = false,
}: FaqAccordionProps): JSX.Element {
  const id = useId();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggle = (index: number): void => {
    setOpenItems((current) => {
      if (current.includes(index)) {
        return current.filter((item) => item !== index);
      }
      return allowMultiple ? [...current, index] : [index];
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openItems.includes(index);
        const panelId = `${id}-panel-${index}`;
        const buttonId = `${id}-button-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-slate bg-white dark:border-white/10 dark:bg-[#1a2d52]"
          >
            <h3 className="font-body">
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-navy dark:text-white"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                {item.question}
                <ChevronDown
                  className={cn('h-5 w-5 shrink-0 transition-transform', open && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-5 text-gray-600 dark:text-gray-300"
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
