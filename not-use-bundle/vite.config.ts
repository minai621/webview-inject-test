import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import externalGlobals from "vite-plugin-external-globals";

export default defineConfig({
  plugins: [
    react(),
    externalGlobals({
      injectTo: "body",
      integrity: true,
      crossorigin: "anonymous",
      entry: [
        {
          name: "react",
          path: "index.js",
          var: "window.React",
        },
        {
          name: "react-dom",
          path: "index.js",
          var: "window.ReactDOM",
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        format: "cjs",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      external: ["react", "react-dom"],
    },
  },
});
