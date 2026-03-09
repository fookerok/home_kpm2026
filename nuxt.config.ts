// @ts-ignore
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  nitro: {
    compressPublicAssets: false,
    preset: 'static',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 600, 700]
    }
  },

  css: ['@/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    },
    plugins: [
      (createSvgIconsPlugin as any)({
        iconDirs: [path.resolve(process.cwd(), 'app/assets/icons')], 
        symbolId: '[name]',
        svgoOptions: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false
            },
            {
              name: 'cleanupIDs',
              active: false
            }
          ]
        },
      }),
    ],
  }
})