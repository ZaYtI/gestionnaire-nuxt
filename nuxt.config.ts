// https://nuxt.com/docs/api/configuration/nuxt-config
import {imagetools} from 'vite-imagetools'
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        '@/assets/css/bootstrap.scss',
        '@/assets/css/global.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/_include.scss" as *;',
                },
            },
        },
        assetsInclude: ['**/*.glb'],
        plugins: [
            imagetools()
        ],
    },
    ssr: false,
    modules: [
        '@pinia/nuxt',
    ],
})
