import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'

const babelConfig = {
  babelrc: false,
  configFile: false,
  plugins: ['babel-plugin-syntax-hermes-parser'],
  presets: ['@babel/preset-react']
}

/**
 * mode - 'development', 'production'
 * command - 'build', 'serve'
 * isSsrBuild - boolean
 * isPreview - boolean
 */
export default defineConfig(props => {
  // multi-page app support
  // https://vite.dev/guide/build.html#multi-page-app
  const input = {
    main: resolve(__dirname, 'index.html')
  }

  switch (props.command) {
    case 'build':
      return {
        build: {
          assetsInlineLimit: 800, // kb
          minify: true,
          modulePreload: { polyfill: false },
          rollupOptions: {
            input
          },
          target: 'es2020'
        },
        esbuild: true,
        plugins: [
          react({
            babel: babelConfig,
            include: /\.jsx?$/
          })
        ]
      }

    default:
      return {
        build: {
          rollupOptions: {
            input
          }
        },
        plugins: [
          react({
            babel: babelConfig,
            include: /\.jsx?$/
          })
        ]
      }
  }
})
