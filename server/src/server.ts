import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello World!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server is running on http://localhost:3333')
  })