import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Plugin to resolve figma:asset/ imports
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Extract the filename from the figma:asset/ path
        const filename = id.replace('figma:asset/', '')
        const assetPath = path.resolve(__dirname, './src/assets', filename)
        
        // Check if file exists
        if (fs.existsSync(assetPath)) {
          // Return the resolved path - Vite will handle it as an asset
          return assetPath
        }
        // If file doesn't exist, still return a path to avoid errors
        // This allows Vite to show a proper error message
        return assetPath
      }
      return null
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
  },
  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
