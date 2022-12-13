module.exports = {
  collectCoverage: true,
  verbose: true,
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: ['**/*.spec.[jt]s?(x)'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
