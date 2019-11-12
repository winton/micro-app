import { Loaded } from "@fn2/loaded"
import { Logger } from "@fn2/logger"
import { Patch } from "@fn2/patch"
import { Render } from "@fn2/render"
import { Router } from "@fn2/router"
import { Ssr } from "@fn2/ssr"
import { TinyId } from "@fn2/tiny-id"

import fs from "fs-extra"
import glob from "globby"
import path from "path"
import express from "express"
import undom from "undom"

import { MicroApp } from "./"
import { MicroAppServer } from "./server"

import { HomeComponent } from "./components/homeComponent"
import { HeadComponent } from "./components/headComponent"
import { MjsComponent } from "./components/mjsComponent"
import { NotFoundComponent } from "./components/notFoundComponent"

const port = 4000
const http = express()

http.get("/:format/:lib/:name.:ext", async (req, res) => {
  const { ext, format, lib, name } = req.params
  const root = path.join(__dirname, "../")
  const modules = `${root}node_modules/`

  let globs: string[]

  if (lib === "app") {
    const esmExt = ext === "mjs" ? "js" : ext
    globs = [
      `${root}dist/${format}/${name}.${esmExt}`,
      `${root}dist/${format}/components/${name}.${esmExt}`,
    ]
  } else {
    globs = [
      `${modules}@fn2/${lib}/dist/${format}/${lib}-*.${ext}`,
      `${modules}@fn2/${lib}/dist/${format}/${name}.${ext}`,
    ]
  }

  const paths = await glob(globs)

  for (const path of paths) {
    const mjs = (await fs.readFile(path)).toString()
    res.header("Content-Type", "text/javascript")
    res.end(mjs)
  }
})

http.get(["/", "/*"], async (req, res) => {
  const server = new MicroAppServer()

  new Loaded().load({
    // libs
    app: new MicroApp(),
    dom: undom(),
    logger: new Logger(),
    patch: new Patch(),
    render: new Render(),
    router: new Router(),
    server,
    ssr: new Ssr(),
    tinyId: new TinyId(),
    // components
    headComponent: new HeadComponent(),
    homeComponent: new HomeComponent(),
    mjsComponent: new MjsComponent(),
    notFoundComponent: new NotFoundComponent(),
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
