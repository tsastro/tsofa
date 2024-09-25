/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const jestConfig: Config = {
  clearMocks: true,
  testEnvironment: "node",
  preset: "ts-jest",
  transform: {
    "^.+.(t|j)sx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
}

export default jestConfig