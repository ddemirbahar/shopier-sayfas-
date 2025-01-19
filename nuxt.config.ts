// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  
  // Pinia'yı modüller kısmına ekleyin
  modules: [
    '@pinia/nuxt', // Pinia modülünü burada dahil edin
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
        },
      ],
    },
  },
});
