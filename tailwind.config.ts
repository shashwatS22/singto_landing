import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",

        wheel: "wheel 2s infinite",
        down: "down 1.5s infinite",
        scrollIcon: "scroll 1.5s infinite",
      },
      keyframes: {
        wheel: {
          to: { opacity: "0", top: "15rem" }, // Adjust '15rem' based on your requirement
        },
        down: {
          "0%, 40%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(3.75rem)" }, // Adjust based on requirement
        },
        scrollIcon: {
          "0%": { height: "10rem" },
          "30%": { height: "17.5rem" }, // Adjust based on your requirement
          "60%": { height: "10rem" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
