import type {Config} from 'jest'

const config: Config = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: [
    'node_modules',
    'src/config',
    'src/app.js',
    'tests',
  ],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  // modulePaths: [`${rootDirector}`],
  // moduleDirectories: ['node_modules', `${rootDirector}/src`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  // testRegex: ".*.(test|spec).(j|t)s[x]?$",
  transform: {
    'node_modules/(react-dnd|dnd-core|@react-dnd)/.+\\.(j|t)sx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    `/node_modules/(?!(somePkg)|react-dnd|dnd-core|@react-dnd)`,
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
    'node_modules/(?!pocketbase)/',
  ],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.+(ts|tsx|js)',
    '<rootDir>/src/**/+(*.)+(spec|test).+(ts|tsx|js)',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    pocketBase: require.resolve('pocketbase'),
  },
  setupFiles: ['dotenv/config'],
}

export default config
