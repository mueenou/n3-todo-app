// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },
  modules: [
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@sidebase/nuxt-auth",
    "nuxt-server-utils",
    "@vite-pwa/nuxt",
  ],
  pwa: {
    manifest: {
      name: "MyTodos",
      short_name: "MT",
      description: "Todo App with Vite",
      icons: [
        { src: "icons/icon_64x64.png", sizes: "64x64", type: "image/png" },
        { src: "icons/icon_144x144.png", sizes: "144x144", type: "image/png" },
        { src: "icons/icon_192x192.png", sizes: "192x192", type: "image/png" },
        { src: "icons/icon_512x512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  nuxtServerUtils: {
    mongodbUri: process.env.MONGODB_URI,
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: "authjs",
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
});
