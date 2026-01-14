// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/style/scss/init.scss',
  ]
})
