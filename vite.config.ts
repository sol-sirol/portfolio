import path from "path";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
  //@ts-ignore
  plugins: [react(), vitePluginRequire.default()],
  resolve: {
    alias: {
      "@app": path.resolve("src/app"),
      "@processes": path.resolve("src/processes"),
      "@pages": path.resolve("src/pages"),
      "@widgets": path.resolve("src/widgets"),
      "@features": path.resolve("src/features"),
      "@entities": path.resolve("src/entities"),
      "@shared": path.resolve("src/shared"),
    },
  },
})
