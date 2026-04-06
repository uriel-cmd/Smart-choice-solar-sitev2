"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FAQList({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = index === openIndex;

        return (
          <div key={item.question} className="glass-panel rounded-[24px] p-5">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span className="text-base font-semibold text-slate">{item.question}</span>
              <span className="text-2xl text-slate">{open ? "−" : "+"}</span>
            </button>
            {open ? <p className="mt-4 text-sm leading-7 text-slate/80">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
