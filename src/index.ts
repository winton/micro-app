import router from "@fn2/router"
import homeComponent from "./components/homeComponent"

export class MicroApp {
  homeComponent: typeof homeComponent = null
  router: typeof router = null

  loaded(): void {
    this.router.add("", () => this.homeComponent)
  }
}

export default new MicroApp()
