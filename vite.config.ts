import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/directive/drag-scroll.ts"),
      name: "drag-scroll",
      fileName: (format) => `drag-scroll-vue3.${format}.js`,
    },
  },
});
