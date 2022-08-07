import { iife } from '../../../config/esbuild/esbuild.config.js';
import { CATEGORIES } from '../../../config/esbuild/esbuild.constants.js';

iife({ category: CATEGORIES.COMPONENTS });
