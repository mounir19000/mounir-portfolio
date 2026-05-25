"use client";

import { useState, useCallback, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { identity } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/messages/types";

function CopyButton({
  text,
  label,
  copiedLabel,
}: {
  text: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const statusId = useId();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-describedby={copied ? statusId : undefined}
      className="group relative flex items-center gap-3 px-4 py-3 bg-slate-mtx border border-grid-line rounded-lg hover:border-kinetic-cyan/30 transition-all duration-200 w-full text-left"
    >
      <span className="text-text-secondary text-sm font-mono">{label}</span>
      <span className="text-white text-sm ml-auto font-mono">{text}</span>
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.span
            id={statusId}
            aria-live="polite"
            key="check"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="text-kinetic-cyan shrink-0"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8l4 4 6-7" />
            </svg>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="text-text-secondary group-hover:text-white shrink-0 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="5" y="5" width="9" height="9" rx="1.5" />
              <path d="M11 5V3.5A1.5 1.5 0 009.5 2h-6A1.5 1.5 0 002 3.5v6A1.5 1.5 0 003.5 11H5" />
            </svg>
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: -8 }}
            exit={{ opacity: 0 }}
            className="absolute -top-2 right-4 text-xs font-mono text-kinetic-cyan bg-obsidian px-2 py-0.5 rounded border border-kinetic-cyan/20"
          >
            {copiedLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Contact({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-mtx/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionReveal>
          <p className="font-mono text-sm text-kinetic-cyan tracking-widest uppercase mb-3">
            {dictionary.contact.eyebrow}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            {dictionary.contact.title}
          </h2>
          <p className="text-text-secondary mb-10 w-full">
            {dictionary.contact.subtitle}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mx-auto w-full max-w-2xl space-y-3">
            <CopyButton
              label={dictionary.contact.emailLabel}
              text={identity.email}
              copiedLabel={dictionary.contact.copied}
            />
            <CopyButton
              label={dictionary.contact.phoneLabel}
              text={identity.phone}
              copiedLabel={dictionary.contact.copied}
            />

            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[140px] items-center justify-center gap-2 px-4 py-3 bg-slate-mtx border border-grid-line rounded-lg hover:border-kinetic-cyan/30 transition-all duration-200 text-sm text-text-secondary hover:text-white min-h-11"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                {dictionary.contact.github}
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[140px] items-center justify-center gap-2 px-4 py-3 bg-slate-mtx border border-grid-line rounded-lg hover:border-neon-violet/30 transition-all duration-200 text-sm text-text-secondary hover:text-white min-h-11"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                {dictionary.contact.linkedin}
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
