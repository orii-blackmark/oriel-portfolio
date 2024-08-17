import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-project/", // Set this to the subdirectory your site will be served from
  build: {
    rollupOptions: {
      external: ["framer-motion", "react-icons/fa"],
    },
  },
});
