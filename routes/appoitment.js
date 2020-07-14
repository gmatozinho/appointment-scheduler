var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("get appoitment");
});

router.post("/", function (req, res, next) {
  res.send("post appoitment");
});

router.put("/", function (req, res, next) {
  res.send("put appoitment");
});

module.exports = router;
