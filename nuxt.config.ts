// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  srcDir: "src/",
  alias: {
    "@": "src/",
  },

  app:{
    head:{
      title: "Breez",
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/favicon/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
      ],
    }
  },

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
