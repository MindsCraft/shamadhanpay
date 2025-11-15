/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      InterTight: ["Inter Tight", "sans-serif"],
    },
    colors: {
      ...colors,
      transparent: "transparent",
      Mbaseblack: "#000000",
      Mbasewhite: "#ffffff",
      Mneutral900: "#0f0f0f",
      Mneutral800: "#262626",
      Mneutral700: "#404040",
      Mneutral600: "#525252",
      Mneutral400: "#a3a3a3",
      Mneutral500: "#737373",
      Mneutral300: "#d4d4d4",
      Mneutral200: "#e5e5e5",
      Mneutral100: "#f5f5f5",
      Mneutral50: "#fafafa",
      Mbrand900: "#7e1c10",
      Mbrand800: "#9d1e0f",
      Mbrand700: "#c62308",
      Mbrand600: "#ef3407",
      Mbrand500: "#fe4f11",
      Mbrand400: "#ff7438",
      Mbrand300: "#ffa571",
      Mbrand200: "#ffcaa8",
      Mbrand100: "#ffe7d4",
      Mbrand50: "#fff4ed",
      Msecondary900: "#204041",
      Msecondary800: "#224b4d",
      Msecondary700: "#256060",
      Msecondary600: "#2b7979",
      Msecondary500: "#379592",
      Msecondary400: "#51b0ac",
      Msecondary300: "#7cccc6",
      Msecondary200: "#ade2dd",
      Msecondary100: "#d6f1ed",
      Msecondary50: "#f3faf9",
      Mpositive900: "#094b31",
      Mpositive800: "#0a5b39",
      Mpositive700: "#097347",
      Mpositive600: "#0b9055",
      Mpositive500: "#17b26a",
      Mpositive400: "#3bcc84",
      Mpositive300: "#73e2a7",
      Mpositive200: "#aaf0c7",
      Mpositive100: "#d3f8e0",
      Mpositive50: "#edfcf3",
      Mnegative900: "#7d231f",
      Mnegative800: "#97221d",
      Mnegative700: "#b6251f",
      Mnegative600: "#d93029",
      Mnegative500: "#ed544e",
      Mnegative400: "#f67873",
      Mnegative300: "#fba9a6",
      Mnegative200: "#fdcdcb",
      Mnegative100: "#fee3e2",
      Mnegative50: "#fef2f2",
      Mwarning900: "#7e4510",
      Mwarning800: "#9d530f",
      Mwarning700: "#c56a09",
      Mwarning600: "#f79009",
      Mwarning500: "#fda712",
      Mwarning400: "#ffbf38",
      Mwarning300: "#ffda71",
      Mwarning200: "#ffeba8",
      Mwarning100: "#fff7d4",
      Mwarning50: "#fffbed",
      // Your Actual Logo Colors
      Mlogo1: "#44AA99",     // Primary teal-green
      Mlogo2: "#6373AD",     // Blue-purple
      Mlogo3: "#A1609D",     // Purple-pink
      Mlogo4: "#EA9E51",     // Orange-yellow
      Mlogo5: "#424143",     // Dark gray
      
      // Simple Background Colors
      "bg-white": "#FFFFFF",      // White background
      "bg-dark": "#424143",       // Dark background (text-primary color)
      "bg-grey-1": "#F9FAFB",     // Lightest grey
      "bg-grey-2": "#F3F4F6",     // Very light grey
      "bg-grey-3": "#E5E7EB",     // Light grey
      "bg-grey-4": "#D1D5DB",     // Medium light grey
      "bg-grey-5": "#9CA3AF",     // Medium grey
      "bg-grey-6": "#6B7280",     // Dark grey
      
      // Text Colors
      "text-primary": "#424143",   // Primary text (logo text color)
      "text-secondary": "#6B7280", // Secondary text (gray-600)
      "text-tertiary": "#9CA3AF",  // Tertiary text (gray-400)
      "text-inverse": "#FFFFFF",   // Inverse text (white on dark)
    },
    screens: {
      xxs: "375px",
      xx: "425px",
      ss: "480px",
      xs: "576px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
