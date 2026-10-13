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
        inase: {
          red: "#DC0A0A",
          "red-light": "#FF2020",
          "red-dark": "#9B0000",
          black: "#0A0A0A",
          "black-light": "#1A1A1A",
          "black-mid": "#222222",
          gray: "#888888",
          "gray-light": "#CCCCCC",
          white: "#F5F5F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-2": "marquee2 30s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
