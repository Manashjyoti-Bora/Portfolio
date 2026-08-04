import { defineConfig } from 'vite';
import { resolve } from 'path';
import { existsSync, mkdirSync, cpSync, readdirSync } from 'fs';

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      // Ensure resume and manash images are in dist
      const copyPairs = [
        ['assets/resume', 'dist/assets/resume'],
        ['assets/images/manash', 'dist/assets/images/manash'],
        ['assets/images/logo', 'dist/assets/images/logo'],
        ['robots.txt', 'dist/robots.txt'],
        ['sitemap.xml', 'dist/sitemap.xml']
      ];
      for (const [src, dest] of copyPairs) {
        try {
          if (existsSync(src)) {
            const stat = readdirSync(src, { withFileTypes: true });
            // If src is file, copy file, if dir, copy dir recursively
            if (src.includes('.txt') || src.includes('.xml')) {
              cpSync(src, dest, { force: true });
            } else {
              mkdirSync(dest, { recursive: true });
              cpSync(src, dest, { recursive: true, force: true });
            }
            console.log(`Copied ${src} -> ${dest}`);
          }
        } catch (e) {
          console.warn(`Failed to copy ${src}:`, e.message);
        }
      }
    }
  };
}

export default defineConfig({
  server: { port: 5173, open: false },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') }
    }
  },
  plugins: [copyStaticAssets()]
});
