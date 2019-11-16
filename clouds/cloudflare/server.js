/* eslint-disable */

import stack from "../../dist/cjs/stack"

async function handleRequest(req) {
  const { server } = await stack()
  
  const url = new URL(req.url)
  const [code, html] = await server.route(url.pathname)

  return new Response(html, {
    headers: { "content-type": "text/html" },
    status: code
  })
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
