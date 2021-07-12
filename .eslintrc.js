module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/style-prop-object': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 0,
    'react/require-default-props': 0,
    'no-param-reassign': ['error', { props: false }],
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
  ],
};
