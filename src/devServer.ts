import load, { instance } from "@fn2/loaded"
import patch from "@fn2/patch"
import render from "@fn2/render"
import router from "@fn2/router"
import ssr from "@fn2/ssr"
import tinyId from "@fn2/tiny-id"

import app from "./"
import homeComponent from "./components/homeComponent"
import headComponent from "./components/headComponent"

import express from "express"
import server from "./server"

const port = 4000
const http = express()

http.get(["/", "/*"], async (req, res) => {
  instance.reset()

  load({
    app,
    headComponent,
    homeComponent,
    patch,
    render,
    router,
    server,
    ssr,
    tinyId,
  })

  const html = await server.route(req.path)

  res.end(html)
})

http.listen({ port }, () =>
  // eslint-disable-next-line
  console.log(
    `🚀 Server ready at http://localhost:${port}`
  )
)
