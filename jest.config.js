module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native-design-to-component)/',
  ],
};
