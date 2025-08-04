@@ .. @@
 export default defineConfig({
   plugins: [react()],
+  base: './',
   optimizeDeps: {
     exclude: ['lucide-react'],
   },
 });