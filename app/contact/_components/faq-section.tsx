"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "I specialize in custom Web Development, Mobile App Development (native iOS/Android and cross-platform Flutter), and IoT/Hardware integration projects. I also handle end-to-end product design, API integrations, and cloud architectures.",
  },
  {
    question: "What is your typical response time?",
    answer: "I pride myself on responsiveness! You can expect to hear back from me within a few hours, and almost always within the same business day.",
  },
  {
    question: "Are you open to freelance, contract, or full-time roles?",
    answer: "Yes, I am open to freelance contracts, consulting, and select partnership opportunities. For larger-scale projects or full-time engagements, please reach out via the form with details about your scope and timeline.",
  },
  {
    question: "Where are you located?",
    answer: "I am based in Caledon (Greater Toronto Area), Ontario, Canada. I work remotely with clients globally, primarily across North America and Europe, and can align with most time zones.",
  },
  {
    question: "Can we schedule a discovery call?",
    answer: "Absolutely. Drop your details and a brief project overview in the contact form, and I'll reply with a link to schedule a direct video call on Zoom or Google Meet.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-20 w-full" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center sm:text-left">
          <h2
            id="faq-title"
            className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Quick answers to common questions about working with me.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-answer-${index}`;
            const buttonId = `faq-btn-${index}`;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/40 backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-900/30 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <button
                  id={buttonId}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={faqId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-900/40"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-blue-500 shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={faqId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
