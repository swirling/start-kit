module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  plugins: ['babel', 'react'],
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
  },
  env: {
    jest: true,
    browser: true,
  },
};
