import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import lit from "@astrojs/lit";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
  preact(), lit(), mdx()],
  site: `https://momentum.design`
});