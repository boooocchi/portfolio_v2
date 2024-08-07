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
      }
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "821px",
      lg: "1025px",
      xl: "1280px"
    },
    backgroundImage: {
      "hero_bg_image": "url('/image/hero/hero.webp')",
      "hero_bg_image_tablet": "url('/image/hero/hero_tb.webp')"
    }
  },
  plugins: []
};
export default config;
