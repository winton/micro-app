import render from "@fn2/render"

export class HomeComponent {
  browser: boolean = null
  render: typeof render = null

  id = "home"

  async element(): Promise<Element> {
    const self = this
    return (
      <h1 id={this.id}>
        {this.browser ? "Client home" : "Server home"}
      </h1>
    )
  }
}

export default new HomeComponent()
