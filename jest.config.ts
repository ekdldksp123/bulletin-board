import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.[jt]sx?$': 'babel-jest',
  },
};
export default config;
