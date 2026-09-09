import {defineConfig} from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/21/",
  server: {
    port: 8080,
  },
});
