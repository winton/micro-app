/* eslint-disable */

const assets = "http://micro-app.s3.amazonaws.com"

async function handleRequest(req) {
  const url = new URL(req.url)
  return await fetch(assets + url.pathname)
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
