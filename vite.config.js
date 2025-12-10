import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    allowedHosts: true   // allow any external host, including ngrok
  }
});