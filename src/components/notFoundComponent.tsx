import render from "@fn2/render"

export class NotFoundComponent {
  render: typeof render = null

  build(): Element {
    const self = this // eslint-disable-line
    return <h1>404 Not Found</h1>
  }
}

export default new NotFoundComponent()
