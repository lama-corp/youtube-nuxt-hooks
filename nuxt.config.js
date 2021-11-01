// import hooks from './hooks'

export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Youtube Nuxt Hooks',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // hooks: {
  //   listen(server, { host, port }) {
  //     // console.log('!This is the server: ' + JSON.stringify(server))
  //     console.log('!This is the host: ' + host)
  //     console.log('!This is the port: ' + port)
  //   },
  //   render: {
  //     before() {
  //       console.log('!render:before')
  //     },
  //   },
  //   build: {
  //     before() {
  //       console.log('!build:before')
  //     },
  //     done() {
  //       console.log('!build:done')
  //     },
  //   },
  // },

  // hooks: hooks(this),

  // hooks: {
  //   components: {
  //     dirs(dirs) {
  //       dirs[0] = '~/component'
  //     },
  //   },
  //   generate: {
  //     before(generator, generateOptions) {
  //       console.log('!generate:before')
  //       console.log(generator, generateOptions)
  //     },
  //   },
  // },
}
