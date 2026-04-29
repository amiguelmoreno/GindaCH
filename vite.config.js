import { defineConfig } from "vite";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

function inlineCssPlugin() {
  return {
    name: "inline-css",
    apply: "build",
    closeBundle() {
      const distDir = resolve(__dirname, "dist");
      const htmlPath = resolve(distDir, "index.html");
      let html = readFileSync(htmlPath, "utf8");

      const match = html.match(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/
      );
      if (!match) return;

      const cssFile = resolve(distDir, match[1].slice(1));
      const css = readFileSync(cssFile, "utf8");
      html = html.replace(match[0], `<style>${css}</style>`);
      writeFileSync(htmlPath, html);
    },
  };
}

export default defineConfig({
  plugins: [inlineCssPlugin()],
  build: {
    cssCodeSplit: false,
  },
});
