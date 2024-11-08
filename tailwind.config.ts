import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-ens',
    'bg-basename',
    'bg-uni',
    'text-ens',
    'text-basename',
    'text-uni',
    'shadow-ens/20',
    'shadow-basename/20',
    'shadow-uni/20'
  ],
  theme: {
    darkMode: 'class',
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      colors: {
        ens: '#2580BC',
        basename: '#3353FF',
        uni: '#E70572'
      }
    }
  },
  plugins: []
} satisfies Config
