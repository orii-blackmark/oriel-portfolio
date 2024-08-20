import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      external: [
        "framer-motion",
        "react-icons/fa",
        "react-icons/ri", // Include react-icons/ri
        "react",
        "react-dom",
      ],
    },
  },
});
