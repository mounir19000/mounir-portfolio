"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/messages/types";
import type { Locale } from "@/i18n/config";

interface NavigationProps {
  dictionary: Dictionary;
  lang: Locale;
}

export default function Navigation({ dictionary, lang }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/80 backdrop-blur-xl border-b border-grid-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 px-3 py-2 rounded bg-obsidian border border-kinetic-cyan text-kinetic-cyan text-xs font-mono"
        >
          Skip to content
        </a>
        <Link
          href={`/${lang}`}
          className="font-mono text-sm text-kinetic-cyan tracking-wider hover:text-white transition-colors rounded-sm"
        >
          mounir19000
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {dictionary.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-white transition-colors rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="inline-flex items-center gap-1 rounded-full border border-grid-line bg-slate-mtx/80 p-1 shadow-[0_0_0_1px_rgba(148,163,184,0.06)]">
            <span className="sr-only">{dictionary.navigation.languageLabel}</span>
            <Link
              href="/en"
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                lang === "en"
                  ? "bg-kinetic-cyan/15 text-kinetic-cyan border border-kinetic-cyan/30"
                  : "text-text-secondary hover:text-white border border-transparent hover:border-grid-line"
              }`}
              aria-current={lang === "en" ? "page" : undefined}
            >
              {dictionary.navigation.languageOptions.en}
            </Link>
            <Link
              href="/fr"
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                lang === "fr"
                  ? "bg-kinetic-cyan/15 text-kinetic-cyan border border-kinetic-cyan/30"
                  : "text-text-secondary hover:text-white border border-transparent hover:border-grid-line"
              }`}
              aria-current={lang === "fr" ? "page" : undefined}
            >
              {dictionary.navigation.languageOptions.fr}
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary hover:text-white transition-colors"
          aria-label={dictionary.navigation.toggleNavigation}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            suppressHydrationWarning
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-obsidian/95 backdrop-blur-xl border-b border-grid-line px-6 pb-4"
        >
          {dictionary.navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-text-secondary hover:text-white transition-colors rounded-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 inline-flex items-center gap-1 rounded-full border border-grid-line bg-slate-mtx/80 p-1">
            <Link
              href="/en"
              className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-200 ${
                lang === "en"
                  ? "border-kinetic-cyan/40 bg-kinetic-cyan/10 text-kinetic-cyan"
                  : "border-transparent text-text-secondary hover:text-white hover:border-grid-line"
              }`}
              aria-current={lang === "en" ? "page" : undefined}
            >
              {dictionary.navigation.languageOptions.en}
            </Link>
            <Link
              href="/fr"
              className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-200 ${
                lang === "fr"
                  ? "border-kinetic-cyan/40 bg-kinetic-cyan/10 text-kinetic-cyan"
                  : "border-transparent text-text-secondary hover:text-white hover:border-grid-line"
              }`}
              aria-current={lang === "fr" ? "page" : undefined}
            >
              {dictionary.navigation.languageOptions.fr}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
