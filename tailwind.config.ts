/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#0d1117',
          surface: '#161b22',
          text: '#c9d1d9',
          textSecondary: '#8b949e',
          border: '#30363d',
        },
        light: {
          bg: '#ffffff',
          surface: '#f6f8fa',
          text: '#24292f',
          textSecondary: '#656d76',
          border: '#d0d7de',
        },
        accent: 'var(--accent-color)',
        // Direct color mappings to CSS variables
        bg: 'var(--bg-color)',
        surface: 'var(--surface-color)',
        text: 'var(--text-color)',
        'text-secondary': 'var(--text-secondary-color)',
        border: 'var(--border-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
