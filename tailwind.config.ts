// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e11",        // zinc-950 Main app, header, and footer background
        textLight: "#effcfc",         // my-sky-50  Primary text color
        card: "#1a1a1e",              // zinc-900  Card and search input background
        divider: "#204859",           // my-sky-900 Divider color in search bar and card
        buttonAccent: "#21a1b9",      // my-sky-500 Accent color for buttons
        secondaryText: "#d5f4f8",     // my-sky-100  Secondary text color
        accent: "#3dbdd3",            // my-sky-400  Accent color for highlights (price, rating)

        // my_sky_50: "#effcfc",
        // my_sky_100: "#d5f4f8",
        // my_sky_200: "#b1e9f0",
        // my_sky_300: "#7ad7e6",
        // my_sky_400: "#3dbdd3",
        // my_sky_500: "#21a1b9",
        // my_sky_600: "#1f819b",
        // my_sky_700: "#1f697f",
        // my_sky_800: "#225668",
        // my_sky_900: "#204859",
        // my_sky_950: "#113240"
        
        my_sky_50: "##f9f3ed",
        my_sky_200: "#e4c0a4",
        my_sky_300: "#d49970",
        my_sky_400: "#c77648",
        my_sky_500: "#b8623a",
        my_sky_600: "#9e4a30",
        my_sky_700: "#7f3729",
        my_sky_800: "#6a2f29",
        my_sky_900: "#5c2927",
        my_sky_950: "#113240"
      },
    },
  },
  plugins: [],
};

export default config;
