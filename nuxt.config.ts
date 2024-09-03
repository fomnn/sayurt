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
  ],

  googleFonts: {
    families: {
      'DM+Sans': [400, 600, 700, 800],
    },
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

  eslint: {
    config: {
      standalone: false,
    },
  },

  image: {},
  colorMode: {
    preference: 'light',
  },
})
