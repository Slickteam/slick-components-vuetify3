import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { resolve } from 'path';
import ViteFonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineConfig({
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
            name: 'Roboto',
            styles: 'wght@100;300;400;500;700;900',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  optimizeDeps: {
    include: ['vuetify'],
  },
  build: {
    lib: {
      // src/main.ts is where we have exported our component(s)
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SlickComponentLibrary',
      // the name of the output files when the build is run
      fileName: 'components-vuetify3',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
