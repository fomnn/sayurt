import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        zomp: {
          50: '#f3faf7',
          100: '#d8efe7',
          200: '#b1ded0',
          300: '#82c6b4',
          400: '#58a995',
          500: '#439a86',
          600: '#2f7264',
          700: '#295c52',
          800: '#254a44',
          900: '#223f3a',
          950: '#0f2421',
        },
        flax: {
          50: '#fcfaee',
          100: '#f6f0cf',
          200: '#e9d985',
          300: '#e3cb66',
          400: '#ddb842',
          500: '#d49d2c',
          600: '#bb7b24',
          700: '#9c5b21',
          800: '#7f4921',
          900: '#693c1e',
          950: '#3c1f0c',
        },
        cerulean: {
          50: '#e8fffd',
          100: '#c5fffb',
          200: '#92fff7',
          300: '#47fff1',
          400: '#00fff7',
          500: '#00e9ff',
          600: '#00b8d7',
          700: '#0091ac',
          800: '#007991',
          900: '#055e74',
          950: '#003f51',
        },
        spaceCadet: {
          50: '#f1f6fd',
          100: '#e0ecf9',
          200: '#c8ddf5',
          300: '#a2c8ee',
          400: '#76aae4',
          500: '#568ddb',
          600: '#4272ce',
          700: '#385fbd',
          800: '#334e9a',
          900: '#2e447a',
          950: '#222e50',
        },
        celadon: {
          50: '#f2f7f3',
          100: '#deede0',
          200: '#bcd8c1',
          300: '#95c09f',
          400: '#689f77',
          500: '#478259',
          600: '#346745',
          700: '#2a5239',
          800: '#23422e',
          900: '#1d3727',
          950: '#101e16',
        },

      },
    },
  },
  plugins: [],
} satisfies Config
