var express = require("express");
var app = express();

app.use(express.static("app"));

app.get("/", function (req, res, next) {
  res.redirect("");
});

app.listen("4000", () => {
  console.log("listening one the port 4000");
});
