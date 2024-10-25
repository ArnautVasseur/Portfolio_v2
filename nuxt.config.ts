// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/color-mode'
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  css: ['./scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/scss/foundations/_variables.scss" as variables;
                          @use "@/scss/foundations/_mixins.scss" as mixins;
                          @use '@/scss/foundations/_reset.scss' as reset;
                          @use '@/scss/foundations/_colors.scss' as colors;
          `,
        },
      },
    }
  }
})
