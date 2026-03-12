"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  lightLabel: string;
  darkLabel: string;
};

export function ThemeToggle({ lightLabel, darkLabel }: ThemeToggleProps) {
  const theme = useSyncExternalStore(
    (callback) => {
      window.addEventListener("themechange", callback);
      return () => window.removeEventListener("themechange", callback);
    },
    () => (document.documentElement.dataset.theme === "light" ? "light" : "dark"),
    () => "dark"
  );

  function updateTheme(nextTheme: "light" | "dark") {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] p-1">
      <button
        type="button"
        aria-label={lightLabel}
        onClick={() => updateTheme("light")}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition ${
          theme === "light"
            ? "bg-[color:var(--panel-strong)] text-[color:var(--foreground)]"
            : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
        }`}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label={darkLabel}
        onClick={() => updateTheme("dark")}
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition ${
          theme === "dark"
            ? "bg-[color:var(--panel-strong)] text-[color:var(--foreground)]"
            : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
        }`}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
