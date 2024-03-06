/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F98126",
        secondary: "#11224F",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
