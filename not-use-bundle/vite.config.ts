import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import external from "vite-plugin-external";

export default defineConfig({
  plugins: [
    react(),
    external({
      react: "React",
      "react-dom": "ReactDOM",
    }),
  ],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
