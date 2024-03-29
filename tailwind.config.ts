import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mainYellow: "#CBF281",
        mainBlue: "#4731D3",
        mainBlack: "#090046",
        fontGray: "#eee",
        accentOrange: "rgb(246, 70, 0)",
        patternGray: "#ddf"
      },
      fontFamily: {
        cycle: ["var(--font-cycle)"]
      }
    },
    screens: {
      xs: "480px",

      sm: "640px",
      md: "821px",
      // => @media (min-width: 640px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px"
      // => @media (min-width: 1280px) { ... }
    },
    backgroundImage: {
      "hero_bg_image": "url('/hero.webp')",
      "hero_bg_image_tablet": "url('/hero_tb.webp')",
      "snipperts_bg_image": "url('/snipperts_of_my_hazy_days.webp')",
      "sharEx_bg_image": "url('/sharEx.webp')",
      "smartRecipe_bg_image": "url('/smartRecipe.webp')"
    }
  },
  plugins: []
};
export default config;
