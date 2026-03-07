// @ts-ignore
import svgLoader from 'vite-svg-sprite-wrapper'

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
      svgLoader({
        icons: 'app/assets/icons/*.svg', 
        outputDir: 'public/sprite'
      }) as any
    ],
  }
})