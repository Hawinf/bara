
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "简体中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const selectedLanguage =
    languages.find((item) => item.code === currentLocale) || languages[0];

  const remainingPath = pathname.replace(/^\/(en|ru|zh|ar|tr)/, "");

  return (
    <div className="language-switcher">
      <button
        type="button"
        className="language-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Select language"
      >
        <span>{selectedLanguage.flag}</span>
        <span>{selectedLanguage.code.toUpperCase()}</span>
        <span className="language-arrow">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <>
          <div
            className="language-overlay"
            onClick={() => setOpen(false)}
          />

          <div className="language-menu">
            {languages.map((language) => (
              <Link
                key={language.code}
                href={`/${language.code}${remainingPath}`}
                className={`language-option ${
                  currentLocale === language.code ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
                lang={language.code}
              >
                <span className="language-flag">{language.flag}</span>
                <span>{language.name}</span>

                {currentLocale === language.code && (
                  <span className="language-check">✓</span>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
