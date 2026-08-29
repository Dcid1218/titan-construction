import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1C1B19",
        timber: "#5C4430",
        iron: "#3E4C46",
        brass: "#B08D57",
        bone: "#F5F1EA",
        // Darker muted body color so WCAG AA passes on bone/white
        slate: "#5A5650",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.12em",
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(28, 27, 25, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
