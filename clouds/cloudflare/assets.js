/* eslint-disable */

import cors from "@fn2/cors-worker"

const assets = "http://micro-app.s3.amazonaws.com"

async function handleRequest(req) {
  const url = new URL(req.url)
  const path = url.pathname
  
  if (req.method === "OPTIONS") {
    return cors.handleOptions(req)
  } else {
    const res = await fetch(assets + path)
    return cors.addCors(res)
  }
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
