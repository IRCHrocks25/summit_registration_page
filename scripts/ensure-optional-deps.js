#!/usr/bin/env node
/**
 * Ensures optional dependencies (like @rollup/rollup-linux-x64-gnu) are installed
 * This is needed because npm ci doesn't install optional dependencies properly
 */
import { execSync } from 'child_process';

try {
  console.log('Installing optional Rollup dependencies...');
  execSync('npm install --include=optional @rollup/rollup-linux-x64-gnu', {
    stdio: 'inherit',
  });
  console.log('Optional dependencies installed successfully');
} catch (error) {
  console.warn('Warning: Could not install optional dependencies:', error.message);
  // Don't fail the build if optional deps can't be installed
  process.exit(0);
}

