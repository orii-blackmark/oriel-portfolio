import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      external: [
        // "framer-motion", // Uncomment if you want to exclude this from the build
        // "react-icons/fa", // Uncomment if you want to exclude this from the build
        // "react-icons/ri", // Uncomment if you want to exclude this from the build
        // "react", // Uncomment if you want to exclude this from the build
        // "react-dom", // Uncomment if you want to exclude this from the build
      ],
    },
  },
});
