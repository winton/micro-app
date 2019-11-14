/* eslint-disable */

const assets = "http://micro-app.s3.amazonaws.com"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

function handleOptions(request) {
  const headers = request.headers

  const addCors = headers.get("Origin") !== null &&
    headers.get("Access-Control-Request-Method") !== null &&
    headers.get("Access-Control-Request-Headers") !== null
  
  return new Response(null, {
    headers: addCors ?
      corsHeaders :
      { "Allow": "GET, HEAD, POST, OPTIONS" }
    }
  )
}

async function handleRequest(req) {
  const url = new URL(req.url)
  const path = url.pathname
  
  if (req.method === "OPTIONS") {
    return handleOptions(req)
  } else {
    const res = await fetch(assets + path)
    const response = new Response(res.body, res)

    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.append("Vary", "Accept-Encoding")

    return response
  }
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
