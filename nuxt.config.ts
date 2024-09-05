// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-09-02',
  experimental: {
    typedPages: true,
  },

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/mdc'
  ],

  googleFonts: {
    families: {
      'DM+Sans': [400, 600, 700, 800],
    },
  },

  routeRules: {
    '/ensiklopedia': { prerender: true }
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      title: 'Sayurt',
    },
  },

  css: ['~/assets/css/index.css'],

  eslint: {
    config: {
      standalone: false,
    },
  },

  image: {},
  colorMode: {
    preference: 'light',
  },
  content: {
    
  }
})