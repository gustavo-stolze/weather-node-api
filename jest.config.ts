import type { Config } from "jest";
import { resolve } from "path";

const root = resolve(__dirname);

const config: Config = {
  rootDir: root,
  displayName: "root-tests",
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  testEnvironment: "node",
  clearMocks: true,
  preset: "ts-jest",
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@test/(.*)": "<rootDir>/test/$1",
  },
};

export default config;
