/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F3',
        blush: '#FFDEE8',
        rose: '#E0708F',
        petal: '#F9B8CB',
        lavender: '#E6DEFF',
        peach: '#FFE2CC',
        ink: '#3A2E38',
        muted: '#7C6B79',
        plum: '#241C2B',
        plumSoft: '#332741',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'ui-serif', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(224, 112, 143, 0.35)',
        card: '0 18px 45px -20px rgba(58, 46, 56, 0.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
