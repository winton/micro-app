import express from "express"
import path from "path"

import { DevServer } from "@fn2/dev-server"

import stack from "./stack"

const port = 4000
const http = express()

new DevServer(http, path.join(__dirname, "../"))

http.get(["/", "/*"], async (req, res) => {
  const { server } = await stack()
  const [code, html] = await server.route(req.path)

  res.status(code).send(html)
})

http.listen({ port }, () =>
  // eslint-disable-next-line
  console.log(
    `🚀 Server ready at http://localhost:${port}`
  )
)
