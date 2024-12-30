import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  base: "/imp/",
});
