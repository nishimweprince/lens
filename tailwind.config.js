/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'lens-primary': '#1F628E',
        'lens-secondary': '#E4E2DD',
        'lens-primary-50': '#EBF4F8',
        'lens-primary-100': '#D7E9F1',
        'lens-primary-500': '#1F628E',
        'lens-primary-600': '#1B5680',
        'lens-primary-700': '#174A72',
      },
      fontFamily: {
        'libre': ['Libre Baskerville', 'serif'],
        'futura': ['Futura', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'fade-in': 'fadeIn 1.2s ease-out',
        'slide-up': 'slideUp 1.2s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
