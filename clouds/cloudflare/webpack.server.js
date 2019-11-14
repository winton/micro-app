/* eslint-disable */

const cdn = "https://cdn.fn2.dev"

const globby = require("globby")
const path = require("path")

const root = path.join(__dirname, "../../")
const mjs = globby.sync(path.join(root, "dist/mjs/*.mjs"))

const rules = mjs.map(function(p) {
  const baseWithVersion = path.basename(p)
  const base = baseWithVersion.split(/-\d/)[0]
  
  return {
    test: /\/stackComponent\.js$/,
    loader: "string-replace-loader",
    options: {
      search: "\"\\/[\\w\\/@-]+" + base + "(-\\*)?\\.mjs",
      replace: "\"" + cdn + "/" + baseWithVersion,
      flags: "ig"
    }
  }
})

module.exports = {
  entry: path.join(__dirname, "server.js"),
  target: "webworker",
  module: { rules: rules }
}
