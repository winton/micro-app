import render from "@fn2/render"

const browser = typeof history !== "undefined"

export class HomeComponent {
  render: typeof render = null

  id = "home"

  async element(): Promise<Element> {
    const self = this // eslint-disable-line
    return (
      <h1 id={this.id}>
        {browser ? "Client home" : "Server home"}
      </h1>
    )
  }
}

export default new HomeComponent()
