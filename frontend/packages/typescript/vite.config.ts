import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import pkg from "../../package.json";
import { createHtmlPlugin } from "vite-plugin-html";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: false,
      template: "index.html",
      inject: {
        data: {
          title: `${pkg.name}`,
        },
      },
    }),
  ],
  build: {
    outDir: "../../dist",
  },
});
