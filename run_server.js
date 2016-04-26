var express = require("express");

var app = express();

module.exports = function (port) {
  console.log("Starting server on port " + port + "...");

  app.use(express.static("public-html"));

  app.listen(port);
}
