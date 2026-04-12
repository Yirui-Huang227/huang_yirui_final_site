module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn'],
    'react/prop-types': 'off',
  },
};
