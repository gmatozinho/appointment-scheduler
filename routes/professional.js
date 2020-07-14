var express = require('express');
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("get professional");
});

router.post("/", function (req, res, next) {
  res.send("post professional");
});

router.put("/", function (req, res, next) {
  res.send("put professional");
});

module.exports = router;
