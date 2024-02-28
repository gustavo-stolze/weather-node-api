import { resolve } from "path";
const root = resolve(__dirname, "..");
import type { Config } from "jest";
import rootConfig from "../jest.config";

// config para testes funcionais

// merge na config default

const config: Config = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: "end2end-tests",
    setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
    testMatch: ["<rootDir>/test/**/*.test.ts"],
  },
};

export default config;
