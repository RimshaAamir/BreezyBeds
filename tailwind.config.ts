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
        card: "#29104A",              // Search input background within the header
        divider: "#522C5D",           // Divider color in search bar
        buttonAccent: "#E3B6B1",      // Accent color for buttons
      },
    },
  },
  plugins: [],
};

export default config;
