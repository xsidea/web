import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const env = loadEnv('', process.cwd())

// https://vitejs.dev/config/
export default defineConfig({
    base: '/web/', // 部署到github上的路径
    plugins: [vue()],
})
