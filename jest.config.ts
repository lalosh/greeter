import type { Config } from '@jest/types';

const jestConfig: Config.InitialOptions = {
    setupFiles: ["./jest.setup.ts"],
}

module.exports = jestConfig;