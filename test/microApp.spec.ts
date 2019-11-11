import expect from "./expect"
import { MicroApp } from "../src"

describe("microApp", () => {
  it("should instantiate", () => {
    new MicroApp()
  })

  it("should assert", () => {
    expect(true).toBe(true)
  })
})
