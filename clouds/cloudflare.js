/* eslint-disable */

const stack = require("../dist/cjs/stack")

async function handleRequest(request) {
  const { server } = await stack()
  const html = await server.route(req.path)

  return new Response(html, {
    headers: { "content-type": "text/html" },
  })
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
