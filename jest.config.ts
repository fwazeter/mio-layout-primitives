import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
    preset: 'ts-jest',
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testMatch: [
        "<rootDir>/tests/**/*.test.{ts,tsx,js,jsx}",
        "<rootDir>/tests/**/*.spec.{ts,tsx,js,jsx}",
    ],
    testPathIgnorePatterns: [ '/node_modules/', '/dist/' ],
    moduleNameMapper:{
        '^.+\\.module\\.(css|scss)$': 'identity-obj-proxy',
    }
    // Your other Jest configurations...
};

export default config;
