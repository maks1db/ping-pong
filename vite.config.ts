import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";

import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss() as any],
    },
  },
  plugins: [react(), mkcert()],
});
