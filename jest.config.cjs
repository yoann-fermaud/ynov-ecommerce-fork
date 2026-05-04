module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.test.js'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',  // Exclude barrel files
    '!src/**/*.stories.tsx',  // Exclude Storybook
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  coverageReporters: ['text', 'lcov', 'json-summary']
};

