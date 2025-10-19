// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  srcDir: "src/",

  css: ["~/assets/scss/common.scss"],

  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
googleFonts: {
  families: {
    Mohave: true,
  },
  display: "swap",
  preload: true,
},
});
