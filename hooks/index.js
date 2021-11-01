// export default (nuxtConfig) => {
//   return {
//     listen(server, { host, port }) {
//       // console.log('!This is the server: ' + JSON.stringify(server))
//       console.log('!This is the host: ' + host)
//       console.log('!This is the port: ' + port)
//     },
//     render: {
//       before() {
//         console.log('!render:before')
//       },
//     },
//   }
// }

// export default (nuxtConfig) => ({
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
// })

import { listen } from './server'
import render from './render'

export default (nuxtConfig) => {
  return {
    listen,
    // listen: listen(nuxtConfig),
    render: render(nuxtConfig),
  }
}
