import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // FIXME: need to use the classic runtime with `@vitejs/plugin-react`
    // https://github.com/crxjs/chrome-extension-tools/issues/454
    // react({ jsxRuntime: 'classic' }),
    react(),
    crx({ manifest })
  ]
})
