/* eslint-disable */

const assets = "http://micro-app.s3.amazonaws.com"

async function handleRequest(req) {
  const url = new URL(req.url)
  const path = url.pathname.replace(/^\/mjs\//, "/")
  return await fetch(assets + path)
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
