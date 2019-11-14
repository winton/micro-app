/* eslint-disable */

const stack = require("../../dist/cjs/stack").default

async function handleRequest(req) {
  const { server } = await stack()
  
  const url = new URL(req.url)
  const html = await server.route(url.pathname)

  return new Response(html, {
    headers: { "content-type": "text/html" },
  })
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
