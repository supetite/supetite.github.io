import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://lecamthanhha.github.io',
  base: '/', 
  integrations: [mdx(), tailwind()]
});