import { Fn2 } from "@fn2/loaded"
import ssr from "@fn2/ssr"

import headComponent from "./components/headComponent"
import app from "./"

export class MicroAppServer {
  app: typeof app = null
  fn2: Fn2 = null
  ssr: typeof ssr = null

  headComponent: typeof headComponent = null

  async route(path: string): Promise<string> {
    const elements: Record<string, Element> = {}

    await this.fn2.run(elements, [], {
      body: () => this.app.router.route(path).build(),
      head: () => this.headComponent.build(),
    })

    const body = this.ssr.serialize(elements.body)
    const head = this.ssr.serialize(elements.head)

    return `<!doctype html><html>${head}<body>${body}</body></html>`
  }
}

export default new MicroAppServer()
