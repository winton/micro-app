import { Loaded } from "@fn2/loaded"
import { Logger } from "@fn2/logger"
import { Patch } from "@fn2/patch"
import { Render } from "@fn2/render"
import { Router } from "@fn2/router"
import { Ssr } from "@fn2/ssr"
import { TinyId } from "@fn2/tiny-id"
import undom from "undom"

import { MicroApp } from "./"
import { HomeComponent } from "./components/homeComponent"
import { HeadComponent } from "./components/headComponent"

import express from "express"
import { MicroAppServer } from "./server"

const port = 4000
const http = express()

http.get(["/", "/*"], async (req, res) => {
  const server = new MicroAppServer()

  new Loaded().load({
    app: new MicroApp(),
    dom: undom(),
    headComponent: new HeadComponent(),
    homeComponent: new HomeComponent(),
    logger: new Logger(),
    patch: new Patch(),
    render: new Render(),
    router: new Router(),
    server,
    ssr: new Ssr(),
    tinyId: new TinyId(),
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
