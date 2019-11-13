import render from "@fn2/render"

export class MjsComponent {
  render: typeof render = null

  build(): Element {
    const self = this // eslint-disable-line
    return <script type="module">{this.script()}</script>
  }

  script(): string {
    return `
const stack = {
  app: import("/dist/esm/index.mjs"),
  client: import("/dist/esm/client.mjs"),
  homeComponent: import("/dist/esm/components/homeComponent.mjs"),
  logger: import("/node_modules/@fn2/logger/dist/mjs/logger-*.mjs"),
  patch: import("/node_modules/@fn2/patch/dist/mjs/patch-*.mjs"),
  render: import("/node_modules/@fn2/render/dist/mjs/render-*.mjs"),
  router: import("/node_modules/@fn2/router/dist/mjs/router-*.mjs"),
  tinyId: import("/node_modules/@fn2/tiny-id/dist/mjs/tiny-id-*.mjs"),
}

import("/node_modules/@fn2/loaded/dist/mjs/loaded-*.mjs").then((lib) => {
  window.loaded = lib.default
  window.process = { env: { LOG: true } }
  return loaded.load(stack)
}).then(({ client }) => {
  console.log("!!! made it", client.route().build())
})
`
  }
}

export default new MjsComponent()
