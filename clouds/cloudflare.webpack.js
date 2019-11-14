/* eslint-disable */

const globby = require("globby")
const path = require("path")

const mjs = globby.sync(
  path.join(__dirname, "../dist/mjs/*.mjs")
)

const rules = mjs.map(function(p) {
  const baseWithVersion = path.basename(p)
  const base = baseWithVersion.split(/-\d/)[0]
  
  return {
    test: /\/stackComponent\.js$/,
    loader: "string-replace-loader",
    options: {
      search: "\"\\/[\\w\\/@-]+" + base + "(-\\*)?\\.mjs",
      replace: "\"/" + baseWithVersion,
      flags: "ig"
    }
  }
})

module.exports = {
  entry: "./clouds/cloudflare.js",
  target: "webworker",
  module: { rules: rules }
}
