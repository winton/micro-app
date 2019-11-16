import render from "@fn2/render"

const browser = typeof history !== "undefined"

export class NotFoundComponent {
  render: typeof render = null

  id = "not-found"

  async element(): Promise<Element> {
    const self = this // eslint-disable-line
    return (
      <h1 id={this.id}>
        404 Not Found {browser ? "Client" : "Server"}
      </h1>
    )
  }
}

export default new NotFoundComponent()
