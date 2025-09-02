import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "./", // garante caminhos relativos no build para funcionar no GitHub Pages
  server: {
    port: 5173,
  },
});
