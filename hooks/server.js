import consola from 'consola'

export const listen = (server, { host, port }) => {
  // console.log('!This is the server: ' + JSON.stringify(server))
  consola.success('!Current host: ' + host)
  consola.success('!Current port: ' + port)
}

// export default (nuxtConfig) => {
//   return (server, { host, port }) => {
//     // console.log('!This is the server: ' + JSON.stringify(server))
//     console.log('!This is the host: ' + host)
//     console.log('!This is the port: ' + port)
//   }
// }
