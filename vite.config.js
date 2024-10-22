import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/web/', // 部署到github上的路径
    plugins: [vue()],
})
