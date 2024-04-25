module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
    'react/display-name': 'off',
  },
};
