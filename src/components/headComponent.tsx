import render from "@fn2/render"
import stackComponent from "./stackComponent"

export class HeadComponent {
  stackComponent: typeof stackComponent = null
  render: typeof render = null

  build(): Element {
    const self = this // eslint-disable-line
    return (
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="data:," />
        {this.stackComponent.build()}
      </head>
    )
  }
}

export default new HeadComponent()
