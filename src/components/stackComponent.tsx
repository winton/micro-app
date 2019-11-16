import render from "@fn2/render"
import ssr from "@fn2/ssr"

import app from "../"

export class StackComponent {
  app: typeof app = null
  render: typeof render = null
  ssr: typeof ssr = null

  async element(path: string): Promise<Element> {
    const self = this // eslint-disable-line
    return (
      <script type="module">{this.script(path)}</script>
    )
  }

  script(path: string): string {
    const component = this.app.router.route(path)
    return this.ssr.clientScript(component, this.stack())
  }

  stack(): Record<string, string> {
    return {
      app: "/dist/esm/index.mjs",
      homeComponent:
        "/dist/esm/components/homeComponent.mjs",
      client: "/dist/esm/client.mjs",
      loaded:
        "/node_modules/@fn2/loaded/dist/mjs/loaded-*.mjs",
      logger:
        "/node_modules/@fn2/logger/dist/mjs/logger-*.mjs",
      patch:
        "/node_modules/@fn2/patch/dist/mjs/patch-*.mjs",
      render:
        "/node_modules/@fn2/render/dist/mjs/render-*.mjs",
      router:
        "/node_modules/@fn2/router/dist/mjs/router-*.mjs",
      tinyId:
        "/node_modules/@fn2/tiny-id/dist/mjs/tiny-id-*.mjs",
    }
  }
}

export default new StackComponent()
