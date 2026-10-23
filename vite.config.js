import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the site under /The-To/; the deploy workflow sets
// BASE_PATH. Locally and on Vercel it stays at the root.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
