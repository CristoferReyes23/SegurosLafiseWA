import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      modules: `${path.resolve(__dirname, "./src/modules/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
    },
  },
});
