import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        max: "9999",
      },
    },
  },
  plugins: [
    // add scroller utilities
    function ({ addUtilities }: { addUtilities: Function }) {
      let baseSettings = {
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor:
            "rgba(var(--scroller-thumb-rgb),var(--scroller-thumb-opacity))",
          borderRadius: "999px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(var(--scroller-thumb-rgb),1)",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor:
            "rgba(var(--scroller-track-rgb),var(--scroller-track-opacity))",
          borderRadius: "999px",
        },
        "&::-webkit-scrollbar-button": {
          display: "none",
        },
      };
      addUtilities({
        ".scroller": baseSettings,
        ".scroller-thin": {
          ...baseSettings,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
        },
        ".scroller-bold": {
          ...baseSettings,
          "&::-webkit-scrollbar": {
            width: "12px",
          },
        },
      });
    },
  ],
};
export default config;
