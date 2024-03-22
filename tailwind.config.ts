import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px'
    },
    colors: {
      'moderate-blue': '#5B6FCC',
      'soft-red': '#FF6B6B',
      'light-grayish-blue': '#C3CCEB',
      'pale-red': '#FFB3B3',
      'dark-blue': '#2E3D55',
      'grayish-blue': '#6B7A8F',
      'light-gray': '#E5E7EB',
      'very-light-gray': '#F4F6F8',
      'white': '#FFFFFF'
    },
    fontWeight: {
      light: '400',
      normal: '500',
      bold: '700',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
