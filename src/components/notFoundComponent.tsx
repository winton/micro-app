import render from "@fn2/render"

export class NotFoundComponent {
  browser: boolean = null
  render: typeof render = null

  id = "not-found"

  async element(): Promise<Element> {
    const self = this
    return (
      <h1 id={this.id}>
        404 Not Found {this.browser ? "Client" : "Server"}
      </h1>
    )
  }
}

export default new NotFoundComponent()
