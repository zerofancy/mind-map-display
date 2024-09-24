import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // 默认输出目录
    rollupOptions: {
      input: 'index.html', // 确保输入正确
    },
  },
});