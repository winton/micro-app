/* eslint-disable */

const assets = "http://micro-app.s3.amazonaws.com"

import cors from "@fn2/cors-worker"

async function handleRequest(req) {
  const url = new URL(req.url)
  const path = url.pathname
  
  if (req.method === "OPTIONS") {
    return cors.handleOptions(req)
  } else {
    const out = await fetch(assets + path)
    const res = cors.addCors(new Response(out.body))

    res.headers.set("content-type", out.headers.get("content-type"))
    res.headers.set("cache-control", "public, max-age=604800")
    
    return res
  }
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
