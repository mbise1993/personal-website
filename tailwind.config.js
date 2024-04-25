/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        fadein: 'fadein var(--mb-duration-default) var(--mb-ease-in)',
        fadeout: 'fadeout var(--mb-duration-default) var(--mb-ease-out)',
        'fadein-fast': 'fadein var(--mb-duration-fast) var(--mb-ease-in)',
        'fadeout-fast': 'fadeout var(--mb-duration-fast) var(--mb-ease-out)',
        scalein: 'scalein var(--mb-duration-default) var(--mb-ease-in)',
        scaleout: 'scaleout var(--mb-duration-default) var(--mb-ease-out)',
        'slidein-bottom': 'slidein-bottom var(--mb-duration-default) linear',
        'slideout-bottom': 'slideout-bottom var(--mb-duration-default) linear',
        'slidein-right': 'slidein-right var(--mb-duration-default) linear',
        'slideout-right': 'slideout-right var(--mb-duration-default) linear',
      },
      keyframes: {
        fadein: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeout: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        scalein: {
          from: { opacity: '0', transform: 'scale(0)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        scaleout: {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0)' },
        },
        'slidein-bottom': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0%)' },
        },
        'slideout-bottom': {
          from: { transform: 'translateY(0%)' },
          to: { transform: 'translateY(100%)' },
        },
        'slidein-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0%)' },
        },
        'slideout-right': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
