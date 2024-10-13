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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-blue': {
          DEFAULT: '#a0e1ff',
          50: '#e0f7ff',
          100: '#c2efff',
          200: '#a0e1ff',
          300: '#7fd3ff',
          400: '#5fc5ff',
          500: '#3fb7ff',
          600: '#1fa9ff',
          700: '#009bff',
          800: '#0087e6',
          900: '#0073cc',
        },
      },
    },
  },
  plugins: [],
};
export default config;