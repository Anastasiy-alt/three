// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
  ssr: false,
  alias: {
    'three/addons/': resolve(__dirname, './jsm/'),
    // 'three': resolve(__dirname, '../build/three.module.js'),
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
