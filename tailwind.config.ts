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
        background: "#150016",        // Main app, header, and footer background
        textLight: "#FFE3D8",         // Primary text color
        card: "#29104A",              // Card and search input background
        divider: "#522C5D",           // Divider color in search bar and card
        buttonAccent: "#E3B6B1",      // Accent color for buttons
        secondaryText: "#E3B6B1",     // Secondary text color
        accent: "#E3B6B1",            // Accent color for highlights (price, rating)
      },
    },
  },
  plugins: [],
};

export default config;
