import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/build/presets/create-cjs-preset';

export default {
  ...createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
} satisfies Config;
