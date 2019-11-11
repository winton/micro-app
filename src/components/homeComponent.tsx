/** @jsx render.createElement */
import render from "@fn2/render"

export class HomeComponent {
  render: typeof render = null

  build(): Element {
    return <h1>Home</h1>
  }
}

export default new HomeComponent()
