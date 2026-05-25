"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { identity } from "@/data/portfolio";
import type { Dictionary } from "@/i18n/messages/types";

export default function Hero({ dictionary }: { dictionary: Dictionary }) {
  const prefersReducedMotion = useReducedMotion();
  const roles = useMemo(
    () =>
      dictionary.hero.typingRoles.length > 0
        ? dictionary.hero.typingRoles
        : [identity.role],
    [dictionary.hero.typingRoles],
  );
  const maxRoleLength = useMemo(
    () => roles.reduce((max, role) => Math.max(max, role.length), 0),
    [roles],
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 70;
    const completedTyping = typedText === currentRole;
    const completedDeleting = typedText === "";
    const pause =
      completedTyping && !isDeleting
        ? 1200
        : completedDeleting && isDeleting
          ? 250
          : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (completedTyping && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (completedDeleting && isDeleting) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setTypedText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1),
      );
    }, pause);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, prefersReducedMotion, roleIndex, roles, typedText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-12 h-80 w-80 rounded-full bg-neon-violet/14 blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -28, 20, 0], y: [0, 16, -20, 0] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 24, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32 text-center">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-kinetic-cyan tracking-widest uppercase mb-6"
        >
          {identity.handle}
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          {identity.name.split(" ").map((word, i) => (
            <span
              key={i}
              className={i === 1 ? "gradient-text-cyan" : "text-white"}
            >
              {word}{" "}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-body text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-4 min-h-7"
        >
          {prefersReducedMotion ? (
            roles[0]
          ) : (
            <span
              className="inline-flex items-center justify-center gap-1 font-mono"
              aria-live="polite"
              style={{ minWidth: `${Math.max(1, maxRoleLength) + 1}ch` }}
            >
              <span className="inline-block text-left whitespace-nowrap">
                {typedText || "\u00A0"}
              </span>
              <span className="text-kinetic-cyan/90" aria-hidden="true">
                |
              </span>
            </span>
          )}
        </motion.p>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-mono text-sm text-text-secondary/70 mb-10"
        >
          {dictionary.hero.school} · {dictionary.hero.location}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-kinetic-cyan/10 border border-kinetic-cyan/30 text-kinetic-cyan rounded-lg font-medium text-sm hover:bg-kinetic-cyan/20 transition-all duration-200 min-h-11"
          >
            {dictionary.hero.ctaProjects}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              suppressHydrationWarning
            >
              <path d="M8 3v10M3 8l5 5 5-5" />
            </svg>
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-mtx border border-grid-line text-white rounded-lg font-medium text-sm hover:border-text-secondary/50 transition-all duration-200 min-h-11"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              suppressHydrationWarning
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            {dictionary.hero.github}
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-mtx border border-grid-line text-white rounded-lg font-medium text-sm hover:border-text-secondary/50 transition-all duration-200 min-h-11"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              suppressHydrationWarning
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            {dictionary.hero.linkedin}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
          className="w-5 h-8 rounded-full border-2 border-text-secondary/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-text-secondary/50" />
        </motion.div>
      </div>
    </section>
  );
}
