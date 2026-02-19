// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://catalina-martinez-rodriguez.cofoundy.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
