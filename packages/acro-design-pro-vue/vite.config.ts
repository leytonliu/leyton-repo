import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from 'path';
import themeColor from './settings.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: '@arco-design/web-vue',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `@arco-design/web-vue/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      // 'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          ...(themeColor ? { 'arcoblue-6': themeColor } : {}),
        },
        javascriptEnabled: true,
      },
    },
  },
});
