import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Use the relative path to your repo
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
