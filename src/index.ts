import router from "@fn2/router"

export class MicroApp {
  router: typeof router = null

  loaded(): void {
    this.router.add("", () => "homeComponent")
    this.router.add("404", () => "notFoundComponent")
  }
}

export default new MicroApp()
