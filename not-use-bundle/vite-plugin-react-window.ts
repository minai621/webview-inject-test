import { Plugin } from "vite";

export default function reactWindowPlugin(): Plugin {
  return {
    name: "vite-plugin-react-window",
    enforce: "post",
    transform(code, id) {
      if (/node_modules\/(react|react-dom)/.test(id)) {
        return code
          .replace(
            /import\s+React(\s+as\s+\w+)?\s+from\s+['"]react['"]/g,
            "const React = window.React"
          )
          .replace(
            /import\s+{\s*([^}]+)\s*}\s+from\s+['"]react['"]/g,
            "const { $1 } = window.React"
          )
          .replace(
            /import\s+(\w+)\s+from\s+['"]react-dom['"]/g,
            "const ReactDOM = window.ReactDOM"
          )
          .replace(
            /import\s+{\s*([^}]+)\s*}\s+from\s+['"]react-dom['"]/g,
            "const { $1 } = window.ReactDOM"
          );
      }
      return code;
    },
  };
}
