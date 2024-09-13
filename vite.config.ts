import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  build: {
    //library entry and output settings
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "vibe-ui",
      fileName: "vibe-ui",
    },
    //bundler options
    //externalize react related imports
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
