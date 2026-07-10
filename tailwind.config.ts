import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portal: {
          sidebar: "var(--portal-sidebar)",
          "sidebar-elevated": "var(--portal-sidebar-elevated)",
          surface: "var(--portal-surface)",
          card: "var(--portal-card)",
          "card-muted": "var(--portal-card-muted)",
          border: "var(--portal-border)",
          "border-strong": "var(--portal-border-strong)",
          text: "var(--portal-text)",
          "text-muted": "var(--portal-text-muted)",
          "text-subtle": "var(--portal-text-subtle)",
          accent: "var(--portal-accent)",
          "accent-strong": "var(--portal-accent-strong)",
          "accent-soft": "var(--portal-accent-soft)",
          highlight: "var(--portal-highlight)",
        },
        status: {
          active: "var(--status-active)",
          idle: "var(--status-idle)",
          error: "var(--status-error)",
          paused: "var(--status-paused)",
          trial: "var(--status-trial)",
        },
      },
      fontSize: {
        "metric-xl": ["4rem", { lineHeight: "0.95", fontWeight: "700" }],
        "metric-lg": ["3.25rem", { lineHeight: "0.95", fontWeight: "700" }],
        "metric-md": ["2.25rem", { lineHeight: "1", fontWeight: "650" }],
        "metric-sm": ["1.75rem", { lineHeight: "1.05", fontWeight: "650" }],
      },
      borderRadius: {
        portal: "1rem",
        panel: "1.25rem",
      },
      boxShadow: {
        "portal-card": "0 18px 40px rgba(7, 17, 31, 0.08)",
        "portal-card-hover": "0 22px 52px rgba(7, 17, 31, 0.14)",
        "portal-glow":
          "0 0 0 1px rgba(37, 99, 235, 0.16), 0 10px 30px rgba(37, 99, 235, 0.18)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.72" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 240ms ease-out both",
        "pulse-soft": "pulse-soft 1.8s ease-in-out infinite",
      },
      backgroundImage: {
        "portal-shell":
          "linear-gradient(180deg, rgba(7, 17, 31, 1) 0%, rgba(11, 22, 40, 1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
