import render from "@fn2/render"
import mjsComponent from "./mjsComponent"

export class HeadComponent {
  mjsComponent: typeof mjsComponent = null
  render: typeof render = null

  build(): Element {
    const self = this // eslint-disable-line
    return (
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="data:," />
        {this.mjsComponent.build()}
      </head>
    )
  }
}

export default new HeadComponent()
