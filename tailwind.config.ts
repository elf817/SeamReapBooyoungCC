import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6f4ee",
        "bg-contrast": "#efece2",
        "bg-row": "#f2efe5",
        deep: "#1e3a2b",
        "deep-dark": "#1b2a1f",
        "deep-deep": "#16241b",
        "green-light": "#2a4634",
        gold: "#c9b78c",
        bronze: "#a8823f",
        ink: "#22261f",
        "ink-soft": "#4a5145",
        "ink-soft2": "#3d4438",
        muted: "#6b7263",
        "muted-2": "#8b8878",
        "muted-3": "#a3a08f",
        "placeholder-1": "#dcd8ca",
        "placeholder-2": "#e6e2d6",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-nanum-gothic)", "Segoe UI", "Malgun Gothic", "sans-serif"],
        "kr-heading": ["var(--font-ibm-plex-kr)", "var(--font-noto-kr)", "sans-serif"],
        mono: ["ui-monospace", "Menlo", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px",
      },
      // Design tokens use arbitrary opacity steps (e.g. /68, /78, /94) that
      // fall outside Tailwind's default 5%-increment opacity scale, so those
      // modifiers silently emit no CSS. Cover every integer percent instead.
      opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)])),
    },
  },
  plugins: [],
};

export default config;
