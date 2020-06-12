module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'text-summary', 'lcov'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/src/index.ts', '<rootDir>/docs/*'],
  coveragePathIgnorePatterns: ['<rootDir>/src/app'],
  globals: {
    'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.test.json',
    },
  },
};