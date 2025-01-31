import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteMfeReact",
      filename: "remoteEntry.js",
      // remotes: {
      //   notesHomeRemote: 'http://localhost:5000/dist/assets/remoteEntry.js',
      //   loginRemote: 'http://localhost:5001/dist/assets/remoteEntry.js'
      // },
      exposes: {
        "./Card": "./src/components/Card",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    open: true,
    port: 5000,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
