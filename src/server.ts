import loaded, { Fn2 } from "@fn2/loaded"
import ssr from "@fn2/ssr"

import headComponent from "./components/headComponent"
import app from "./"

export class MicroAppServer {
  app: typeof app = null
  fn2: Fn2 = null
  libs: typeof loaded.libs = null
  ssr: typeof ssr = null

  headComponent: typeof headComponent = null

  async route(path: string): Promise<string> {
    const elements: Record<string, Element> = {}
    const componentName = this.app.router.route(path)
    const component = this.libs[componentName]

    await this.fn2.run(elements, [], {
      body: () => component.element(),
      head: () => this.headComponent.element(path),
    })

    const body = this.ssr.serialize(elements.body)
    const head = this.ssr.serialize(elements.head)

    return `<!doctype html><html>${head}<body>${body}</body></html>`
  }
}

export default new MicroAppServer()
