// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    
    '@unocss/reset/tailwind.css',
    '~/assets/style/scss/init.scss',
  ]
})
