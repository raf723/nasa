module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:jest/recommended',
    'plugin:testing-library/react-native',
  ],
  rules: {
    curly: 'off',
    'no-shadow': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unstable-nested-components': 'off',
    'jest/expect-expect': 'off',
    'jest/no-disabled-tests': 'off',
    'testing-library/no-debug': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
