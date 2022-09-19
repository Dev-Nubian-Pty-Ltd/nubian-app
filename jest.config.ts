import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
	clearMocks: true,
	verbose: true,
	preset: 'ts-jest',
	collectCoverage: true,
	collectCoverageFrom: ['src/tests/*.ts', '**/*.ts', '!**/*.d.ts'],
	testEnvironment: 'node',
	testRegex: '(src/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],

	detectOpenHandles: true,
	transform: { '^.+\\.tsx?$': 'ts-jest' },
};
export default config;
