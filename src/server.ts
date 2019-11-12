import { fn2 } from "@fn2/loaded"
import ssr from "@fn2/ssr"

import headComponent from "./components/headComponent"
import app from "./"

export class MicroAppServer {
  app: typeof app = null
  ssr: typeof ssr = null

  headComponent: typeof headComponent = null

  async route(path: string): Promise<string> {
    const elements: {
      body?: Element
      head?: Element
    } = {}

    await fn2.run(elements, [], {
      body: () => this.app.router.route(path).build(),
      head: () => this.headComponent.build(),
    })

    for (const key in elements) {
      if (elements[key]) {
        elements[key] = this.ssr.serialize(elements[key])
      }
    }

    return `<!doctype html><html>${elements.head}<body>${elements.body}</body></html>`
  }
}

export default new MicroAppServer()
