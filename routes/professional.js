var express = require("express");
var router = express.Router();
const { professional_controller } = require("../controllers");
const to = require("await-to-js").default;

router.get("/", function (req, res, next) {
  res.send("get professional");
});

router.post("/", async function (req, res, next) {
  const [error, response] = await to(professional_controller.create(req.body));
  if (error) res.status(400).json({message:error.message});
  else res.status(201).json(response);
});

router.put("/", function (req, res, next) {
  res.send("put professional");
});

module.exports = router;
