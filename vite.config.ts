import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// Set test environment to jsdom
export default defineConfig({
  plugins: [react()],
})
