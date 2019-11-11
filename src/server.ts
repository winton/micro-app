import ssr from "@fn2/ssr"
import undom from "undom"

import headComponent from "./components/headComponent"
import app from "./"

export class MicroAppServer {
  app: typeof app = null
  ssr: typeof ssr = null

  headComponent: typeof headComponent = null

  async route(path: string): Promise<string> {
    this.ssr.resetUndom(undom())

    const component = await this.app.router
      .route(path)
      .build()

    const head = await this.headComponent.build()

    const componentHtml = this.ssr.serializeHtml(component)
    const headHtml = this.ssr.serializeHtml(head)

    return `<!doctype html><html>${headHtml}<body>${componentHtml}</body></html>`
  }
}

export default new MicroAppServer()
