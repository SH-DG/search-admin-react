module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    },
  },
  rules: {
    'import/extensions': ['off'],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx', '.jsx'] },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
  },
};
