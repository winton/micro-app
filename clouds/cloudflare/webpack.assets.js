/* eslint-disable */

const path = require("path")

module.exports = {
  entry: path.join(__dirname, "assets.js"),
  target: "webworker",
}
