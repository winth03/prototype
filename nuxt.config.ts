// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'inLove',
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ]
})
