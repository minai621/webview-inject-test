const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/react-entry.js"],
    bundle: true,
    minify: true,
    outfile: "dist/react-bundle.js",
    platform: "browser",
    define: { "process.env.NODE_ENV": '"production"' },
  })
  .catch(() => process.exit(1));
