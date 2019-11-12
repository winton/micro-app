import router from "@fn2/router"
import homeComponent from "./components/homeComponent"
import notFoundComponent from "./components/notFoundComponent"

export class MicroApp {
  homeComponent: typeof homeComponent = null
  notFoundComponent: typeof notFoundComponent = null
  router: typeof router = null

  loaded(): void {
    this.router.add("", () => this.homeComponent)
    this.router.add("404", () => this.notFoundComponent)
  }
}

export default new MicroApp()
