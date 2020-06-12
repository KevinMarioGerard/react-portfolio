module.exports = {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html', 'text-summary', 'lcov'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    testPathIgnorePatterns: ['<rootDir>/src/index.ts', '<rootDir>/docs/*']
};