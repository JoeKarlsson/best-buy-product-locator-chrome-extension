module.exports = {
  setupFiles: ['./jestsetup.js'],
  collectCoverageFrom: ['app/**/*.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/scripts',
    '<rootDir>/webpack',
    '<rootDir>/chrome',
    '<rootDir>/build',
    '<rootDir>/dev',
    '<rootDir>/app/containers/Root',
  ],
  coverageReporters: ['html', 'text-summary', 'text', 'json', 'lcov'],
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
