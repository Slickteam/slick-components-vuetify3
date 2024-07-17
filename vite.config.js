import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import ViteFonts from "unplugin-fonts/vite";

export default defineConfig({
  server: {
    port: "9999",
    host: true,
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["vuetify"],
  },
  build: {
    lib: {
      // src/main.ts is where we have exported our component(s)
      entry: resolve(__dirname, "src/main.js"),
      name: "SlickComponentLibrary",
      // the name of the output files when the build is run
      fileName: "scv-library",
    },
    rollupOptions: {
      // Make sure to exclude Vue from the bundle
      external: ["vue"],
    },
  },
});
