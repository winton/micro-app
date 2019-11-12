import render from "@fn2/render"

export class MjsComponent {
  render: typeof render = null

  build(): Element {
    const self = this // eslint-disable-line
    return <script type="module">{this.script()}</script>
  }

  script(): string {
    return `
import loaded from "/mjs/loaded/index.mjs"

window.loaded = loaded

loaded.load({
  app: import("/esm/app/index.mjs"),
  client: import("/esm/app/client.mjs"),
  homeComponent: import("/esm/app/homeComponent.mjs"),
  logger: import("/mjs/logger/index.mjs"),
  patch: import("/mjs/patch/index.mjs"),
  render: import("/mjs/render/index.mjs"),
  router: import("/mjs/router/index.mjs"),
  tinyId: import("/mjs/tiny-id/index.mjs"),
}).then(({ client }) => {
  console.log("!!! made it")
  client.route()
})
`
  }
}

export default new MjsComponent()
