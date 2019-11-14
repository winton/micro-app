/* eslint-disable */

const stack = require("../dist/cjs/stack")

async function handleRequest(req) {
  const url = new URL(req.url)
  const { server } = await stack.default()
  const html = await server.route(url.pathname)

  return new Response(html, {
    headers: { "content-type": "text/html" },
  })
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
