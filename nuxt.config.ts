// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@hebilicious/vue-query-nuxt",
    "@vueuse/nuxt",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  runtimeConfig: {
    public: {
      // Don't forget prefix "NUXT_PUBLIC_"
      kiwiApi: process.env.NUXT_PUBLIC_KIWI_API,
      kiwiApiKey: process.env.NUXT_PUBLIC_KIWI_API_KEY,
    },
  },
});
