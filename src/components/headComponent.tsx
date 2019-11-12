import render from "@fn2/render"

export class HeadComponent {
  render: typeof render = null

  build(): Element {
    const self = this // eslint-disable-line
    return (
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="data:," />
        <script>
          {"window.process = { env: { LOG: 1 } }"}
        </script>
      </head>
    )
  }
}

export default new HeadComponent()
