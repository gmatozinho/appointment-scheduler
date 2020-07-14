var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("get professional_slots");
});

router.post("/", function (req, res, next) {
  res.send("post professional_slots");
});

router.put("/", function (req, res, next) {
  res.send("put professional_slots");
});

module.exports = router;
