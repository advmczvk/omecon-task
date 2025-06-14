import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/build/presets/create-cjs-preset';

export default {
  ...createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '^@features/(.*)$': '<rootDir>/src/app/features/$1',
    '^@shared/(.*)$': '<rootDir>/src/app/shared/$1',
    '^@mock/(.*)$': '<rootDir>/src/assets/mock/$1',
  },
} satisfies Config;
