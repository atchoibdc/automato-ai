import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#FFF9EE',
          ink: '#18120C',
          muted: '#786C60',
          surface: '#FFFFFF',
          'surface-2': '#F7F0E2',
          gold: '#F59E0B',
          blue: '#1D4ED8',
          red: '#EF4444',
          green: '#10B981',
          border: '#18120C',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Bricolage Grotesque', 'Righteous', 'cursive'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        comic: '4px 4px 0px #18120C',
        'comic-lg': '6px 6px 0px #18120C',
        'comic-sm': '2px 2px 0px #18120C',
      },
    },
  },
  plugins: [],
};

export default config;
