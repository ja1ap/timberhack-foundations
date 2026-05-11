import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const spaFallback = () => ({
  name: "spa-fallback",
  closeBundle() {
    const src = path.resolve(__dirname, "dist/index.html");
    const dest = path.resolve(__dirname, "dist/404.html");
    if (fs.existsSync(src)) fs.copyFileSync(src, dest);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE ?? "/timberhack-foundations/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    spaFallback(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
