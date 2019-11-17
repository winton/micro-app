import loaded, { Fn2 } from "@fn2/loaded"
import ssr from "@fn2/ssr"

import headComponent from "./components/headComponent"
import app from "./"

export class MicroAppServer {
  app: typeof app = null
  libs: typeof loaded.libs = null
  ssr: typeof ssr = null

  headComponent: typeof headComponent = null

  async route(path: string): Promise<[number, string]> {
    const componentName = this.app.router.route(path)
    const bodyComponent = this.libs[componentName]

    const code = componentName.match(/^notFound/)
      ? 404
      : 200

    const layout = await this.ssr.layout(
      this.headComponent,
      bodyComponent,
      path
    )

    return [code, layout]
  }
}

export default new MicroAppServer()
