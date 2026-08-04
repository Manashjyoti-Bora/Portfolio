import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { existsSync, mkdirSync, cpSync, statSync } from 'fs';

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const copyPairs = [
        ['assets', 'dist/assets'],
        ['robots.txt', 'dist/robots.txt'],
        ['sitemap.xml', 'dist/sitemap.xml']
      ];
      for (const [src, dest] of copyPairs) {
        try {
          if (existsSync(src)) {
            const stat = statSync(src);
            if (stat.isDirectory()) {
              mkdirSync(dest, { recursive: true });
              cpSync(src, dest, { recursive: true, force: true });
            } else {
              mkdirSync(dirname(dest), { recursive: true });
              cpSync(src, dest, { force: true });
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
