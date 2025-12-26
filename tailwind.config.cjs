/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#013963',
          50: '#eaf3fb',
          100: '#d6ebf7',
          200: '#a7d7ef',
          300: '#78c4e8',
          400: '#4aafe0',
        },
        secondary: {
          DEFAULT: '#e6e68a',
          100: '#f3f3e0',
        },
        neutral: {
          DEFAULT: '#e6eef7',
          100: '#f6f9ff'
        },
        text: {
          DEFAULT: '#0f172a',
          muted: '#6b7280',
          subtle: '#9aa3b2'
        }
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
};
