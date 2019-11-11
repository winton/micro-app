import app from "./"

export class MicroAppClient {
  app: typeof app = null

  loaded(): void {
    this.app.router.patchHistory(window.history.pushState)

    window.onpopstate = (): void => {
      document.body.innerHTML = ""
      document.body.append(this.route())
    }
  }

  route(path?: string): any {
    return this.app.router.route(
      path || document.location.pathname
    )
  }
}
