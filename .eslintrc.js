const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint-config-airbnb-base',
    'airbnb/rules/react',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowVoid: true,
      },
    ],
    'react/jsx-one-expression-per-line': 'warn',
    'global-require': 0,
    'react/button-has-type': 0,
    'no-unused-expressions': 0,
    'react/no-unused-prop-types': 0,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'no-confusing-arrow': 0,
    'arrow-body-style': 0,
    'no-array-index-key': 'off',
    'implicit-arrow-linebreak': 0,
    'react/jsx-curly-newline': 0,
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'no-case-declarations': 'off',
    'no-prototype-builtins': 0,
    'operator-linebreak': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    'no-param-reassign': [2, { props: false }],
    '@typescript-eslint/no-shadow': ['error'],
    'react/require-default-props': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          src: path.resolve(__dirname, '../src'),
        },
      },
    },
  },
};
