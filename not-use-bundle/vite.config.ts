import react from "@vitejs/plugin-react";
import path from "path";
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
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/App.tsx"),
      name: "MyApp",
      formats: ["cjs"],
      fileName: (format) => `my-app.${format}.js`,
    },
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
      },
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
      output: {
        comments: false,
      },
    },
  },
});
