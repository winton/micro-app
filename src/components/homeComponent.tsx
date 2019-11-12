import render from "@fn2/render"

export class HomeComponent {
  render: typeof render = null

  build(): Element {
    const self = this // eslint-disable-line
    return <h1>Home</h1>
  }
}

export default new HomeComponent()
