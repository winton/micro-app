import loaded from "@fn2/loaded"
import logger from "@fn2/logger"
import patch from "@fn2/patch"
import render from "@fn2/render"
import router from "@fn2/router"
import ssr from "@fn2/ssr"
import tinyId from "@fn2/tiny-id"
import undom from "undom"

import app from "./"
import homeComponent from "./components/homeComponent"
import headComponent from "./components/headComponent"

import express from "express"
import server from "./server"

const port = 4000
const http = express()

http.get(["/", "/*"], async (req, res) => {
  loaded.reset()

  loaded.load({
    app,
    headComponent,
    homeComponent,
    logger,
    patch,
    render,
    router,
    server,
    ssr,
    tinyId,
    undom,
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
