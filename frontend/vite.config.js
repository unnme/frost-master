import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const __dirname = import.meta.dirname;

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      "@general": path.resolve(__dirname, "src/general"),
      "@services": path.resolve(__dirname, "src/services"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@config": path.resolve(__dirname, "src/config"),
    },
  },

  server: {
    host: true,
    port: 5173,

    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },

    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  },
});
