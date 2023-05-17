// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'TATO',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },
    srcDir: 'src/application',
    css: [
        '~/assets/styles/index.css',
        "primeicons/primeicons.css"
    ],
    build: {
        transpile: ["primevue"]
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
