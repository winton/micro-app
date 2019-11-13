import undom from "undom"

import { Loaded } from "@fn2/loaded"
import { Logger } from "@fn2/logger"
import { Patch } from "@fn2/patch"
import { Render } from "@fn2/render"
import { Router } from "@fn2/router"
import { Ssr } from "@fn2/ssr"
import { TinyId } from "@fn2/tiny-id"

import { MicroApp } from "./"
import { MicroAppServer } from "./server"

import { HomeComponent } from "./components/homeComponent"
import { HeadComponent } from "./components/headComponent"
import { StackComponent } from "./components/stackComponent"
import { NotFoundComponent } from "./components/notFoundComponent"

export default ():
  | Record<string, any>
  | Promise<Record<string, any>> => {
  return new Loaded().load({
    // libs
    app: new MicroApp(),
    dom: undom(),
    logger: new Logger(),
    patch: new Patch(),
    render: new Render(),
    router: new Router(),
    server: new MicroAppServer(),
    ssr: new Ssr(),
    tinyId: new TinyId(),
    // components
    headComponent: new HeadComponent(),
    homeComponent: new HomeComponent(),
    stackComponent: new StackComponent(),
    notFoundComponent: new NotFoundComponent(),
  })
}
