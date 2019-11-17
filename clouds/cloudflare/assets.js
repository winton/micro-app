/* eslint-disable */

const assets = "http://micro-app.s3.amazonaws.com"

import cors from "@fn2/cors-worker"

async function handleRequest(req) {
  const url = new URL(req.url)
  const path = url.pathname
  
  if (req.method === "OPTIONS") {
    return cors.handleOptions(req)
  } else {
    const res = cors.addCors(await fetch(assets + path))
    res.headers.append(
      "cache-control",
      "s-maxage=86400, max-age=600"
    )
    return res
  }
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
